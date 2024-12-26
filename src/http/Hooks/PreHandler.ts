import { FastifyInstance, FastifyReply, FastifyRequest, HookHandlerDoneFunction, preHandlerAsyncHookHandler } from "fastify"
import { Server } from "http"


export function PreHandlerHook(req:FastifyRequest,res:FastifyReply,done:HookHandlerDoneFunction){
    console.log(req.routeOptions)
    done()
}