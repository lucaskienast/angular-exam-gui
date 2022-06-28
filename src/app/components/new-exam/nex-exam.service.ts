import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NewExamPayload} from "./new-exam-payload";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NexExamService {

  constructor(private httpClient: HttpClient) { }

  createNewExam(newExamPayload: NewExamPayload): Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/tests/create', newExamPayload);
  }

}
