import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const signToken = (user) =>
  jwt.sign({ sub: user._id.toString(), role: user.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d'
  });

export const register = asyncHandler(async (req, res) => {
  const { username, email, password, role, name, specialization } = req.body;
  const exists = await User.findOne({ $or: [{ email }, { username }] });
  if (exists) throw new ApiError(400, 'User already exists');
  const user = await User.create({ username, email, password, role, name, specialization });
  const token = signToken(user);
  res.status(201).json(new ApiResponse(true, { token, user: { id: user._id, username, email, role } }));
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw new ApiError(401, 'Invalid credentials');
  const ok = await user.comparePassword(password);
  if (!ok) throw new ApiError(401, 'Invalid credentials');
  const token = signToken(user);
  res.json(new ApiResponse(true, { token, user: { id: user._id, username: user.username, email, role: user.role } }));
});


