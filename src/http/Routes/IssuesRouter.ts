import { FastifyInstance } from "fastify";
import {GETIssueListByDateController,GETIssueListByAtController,GETIssuesListPaginatedController } from "../Controllers";
import {  } from "../../services/Issues/GetIssuesListByDateService";

export async function IssuesRouter(app:FastifyInstance) {
    app.route({
        method:"GET",
        url:"/date/:date",
        handler:GETIssueListByDateController
    })
    app.route({
        method:"GET",
        url:"/place/:Place",
        handler:GETIssueListByAtController
    })
    app.route({
        method:"GET",
        url:"/:Page",
        handler:GETIssuesListPaginatedController
    })
}