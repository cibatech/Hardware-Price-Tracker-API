import fastify from "fastify";
import { Router } from "../http/Router";



export const app = fastify()

app.register(Router,{
    prefix:"/api"
})