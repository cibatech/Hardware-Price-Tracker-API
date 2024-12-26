



import { describe, it, expect, beforeEach } from "vitest";
import { InMemoryIssuesRepository } from "../../../src/repository/InMemory/InMemoryIssueRepository";
import { GetIssuesByDateUseCase } from "../../../src/services/Issues/GetIssuesListByDateService";
import { faker } from "@faker-js/faker";
import { randomUUID } from "crypto";


describe("GetIssuesByDate Use Case", () => {
  let issuesRepository: InMemoryIssuesRepository;
  let getIssuesByDate: GetIssuesByDateUseCase;

  beforeEach(() => {
    issuesRepository = new InMemoryIssuesRepository();
    getIssuesByDate = new GetIssuesByDateUseCase(issuesRepository);
  });

  it("should return issues created on a specific date", async () => {
    const specificDate = new Date("2024-12-07");

    // Adiciona issues ao repositório
    issuesRepository.issues.push({
        At:faker.internet.httpMethod(),
        Id:randomUUID(),
        Reason:faker.lorem.lines(2),
        When:specificDate
    })

    const response = await getIssuesByDate.execute(30)
    expect(response[0].When).toBe(specificDate)
  });
});
