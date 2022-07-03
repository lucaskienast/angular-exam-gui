import {UserDto} from "./UserDto";
import {GivenAnswerDto} from "./GivenAnswerDto";

export interface ExamResultDto {
  testResultId: number;
  result: number;
  userDto: UserDto;
  givenAnswerDtos: GivenAnswerDto[];
}
