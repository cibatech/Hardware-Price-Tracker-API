import { beforeEach, describe, expect, it } from "vitest";
import { GetPriceReferenceFromSingleProductByIdUseCase } from "../../../src/services";
import { InMemoryPriceRepository } from "../../../src/repository/InMemory/inMemoryPriceRepository";
import { InMemoryProductRepository } from "../../../src/repository/InMemory/inMemoryProductRepository";
import { faker } from "@faker-js/faker";
import { randomUUID } from "crypto";
import { ResourceNotFoundError } from "../../../src/Error/ResourceNotFound";
import { record } from "zod";


var SUT:GetPriceReferenceFromSingleProductByIdUseCase;
var PriceRepo:InMemoryPriceRepository;
var ProdRepo:InMemoryProductRepository; 

describe("Good Case",()=>{
    beforeEach(async()=>{
        PriceRepo = new InMemoryPriceRepository;
        ProdRepo = new InMemoryProductRepository;

        ProdRepo.itens.push({
            Description:String(faker.lorem.text()),
            Id:String(randomUUID()),
            ImageUrl:faker.internet.url(),
            Kind:"Pichau",
            Link:faker.internet.url(),
            Slug:"en-random-default",
            Title:faker.internet.displayName(),
            Value:faker.number.int({
                max:10000,
                min:100
            }),
            Where:faker.internet.url(),
            onInstallment:null
        })
        const {Id} = ProdRepo.itens[0]
        PriceRepo.list.push({
            AtDate:new Date("2024-12-12T00:00:00.000Z"),
            Id:randomUUID(),
            Price:200,
            ProdId:Id
        })
        for(let i=0;i<22;i++){
            PriceRepo.list.push({
                AtDate:faker.date.past({
                    refDate:new Date(),
                    years:2
                }),
                Id:randomUUID(),
                Price:faker.number.int({
                    min:1000,
                    max:5000
                }),
                ProdId:Id
            })
        }

        SUT = new GetPriceReferenceFromSingleProductByIdUseCase(ProdRepo,PriceRepo);
    })
    it("Should be able to return a price list from a single product",async()=>{
        const {Id} = ProdRepo.itens[0]
        const response = await SUT.execute({Id,PasDays:90});
        // console.log(response)
        expect(response.Product.Id).toBe(Id);
        expect(response.PriceRef["2024-12-12"][0].Price).toBe(200);
    })
})

describe("Bad Case",()=>{
    beforeEach(async()=>{
        PriceRepo = new InMemoryPriceRepository;
        ProdRepo = new InMemoryProductRepository
        SUT = new GetPriceReferenceFromSingleProductByIdUseCase(ProdRepo,PriceRepo)
    })
    it("Should not be able to return a product price list from a non existing product",async()=>{
        await expect(SUT.execute({
            Id:"ID that does not exists",PasDays:90
        })).rejects.toBeInstanceOf(ResourceNotFoundError);
    })
})

