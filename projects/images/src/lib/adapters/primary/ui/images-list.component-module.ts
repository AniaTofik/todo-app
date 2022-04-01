import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesListComponent } from './images-list.component';

@NgModule({ imports: [CommonModule],
  	declarations: [ImagesListComponent],
  	providers: [],
  	exports: [ImagesListComponent] })
export class ImagesListComponentModule {
}
