import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-sit-exam',
  templateUrl: './sit-exam.component.html',
  styleUrls: ['./sit-exam.component.scss']
})
export class SitExamComponent implements OnInit {

  answers: string[] = ['A = 0.5bh', 'A = b/h', 'A = 5h/b', 'A = 5bh'];

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  isLinear = true;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

}
