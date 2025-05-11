import { Router  } from "express";
import { getEmployeeByName, getEmployees, createEmployee, deleteEmployee, getAllTechnologies } from "../controllers/employee.controller.js";

const routerUser = Router();

routerUser.post("/employees/add", createEmployee);
routerUser.get("/employees", getEmployees);
routerUser.get("/employees/techs", getAllTechnologies);
routerUser.get("/employees/:name", getEmployeeByName);
routerUser.delete("/employees/:id", deleteEmployee);

export default routerUser;