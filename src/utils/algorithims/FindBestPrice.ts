import { log } from "console";
import { Product } from "../../../prisma/deploy-output";


export function FindBestProductPrice(SearchList:Product[]):Product{
    var bestProduct:Product = SearchList[0];
    var bestPrice:number = 1000000000000000000;

    
    for(let i = 0; i<SearchList.length;i++){
        const prod = SearchList[i]
        // console.log(prod.Value)
        if(prod.Value<bestPrice){
            bestPrice = prod.Value
            bestProduct = prod
        }
    }
    return bestProduct;
}

