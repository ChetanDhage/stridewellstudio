import { findOne, create } from "../models/role.model";
import { ROLES } from "/roles";

export default async function initializeRoles() {
  try {
    for (const roleName of Object.values(ROLES)) {
      const existingRole = await findOne({ name: roleName });
      if (!existingRole) {
        await create({ name: roleName });
        console.log(`Created role: ${roleName}`);
      }
    }
    console.log("Roles initialized");
  } catch (err) {
    console.error("Error initializing roles:", err);
  }
};
