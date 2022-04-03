import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TasksPage } from './tasks.page';
import { ImagesListComponentModule } from '../../../projects/images/src/lib/adapters/primary/ui/images-list.component-module';
import { AddTaskComponentModule } from '../../../projects/tasks/src/lib/adapters/primary/ui/add-task.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: TasksPage,
        }
      ]),
  ImagesListComponentModule,
  AddTaskComponentModule,
],
  	declarations: [TasksPage],
  	providers: [],
  	exports: [] })
export class TasksPageModule {
}
