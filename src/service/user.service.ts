import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

class UserService {
    async register(user: User) {
        const userRepo = AppDataSource.getRepository(User);
        return await userRepo.save(user)
    }
}

export default new UserService()