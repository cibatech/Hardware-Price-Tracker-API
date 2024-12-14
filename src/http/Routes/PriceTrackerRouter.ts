import { FastifyInstance } from "fastify";
import {POSTPriceTrackerController,PUTPriceTrackerController,DELETEPriceTrackerController } from "../Controllers";


export async function PriceTrackerRouter(app:FastifyInstance) {
    app.route({
        method:"POST",
        url:"/create",
        handler:POSTPriceTrackerController
    })
    app.route({
        handler:PUTPriceTrackerController,
        method:"PUT",
        url:"/update/:Id/:value",
    })
    app.route({
        handler:DELETEPriceTrackerController,
        method:"DELETE",
        url:"/delete/:Id",
    })
}