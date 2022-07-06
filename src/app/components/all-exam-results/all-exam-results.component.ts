import { Component, OnInit } from '@angular/core';
import {AllExamResultsService} from "./all-exam-results.service";
import {WholeExamDto} from "../models/WholeExamDto";
import {ActivatedRoute} from "@angular/router";
import {throwError} from "rxjs";
import {ExamResultDto} from "../models/ExamResultDto";

export interface ExamResultTableElement {
  position: number;
  username: string;
  result: number;
}

const ELEMENTAL_DATA: ExamResultTableElement[] = [];

@Component({
  selector: 'app-all-exam-results',
  templateUrl: './all-exam-results.component.html',
  styleUrls: ['./all-exam-results.component.scss']
})
export class AllExamResultsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'username', 'result'];
  examId: number;
  wholeExamDto: WholeExamDto;
  allTestResults: ExamResultDto[];
  dataSource = ELEMENTAL_DATA;

  constructor(private allExamResultsService: AllExamResultsService,
              private activateRoute: ActivatedRoute) {

    this.examId = this.activateRoute.snapshot.params['id'];

    this.allExamResultsService.getWholeExam(this.examId).subscribe(
      (exam: WholeExamDto) => {
        console.log('AllExamResultsComponent -> constructor -> allExamResultsService.getWholeExam -> exam');
        console.log(exam);
        this.wholeExamDto = exam;
        this.allTestResults = this.wholeExamDto.testResultDtos;
        this.dataSource = this.buildElementalData(this.wholeExamDto);
      }, error => {
        throwError(error);
      }
    );
  }

  ngOnInit(): void {
  }

  buildElementalData(wholeExamDto: WholeExamDto): ExamResultTableElement[] {
    console.log("buildElementalData");

    let tableElements: ExamResultTableElement[] = [];

    wholeExamDto.testResultDtos.forEach((examResultDto: ExamResultDto) => {
      tableElements.push({
        position: 0,
        username: examResultDto.userDto.username,
        result: examResultDto.result
      });
    });

    tableElements.sort((a, b) => b.result - a.result );

    for (let i = 0; i < tableElements.length; i++) {
      tableElements[i].position = i + 1;
    }

    console.log(tableElements);
    return tableElements;
  }



}
