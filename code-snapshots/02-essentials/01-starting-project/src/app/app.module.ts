import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    UserComponent, 
    TasksComponent, 
    TaskComponent, 
    NewTaskComponent ], //declare and register components, directives, and pipes
  bootstrap: [AppComponent], //specify the root component
  imports: [BrowserModule, FormsModule, SharedModule],

})
export class AppModule {}
