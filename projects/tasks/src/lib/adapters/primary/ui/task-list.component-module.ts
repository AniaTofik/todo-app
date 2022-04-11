import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [TaskListComponent],
  	providers: [],
  	exports: [TaskListComponent] })
export class TaskListComponentModule {
}
