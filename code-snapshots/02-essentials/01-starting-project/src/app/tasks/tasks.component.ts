import { Component, Input, Output, EventEmitter} from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;

  isAddingTask = false;
  //private makes the property only accessible within this class
  //public makes the property accessible outside of this class
  constructor(private tasksService: TasksService) {

  }
  get selectedUserTasks() {
    return this.tasksService.getUsertasks(this.userId);
  }


  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

}