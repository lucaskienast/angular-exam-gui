import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {GetExamToSitDto} from "../models/GetExamToSitDto";
import {SitExamService} from "./sit-exam.service";
import {throwError} from "rxjs";
import {SitExamPayload} from "./sit-exam-payload";
import {GivenAnswerDto} from "../models/GivenAnswerDto";
import {ExamResultDto} from "../models/ExamResultDto";
import {SidenavService} from "../sidenav/sidenav.service";
import {WholeExamDto} from "../models/WholeExamDto";
import {AllExamsService} from "../all-exams/all-exams.service";

@Component({
  selector: 'app-sit-exam',
  templateUrl: './sit-exam.component.html',
  styleUrls: ['./sit-exam.component.scss']
})
export class SitExamComponent implements OnInit {

  examId: number;
  authError: boolean = false;
  examToSitDto: GetExamToSitDto;

  sendExamWithResultAndAnswersFormGroup: FormGroup;

  isLinear = true;

  constructor(private _formBuilder: FormBuilder,
              private activateRoute: ActivatedRoute,
              private sitExamService: SitExamService,
              private router: Router,
              private sidenavService: SidenavService,
              private allExamsService: AllExamsService,) {

    this.examToSitDto = {
      examDto: {
        examId: undefined,
        examName: "",
        userDto: {
          userId: undefined,
          username: "",
          email: undefined,
          password: undefined
        }
      },
      questions: []
    };

    for (let i = 0; i < 10; i++) {
      this.examToSitDto.questions.push({
        questionId: undefined,
        questionName: "",
        possibleAnswers: [
          {
            possibleAnswerId: undefined,
            answer: "",
            correct: false
          },
          {
            possibleAnswerId: undefined,
            answer: "",
            correct: false
          },
          {
            possibleAnswerId: undefined,
            answer: "",
            correct: false
          },
          {
            possibleAnswerId: undefined,
            answer: "",
            correct: false
          }
        ]
      })
    }

    // 1. load exam via examId from url router redirect
    this.examId = this.activateRoute.snapshot.params['id'];
    console.log(this.examId);
    this.sitExamService.getExamToSit(this.examId).subscribe(
      data => {
        this.examToSitDto = data;
        console.log(this.examToSitDto)
      },
      error => throwError(error)
    );

    // 2. create form with subforms to accept user given answers
    this.sendExamWithResultAndAnswersFormGroup = this._formBuilder.group({
      userFormGroup: this._formBuilder.group({
        usernameControl: ['', Validators.required],
        passwordControl: ['', Validators.required]
      }),
      givenAnswersFormGroup: this._formBuilder.group({
        answer1Control: ['', Validators.required],
        answer2Control: ['', Validators.required],
        answer3Control: ['', Validators.required],
        answer4Control: ['', Validators.required],
        answer5Control: ['', Validators.required],
        answer6Control: ['', Validators.required],
        answer7Control: ['', Validators.required],
        answer8Control: ['', Validators.required],
        answer9Control: ['', Validators.required],
        answer10Control: ['', Validators.required]
      }),
    });

    // 3. insert ExamDto values into html fields
    // 4. on submit compute results and map form to ExamDto (possibly custom Dto)
    // 5. send ExamDto to backend via http
    // 6. redirect results on success or error message in client

    sidenavService.sitExamChangeEmitted$.subscribe(exam => {
      this.examToSitDto = exam;
    });
  }

  ngOnInit(): void {
  }

  sendExamWithResultAndAnswers(): void {
    console.log("sendExamWithResultAndAnswers");
    console.log(this.sendExamWithResultAndAnswersFormGroup);

    if (this.sendExamWithResultAndAnswersFormGroup.valid) {
      let {result, givenAnswers} = this.calculateExamResults();

      let sitExamPayload: SitExamPayload = {
        result,
        userDto: {
          username: this.sendExamWithResultAndAnswersFormGroup.get('userFormGroup')?.get('usernameControl')?.value,
          password: this.sendExamWithResultAndAnswersFormGroup.get('userFormGroup')?.get('passwordControl')?.value
        },
        examDto: {
          examId: this.examToSitDto.examDto.examId,
          examName: this.examToSitDto.examDto.examName
        },
        givenAnswers
      };

      console.log(sitExamPayload);

      this.sitExamService.sitExam(sitExamPayload).subscribe(
        (examResultDto: ExamResultDto) => {
          console.log(examResultDto);
          this.getAllExamsAndSendToSidenav();
          this.router.navigate(['/my-result/' + examResultDto.testResultId])
        }, error => {
          this.authError = true;
          throwError(error);
        }
      );
    } else {
      console.log("FORM INVALID");
    }
  }

