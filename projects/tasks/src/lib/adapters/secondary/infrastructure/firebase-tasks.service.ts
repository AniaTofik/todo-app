import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AddsTaskDtoPort } from '../../../application/ports/secondary/adds-task.dto-port';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllTaskDtoPort } from '../../../application/ports/secondary/gets-all-task.dto-port';
import { filterByCriterion } from '@lowgular/shared';
import { SetsTaskDtoPort } from '../../../application/ports/secondary/sets-task.dto-port';
import { RemovesTaskDtoPort } from '../../../application/ports/secondary/removes-task.dto-port';

@Injectable()
export class FirebaseTasksService
  implements
    AddsTaskDtoPort,
    GetsAllTaskDtoPort,
    SetsTaskDtoPort,
    RemovesTaskDtoPort
{
  constructor(private _client: AngularFirestore) {}

  add(task: Partial<TaskDTO>): void {
    this._client.collection('tasks-list').add(task);
  }

  getAll(criterion: Partial<TaskDTO>): Observable<TaskDTO[]> {
    return this._client
      .collection<TaskDTO>('tasks-list', (ref) => ref.orderBy('text', 'asc'))
      .valueChanges({ idField: 'id' })
      .pipe(map((data: TaskDTO[]) => filterByCriterion(data, criterion)));
  }
  set(task: Partial<TaskDTO>): void {
    this._client.doc('tasks-list/' + task.id).update(task);
  }

  remove(id: string): void {
    this._client.doc('tasks-list/' + id).delete();
  }
}
