import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) name!: string;
  @Output() select = new EventEmitter<string>();


  onSelectTask() {
    this.select.emit(this.name);
  }
}
