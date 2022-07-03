import {Component, OnInit} from '@angular/core';
import {AllExamsService} from "../all-exams/all-exams.service";
import {throwError} from "rxjs";
import {WholeExamDto} from "../models/WholeExamDto";
import {Router} from "@angular/router";
import {ExamResultDto} from "../models/ExamResultDto";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  sidebarOpen = false;
  showFiller: number;
  wholeExams: WholeExamDto[];

  constructor(private allExamsService: AllExamsService,
              private router: Router) {
    this.allExamsService.getAllExams().subscribe(
      (results: WholeExamDto[]) => {
        console.log(results);
        this.wholeExams = results;
      }, error => {
        throwError(error);
      });
  }

  ngOnInit(): void {
  }

  sitExam(examId: number): void {
    this.router.navigate(['/sit-exam/' + examId])
  }

  computeAverageExamScore(testResultDtos: ExamResultDto[]): number {
    let averageScore: number = 0;

    testResultDtos.forEach(examResult => {
      averageScore += (examResult.result) / testResultDtos.length;
    });

    return Math.round(averageScore);
  }

}
