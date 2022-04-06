import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from 'src/app/fake-task';
import { Task } from 'src/app/Task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  //Rendering data from Json backend request
  private apiUrl = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) {}

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
  public deleteTask(task: Task): Observable<Task> {
    //need to identify the id to delete
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
}
