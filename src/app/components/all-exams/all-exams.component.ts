import { Component, OnInit } from '@angular/core';
import {AllExamsService} from "./all-exams.service";
import {throwError} from "rxjs";
import {WholeExamDto} from "../models/WholeExamDto";

@Component({
  selector: 'app-all-exams',
  templateUrl: './all-exams.component.html',
  styleUrls: ['./all-exams.component.scss']
})
export class AllExamsComponent implements OnInit {

  examResults: WholeExamDto[];
  displayedColumns: string[] = ['Exam Name', ''];

  constructor(private allExamsService: AllExamsService) {

    this.allExamsService.getAllExams().subscribe(
      (results: WholeExamDto[]) => {
        console.log(results);
      this.examResults = results;
    }, error => {
      throwError(error);
    });

  }


  ngOnInit(): void {
  }

}
