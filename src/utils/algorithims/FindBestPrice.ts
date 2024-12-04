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



const produtos: Product[] = [
    {
      Description: "Descrição aleatória sobre o produto.",
      Id: "1d4f82a4-4e0f-4e16-89b4-6b74e04f5d4d",
      ImageUrl: "https://example.com/image1.jpg",
      Kind: "Pichau",
      Link: "https://example.com/product1",
      Slug: "en-random-default-1",
      Title: "Produto Incrível 1",
      Value: 1500,
      Where: "https://example.com/store1"
    },
    {
      Description: "Outra descrição interessante do produto.",
      Id: "7f3d273a-5c6b-4e7b-b9e3-712d20af77e9",
      ImageUrl: "https://example.com/image2.jpg",
      Kind: "Kabum",
      Link: "https://example.com/product2",
      Slug: "en-random-default-2",
      Title: "Produto Fantástico 2",
      Value: 2500,
      Where: "https://example.com/store2"
    },
    {
      Description: "Mais uma descrição breve de um produto.",
      Id: "9a3f782d-1c4d-43de-b761-9cf8c7f7d59e",
      ImageUrl: "https://example.com/image3.jpg",
      Kind: "TeraByte",
      Link: "https://example.com/product3",
      Slug: "en-random-default-3",
      Title: "Produto Maravilhoso 3",
      Value: 3499,
      Where: "https://example.com/store3"
    },
    {
      Description: "Descrição para outro produto interessante.",
      Id: "6f4b9fa2-7bcb-45c8-8ff3-9dfde8f31e90",
      ImageUrl: "https://example.com/image4.jpg",
      Kind: "Pichau",
      Link: "https://example.com/product4",
      Slug: "en-random-default-4",
      Title: "Produto Inovador 4",
      Value: 1800,
      Where: "https://example.com/store4"
    },
    {
      Description: "Última descrição criativa de produto.",
      Id: "e2f7c57d-12ef-4c89-9389-c8b93d3f9c74",
      ImageUrl: "https://example.com/image5.jpg",
      Kind: "Kabum",
      Link: "https://example.com/product5",
      Slug: "en-random-default-5",
      Title: "Produto Exclusivo 5",
      Value: 2999,
      Where: "https://example.com/store5"
    }
  ];
  

  // log(FindBestProductPrice(produtos))