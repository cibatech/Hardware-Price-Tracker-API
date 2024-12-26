import { faker } from "@faker-js/faker";
import { Product } from "../../../prisma/deploy-output";
import { randomUUID } from "crypto";
import { Choose } from "../Choose";


function normalizeText(text:string) {
    return text
        .toLowerCase()
        .replace(/[^\w\s]/g, '') 
        .replace(/\s+/g, ' ')
        .trim();
}

function longestCommonSubstring(a:string, b:string) {
    const wordsA = a.split(' '); 
    const wordsB = b.split(' '); 

    const m = wordsA.length;
    const n = wordsB.length;

    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    let longestLength = 0;
    let endIndexA = 0; 

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (wordsA[i - 1] === wordsB[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > longestLength) {
                    longestLength = dp[i][j];
                    endIndexA = i; 
                }
            }
        }
    }

    return longestLength; 
}

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

        
        const lcsLength = longestCommonSubstring(normalizedRefTitle, normalizedTitle);
        const maxWords = Math.max(normalizedRefTitle.split(' ').length, normalizedTitle.split(' ').length);

        const similarity = lcsLength / maxWords; 
        if (similarity > greatestSimilarity) {
            greatestSimilarity = similarity;
            bestProduct = product;
        }
    });

    return bestProduct;
}
