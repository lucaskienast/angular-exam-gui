import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {GetExamToSitDto} from "../models/GetExamToSitDto";
import {SitExamService} from "./sit-exam.service";
import {throwError} from "rxjs";

@Component({
  selector: 'app-sit-exam',
  templateUrl: './sit-exam.component.html',
  styleUrls: ['./sit-exam.component.scss']
})
export class SitExamComponent implements OnInit {

  examId: number;
  examToSitDto: GetExamToSitDto;

  answers: string[] = ['A = 0.5bh', 'A = b/h', 'A = 5h/b', 'A = 5bh'];

  sendExamWithResultAndAnswersFormGroup: FormGroup;

  isLinear = true;

  constructor(private _formBuilder: FormBuilder,
              private activateRoute: ActivatedRoute,
              private sitExamService: SitExamService) {

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
      questions: [
        {
          questionId: undefined,
          questionName: "",
          possibleAnswers: [
            {
              possibleAnswerId: undefined,
              answer: "",
              isCorrect: false
            },
            {
              possibleAnswerId: undefined,
              answer: "",
              isCorrect: false
            },
            {
              possibleAnswerId: undefined,
              answer: "",
              isCorrect: false
            },
            {
              possibleAnswerId: undefined,
              answer: "",
              isCorrect: false
            }
          ]
        }, {
          questionId: undefined,
          questionName: "",
          possibleAnswers: [
            {
              possibleAnswerId: undefined,
              answer: "",
              isCorrect: false
            },
            {
              possibleAnswerId: undefined,
              answer: "",
              isCorrect: false
            },
            {
              possibleAnswerId: undefined,
              answer: "",
              isCorrect: false
            },
            {
              possibleAnswerId: undefined,
              answer: "",
              isCorrect: false
            }
          ]
        }
      ]
    };

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
      result: ['', Validators.required],
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
    // 4. on submit map form to ExamDto (possibly custom Dto)
    // 5. send ExamDto to backend via http
    // 6. show success or error message in client

  }

  ngOnInit(): void {}

  sendExamWithResultAndAnswers(): void {
    console.log("sendExamWithResultAndAnswers");
    console.log(this.sendExamWithResultAndAnswersFormGroup);
  }

}
