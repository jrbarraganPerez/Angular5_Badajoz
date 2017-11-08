import { FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormGroup
  ],
  declarations: [
  FormComponent
],
  exports: [
    FormComponent
  ]

})
export class MainModule { }
