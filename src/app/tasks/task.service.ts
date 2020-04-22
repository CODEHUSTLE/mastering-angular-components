import { Injectable } from '@angular/core';
import { Task } from '../model';
import * as uuid from 'uuid';

@Injectable()
export class TaskService {

  private tasks: Task[] = [
    { id: uuid.v4(), title: 'Write code', done: false },
    { id: uuid.v4(), title: 'Write more code', done: false },
    { id: uuid.v4(), title: 'Why are you not coding', done: false },
    { id: uuid.v4(), title: 'CodeHustle', done: true }
  ];

  getTasks(): Task[] {
    return this.tasks.slice();
  }

  addTask(task: Task) {
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1
    });
  }

  updateTask(task: Task) {
    const index = this.tasks
      .findIndex((t) => t.id === task.id);
    this.tasks[index] = task;
  }
}