import { findById } from "../models/user.model";

// Get current user profile
export async function getProfile(req, res) {
  try {
    const user = await findById(req.userId)
      .select("-password")
      .populate("roles", "name -_id");

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
  