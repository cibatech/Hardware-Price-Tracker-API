import { FastifyInstance } from "fastify";
import {POSTPriceTrackerController } from "../Controllers";
import {  } from "../../services/Issues/GetIssuesListByDateService";

export async function PriceTrackerRouter(app:FastifyInstance) {
    app.route({
        method:"POST",
        url:"/create",
        handler:POSTPriceTrackerController
    })
}