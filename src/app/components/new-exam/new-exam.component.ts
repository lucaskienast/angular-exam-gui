import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-exam',
  templateUrl: './new-exam.component.html',
  styleUrls: ['./new-exam.component.scss']
})
export class NewExamComponent implements OnInit {

  answerControlNames: string[] = ["answer1Control", "answer2Control", "answer3Control", "answer4Control"];

  firstQuestionFormGroup = this._formBuilder.group({
    questionControl: ['', Validators.required],
    correctAnswerControl: ['', Validators.required],
    answer1Control: ['', Validators.required],
    answer2Control: ['', Validators.required],
    answer3Control: ['', Validators.required],
    answer4Control: ['', Validators.required],
  });
  secondQuestionFormGroup = this._formBuilder.group({
    questionControl: ['', Validators.required],
    correctAnswerControl: ['', Validators.required],
    answer1Control: ['', Validators.required],
    answer2Control: ['', Validators.required],
    answer3Control: ['', Validators.required],
    answer4Control: ['', Validators.required],
  });
  thirdQuestionFormGroup = this._formBuilder.group({
    questionControl: ['', Validators.required],
    correctAnswerControl: ['', Validators.required],
    answer1Control: ['', Validators.required],
    answer2Control: ['', Validators.required],
    answer3Control: ['', Validators.required],
    answer4Control: ['', Validators.required],
  });
  fourthQuestionFormGroup = this._formBuilder.group({
    questionControl: ['', Validators.required],
    correctAnswerControl: ['', Validators.required],
    answer1Control: ['', Validators.required],
    answer2Control: ['', Validators.required],
    answer3Control: ['', Validators.required],
    answer4Control: ['', Validators.required],
  });
  fifthQuestionFormGroup = this._formBuilder.group({
    questionControl: ['', Validators.required],
    correctAnswerControl: ['', Validators.required],
    answer1Control: ['', Validators.required],
    answer2Control: ['', Validators.required],
    answer3Control: ['', Validators.required],
    answer4Control: ['', Validators.required],
  });
  sixthQuestionFormGroup = this._formBuilder.group({
    questionControl: ['', Validators.required],
    correctAnswerControl: ['', Validators.required],
    answer1Control: ['', Validators.required],
    answer2Control: ['', Validators.required],
    answer3Control: ['', Validators.required],
    answer4Control: ['', Validators.required],
  });
  seventhQuestionFormGroup = this._formBuilder.group({
    questionControl: ['', Validators.required],
    correctAnswerControl: ['', Validators.required],
    answer1Control: ['', Validators.required],
    answer2Control: ['', Validators.required],
    answer3Control: ['', Validators.required],
    answer4Control: ['', Validators.required],
  });
  eigthQuestionFormGroup = this._formBuilder.group({
    questionControl: ['', Validators.required],
    correctAnswerControl: ['', Validators.required],
    answer1Control: ['', Validators.required],
    answer2Control: ['', Validators.required],
    answer3Control: ['', Validators.required],
    answer4Control: ['', Validators.required],
  });
  ninthQuestionFormGroup = this._formBuilder.group({
    questionControl: ['', Validators.required],
    correctAnswerControl: ['', Validators.required],
    answer1Control: ['', Validators.required],
    answer2Control: ['', Validators.required],
    answer3Control: ['', Validators.required],
    answer4Control: ['', Validators.required],
  });
  tenthQuestionFormGroup = this._formBuilder.group({
    questionControl: ['', Validators.required],
    correctAnswerControl: ['', Validators.required],
    answer1Control: ['', Validators.required],
    answer2Control: ['', Validators.required],
    answer3Control: ['', Validators.required],
    answer4Control: ['', Validators.required],
  });
  userCredentialsFormGroup = this._formBuilder.group({
    usernameControl: ['', Validators.required],
    passwordControl: ['', Validators.required],
  });

  isLinear = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  showForm(formGroup: FormGroup): void {
    console.log(formGroup);
  }

  submitExamCreation(): void {
    console.log(this.userCredentialsFormGroup);
  }

}
