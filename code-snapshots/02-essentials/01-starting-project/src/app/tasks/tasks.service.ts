import { Injectable } from '@angular/core';
import { type NewTaskData } from './task/task.model';

@Injectable({providedIn: 'root'})
export class TasksService {
  //adding private key word allows the tasks array 
  //to be accessed only within this class in tasks.service.ts
  private tasks = [ 
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn Angular all the basic and advance features of Angular & how to apply them',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype', 
      summary: 'build a first prototype of the online shop website',
      dueDate: '2024-05-31'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issues template',
      summary: 'Prepare and describe an issue template which wil help with project management',
      dueDate: '2026-06-15'
    }
  ];

  getUsertasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }
  
  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    });
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

}