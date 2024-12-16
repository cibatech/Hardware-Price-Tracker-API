import { FastifyInstance } from "fastify";
import { CreateUserController,PatchLoginController,PUTUpdateUserPasswordController} from "../Controllers";
import { GETProfileInformationController } from "../Controllers/User/GET_ProfileInfoControlle";

export async function UserRouter(app:FastifyInstance) {
    app.route({
        method:"POST",
        url:"/create",
        handler:CreateUserController
    })
    app.route({
        method:"PATCH",
        url:"/login",
        handler:PatchLoginController
    })
    app.route({
        method:"PUT",
        url:"/password",
        handler:PUTUpdateUserPasswordController
    })
    app.route({
        method:"GET",
        url:"/profile/:UserId",
        handler:GETProfileInformationController
    })
}