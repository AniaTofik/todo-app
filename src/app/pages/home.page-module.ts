import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: HomePage,
        }
      ])],
  	declarations: [HomePage],
  	providers: [],
  	exports: [] })
export class HomePageModule {
}
