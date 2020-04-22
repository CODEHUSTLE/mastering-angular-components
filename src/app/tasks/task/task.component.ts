import { Component, Input, HostBinding, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mac-task',
  templateUrl: './task.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TaskComponent {

  @Input() task: any;

  @HostBinding('class.done')
  get done() {
    return this.task && this.task.done;
  }

  
}
