import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryProductRepository } from "../../../src/repository/InMemory/inMemoryProductRepository";
import { GetProductListFromQueryUseCase, GetProductListUseCase } from "../../../src/services";
import { faker } from "@faker-js/faker";
import { randomUUID } from "crypto";
import {Choose} from "../../../src/utils/Choose"


var SUT:GetProductListFromQueryUseCase;
var ProdRepo:InMemoryProductRepository; 

describe("Good Case",()=>{
    beforeEach(async()=>{
        ProdRepo = new InMemoryProductRepository;
        ProdRepo.itens.push({
            Description:"Computador Muito Legal",
            Id:String(randomUUID()),
            ImageUrl:faker.internet.url(),
            Kind:Choose(["Pichau","TeraByte","Kabum"]), //Chooses one of the three options
            Link:faker.internet.url(),
            Slug:"en-random-default",
            Title:"Computador Muito Legal",
            Value:faker.number.int({
                max:10000,
                min:100
            }),
            Where:faker.internet.url(),
            onInstallment:"12 vezes de 69,90"
        })
        for(let i = 0;i<22;i++){
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
                Where:faker.internet.url(),
                onInstallment:"12 vezes de 69,90"
            })   
        }
        
        SUT = new GetProductListFromQueryUseCase(ProdRepo);
    })

    it("Should be able to Return the products list by query",async()=>{
        const response = await SUT.execute({Page:1,Query:"Computador"})
        expect(response[0].Description).contain("Computador")
    })

})