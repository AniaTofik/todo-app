import { InjectionToken } from '@angular/core';
import { TaskDTO } from './task.dto';

export const SETS_TASK_DTO = new InjectionToken<SetsTaskDtoPort>('SETS_TASK_DTO');

export interface SetsTaskDtoPort {
  set(task: Partial<TaskDTO>): void;
}
