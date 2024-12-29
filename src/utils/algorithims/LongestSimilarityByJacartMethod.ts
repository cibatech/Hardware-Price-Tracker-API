import { Product } from "../../../prisma/deploy-output";

// Normalizes a text by removing punctuation, converting to lowercase, and trimming spaces
function normalizeText(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

// Calculates the similarity based on common words
function calculateWordSimilarity(targetWords: string[], compareWords: string[]): number {
    const targetSet = new Set(targetWords);
    const compareSet = new Set(compareWords);

    const intersection = new Set([...targetSet].filter(word => compareSet.has(word)));
    return intersection.size / targetSet.size; // Proportion of matching words
}

// Finds the string in the list with the highest word similarity to the input string
export function findMostSimilarString(inputProduct: Product, productList:Product[]): Product {
    const normalizedInput = normalizeText(inputProduct.Title?inputProduct.Title:"null");
    const inputWords = normalizedInput.split(' ');

    let bestMatch: Product[] = [];
    let highestSimilarity = 0;

    for (const product of productList) {
        const normalizedString = normalizeText(product.Title?product.Title:"null");
        const compareWords = normalizedString.split(' ');

        const similarity = calculateWordSimilarity(inputWords, compareWords);

        if (similarity > highestSimilarity) {
            highestSimilarity = similarity;
            bestMatch[0] = product;
        }
    }

    return bestMatch[0];
}

// Example usage:
const input:Product = {
    Description: "Computador Gamer Mancer V3",
    Id: "1",
    ImageUrl: "https://example.com/image1.jpg",
    Kind: "Pichau",
    Link: "https://example.com/product1",
    Slug: "en-random-default-1",
    Title: "Computador Gamer Mancer V3",
    Value: 1500,
    Where: "https://example.com/store1",
    onInstallment:"12 vezes de 69,90"
};
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
      Where: "https://example.com/store2",
      onInstallment:"12 vezes de 69,90"
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
      Where: "https://example.com/store3",
      onInstallment:"12 vezes de 69,90"
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
      Where: "https://example.com/store4",
      onInstallment:"12 vezes de 69,90"
    },
    {
      Description: "PC Gamer Mancer V3",
      Id: "5",
      ImageUrl: "https://example.com/image5.jpg",
      Kind: "Kabum",
      Link: "https://example.com/product5",
      Slug: "en-random-default-5",
      Title: "PC Gamer Mancer V3",
      Value: 2999,
      Where: "https://example.com/store5",
      onInstallment:"12 vezes de 69,90"
    }
  ];

const mostSimilar: Product | null = findMostSimilarString(input, produtos);
console.log("String mais similar:", mostSimilar);
