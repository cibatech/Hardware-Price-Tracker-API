//implements LCS logic (Longest Common Subsequence)

import { Product } from "../../../prisma/deploy-output";

/*
    LCS - It is an string comparisson algorithim that returns the element in a list with the biggest similarity between other lists
    Cria uma matrix para comparar o comprimento da maior subsequência comum, entre duas strings


    Video do youtube:
    https://youtu.be/sSno9rV8Rhg

    Video mais detalhado:
    https://youtu.be/Qf5R-uYQRPk
*/

function FindSimilarity(title1: string, title2: string): number {
    const lcs = (a: string, b: string): number => {
      const m = a.length;
      const n = b.length;
      //Matrix
      const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  
      for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
          if (a[i - 1] === b[j - 1]) {
            dp[i][j] = dp[i - 1][j - 1] + 1;
          } else {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
          }
        }
      }
      return dp[m][n];
    };
  
    const lcsLength = lcs(title1, title2);
    const maxLength = Math.max(title1.length, title2.length);
    return lcsLength / maxLength; // Similaridade como proporção do LCS
}
  
//Return the product with the biggest similarity (Compares each product with every singles product in the list)
export function ClosestProduct(refTitle: string, ProdList: Product[]): Product {
    let bestProduct:Product[] = [];
    let greatesSimilarity = 0;
    let strList:string[] = [];

    ProdList.forEach(e=>{
      const {Title} = e
      strList.push(String(Title))
    })

    for (let i=0;i<strList.length;i++) {
      let produto  = strList[i]
      const similaridade = FindSimilarity(refTitle, produto);
      if (similaridade > greatesSimilarity) {
        greatesSimilarity = similaridade;
        bestProduct = [ProdList[i]];
      }
    }
  
    return bestProduct[0];
}
  

// const referenceTitle = "Processador Intel Core I5 13400f, 2.5GHz (4.6GHz Turbo), Cache 20MB, 10 Núcleos, 16 Threads, LGA 1700, Sem Vídeo - Bx8071513400f";
// const ProductList = [
//   "Processador Intel Core I5-13400, 10-Core, 16-Threads, 2.5GHz (4.6GHz), Cache 20MB, LGA1700, BX8071513400-BR",
//   "Processador Intel Core i5 13400, 2.5GHz (4.6GHz Turbo), 13ª Geração, 10-Cores 16-Threads, LGA 1700, BX8071513400",
//   "Processador AMD Ryzen 5 5600G, 6 Núcleos, Cache 19MB, AM4, Vídeo Integrado - 100-100000252BOX"
// ]

// // const closetProd = ClosestProduct(referenceTitle, ProductList)

// // console.log(ClosestProduct(referenceTitle, ProductList))



const produtos: Product[] = [
  {
    Description: "Lenovo Thinkpad t440",
    Id: "2",
    ImageUrl: "https://example.com/image2.jpg",
    Kind: "Kabum",
    Link: "https://example.com/product2",
    Slug: "en-random-default-2",
    Title: "Lenovo Thinkpad t440",
    Value: 2500,
    Where: "https://example.com/store2"
  },
  {
    Description: "t440 thinkpad lenovo",
    Id: "3",
    ImageUrl: "https://example.com/image3.jpg",
    Kind: "TeraByte",
    Link: "https://example.com/product3",
    Slug: "en-random-default-3",
    Title: "t440 thinkpad lenovo",
    Value: 3499,
    Where: "https://example.com/store3"
  },
  {
    Description: "Lenovo t440 thinkpad",
    Id: "4",
    ImageUrl: "https://example.com/image4.jpg",
    Kind: "Pichau",
    Link: "https://example.com/product4",
    Slug: "en-random-default-4",
    Title: "Lenovo t440 thinkpad",
    Value: 1800,
    Where: "https://example.com/store4"
  },
  {
    Description: "Lenovo Thinkpad Linha t440",
    Id: "5",
    ImageUrl: "https://example.com/image5.jpg",
    Kind: "Kabum",
    Link: "https://example.com/product5",
    Slug: "en-random-default-5",
    Title: "Lenovo Thinkpad Linha t440",
    Value: 2999,
    Where: "https://example.com/store5"
  }
];


// console.log(ClosestProduct("notebook Lenovo Thinkpad t440",produtos))