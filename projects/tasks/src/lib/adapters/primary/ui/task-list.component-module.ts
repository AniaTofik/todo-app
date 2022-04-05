import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';

@NgModule({ imports: [CommonModule],
  	declarations: [TaskListComponent],
  	providers: [],
  	exports: [TaskListComponent] })
export class TaskListComponentModule {
}
