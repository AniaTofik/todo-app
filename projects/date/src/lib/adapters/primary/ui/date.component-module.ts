import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date.component';

@NgModule({ imports: [CommonModule],
  	declarations: [DateComponent],
  	providers: [],
  	exports: [DateComponent] })
export class DateComponentModule {
}
