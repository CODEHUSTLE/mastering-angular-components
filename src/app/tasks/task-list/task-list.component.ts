import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mac-task-list',
  templateUrl: './task-list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent {

  tasks = [
    { id: this.genID(), title: 'Task 1', done: false },
    { id: this.genID(), title: 'Task 2', done: true }
  ];

  genID() {
    return Math.floor(Math.random() * 10);
  }

  addTask(title: string) {
    this.tasks.push({ id: this.genID(), title, done: false });
  }

}
