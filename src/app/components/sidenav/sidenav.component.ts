import {Component, OnInit} from '@angular/core';
import {AllExamsService} from "../all-exams/all-exams.service";
import {throwError} from "rxjs";
import {WholeExamDto} from "../models/WholeExamDto";
import {Router} from "@angular/router";
import {ExamResultDto} from "../models/ExamResultDto";
import {SidenavService} from "./sidenav.service";
import {SitExamService} from "../sit-exam/sit-exam.service";
import {GetExamToSitDto} from "../models/GetExamToSitDto";
import {AllExamResultsService} from "../all-exam-results/all-exam-results.service";

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
              private router: Router,
              private sidenavService: SidenavService,
              private sitExamService: SitExamService,
              private allExamResultsService: AllExamResultsService,) {

    this.allExamsService.getAllExams().subscribe(
      (results: WholeExamDto[]) => {
        console.log("SidenavComponent -> constructor -> allExamsService.getAllExams -> results");
        console.log(results);
        this.wholeExams = results;
      }, error => {
        throwError(error);
      });

    sidenavService.changeEmitted$.subscribe(allExams => {
      console.log("SidenavComponent -> constructor -> allExamsService.getAllExams -> results");
      console.log(allExams);
      this.wholeExams = allExams;
    });
  }

  ngOnInit(): void {
  }

  sitExam(examId: number): void {
    this.sitExamService.getExamToSit(examId).subscribe(
      (examToSitDto: GetExamToSitDto) => {
        console.log(examToSitDto);
        this.sidenavService.emitSitExamChange(examToSitDto);
        this.router.navigate(['/sit-exam/' + examId])
      },
      error => throwError(error)
    );
  }

  computeAverageExamScore(testResultDtos: ExamResultDto[]): number {
    let averageScore: number = 0;

    testResultDtos.forEach(examResult => {
      averageScore += (examResult.result) / testResultDtos.length;
    });

    return Math.round(averageScore);
  }


  showResults(examId: number): void {
    this.allExamResultsService.getWholeExam(examId).subscribe(
      (wholeExamDto: WholeExamDto) => {
        console.log(wholeExamDto);
        this.sidenavService.emitViewExamResultChange(wholeExamDto);
        this.router.navigate(['/review-results/' + examId])
      }, error => {
        throwError(error);
      }
    );
  }

}
