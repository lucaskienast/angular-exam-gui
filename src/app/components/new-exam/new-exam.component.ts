import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UserDto} from "../models/UserDto";
import {NewExamPayload} from "./new-exam-payload";
import {NewExamQuestionPayload} from "./new-exam-question-payload";
import {NexExamService} from "./nex-exam.service";
import {Router} from "@angular/router";
import {AllExamsService} from "../all-exams/all-exams.service";
import {WholeExamDto} from "../models/WholeExamDto";
import {throwError} from "rxjs";
import {SidenavService} from "../sidenav/sidenav.service";

@Component({
  selector: 'app-new-exam',
  templateUrl: './new-exam.component.html',
  styleUrls: ['./new-exam.component.scss']
})
export class NewExamComponent implements OnInit {

  authError: boolean = false;
  answerControlNames: string[] = ["answer1Control", "answer2Control", "answer3Control", "answer4Control"];

  createExamForm = this._formBuilder.group({
    testNameControl: ['', Validators.required],
    userFormGroup: this._formBuilder.group({
      usernameControl: ['', Validators.required],
      passwordControl: ['', Validators.required]
    }),
    questionFormGroups: this._formBuilder.group({
      firstQuestionFormGroup: this._formBuilder.group({
        questionControl: ['', Validators.required],
        correctAnswerControl: ['', Validators.required],
        answer1Control: ['', Validators.required],
        answer2Control: ['', Validators.required],
        answer3Control: ['', Validators.required],
        answer4Control: ['', Validators.required],
      }),
      secondQuestionFormGroup: this._formBuilder.group({
        questionControl: ['', Validators.required],
        correctAnswerControl: ['', Validators.required],
        answer1Control: ['', Validators.required],
        answer2Control: ['', Validators.required],
        answer3Control: ['', Validators.required],
        answer4Control: ['', Validators.required],
      }),
      thirdQuestionFormGroup: this._formBuilder.group({
        questionControl: ['', Validators.required],
        correctAnswerControl: ['', Validators.required],
        answer1Control: ['', Validators.required],
        answer2Control: ['', Validators.required],
        answer3Control: ['', Validators.required],
        answer4Control: ['', Validators.required],
      }),
      fourthQuestionFormGroup: this._formBuilder.group({
        questionControl: ['', Validators.required],
        correctAnswerControl: ['', Validators.required],
        answer1Control: ['', Validators.required],
        answer2Control: ['', Validators.required],
        answer3Control: ['', Validators.required],
        answer4Control: ['', Validators.required],
      }),
      fifthQuestionFormGroup: this._formBuilder.group({
        questionControl: ['', Validators.required],
        correctAnswerControl: ['', Validators.required],
        answer1Control: ['', Validators.required],
        answer2Control: ['', Validators.required],
        answer3Control: ['', Validators.required],
        answer4Control: ['', Validators.required],
      }),
      sixthQuestionFormGroup: this._formBuilder.group({
        questionControl: ['', Validators.required],
        correctAnswerControl: ['', Validators.required],
        answer1Control: ['', Validators.required],
        answer2Control: ['', Validators.required],
        answer3Control: ['', Validators.required],
        answer4Control: ['', Validators.required],
      }),
      seventhQuestionFormGroup: this._formBuilder.group({
        questionControl: ['', Validators.required],
        correctAnswerControl: ['', Validators.required],
        answer1Control: ['', Validators.required],
        answer2Control: ['', Validators.required],
        answer3Control: ['', Validators.required],
        answer4Control: ['', Validators.required],
      }),
      eigthQuestionFormGroup: this._formBuilder.group({
        questionControl: ['', Validators.required],
        correctAnswerControl: ['', Validators.required],
        answer1Control: ['', Validators.required],
        answer2Control: ['', Validators.required],
        answer3Control: ['', Validators.required],
        answer4Control: ['', Validators.required],
      }),
      ninthQuestionFormGroup: this._formBuilder.group({
        questionControl: ['', Validators.required],
        correctAnswerControl: ['', Validators.required],
        answer1Control: ['', Validators.required],
        answer2Control: ['', Validators.required],
        answer3Control: ['', Validators.required],
        answer4Control: ['', Validators.required],
      }),
      tenthQuestionFormGroup: this._formBuilder.group({
        questionControl: ['', Validators.required],
        correctAnswerControl: ['', Validators.required],
        answer1Control: ['', Validators.required],
        answer2Control: ['', Validators.required],
        answer3Control: ['', Validators.required],
        answer4Control: ['', Validators.required],
      }),
    })
  });

