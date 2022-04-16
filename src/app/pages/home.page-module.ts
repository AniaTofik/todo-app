import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { ImagesListComponentModule } from '../../../projects/images/src/lib/adapters/primary/ui/images-list.component-module';
import { HomeComponentModule } from '../../../projects/tasks/src/lib/adapters/primary/ui/home.component-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    ImagesListComponentModule,
    HomeComponentModule
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
