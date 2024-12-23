import fastify from "fastify";
import { Router } from "../http/Router";
import fastifySwaggerUi from "@fastify/swagger-ui";
import fastifySwagger from "@fastify/swagger";
import cors from "@fastify/cors";
import { OpenAPiConfig } from "./docs";

export const app = fastify()

app.route({
   method:"GET",
   url:"/",
    handler:(req,res)=>{
        res.redirect("https://hardware-price-tracker-app.vercel.app/")
    }
})
app.register(Router,{
    prefix:"/api"
})

app.register(fastifySwagger, OpenAPiConfig);
app.register(fastifySwaggerUi,{
    routePrefix:"/docs"
})

//register CORS
app.register(cors, { 
    origin: true, // Permite todas as origens. Para restringir, você pode especificar uma URL, como 'http://localhost:3000'
    methods: ['GET', 'POST', 'PUT', 'DELETE', "PATCH"], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
    credentials: true // Permite o envio de cookies e headers de autorização entre o frontend e o backend
});