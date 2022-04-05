import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskDTO } from './task.dto';

export const GETS_ALL_TASK_DTO = new InjectionToken<GetsAllTaskDtoPort>('GETS_ALL_TASK_DTO');

export interface GetsAllTaskDtoPort {
  getAll(criterion?: Partial<TaskDTO>): Observable<TaskDTO[]>;
}
