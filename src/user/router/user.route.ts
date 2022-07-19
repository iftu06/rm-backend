import { Router } from 'express';
import { User } from '../entity/User';
import userService from '../service/user.service';
import userValidator from '../validator.ts/user.validator';

const userRouter = Router();

userRouter.post("/register", async (req, resp) => {
    const { error, value } = userValidator.validate(req.body);
    if (error) {
        const { _original, details } = error
        console.log(details)
        resp.send(details)
    } else {
        const user: User = req.body;
        console.log("User Details Print");
        console.log(user);
        const userResp = await userService.register(user);
        resp.send(userResp)
    }
})

userRouter.get("/register", async (req, resp) => {
    console.log("Get User Details");
    resp.send({ "name": "Iftekhar Uddin" })
})

export default userRouter;