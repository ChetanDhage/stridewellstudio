import { sign } from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User, { findOne } from "../models/user.model";
import { findOne as _findOne } from "../models/role.model";
import { ROLES } from "./config/roles";
require("dotenv").config();

// Register new user
export async function signup(req, res) {
  try {
    const { name, email, password } = req.body;

    // Create user
    const user = new User({
      name,
      email,
      password,
    });

    // Set default role (user)
    const userRole = await _findOne({ name: ROLES.USER });
    user.roles = [userRole._id];

    await user.save();

    // Generate token
    const token = sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("accessToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      roles: [ROLES.USER],
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Login user
export async function signin(req, res) {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await findOne({ email }).populate("roles");
    if (!user) return res.status(404).json({ message: "User not found" });

    // Check password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate token
    const token = sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("accessToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      roles: user.roles.map((role) => role.name),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Logout user
export function signout(req, res) {
  res.clearCookie("accessToken");
  res.json({ message: "Signed out successfully" });
}
