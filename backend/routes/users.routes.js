import { Router  } from "express";

const routerUser = Router();

routerUser.post("/users/add", async (req, res) => {
    res.send("User added");
});