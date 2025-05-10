import { Router  } from "express";
import { getEmployeeByName, getEmployees, createEmployee, deleteEmployee } from "../controllers/employee.controller.js";

const routerUser = Router();

routerUser.post("/users/add", createEmployee);
routerUser.get("/users", getEmployees);
routerUser.get("/users/:name", getEmployeeByName);
routerUser.delete("/users/:id", deleteEmployee);

export default routerUser;