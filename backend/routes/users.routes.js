import { Router  } from "express";
import { getEmployeeByName, getEmployees, createEmployee, deleteEmployee } from "../controllers/employee.controller";

const routerUser = Router();

routerUser.post("/users/add", async (req, res) => {
    res.send("User added");
});