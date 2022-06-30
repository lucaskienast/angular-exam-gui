import {UserDto} from "./UserDto";


export interface ExamDto {

  examId?: number;
  examName: string;
  userDto?: UserDto;

}
