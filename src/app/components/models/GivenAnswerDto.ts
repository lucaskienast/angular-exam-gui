import {ExamDto} from "./ExamDto";
import {PossibleAnswerDto} from "./PossibleAnswerDto";


export interface GivenAnswerDto {

  possibleAnswer: PossibleAnswerDto;
  examDto?: ExamDto;

}
