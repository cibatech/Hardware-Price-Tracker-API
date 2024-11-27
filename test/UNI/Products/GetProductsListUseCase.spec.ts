import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryProductRepository } from "../../../src/repository/InMemory/inMemoryProductRepository";
import { GetProductListUseCase } from "../../../src/services";
import { faker } from "@faker-js/faker";
import { randomUUID } from "crypto";
import {Choose} from "../../../src/utils/Choose"

var SUT:GetProductListUseCase;
var ProdRepo:InMemoryProductRepository; 

describe("Good Case",()=>{
    beforeEach(async()=>{
        ProdRepo = new InMemoryProductRepository;

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
                Where:faker.internet.url()
            })   
        }
        
        SUT = new GetProductListUseCase(ProdRepo);
    })

    it("Should be able to Return the products list paginated",async()=>{
        const responseFromPageOne = await SUT.execute({Page:1});
        const responseFromPageTwo = await SUT.execute({Page:2});


        expect(responseFromPageOne.ProductList.length).toBe(20);
        expect(responseFromPageTwo.ProductList.length).toBe(2);
    })

    //writes test to return this separated by three stores
})