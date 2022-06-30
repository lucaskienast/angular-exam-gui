import {UserDto} from "../models/UserDto";
import {ExamDto} from "../models/ExamDto";
import {GivenAnswerDto} from "../models/GivenAnswerDto";

export interface SitExamPayload {

  result: number;
  userDto: UserDto;
  examDto: ExamDto;
  givenAnswers: GivenAnswerDto[];

}
