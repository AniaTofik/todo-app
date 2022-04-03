import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({ selector: 'lib-add-task', templateUrl: './add-task.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class AddTaskComponent {
  readonly addTask: FormGroup = new FormGroup({text: new FormControl()});
}
