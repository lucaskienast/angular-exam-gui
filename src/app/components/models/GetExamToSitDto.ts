import {ExamDto} from "./ExamDto";
import {GetQuestionDto} from "./GetQuestionDto";


export interface GetExamToSitDto {

  examDto?: ExamDto;
  questions?: GetQuestionDto[];

}
