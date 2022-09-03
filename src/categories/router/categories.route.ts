import { Router } from 'express';
import { Categories } from '../entity/categories';
import categoriesService from '../service/categories.service';

const categoriesRouter = Router();

categoriesRouter.post("/categories", async (req, resp) => {
    const categories: Categories = req.body;
    console.log("Categories Details Print");
    console.log(categories);
    const categoriesResp = await categoriesService.register(categories);
    resp.send(categoriesResp)
})

categoriesRouter.get("/categories", async (req, resp) => {
    console.log("Get categories Details");
    resp.send({ "name": "Tasnin" })
})

export default categoriesRouter;