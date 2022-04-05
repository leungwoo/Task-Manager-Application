import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/fake-task';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  //retrieve fake task json server
  newTask: Task[] = TASKS;
  constructor() {}

  ngOnInit(): void {}
}
