import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AboutComponent],
  exports: [HomeComponent]
})
export class AboutModule { }
