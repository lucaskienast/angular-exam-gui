import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WholeExamDto} from "../models/WholeExamDto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AllExamResultsService {

  constructor(private httpClient: HttpClient) { }

  getWholeExam(examId: number): Observable<WholeExamDto> {
    return this.httpClient.get<WholeExamDto>('http://localhost:8080/api/tests/wholeTest/' + examId);
  }

}
