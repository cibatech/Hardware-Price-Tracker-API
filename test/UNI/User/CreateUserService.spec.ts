import { beforeEach, describe, expect, it } from "vitest";
import { CreateUserUseCase } from "../../../src/services/User/CreateUserService";
import { UserRepository } from "../../../src/repository/UserRepository";
import { InMemoryUserRepository } from "../../../src/repository/InMemory/inMemoryUserRepository";
import { faker } from "@faker-js/faker";

var SUT:CreateUserUseCase
var UserRepo:UserRepository

describe("Good Case",()=>{
    beforeEach(async()=>{
        UserRepo = new InMemoryUserRepository();
        SUT = new CreateUserUseCase(UserRepo)
    })

    it("Should be able to create a user",async()=>{
        const data = {
            Email:faker.internet.email(),Password:faker.internet.password(),
        }
        const createUser = await SUT.execute(data)
        expect(createUser.Email).toBe(data.Email)
    })
})