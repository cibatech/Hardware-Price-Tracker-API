import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryProductRepository } from "../../../src/repository/InMemory/inMemoryProductRepository";
import { GetProdListFromCategoryUseCase, GetProductListUseCase } from "../../../src/services";
import { faker } from "@faker-js/faker";
import { randomUUID } from "crypto";
import {Choose} from "../../../src/utils/Choose"
import { GetProdListFromASpecificStoreUseCase } from "../../../src/services/Products/GetProductListFromAnSpecificStore";
import { Product } from "../../../prisma/deploy-output";
import { GetProductPriceCompareBetweenDiferentStoresUseCase } from "../../../src/services/Products/GetProductComparissonBetweenStores";

var SUT:GetProductPriceCompareBetweenDiferentStoresUseCase;
var ProdRepo:InMemoryProductRepository; 

describe("Good Case",()=>{
    beforeEach(async()=>{
        ProdRepo = new InMemoryProductRepository;
        SUT = new GetProductPriceCompareBetweenDiferentStoresUseCase(ProdRepo)

        const produtos: Product[] = [
            {
              Description: "Lenovo Thinkpad modelo t440",
              Id: "1",
              ImageUrl: "https://example.com/image1.jpg",
              Kind: "Pichau",
              Link: "https://example.com/product1",
              Slug: "en-random-default-1",
              Title: "Produto Incrível 1",
              Value: 1500,
              Where: "https://example.com/store1"
            },
            {
              Description: "Lenovo Thinkpad t440",
              Id: "2",
              ImageUrl: "https://example.com/image2.jpg",
              Kind: "Kabum",
              Link: "https://example.com/product2",
              Slug: "en-random-default-2",
              Title: "Produto Fantástico 2",
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
              Title: "Produto Maravilhoso 3",
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
              Title: "Produto Inovador 4",
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
              Title: "Produto Exclusivo 5",
              Value: 2999,
              Where: "https://example.com/store5"
            }
          ];
          //joga os produtos dentro para teste
          produtos.forEach(e=>{
            ProdRepo.itens.push(e)
          })
          
    })

    it("Should be able to Evaluate the best price",async()=>{
        const resp = await SUT.execute({
            Id:"1"
        });

        console.log(ProdRepo)
        expect(resp.BestPrice.Value).toBe(1500)
    })
    
})