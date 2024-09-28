import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';



@NgModule({
  declarations: [  //declare and register components, directives, and pipes
    AppComponent, 
    HeaderComponent, 
    UserComponent, 
   ],
  bootstrap: [AppComponent], //specify the root component
  imports: [BrowserModule, SharedModule, TasksModule],

})
export class AppModule {}
