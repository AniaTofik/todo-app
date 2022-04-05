import { FormGroup, FormControl } from '@angular/forms';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  ADDS_TASK_DTO,
  AddsTaskDtoPort,
} from '../../../application/ports/secondary/adds-task.dto-port';

@Component({
  selector: 'lib-add-task',
  templateUrl: './add-task.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskComponent {
  readonly addTask: FormGroup = new FormGroup({ text: new FormControl() });

  constructor(@Inject(ADDS_TASK_DTO) private _addsTaskDto: AddsTaskDtoPort) {}

  onSubmitAddtasked(addTask: FormGroup): void {
    console.log(addTask.getRawValue());
    if (addTask.invalid) {
      return;
    }

    this._addsTaskDto.add(addTask.getRawValue());

    `text:${addTask.value.text}`;
    addTask.reset();
  }
}
