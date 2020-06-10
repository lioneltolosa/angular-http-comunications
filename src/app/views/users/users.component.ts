import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { User } from '../../models/user';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
    }

    saveUser(newUser: User) {
        this.dataService.createUser(newUser)
            .subscribe(
                (data: User) => console.log(data),
                (err: any) => console.log('Err', err),
            )
    }

}
