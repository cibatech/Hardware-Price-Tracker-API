import { FastifyInstance } from "fastify";
import {GETScrapListByDateController} from "../Controllers/index"
export async function ScrapRouter(app:FastifyInstance) {
    app.route({
        handler:GETScrapListByDateController,method:"GET",url:"/date/:PasDays"
    })

}