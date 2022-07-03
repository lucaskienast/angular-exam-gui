import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {GetExamToSitDto} from "../models/GetExamToSitDto";
import {SitExamService} from "./sit-exam.service";
import {throwError} from "rxjs";
import {SitExamPayload} from "./sit-exam-payload";
import {GivenAnswerDto} from "../models/GivenAnswerDto";
import {ExamResultDto} from "../models/ExamResultDto";

@Component({
  selector: 'app-sit-exam',
  templateUrl: './sit-exam.component.html',
  styleUrls: ['./sit-exam.component.scss']
})
export class SitExamComponent implements OnInit {

  examId: number;
  examToSitDto: GetExamToSitDto;

  answerControls: string[] = [
    'answer1Control',
    'answer2Control',
    'answer3Control',
    'answer4Control',
    'answer6Control',
    'answer7Control',
    'answer8Control',
    'answer9Control',
    'answer10Control',
  ];

  sendExamWithResultAndAnswersFormGroup: FormGroup;

  isLinear = true;

  constructor(private _formBuilder: FormBuilder,
              private activateRoute: ActivatedRoute,
              private sitExamService: SitExamService,
              private router: Router) {

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

  }

  ngOnInit(): void {}

  sendExamWithResultAndAnswers(): void {
    console.log("sendExamWithResultAndAnswers");
    console.log(this.sendExamWithResultAndAnswersFormGroup);
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
        this.router.navigate(['/my-result/' + examResultDto.testResultId])
      }, error => {
        throwError(error);
      }
    );
  }

  calculateExamResults(): {result: number, givenAnswers: GivenAnswerDto[]} {

    let result: number = 0;

    let givenAnswers: GivenAnswerDto[] = [];

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 4; j++) {

        if (JSON.stringify(this.sendExamWithResultAndAnswersFormGroup.get('givenAnswersFormGroup')?.get('answer1Control')?.value.answer) ===
          JSON.stringify(this.examToSitDto.questions[i].possibleAnswers[j].answer)) {

          givenAnswers.push({ possibleAnswer: this.examToSitDto.questions[i].possibleAnswers[j] });

          if (this.examToSitDto.questions[i].possibleAnswers[j].correct) {
            result++;
          }
        }

        else if (JSON.stringify(this.sendExamWithResultAndAnswersFormGroup.get('givenAnswersFormGroup')?.get('answer2Control')?.value.answer) ===
          JSON.stringify(this.examToSitDto.questions[i].possibleAnswers[j].answer)) {

          givenAnswers.push({ possibleAnswer: this.examToSitDto.questions[i].possibleAnswers[j] });

          if (this.examToSitDto.questions[i].possibleAnswers[j].correct) {
            result++;
          }
        }

        else if (JSON.stringify(this.sendExamWithResultAndAnswersFormGroup.get('givenAnswersFormGroup')?.get('answer3Control')?.value.answer) ===
          JSON.stringify(this.examToSitDto.questions[i].possibleAnswers[j].answer)) {

          givenAnswers.push({ possibleAnswer: this.examToSitDto.questions[i].possibleAnswers[j] });

          if (this.examToSitDto.questions[i].possibleAnswers[j].correct) {
            result++;
          }
        }

        else if (JSON.stringify(this.sendExamWithResultAndAnswersFormGroup.get('givenAnswersFormGroup')?.get('answer4Control')?.value.answer) ===
          JSON.stringify(this.examToSitDto.questions[i].possibleAnswers[j].answer)) {

          givenAnswers.push({ possibleAnswer: this.examToSitDto.questions[i].possibleAnswers[j] });

          if (this.examToSitDto.questions[i].possibleAnswers[j].correct) {
            result++;
          }
        }

        else if (JSON.stringify(this.sendExamWithResultAndAnswersFormGroup.get('givenAnswersFormGroup')?.get('answer5Control')?.value.answer) ===
          JSON.stringify(this.examToSitDto.questions[i].possibleAnswers[j].answer)) {

          givenAnswers.push({ possibleAnswer: this.examToSitDto.questions[i].possibleAnswers[j] });

          if (this.examToSitDto.questions[i].possibleAnswers[j].correct) {
            result++;
          }
        }

        else if (JSON.stringify(this.sendExamWithResultAndAnswersFormGroup.get('givenAnswersFormGroup')?.get('answer6Control')?.value.answer) ===
          JSON.stringify(this.examToSitDto.questions[i].possibleAnswers[j].answer)) {

          givenAnswers.push({ possibleAnswer: this.examToSitDto.questions[i].possibleAnswers[j] });

          if (this.examToSitDto.questions[i].possibleAnswers[j].correct) {
            result++;
          }
        }

        else if (JSON.stringify(this.sendExamWithResultAndAnswersFormGroup.get('givenAnswersFormGroup')?.get('answer7Control')?.value.answer) ===
          JSON.stringify(this.examToSitDto.questions[i].possibleAnswers[j].answer)) {

          givenAnswers.push({ possibleAnswer: this.examToSitDto.questions[i].possibleAnswers[j] });

          if (this.examToSitDto.questions[i].possibleAnswers[j].correct) {
            result++;
          }
        }

        else if (JSON.stringify(this.sendExamWithResultAndAnswersFormGroup.get('givenAnswersFormGroup')?.get('answer8Control')?.value.answer) ===
          JSON.stringify(this.examToSitDto.questions[i].possibleAnswers[j].answer)) {

          givenAnswers.push({ possibleAnswer: this.examToSitDto.questions[i].possibleAnswers[j] });

          if (this.examToSitDto.questions[i].possibleAnswers[j].correct) {
            result++;
          }
        }

        else if (JSON.stringify(this.sendExamWithResultAndAnswersFormGroup.get('givenAnswersFormGroup')?.get('answer9Control')?.value.answer) ===
          JSON.stringify(this.examToSitDto.questions[i].possibleAnswers[j].answer)) {

          givenAnswers.push({ possibleAnswer: this.examToSitDto.questions[i].possibleAnswers[j] });

          if (this.examToSitDto.questions[i].possibleAnswers[j].correct) {
            result++;
          }
        }

        else if (JSON.stringify(this.sendExamWithResultAndAnswersFormGroup.get('givenAnswersFormGroup')?.get('answer10Control')?.value.answer) ===
          JSON.stringify(this.examToSitDto.questions[i].possibleAnswers[j].answer)) {

          givenAnswers.push({ possibleAnswer: this.examToSitDto.questions[i].possibleAnswers[j] });

          if (this.examToSitDto.questions[i].possibleAnswers[j].correct) {
            result++;
          }
        }

      }
    }

    result = (result / 10) * 100;

    return {result, givenAnswers};
  }

}
