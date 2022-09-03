import { AppDataSource } from "../../data-source";
import { Categories } from "../entity/categories";

class CategoriesService {
    async register(categories: Categories) {
        const categoriesRepo = AppDataSource.getRepository(Categories);
        return await categoriesRepo.save(categories)
    }
}

export default new CategoriesService()