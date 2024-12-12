import { kind } from "../../../prisma/deploy-output";
import { ProductRepository } from "../../repository/ProductRepository";
import { InvalidParameterError } from "../Error/InvalidParameterError";

interface GetProductsByFilterRequest{
    Category:string | null,
    Page:number,
    Min:number | null,
    Max:number | null,
    Store:kind | null,
    Query:string | null
}
export class GetProductsByFilterUseCase{
    constructor(private ProdRepo:ProductRepository){}
    async execute({Category,Max,Min,Page,Store,Query}:GetProductsByFilterRequest){
        var TotalList = await this.ProdRepo.findAll();

        if(Query){
            var TotalList = await this.ProdRepo.findBySearchQuery(Query,-1)
        }
        // Se minimo ou maximo forem informados
        if(Min || Max){
            if(Min && Max){
                TotalList = TotalList.filter(iten=> iten.Value > Min && iten.Value < Max);
            }
            if(Min && !Max){
                TotalList = TotalList.filter(iten=> iten.Value > Min);
            }
            if(Max && ! Min){
                TotalList = TotalList.filter(iten=> iten.Value < Max);
            }
        }
        //Se categoria for informada
        if(Category){
            TotalList = TotalList.filter(item=> item.Where==Category);
        }
        //Se A loja for informada
        if(Store){
            TotalList = TotalList.filter(item=> item.Kind==Store);
        }
        //Paginação
        TotalList = TotalList.slice((Page-1)*20,Page*20)
        // console.log(TotalList)

        return{
            providedParams:{
                Category,
                Min,
                Max,
                Page
            },
            Return:{
                TotalList,
                TotalListLength:TotalList.length
            }
        }
    }
}