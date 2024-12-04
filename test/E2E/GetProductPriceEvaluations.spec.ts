import { beforeEach, describe, expect, it } from "vitest";
import { GetProductPriceEvaluationUseCase } from "../../src/services/Products/GetProductPriceEvalutation";
import { InMemoryProductRepository } from "../../src/repository/InMemory/inMemoryProductRepository";
import { InMemoryPriceRepository } from "../../src/repository/InMemory/inMemoryPriceRepository";
import { Choose } from "../../src/utils/Choose";
import { faker } from "@faker-js/faker";
import { randomUUID } from "crypto";
import { evaluation } from "../../src/lib/enums";



var SUT:GetProductPriceEvaluationUseCase
var ProdRepo:InMemoryProductRepository;
var PriceRepo:InMemoryPriceRepository

describe("Good Case",async()=>{
    beforeEach(async()=>{
        PriceRepo = new InMemoryPriceRepository;
        ProdRepo = new InMemoryProductRepository;

        SUT = new GetProductPriceEvaluationUseCase(ProdRepo,PriceRepo);

        // cria um produto
        ProdRepo.itens.push({
            Description:String(faker.lorem.text()),
            Id:String(randomUUID()),
            ImageUrl:faker.internet.url(),
            Kind:Choose(["Pichau","TeraByte","Kabum"]), //Chooses one of the three options
            Link:faker.internet.url(),
            Slug:"en-random-default",
            Title:faker.internet.displayName(),
            Value:500,
            Where:"hardware"
        })

        //cria variações de preço desse produto
        PriceRepo.list.push({
            AtDate:faker.date.past({
                refDate:new Date()
            }),
            Id:randomUUID(),
            Price:400,
            ProdId:ProdRepo.itens[0].Id
        })
    })
    it("Should be able to classify a product as Bad",async()=>{
        const resp = await SUT.execute(ProdRepo.itens[0].Id);
        // console.log(resp)
        expect(resp.ProductEvaluation).toBe(evaluation.Bad)
        expect(resp.AveragePrice).toBe(400)
    })
    it("Should be able to classify a product as Good",async()=>{
        PriceRepo.list.push({
            AtDate:faker.date.past({
                refDate:new Date()
            }),
            Id:randomUUID(),
            Price:1000,
            ProdId:ProdRepo.itens[0].Id
        })
        const resp = await SUT.execute(ProdRepo.itens[0].Id);
        // console.log(resp)
        expect(resp.ProductEvaluation).toBe(evaluation.Good)
        expect(resp.AveragePrice).toBe(700)
    })
    it("Should be able to classify a product as Good",async()=>{
        PriceRepo.list.push({
            AtDate:faker.date.past({
                refDate:new Date()
            }),
            Id:randomUUID(),
            Price:575,
            ProdId:ProdRepo.itens[0].Id
        })
        const resp = await SUT.execute(ProdRepo.itens[0].Id);
        // console.log(resp)
        expect(resp.ProductEvaluation).toBe(evaluation.Normal)
        expect(resp.AveragePrice).toBe(487.5)
    })
})