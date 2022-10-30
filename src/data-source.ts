import "reflect-metadata"
import { DataSource } from "typeorm"
import { Categories } from "./categories/entity/categories"
import { User } from "./user/entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "register",
    synchronize: true,
    logging: false,
    entities: [User, Categories],
    migrations: [],
    subscribers: [],
})