  isLinear = false;

  constructor(private _formBuilder: FormBuilder,
              private newExamService: NexExamService,
              private allExamsService: AllExamsService,
              private router: Router,
              private sidenavService: SidenavService) { }

  ngOnInit(): void {
  }

  submitExamCreation(): void {

    console.log((JSON.stringify(this.createExamForm
      .get('questionFormGroups')
      ?.get('firstQuestionFormGroup')
      ?.get('correctAnswerControl')
      ?.value) === JSON.stringify('answer1Control')));

    if (this.createExamForm.valid) {
      console.log("FORM VALID");

      // create User Dto
      let userDto: UserDto = {
        userId: undefined,
        username: this.createExamForm.get('userFormGroup')?.get('usernameControl')?.value,
        email: undefined,
        password: this.createExamForm.get('userFormGroup')?.get('passwordControl')?.value,
      };

      // create new Exam Question Payload
      let questionList: NewExamQuestionPayload[] = [
        {
          questionName: this.createExamForm
            .get('questionFormGroups')
            ?.get('firstQuestionFormGroup')
            ?.get('questionControl')
            ?.value,
          possibleAnswers: [
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('firstQuestionFormGroup')
                ?.get('answer1Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('firstQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer1Control'))
            },
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('firstQuestionFormGroup')
                ?.get('answer2Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('firstQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer2Control'))
            },
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('firstQuestionFormGroup')
                ?.get('answer3Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('firstQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer3Control'))
            },
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('firstQuestionFormGroup')
                ?.get('answer4Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('firstQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer4Control'))
            },
          ]
        },
        {
          questionName: this.createExamForm
            .get('questionFormGroups')
            ?.get('secondQuestionFormGroup')
            ?.get('questionControl')
            ?.value,
          possibleAnswers: [
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('secondQuestionFormGroup')
                ?.get('answer1Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('secondQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer1Control'))
            },
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('secondQuestionFormGroup')
                ?.get('answer2Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('secondQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer2Control'))
            },
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('secondQuestionFormGroup')
                ?.get('answer3Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('secondQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer3Control'))
            },
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('secondQuestionFormGroup')
                ?.get('answer4Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('secondQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer4Control'))
            },
          ]
        },
        {
          questionName: this.createExamForm
            .get('questionFormGroups')
            ?.get('thirdQuestionFormGroup')
            ?.get('questionControl')
            ?.value,
          possibleAnswers: [
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('thirdQuestionFormGroup')
                ?.get('answer1Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('thirdQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer1Control'))
            },
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('thirdQuestionFormGroup')
                ?.get('answer2Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('thirdQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer2Control'))
            },
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('thirdQuestionFormGroup')
                ?.get('answer3Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('thirdQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer3Control'))
            },
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('thirdQuestionFormGroup')
                ?.get('answer4Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('thirdQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer4Control'))
            },
          ]
        },
        {
          questionName: this.createExamForm
            .get('questionFormGroups')
            ?.get('fourthQuestionFormGroup')
            ?.get('questionControl')
            ?.value,
          possibleAnswers: [
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('fourthQuestionFormGroup')
                ?.get('answer1Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('fourthQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer1Control'))
            },
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('fourthQuestionFormGroup')
                ?.get('answer2Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('fourthQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer2Control'))
            },
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('fourthQuestionFormGroup')
                ?.get('answer3Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('fourthQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer3Control'))
            },
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('fourthQuestionFormGroup')
                ?.get('answer4Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('fourthQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer4Control'))
            },
          ]
        },
        {
          questionName: this.createExamForm
            .get('questionFormGroups')
            ?.get('fifthQuestionFormGroup')
            ?.get('questionControl')
            ?.value,
          possibleAnswers: [
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('fifthQuestionFormGroup')
                ?.get('answer1Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('fifthQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer1Control'))
            },
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('fifthQuestionFormGroup')
                ?.get('answer2Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('fifthQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer2Control'))
            },
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('fifthQuestionFormGroup')
                ?.get('answer3Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('fifthQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer3Control'))
            },
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('fifthQuestionFormGroup')
                ?.get('answer4Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('fifthQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer4Control'))
            },
          ]
        },
        {
          questionName: this.createExamForm
            .get('questionFormGroups')
            ?.get('sixthQuestionFormGroup')
            ?.get('questionControl')
            ?.value,
          possibleAnswers: [
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('sixthQuestionFormGroup')
                ?.get('answer1Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('sixthQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer1Control'))
            },
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('sixthQuestionFormGroup')
                ?.get('answer2Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('sixthQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer2Control'))
            },
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('sixthQuestionFormGroup')
                ?.get('answer3Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('sixthQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer3Control'))
            },
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('sixthQuestionFormGroup')
                ?.get('answer4Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('sixthQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer4Control'))
            },
          ]
        },
        {
          questionName: this.createExamForm
            .get('questionFormGroups')
            ?.get('seventhQuestionFormGroup')
            ?.get('questionControl')
            ?.value,
          possibleAnswers: [
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('seventhQuestionFormGroup')
                ?.get('answer1Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('seventhQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer1Control'))
            },
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('seventhQuestionFormGroup')
                ?.get('answer2Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('seventhQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer2Control'))
            },
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('seventhQuestionFormGroup')
                ?.get('answer3Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('seventhQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer3Control'))
            },
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('seventhQuestionFormGroup')
                ?.get('answer4Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('seventhQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer4Control'))
            },
          ]
        },
        {
          questionName: this.createExamForm
            .get('questionFormGroups')
            ?.get('eigthQuestionFormGroup')
            ?.get('questionControl')
            ?.value,
          possibleAnswers: [
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('eigthQuestionFormGroup')
                ?.get('answer1Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('eigthQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer1Control'))
            },
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('eigthQuestionFormGroup')
                ?.get('answer2Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('eigthQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer2Control'))
            },
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('eigthQuestionFormGroup')
                ?.get('answer3Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('eigthQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer3Control'))
            },
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('eigthQuestionFormGroup')
                ?.get('answer4Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('eigthQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer4Control'))
            },
          ]
        },
        {
          questionName: this.createExamForm
            .get('questionFormGroups')
            ?.get('ninthQuestionFormGroup')
            ?.get('questionControl')
            ?.value,
          possibleAnswers: [
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('ninthQuestionFormGroup')
                ?.get('answer1Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('ninthQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer1Control'))
            },
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('ninthQuestionFormGroup')
                ?.get('answer2Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('ninthQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer2Control'))
            },
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('ninthQuestionFormGroup')
                ?.get('answer3Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('ninthQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer3Control'))
            },
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('ninthQuestionFormGroup')
                ?.get('answer4Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('ninthQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer4Control'))
            },
          ]
        },
        {
          questionName: this.createExamForm
            .get('questionFormGroups')
            ?.get('tenthQuestionFormGroup')
            ?.get('questionControl')
            ?.value,
          possibleAnswers: [
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('tenthQuestionFormGroup')
                ?.get('answer1Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('tenthQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer1Control'))
            },
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('tenthQuestionFormGroup')
                ?.get('answer2Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('tenthQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer2Control'))
            },
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('tenthQuestionFormGroup')
                ?.get('answer3Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('tenthQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer3Control'))
            },
            {
              answer: this.createExamForm
                .get('questionFormGroups')
                ?.get('tenthQuestionFormGroup')
                ?.get('answer4Control')
                ?.value,
              correct: (JSON.stringify(this.createExamForm
                .get('questionFormGroups')
                ?.get('tenthQuestionFormGroup')
                ?.get('correctAnswerControl')
                ?.value) === JSON.stringify('answer4Control'))
            },
          ]
        },
      ];

      console.log('questionList');
      console.log(questionList);

      // create New Exam
      let newExamPayload: NewExamPayload = {
        testName: this.createExamForm.get('testNameControl')?.value,
        userDto,
        questionList
      };

      console.log('newExamPayload');
      console.log(newExamPayload);

      // make request to API to create exam
      this.newExamService.createNewExam(newExamPayload).subscribe(
        response => {
          console.log("Successfully uploaded new exam and will route to confirmation page.");
          console.log(response);
          this.authError = false;
          this.getAllExamsAndSendToSidenav();
          this.router.navigate(['/exam-created']);
        },
        error => {
          this.authError = true;
          throwError(error);
        }
      );
    } else {
      // do not make request to API
      console.log("FORM INVALID");
    }
    console.log(this.createExamForm);
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
