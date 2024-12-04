import { FastifyInstance } from "fastify";
import {GETProductsListWithFilltersController , GETBestProductFromAllStoresController, GETProductEvaluationController, GETProductListFromASpecificStoreController, GETProductListFromCategoryController, GETProductsListController } from "../Controllers";

export async function ProductRouter(app:FastifyInstance) {
    app.route({
        method:"GET",
        url:"/comparasion/:Id", //request by docs
        handler:GETBestProductFromAllStoresController
    })
    app.route({
        method:"GET",
        url:"/trends/:Id", //request by docs
        handler:GETProductEvaluationController
    })
    app.route({
        method:"GET",
        url:"/byStore/:Store/:Page",
        handler:GETProductListFromASpecificStoreController
    })
    app.route({
        method:"GET",
        url:"/category/:Category/:Page",
        handler:GETProductListFromCategoryController
    })
    app.route({
        method:"GET",
        url:"/all/:Page",
        handler:GETProductsListController
    })
    app.route({
        method:"GET",
        url:"/:Category/:Min--:Max/:Store/:Page",
        handler:GETProductsListWithFilltersController
    })
    app.route({
        method:"GET",
        url:"/:Id",
        handler:GETProductsListWithFilltersController
    })
}