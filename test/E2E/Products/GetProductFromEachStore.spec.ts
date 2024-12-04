import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryProductRepository } from "../../../src/repository/InMemory/inMemoryProductRepository";
import { GetProductListUseCase } from "../../../src/services";
import { faker } from "@faker-js/faker";
import { randomUUID } from "crypto";
import {Choose} from "../../../src/utils/Choose"
import { GetProdListFromASpecificStoreUseCase } from "../../../src/services/Products/GetProductListFromAnSpecificStore";

var SUT:GetProdListFromASpecificStoreUseCase;
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
                Where:faker.internet.url()
            })   
        }
        
        SUT = new GetProdListFromASpecificStoreUseCase(ProdRepo);
    })

    it("Should be able to Return the products list paginated",async()=>{
        const responseWhenTriedToFindKabumProducts = await SUT.execute({Store:"Kabum",Page:1});
        const responseWhenTriedToFindTerabyteProducts = await SUT.execute({Store:"TeraByte",Page:1});
        const responseWhenTriedToFindPichauProducts = await SUT.execute({Store:"Pichau",Page:1});

        expect(responseWhenTriedToFindKabumProducts.prodListFromProvidedStore[0].Kind).toBe("Kabum");
        expect(responseWhenTriedToFindTerabyteProducts.prodListFromProvidedStore[0].Kind).toBe("TeraByte");
        expect(responseWhenTriedToFindPichauProducts.prodListFromProvidedStore[0].Kind).toBe("Pichau");
    })

})