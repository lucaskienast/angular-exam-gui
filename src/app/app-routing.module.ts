import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {SitExamComponent} from "./components/sit-exam/sit-exam.component";
import {NewExamComponent} from "./components/new-exam/new-exam.component";
import {MyResultComponent} from "./components/my-result/my-result.component";
import {AllExamsComponent} from "./components/all-exams/all-exams.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sit-exam/:id', component: SitExamComponent },
  { path: 'my-result/:id', component: MyResultComponent },
  { path: 'new-exam', component: NewExamComponent },
  { path: 'all-exams', component: AllExamsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
