import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  //retrieve fake task json server
  public tasks: Task[] = [];
  constructor(private taskservice: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskservice.getTasks();
  }
}
