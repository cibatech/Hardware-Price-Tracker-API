import { faker } from "@faker-js/faker";
import { Product } from "../../../prisma/deploy-output";
import { randomUUID } from "crypto";
import { Choose } from "../Choose";

// Normalizes a text by removing punctuation, converting to lowercase, and trimming spaces
function normalizeText(text:string) {
  return text
      .toLowerCase()
      .replace(/[^\w\s]/g, '') // Remove punctuation
      .replace(/\s+/g, ' ')    // Normalize spaces
      .trim();
}

// Jaccard Similarity function compares sets of words
function jaccardSimilarity(a:string, b:string) {
  const setA = new Set(a.split(' '));
  const setB = new Set(b.split(' '));
  const intersection = new Set([...setA].filter(x => setB.has(x)));
  const union = new Set([...setA, ...setB]);
  return intersection.size / union.size;
}

// Finds the LCS similarity between two strings
function FindSimilarity(title1:string, title2:string) {
  const lcs = (a:string, b:string) => {
      const m = a.length;
      const n = b.length;
      const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

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
  return lcsLength / maxLength; // Similarity as a proportion of the LCS
}

// Finds the product with the highest combined similarity score
export function ClosestProduct(refTitle:string, ProdList:Product[]) {
  let bestProduct:Product = {
    Description:String(faker.lorem.text()),
    Id:String(randomUUID()),
    ImageUrl:faker.internet.url(),
    Kind:Choose(["Pichau","TeraByte","Kabum"]), //Chooses one of the three options
    Link:faker.internet.url(),
    Slug:"en-random-default",
    Title:faker.internet.displayName(),
    Value:faker.number.int({
        max:10000,
        min:100
    }),
    Where:Choose(["hardware","perifericos"]),
    onInstallment:"12 vezes de 69,90"
  };
  let greatestSimilarity = 0;

  const normalizedRefTitle = normalizeText(refTitle);

  ProdList.forEach(product => {
      const { Title } = product;
      const normalizedTitle = normalizeText(String(Title));

      const lcsSim = FindSimilarity(normalizedRefTitle, normalizedTitle);
      const jaccardSim = jaccardSimilarity(normalizedRefTitle, normalizedTitle);

      // Combined score using weighted average
      const combinedScore = 0.6 * lcsSim + 0.4 * jaccardSim;

      if (combinedScore > greatestSimilarity) {
          greatestSimilarity = combinedScore;
          bestProduct = product;
      }

  });


  return bestProduct;
}

// Example usage:
// const referenceTitle = "Processador Intel Core I5 13400f, 2.5GHz (4.6GHz Turbo), Cache 20MB, 10 Núcleos, 16 Threads, LGA 1700, Sem Vídeo - Bx8071513400f";
// const ProductList = [
//   { Title: "Processador Intel Core I5-13400, 10-Core, 16-Threads, 2.5GHz (4.6GHz), Cache 20MB, LGA1700, BX8071513400-BR" },
//   { Title: "Processador Intel Core i5 13400, 2.5GHz (4.6GHz Turbo), 13ª Geração, 10-Cores 16-Threads, LGA 1700, BX8071513400" },
//   { Title: "Processador AMD Ryzen 5 5600G, 6 Núcleos, Cache 19MB, AM4, Vídeo Integrado - 100-100000252BOX" }
// ];

// console.log(ClosestProduct(referenceTitle, ProductList));
