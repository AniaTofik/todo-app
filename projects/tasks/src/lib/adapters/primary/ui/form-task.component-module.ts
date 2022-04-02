import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTaskComponent } from './form-task.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [FormTaskComponent],
  	providers: [],
  	exports: [FormTaskComponent] })
export class FormTaskComponentModule {
}
