import { FastifyInstance } from "fastify";
import {DELETEManyPriceTrackersByUserController,POSTPriceTrackerController,PUTPriceTrackerController,DELETEPriceTrackerController,GETPriceTrackerFromProductController,GETPriceTrackerFromUserController } from "../Controllers/PriceTracking";


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
    app.route({
        handler:GETPriceTrackerFromProductController,
        method:"GET",
        url:"/fromproduct/:ProdId",
    })
    app.route({
        handler:GETPriceTrackerFromUserController,
        method:"GET",
        url:"/fromuser/:UserId",
    })
    app.route({
        handler:DELETEManyPriceTrackersByUserController,
        method:"DELETE",
        url:"/delete/all/:UserId",
    })
}