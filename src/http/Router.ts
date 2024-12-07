import { FastifyInstance } from "fastify";
import { ProductRouter } from "./Routes/ProductsRouter";
import { UserRouter } from "./Routes/UserRouter";
import { IssuesRouter } from "./Routes/IssuesRouter";

export async function Router(app:FastifyInstance) {
    app.addHook("preHandler",(req,res,done)=>{
        console.log(req.routeOptions)
        done()
    })
    
    app.register(ProductRouter,{
        prefix:"/products"
    })

    app.register(UserRouter,{
        prefix:"/user"
    })
    app.register(IssuesRouter,{
        prefix:"/issues"
    })
}