import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NewExamPayload} from "../new-exam/new-exam-payload";
import {Observable} from "rxjs";
import {SitExamPayload} from "./sit-exam-payload";
import {GetExamToSitDto} from "../models/GetExamToSitDto";

@Injectable({
  providedIn: 'root'
})
export class SitExamService {

  constructor(private httpClient: HttpClient) { }


  sitExam(sitExamPayload: SitExamPayload): Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/tests/send', sitExamPayload);
  }

  getExamToSit(examId: number): Observable<GetExamToSitDto> {
    return this.httpClient.get<GetExamToSitDto>('http://localhost:8080/api/tests/sit/' + examId);
  }

}
