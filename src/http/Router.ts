import { FastifyInstance } from "fastify";
import { ProductRouter } from "./Routes/ProductsRouter";
import { UserRouter } from "./Routes/UserRouter";
import { IssuesRouter } from "./Routes/IssuesRouter";
import { PriceTrackerRouter } from "./Routes/PriceTrackerRouter";
import { PreHandlerHook } from "./Hooks/PreHandler";
import { ScrapRouter } from "./Routes/scrapRegistryRouter";

export async function Router(app:FastifyInstance) {
    //initialize prehandler hook
    app.addHook("preHandler",PreHandlerHook)
    
    //Products Routes
    app.register(ProductRouter,{
        prefix:"/products"
    })
    //User Routes
    app.register(UserRouter,{
        prefix:"/user"
    })
    //Issues Routes (admin mode)
    app.register(IssuesRouter,{
        prefix:"/issues"
    })
    //Price tracker routes
    app.register(PriceTrackerRouter,{
        prefix:"/tracker"
    })
    //Scrap return for admin route
    app.register(ScrapRouter,{
        prefix:"/scrap"
    })
}