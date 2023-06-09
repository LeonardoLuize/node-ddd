import {expect, test} from "vitest"
import { Answer } from "../entities/answer"
import { AnswersRepository } from "../repositories/answers-repository"
import { AnswerQuestionUseCase } from "./answer-question"

const fakeAnswersRepository: AnswersRepository = {
    create: async (answer: Answer) => {
        return
    }
}

test("Create an answer", async () => {
    const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

    const answer = await answerQuestion.execute({
        questionId: "1",
        instructorId: "1",
        content: "New Answer",
    })

    expect(answer.content).toEqual("New Answer")
})