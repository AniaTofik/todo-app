import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'lib-form-task',
  templateUrl: './form-task.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormTaskComponent {
  readonly taskForm: FormGroup = new FormGroup({ text: new FormControl() });
}
