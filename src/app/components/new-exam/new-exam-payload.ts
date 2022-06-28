import {UserDto} from "../models/UserDto";
import {NewExamQuestionPayload} from "./new-exam-question-payload";

export interface NewExamPayload {
  testName: string;
  userDto: UserDto;
  questionList: NewExamQuestionPayload[];
}
