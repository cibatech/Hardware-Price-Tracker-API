



import { describe, it, expect, beforeEach } from "vitest";
import { InMemoryIssuesRepository } from "../../../src/repository/InMemory/InMemoryIssueRepository";
import { GetIssuesByDateUseCase } from "../../../src/services/Issues/GetIssuesListByDateService";
import { faker } from "@faker-js/faker";
import { randomUUID } from "crypto";
import { GetAllTheIssuesPaginatedUseCase } from "../../../src/services/Issues";


describe("GetIssuesByDate Use Case", () => {
  let issuesRepository: InMemoryIssuesRepository;
  let SUT:GetAllTheIssuesPaginatedUseCase ;

  beforeEach(() => {
    issuesRepository = new InMemoryIssuesRepository();
    SUT = new GetAllTheIssuesPaginatedUseCase(issuesRepository);
    for(let i=0;i<22;i++){
        // Adiciona issues ao repositório
        issuesRepository.issues.push({
            At:faker.internet.httpMethod(),
            Id:randomUUID(),
            Reason:"Pq eu quero testar",
            When:new Date()
        })
    }
  });

  it("should be able to return all the issues", async () => {
    const execute = await SUT.execute(1)
    expect(execute[0].Reason).toBe("Pq eu quero testar")
  });
});
