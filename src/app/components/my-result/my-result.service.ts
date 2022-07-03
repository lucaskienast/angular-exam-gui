import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExamResultDto} from "../models/ExamResultDto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MyResultService {

  constructor(private httpClient: HttpClient) { }

  getExamResultById(examResultId: number): Observable<ExamResultDto> {
    return this.httpClient.get<ExamResultDto>('http://localhost:8080/api/tests/exam-result/' + examResultId);
  }
}
