import { ROLES } from "./config/roles";
import { findOne } from "../models/user.model";

checkDuplicateEmail = async (req, res, next) => {
  try {
    const user = await findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ message: "Email is already in use!" });
    }
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (const role of req.body.roles) {
      if (!Object.values(ROLES).includes(role)) {
        return res.status(400).json({
          message: `Role ${role} does not exist!`,
        });
      }
    }
  }
  next();
};

export default {
  checkDuplicateEmail,
  checkRolesExisted,
};
