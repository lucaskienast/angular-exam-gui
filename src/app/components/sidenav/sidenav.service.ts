import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private emitChangeSource = new Subject<any>();
  changeEmitted$ = this.emitChangeSource.asObservable();

  emitChange(change: any) {
    this.emitChangeSource.next(change);
  }


  private emitSitExamChangeSource = new Subject<any>();
  sitExamChangeEmitted$ = this.emitSitExamChangeSource.asObservable();

  emitSitExamChange(change: any) {
    this.emitSitExamChangeSource.next(change);
  }


  private emitViewExamResultsChangeSource = new Subject<any>();
  reviewExamResultsChangeEmitted$ = this.emitViewExamResultsChangeSource.asObservable();

  emitViewExamResultChange(change: any) {
    this.emitViewExamResultsChangeSource.next(change);
  }

  constructor() { }
}
