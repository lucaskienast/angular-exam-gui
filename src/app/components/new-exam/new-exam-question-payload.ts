import {NewExamQuestionAnswerPayload} from "./new-exam-question-answer-payload";

export interface NewExamQuestionPayload {
  questionName: string;
  possibleAnswers: NewExamQuestionAnswerPayload[];
}
