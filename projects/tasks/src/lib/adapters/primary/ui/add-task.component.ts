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
import { Observable } from 'rxjs';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-add-task',
  templateUrl: './add-task.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskComponent {
  readonly addTask: FormGroup = new FormGroup({ text: new FormControl() });
  order = new Date().getTime();
  checked = false;

  constructor(
    @Inject(ADDS_TASK_DTO)
    private _addsTaskDto: AddsTaskDtoPort,
    private _router: Router
  ) {}

  onSubmitAddtasked(addTask: FormGroup): void {
    this._router.navigate(['/my-list']);
    if (addTask.invalid) {
      return;
    }
    this._addsTaskDto.add({
      text: addTask.get('text')?.value,
      order: this.order,
      checked: this.checked,
    });
    this.addTask.reset();
  }

  orderUp() {
    this.order = this.order + 1;
    console.log(this.order);
  }
}
