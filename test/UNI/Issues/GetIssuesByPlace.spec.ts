



import { describe, it, expect, beforeEach } from "vitest";
import { InMemoryIssuesRepository } from "../../../src/repository/InMemory/InMemoryIssueRepository";
import { GetIssuesByDate } from "../../../src/services/Issues/GetIssuesListByDateService";
import { faker } from "@faker-js/faker";
import { randomUUID } from "crypto";
import { GetIssueByPlaceUseCase } from "../../../src/services/Issues/GetIssueByAppPlaceService";


describe("Good Case", () => {
  let issuesRepository: InMemoryIssuesRepository;
  let getIssuesByPlace: GetIssueByPlaceUseCase;

  beforeEach(() => {
    issuesRepository = new InMemoryIssuesRepository();
    getIssuesByPlace = new GetIssueByPlaceUseCase(issuesRepository);
  });

  it("should return issues by place", async () => {
    const specificPlace = "Pichau"
    // Adiciona issues ao repositório
    issuesRepository.issues.push({
        At:specificPlace,
        Id:randomUUID(),
        Reason:faker.lorem.lines(2),
        When:new Date()
    })

    const response = await getIssuesByPlace.execute(specificPlace)
    expect(response[0].At).toBe(specificPlace)
  });
});
