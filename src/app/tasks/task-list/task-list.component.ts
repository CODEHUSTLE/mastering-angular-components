import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mac-task-list',
  templateUrl: './task-list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent {

  tasks = [
    { id: 1, title: 'Task 1', done: false},
    { id: 2, title: 'Task 2', done: true}
  ]

}
