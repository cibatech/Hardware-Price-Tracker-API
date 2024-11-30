import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryProductRepository } from "../../../src/repository/InMemory/inMemoryProductRepository";
import { GetProdListFromCategoryUseCase, GetProductListUseCase } from "../../../src/services";
import { faker } from "@faker-js/faker";
import { randomUUID } from "crypto";
import {Choose} from "../../../src/utils/Choose"
import { GetProdListFromASpecificStoreUseCase } from "../../../src/services/Products/GetProductListFromAnSpecificStore";

var SUT:GetProdListFromCategoryUseCase;
var ProdRepo:InMemoryProductRepository; 

describe("Good Case",()=>{
    beforeEach(async()=>{
        ProdRepo = new InMemoryProductRepository;

        for(let i = 0;i<44;i++){
            ProdRepo.itens.push({
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
                Where:"hardware"
            })   
        }
        
        SUT = new GetProdListFromCategoryUseCase(ProdRepo);
    })

    it("Should be able to Return the products list paginated",async()=>{
        const resp = await SUT.execute("hardware");

        expect(resp.ProductWithCategory[0].Where).toBe("hardware")
    })

})