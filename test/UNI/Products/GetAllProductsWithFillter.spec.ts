import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryProductRepository } from "../../../src/repository/InMemory/inMemoryProductRepository";
import { GetProductsByFilterUseCase  } from "../../../src/services";
import { faker } from "@faker-js/faker";
import { randomUUID } from "crypto";
import {Choose} from "../../../src/utils/Choose"
import { GetProdListFromASpecificStoreUseCase } from "../../../src/services/Products/GetProductListFromAnSpecificStore";

var SUT:GetProductsByFilterUseCase;
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
                Where:Choose(["hardware","perifericos"]),
                onInstallment:"12 vezes de 69,90"
            })   
        }
        
        SUT = new GetProductsByFilterUseCase(ProdRepo);
    })
    it("Should be able to Return the products with the specified category",async()=>{
        const resp = await SUT.execute({
            Category:"hardware",Store:null,
            Page:1,Max:null, Min:null
        })

        expect(resp.Return.TotalList[0].Where).toBe("hardware")
    })
    it("Should be able to Return the products with the specified Store",async()=>{
        const resp = await SUT.execute({
            Category:null,Store:"Kabum",
            Page:1,Max:null, Min:null
        })

        expect(resp.Return.TotalList[0].Kind).toBe("Kabum")
    })
    it("Should be able to return all the products between min and max",async()=>{
        const resp = await SUT.execute({
            Category:null,Min:100, Max:5000,Page:1,Store:null
        })

        expect(resp.Return.TotalList[0].Value).toBeGreaterThan(100)
        expect(resp.Return.TotalList[0].Value).toBeLessThan(10000)
    })

})