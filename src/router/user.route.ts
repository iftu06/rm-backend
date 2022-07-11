import { Router } from 'express';
import { User } from './../entity/User';

import userService from "../service/user.service";

const userRouter = Router();

userRouter.post("/register", async (req, resp) => {
    const user: User = req.body;
    console.log("User Details Print");
    console.log(user);
    const userResp = await userService.register(user);
    resp.send(userResp)
})

userRouter.get("/register", async (req, resp) => {
    console.log("Get User Details");
    resp.send({ "name": "Iftekhar Uddin" })
})

export default userRouter;