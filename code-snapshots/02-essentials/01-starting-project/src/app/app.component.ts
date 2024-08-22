import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './task/task.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        HeaderComponent,
        UserComponent,
        TaskComponent
    ]
})
export class AppComponent {
    users = DUMMY_USERS;
    selectedUserId = 'u1';

    get seletedUser() {
        return this.users.find(user => user.id === this.selectedUserId)!;

    }

    onSelectedUser(id: string) {
        this.selectedUserId = id;
    }
}
