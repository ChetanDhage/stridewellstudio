import { verify } from "jsonwebtoken";
require("dotenv").config();

verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).json({ message: "No token provided!" });
  }

  verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    next();
  });
};

isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId).populate("roles");
    const isAdmin = user.roles.some((role) => role.name === "admin");

    if (isAdmin) {
      next();
    } else {
      res.status(403).json({ message: "Requires Admin Role!" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default {
  verifyToken,
  isAdmin,
};
