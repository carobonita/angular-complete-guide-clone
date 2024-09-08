import { Component, Input, Output, EventEmitter} from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model'
import { CardComponent } from '../shared/card/card.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
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

  onCompleteTask(id: string){
    
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.isAddingTask = false;
  };
}