import { FastifyInstance } from "fastify";
import { ProductRouter } from "./Routes/ProductsRouter";
import { UserRouter } from "./Routes/UserRouter";
import { IssuesRouter } from "./Routes/IssuesRouter";
import { PriceTrackerRouter } from "./Routes/PriceTrackerRouter";

export async function Router(app:FastifyInstance) {
    app.addHook("preHandler",(req,res,done)=>{
        console.log(req.routeOptions)
        done()
    })
    
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
}