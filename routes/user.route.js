import express from "express";
import { createUser, deleteUser, loadUsers, updateUser, userForId } from "../controllers/user.controller.js";

const route = express.Router();

route.get("/users", loadUsers);
route.post("/user", createUser);
route.delete("/user/:id", deleteUser);
route.put("/user/:id", updateUser);
route.get("/user/:id", userForId);

export default route;
