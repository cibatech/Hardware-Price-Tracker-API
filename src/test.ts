import { prisma } from "./lib/prisma";


(async()=>{
    console.log(    await prisma.product.findUnique({
        where:{
            Id:"01ca806d-b701-4a4b-add1-f3b901a0b7e4"
        }
    }))
}
)()
