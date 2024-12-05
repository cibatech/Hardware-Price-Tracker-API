import { FastifyInstance } from "fastify";
import { CreateUserController } from "../Controllers/User/POST_UserController";

export async function UserRouter(app:FastifyInstance) {
    app.route({
        method:"POST",
        url:"/create",
        handler:CreateUserController
    })
}