import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TASKS } from 'src/app/fake-task';
import { Task } from 'src/app/Task';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  public getTasks(): Task[] {
    return TASKS;
  }
}
