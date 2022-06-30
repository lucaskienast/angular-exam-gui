import {PossibleAnswerDto} from "./PossibleAnswerDto";

export interface GetQuestionDto {

  questionId?: number;
  questionName: string;
  possibleAnswers: PossibleAnswerDto[];

}
