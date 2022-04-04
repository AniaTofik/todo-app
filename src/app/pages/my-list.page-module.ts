import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyListPage } from './my-list.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: MyListPage,
        }
      ])],
  	declarations: [MyListPage],
  	providers: [],
  	exports: [] })
export class MyListPageModule {
}
