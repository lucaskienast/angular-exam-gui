import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MyResultService} from "./my-result.service";
import {ExamResultDto} from "../models/ExamResultDto";
import {throwError} from "rxjs";

@Component({
  selector: 'app-my-result',
  templateUrl: './my-result.component.html',
  styleUrls: ['./my-result.component.scss']
})
export class MyResultComponent implements OnInit {

  examResultId: number;
  examResult: ExamResultDto;

  constructor(private activateRoute: ActivatedRoute,
              private myResultService: MyResultService) {
    // 1. load examResult via examResultId from url router redirect
    this.examResultId = this.activateRoute.snapshot.params['id'];
    console.log(this.examResultId);

    this.myResultService.getExamResultById(this.examResultId).subscribe(
      (examResultDto: ExamResultDto) => {
        console.log("MyResultComponent constructor -> myResultService.getExamResultById -> examResultDto");
        console.log(examResultDto);
      this.examResult = examResultDto;
    }, error => {
      throwError(error);
    });
  }

  ngOnInit(): void {
  }

}
