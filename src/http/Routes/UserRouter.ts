import { FastifyInstance } from "fastify";
import { CreateUserController,PatchLoginController,PUTUpdateUserPasswordController,GETPasswordRecoveryCode,PUTUserPasswordByCode} from "../Controllers";
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
    app.route({
        method:"GET",
        handler:GETPasswordRecoveryCode,
        url:"/sendcode/:Email"
    })
    app.route({
        method:"PUT",
        handler:PUTUserPasswordByCode,
        url:"/passbycode"
    })
}