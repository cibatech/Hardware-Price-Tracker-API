
import { beforeEach, describe, expect, it } from "vitest";
import { CreateUserUseCase } from "../../../src/services/User/CreateUserService";
import { UserRepository } from "../../../src/repository/UserRepository";
import { InMemoryUserRepository } from "../../../src/repository/InMemory/inMemoryUserRepository";
import { faker } from "@faker-js/faker";
import { UserLoginUseCase } from "../../../src/services/User/UserLoginService";
import { Prisma } from "../../../prisma/deploy-output";
import { InvalidParameterError } from "../../../src/Error/InvalidParameterError";
import { ResourceNotFoundError } from "../../../src/Error/ResourceNotFound";

var SUT:UserLoginUseCase
var UserRepo:InMemoryUserRepository
var data:Prisma.UserCreateInput

describe("Good Case",()=>{
    beforeEach(async()=>{
        UserRepo = new InMemoryUserRepository();
        SUT = new UserLoginUseCase(UserRepo);

        data = { Email:faker.internet.email(),Password:faker.internet.password(),}

        UserRepo.Create(data)
    })

    it("Should be able to login",async()=>{
        const returnID = await SUT.execute({
            Email:data.Email,
            Password:data.Password
        })
        expect(returnID).toBeTypeOf("string")
    })
})

describe("Bad case",()=>{
    beforeEach(async()=>{
        UserRepo = new InMemoryUserRepository();
        SUT = new UserLoginUseCase(UserRepo);

        data = { Email:faker.internet.email(),Password:faker.internet.password(),}

        UserRepo.Create(data)
    })
    it("Should not be able to login with a wrong password",async()=>{
        await expect(SUT.execute({
            Email:data.Email,
            Password:"data.Password"
        })).rejects.toBeInstanceOf(InvalidParameterError)
    })
    it("Should not be able to login with a wrong Email",async()=>{
        await expect(SUT.execute({
            Email:"data.Email",
            Password:data.Password
        })).rejects.toBeInstanceOf(ResourceNotFoundError)
    })
})