import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';

const routes: Routes = [
  {
    path: '', component: AboutComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [AboutComponent],
  exports: [HomeComponent]
})
export class AboutModule { }
