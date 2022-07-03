import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WholeExamDto} from "../models/WholeExamDto";

@Injectable({
  providedIn: 'root'
})
export class AllExamsService {

  constructor(private httpClient: HttpClient) { }

  getAllExams(): Observable<WholeExamDto[]> {
    return this.httpClient.get<WholeExamDto[]>('http://localhost:8080/api/tests/allWholeTest');
  }
}
