
import { beforeEach, describe, expect, it } from "vitest";
import { CreatePriceTrackerUseCase } from "../../../src/services";
import { InMemoryPriceRepository } from "../../../src/repository/InMemory/inMemoryPriceRepository";
import { InMemoryUserRepository } from "../../../src/repository/InMemory/inMemoryUserRepository";

import { Faker, faker } from "@faker-js/faker";
import { InMemoryProductRepository } from "../../../src/repository/InMemory/inMemoryProductRepository";
import { Choose } from "../../../src/utils/Choose";
import { randomUUID } from "crypto";
import { Product, User } from "../../../prisma/deploy-output";
import { ResourceNotFoundError } from "../../../src/Error/ResourceNotFound";
import { InMemoryPriceTrackerRepository } from "../../../src/repository/InMemory/InMemoryPriceTrackerRepository";


var SUT:CreatePriceTrackerUseCase 
var UserRepo:InMemoryUserRepository
var TrigerRepo:InMemoryPriceTrackerRepository
var ProductRepo:InMemoryProductRepository
var Product:Product
var User:User
describe("Good Case",()=>{
    beforeEach(async()=>{
        UserRepo = new InMemoryUserRepository();
        TrigerRepo = new InMemoryPriceTrackerRepository();
        ProductRepo = new InMemoryProductRepository();
        SUT = new CreatePriceTrackerUseCase(TrigerRepo,UserRepo,ProductRepo);
        
        UserRepo.Create({
            Email:faker.internet.email(),Password:faker.internet.password(),
        })

        ProductRepo.itens.push({
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
        Product = ProductRepo.itens[0]

        UserRepo.itens.push({
            Id:randomUUID(),Email:faker.internet.email(),Password:faker.internet.password(),UserName:faker.internet.username()
        })
        User = UserRepo.itens[0]

    
    })  

    it("Should be able to create a price tracker for a already existing product",async()=>{
        const res = await SUT.execute({
            Data:{
                ProdId:Product.Id,TargetPrice:999,UserId:User.Id
            }
        })

        expect(res.TargetPrice).toBe(999);
        expect(res.ProdName).toBe(Product.Title)
        expect(res.ProdImage).toBe(Product.ImageUrl)
    })
    it("Should no be able to create a price tracker with a non-existent user",async()=>{
        await expect(SUT.execute({
            Data:{
                ProdId:Product.Id,TargetPrice:999,UserId:"User.Id"
            }
        })).rejects.toBeInstanceOf(ResourceNotFoundError)
    })
    it("Should no be able to create a price tracker with a non-existent Product",async()=>{
        await expect(SUT.execute({
            Data:{
                ProdId:"Product.Id",TargetPrice:999,UserId:User.Id
            }
        })).rejects.toBeInstanceOf(ResourceNotFoundError)
    })
})