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

@Component({
  selector: 'lib-task-list',
  templateUrl: './task-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent {
  tasksList$: Observable<TaskDTO[]> = this._getsAllTaskDto.getAll();
  readonly setTask: FormGroup = new FormGroup({ text: new FormControl() });

  constructor(
    @Inject(GETS_ALL_TASK_DTO)
    private _getsAllTaskDto: GetsAllTaskDtoPort,
    @Inject(ADDS_TASK_DTO) private _addsTaskDto: AddsTaskDtoPort,
    @Inject(SETS_TASK_DTO) private _setsTaskDto: SetsTaskDtoPort
  ) {}

  onClickStrikethroughtasked(setTask: FormGroup): void {
    console.log('hello');

    this._setsTaskDto.set({
      // text: setTask.get('text')?.set('bbbbb'),
      // $this.addClass("strikethrough"),
      // text: setTask.get('text').classList.add('strikethrough'),
    });
  }
}
