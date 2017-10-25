import {Component} from '@angular/core';

import {User} from '../models/user.model';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    public person: User = new User();
}
