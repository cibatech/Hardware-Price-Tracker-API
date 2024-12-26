import { Price } from "../../../prisma/deploy-output";

export function groupPricesByDate(prices: Price[]): Record<string, Price[]> {
    return prices.reduce((result: Record<string, Price[]>, price: Price) => {
        const dateKey = price.AtDate.toISOString().split('T')[0]; // Usamos o formato YYYY-MM-DD
        if (!result[dateKey]) {
            result[dateKey] = [];
        }
        result[dateKey].push(price);
        return result;
    }, {});
}

// // Exemplo de uso
// const priceList: Price[] = [
//     { Id: "1", ProdId: "A", AtDate: new Date("2023-12-12"), Price: 100 },
//     { Id: "2", ProdId: "B", AtDate: new Date("2023-12-12"), Price: 150 },
//     { Id: "3", ProdId: "A", AtDate: new Date("2023-12-13"), Price: 120 }
// ];

// const groupedPrices = groupPricesByDate(priceList);
// console.log(groupedPrices);