  calculateExamResults(): {result: number, givenAnswers: GivenAnswerDto[]} {

    let result: number = 0;

    let givenAnswers: GivenAnswerDto[] = [];

    // loop thru questions -> i
    // loop thru possible answers -> j
    // if possible answer correct and given answer equal possible answer then add 1 to result

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 4; j++) {

        if (JSON.stringify(this.sendExamWithResultAndAnswersFormGroup.get('givenAnswersFormGroup')?.get('answer1Control')?.value.possibleAnswerId) ===
          JSON.stringify(this.examToSitDto.questions[i].possibleAnswers[j].possibleAnswerId)) {

          givenAnswers.push({ possibleAnswer: this.examToSitDto.questions[i].possibleAnswers[j] });

          if (this.examToSitDto.questions[i].possibleAnswers[j].correct) {
            result++;
          }
        }

        else if (JSON.stringify(this.sendExamWithResultAndAnswersFormGroup.get('givenAnswersFormGroup')?.get('answer2Control')?.value.possibleAnswerId) ===
          JSON.stringify(this.examToSitDto.questions[i].possibleAnswers[j].possibleAnswerId)) {

          givenAnswers.push({ possibleAnswer: this.examToSitDto.questions[i].possibleAnswers[j] });

          if (this.examToSitDto.questions[i].possibleAnswers[j].correct) {
            result++;
          }
        }

        else if (JSON.stringify(this.sendExamWithResultAndAnswersFormGroup.get('givenAnswersFormGroup')?.get('answer3Control')?.value.possibleAnswerId) ===
          JSON.stringify(this.examToSitDto.questions[i].possibleAnswers[j].possibleAnswerId)) {

          givenAnswers.push({ possibleAnswer: this.examToSitDto.questions[i].possibleAnswers[j] });

          if (this.examToSitDto.questions[i].possibleAnswers[j].correct) {
            result++;
          }
        }

        else if (JSON.stringify(this.sendExamWithResultAndAnswersFormGroup.get('givenAnswersFormGroup')?.get('answer4Control')?.value.possibleAnswerId) ===
          JSON.stringify(this.examToSitDto.questions[i].possibleAnswers[j].possibleAnswerId)) {

          givenAnswers.push({ possibleAnswer: this.examToSitDto.questions[i].possibleAnswers[j] });

          if (this.examToSitDto.questions[i].possibleAnswers[j].correct) {
            result++;
          }
        }

        else if (JSON.stringify(this.sendExamWithResultAndAnswersFormGroup.get('givenAnswersFormGroup')?.get('answer5Control')?.value.possibleAnswerId) ===
          JSON.stringify(this.examToSitDto.questions[i].possibleAnswers[j].possibleAnswerId)) {

          givenAnswers.push({ possibleAnswer: this.examToSitDto.questions[i].possibleAnswers[j] });

          if (this.examToSitDto.questions[i].possibleAnswers[j].correct) {
            result++;
          }
        }

        else if (JSON.stringify(this.sendExamWithResultAndAnswersFormGroup.get('givenAnswersFormGroup')?.get('answer6Control')?.value.possibleAnswerId) ===
          JSON.stringify(this.examToSitDto.questions[i].possibleAnswers[j].possibleAnswerId)) {

          givenAnswers.push({ possibleAnswer: this.examToSitDto.questions[i].possibleAnswers[j] });

          if (this.examToSitDto.questions[i].possibleAnswers[j].correct) {
            result++;
          }
        }

        else if (JSON.stringify(this.sendExamWithResultAndAnswersFormGroup.get('givenAnswersFormGroup')?.get('answer7Control')?.value.possibleAnswerId) ===
          JSON.stringify(this.examToSitDto.questions[i].possibleAnswers[j].possibleAnswerId)) {

          givenAnswers.push({ possibleAnswer: this.examToSitDto.questions[i].possibleAnswers[j] });

          if (this.examToSitDto.questions[i].possibleAnswers[j].correct) {
            result++;
          }
        }

        else if (JSON.stringify(this.sendExamWithResultAndAnswersFormGroup.get('givenAnswersFormGroup')?.get('answer8Control')?.value.possibleAnswerId) ===
          JSON.stringify(this.examToSitDto.questions[i].possibleAnswers[j].possibleAnswerId)) {

          givenAnswers.push({ possibleAnswer: this.examToSitDto.questions[i].possibleAnswers[j] });

          if (this.examToSitDto.questions[i].possibleAnswers[j].correct) {
            result++;
          }
        }

        else if (JSON.stringify(this.sendExamWithResultAndAnswersFormGroup.get('givenAnswersFormGroup')?.get('answer9Control')?.value.possibleAnswerId) ===
          JSON.stringify(this.examToSitDto.questions[i].possibleAnswers[j].possibleAnswerId)) {

          givenAnswers.push({ possibleAnswer: this.examToSitDto.questions[i].possibleAnswers[j] });

          if (this.examToSitDto.questions[i].possibleAnswers[j].correct) {
            result++;
          }
        }

        else if (JSON.stringify(this.sendExamWithResultAndAnswersFormGroup.get('givenAnswersFormGroup')?.get('answer10Control')?.value.possibleAnswerId) ===
          JSON.stringify(this.examToSitDto.questions[i].possibleAnswers[j].possibleAnswerId)) {

          givenAnswers.push({ possibleAnswer: this.examToSitDto.questions[i].possibleAnswers[j] });

          if (this.examToSitDto.questions[i].possibleAnswers[j].correct) {
            result++;
          }
        }

      }
    }

    result = (result / 10) * 100;

    console.log(result);
    console.log(givenAnswers);

    return {result, givenAnswers};
  }

  getAllExamsAndSendToSidenav(): void {
    this.allExamsService.getAllExams().subscribe(
      (results: WholeExamDto[]) => {
        console.log(results);
        this.sidenavService.emitChange(results);
      }, error => {
        throwError(error);
      });
  }

}
