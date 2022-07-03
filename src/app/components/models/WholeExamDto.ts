import {UserDto} from "./UserDto";
import {GetQuestionDto} from "./GetQuestionDto";
import {ExamResultDto} from "./ExamResultDto";

export interface WholeExamDto {

  testId: number;
  testName: string;
  userDto: UserDto;
  questionDtos: GetQuestionDto[];
  createdAt: Date;
  testResultDtos: ExamResultDto[];

}
