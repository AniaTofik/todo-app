import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable, tap } from 'rxjs';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import {
  GETS_ALL_TASK_DTO,
  GetsAllTaskDtoPort,
} from '../../../application/ports/secondary/gets-all-task.dto-port';
import {
  SETS_TASK_DTO,
  SetsTaskDtoPort,
} from '../../../application/ports/secondary/sets-task.dto-port';
import { FormGroup, FormControl } from '@angular/forms';
import {
  REMOVES_TASK_DTO,
  RemovesTaskDtoPort,
} from '../../../application/ports/secondary/removes-task.dto-port';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'lib-task-list',
  templateUrl: './task-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent {
  tasksList$: Observable<TaskDTO[]> = this._getsAllTaskDto
    .getAll()
    .pipe(tap((tasksList: TaskDTO[]) => this.backToHomePage(tasksList)));
  count$: Observable<number> = this.tasksList$.pipe(
    map((tasks: TaskDTO[]) => {
      return tasks.filter((text) => text.checked).length;
    })
  );
  readonly setTask: FormGroup = new FormGroup({ text: new FormControl() });

  constructor(
    @Inject(GETS_ALL_TASK_DTO)
    private _getsAllTaskDto: GetsAllTaskDtoPort,
    @Inject(SETS_TASK_DTO) private _setsTaskDto: SetsTaskDtoPort,
    @Inject(REMOVES_TASK_DTO) private _removesTaskDto: RemovesTaskDtoPort,
    private router: Router
  ) {}

  count = 0;
  completeAlert: boolean = false;
  deleteAlert: boolean = false;

  onClickStrikethroughtasked(setTask: any): void {
    if (setTask.checked === false) {
      this._setsTaskDto.set({
        id: setTask.id,
        checked: true,
      });
    } else {
      this._setsTaskDto.set({
        id: setTask.id,
        checked: false,
      });
    }
  }

  showAlert(): void {
    this.completeAlert = true;
    this.deleteAlert = false;
  }
  showDeleteAlert(): void {
    this.completeAlert = false;
    this.deleteAlert = true;
  }

  counter(setTask: any): void {
    if (setTask.checked === true) {
      this.count -= 1;
    } else {
      this.count += 1;
    }
  }

  onClickDeletetasked(taskId: string): void {
    this._removesTaskDto.remove(taskId);
  }

  onClickDeletealltasksed(tasksList$: any): void {
    // this._removesTaskDto.remove(tasksList$);
    tasksList$.doc('text.id').delete();
  }

  backToHomePage(tasksList: TaskDTO[]): void {
    if (tasksList.length < 1) {
      this.router.navigate(['/']);
    }
  }
}
