import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {SitExamComponent} from "./components/sit-exam/sit-exam.component";
import {NewExamComponent} from "./components/new-exam/new-exam.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sit-exam/:id', component: SitExamComponent },
  { path: 'new-exam', component: NewExamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
