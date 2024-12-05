import {z} from "zod"
import "dotenv/config"

export const {HOST,NODE_ENV,PORT} = z.object({
    NODE_ENV:z.string(),
    HOST:z.string(),
    PORT:z.string()
}).parse(process.env)