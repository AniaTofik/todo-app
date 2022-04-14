import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import {
  GETS_ALL_TASK_DTO,
  GetsAllTaskDtoPort,
} from '../../../application/ports/secondary/gets-all-task.dto-port';
import { ActivatedRoute } from '@angular/router';
import {
  ADDS_TASK_DTO,
  AddsTaskDtoPort,
} from '../../../application/ports/secondary/adds-task.dto-port';
import {
  SETS_TASK_DTO,
  SetsTaskDtoPort,
} from '../../../application/ports/secondary/sets-task.dto-port';
import { FormGroup, FormControl } from '@angular/forms';
import {
  REMOVES_TASK_DTO,
  RemovesTaskDtoPort,
} from '../../../application/ports/secondary/removes-task.dto-port';
import { map } from '@firebase/util';

@Component({
  selector: 'lib-task-list',
  templateUrl: './task-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent {
  count = 0;
  countAlert = 0;
  tasksList$: Observable<TaskDTO[]> = this._getsAllTaskDto.getAll();
  // .pipe(
  //   map((tasksList: TaskDTO[]) =>
  //   tasksList.sort((a, b) => a.order  - b.order)
  //   )
  // );
  readonly setTask: FormGroup = new FormGroup({ text: new FormControl() });

  constructor(
    @Inject(GETS_ALL_TASK_DTO)
    private _getsAllTaskDto: GetsAllTaskDtoPort,
    @Inject(ADDS_TASK_DTO) private _addsTaskDto: AddsTaskDtoPort,
    @Inject(SETS_TASK_DTO) private _setsTaskDto: SetsTaskDtoPort,
    @Inject(REMOVES_TASK_DTO) private _removesTaskDto: RemovesTaskDtoPort
  ) {}
  isCounted: boolean = false;
  showMe: boolean = false;
  showMeAlert: boolean = false;

  onClickStrikethroughtasked(setTask: any): void {
    if (setTask.checked === false) {
      this._setsTaskDto.set({
        id: setTask.id,
        checked: true,
        isCounted: true,
      });
    } else {
      this._setsTaskDto.set({
        id: setTask.id,
        checked: false,
        isCounted: false,
      });
    }
  }

  showAlert() {
    this.showMe = true;
    this.showMeAlert = false;
  }
  showAlertDelete() {
    this.showMeAlert = true;
    this.showMe = false;
  }
  // counter(type: string) {
  // type === 'add' ? this.count++ : this.count--;
  // type === 'minus' ? this.count-- : this.count++;

  counter() {
    if ((this.isCounted = false)) {
      this.count += this.isCounted ? -1 : -1;
    } else {
      this.count += !this.isCounted ? +1 : +1;
    }
  }

  counterAlert() {
    if ((this.isCounted = false)) {
      this.countAlert += this.isCounted ? -1 : -1;
    } else {
      this.countAlert += !this.isCounted ? +1 : +1;
    }
  }

  onClickDeletetasked(taskId: string): void {
    this._removesTaskDto.remove(taskId);
  }
}
