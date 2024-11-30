import { app } from "./lib/app";



app.listen({
    port:3678,
    host:"localhost"
},(err,path)=>{
    console.log(err||path)
})