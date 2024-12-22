import {z} from "zod"
import "dotenv/config"

export const {HOST,NODE_ENV,PORT,ADMIN_EMAIL,ADMIN_PASSWORD} = z.object({
    NODE_ENV:z.string(),
    HOST:z.string(),
    PORT:z.string(),
    ADMIN_EMAIL:z.string(),
    ADMIN_PASSWORD:z.string()
}).parse(process.env)