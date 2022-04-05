import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({ imports: [CommonModule, ReactiveFormsModule, RouterModule],
  	declarations: [AddTaskComponent],
  	providers: [],
  	exports: [AddTaskComponent] })
export class AddTaskComponentModule {
}
