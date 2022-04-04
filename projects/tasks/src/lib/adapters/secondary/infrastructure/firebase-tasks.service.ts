import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AddsTaskDtoPort } from '../../../application/ports/secondary/adds-task.dto-port';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';

@Injectable()
export class FirebaseTasksService implements AddsTaskDtoPort {
  constructor(private _client: AngularFirestore) {}

  add(task: Partial<TaskDTO>): void {
    this._client.collection('tasks-list').add(task);
  }
}
