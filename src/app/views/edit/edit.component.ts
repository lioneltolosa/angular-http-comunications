import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../models/user';
import { DataService } from '../../services/data.service';
import { pluck } from 'rxjs/operators';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

    selectedUser: User;

    constructor(private route: ActivatedRoute,
        private dataService: DataService,
    ) { }

    ngOnInit(): void {
        let id = +this.route.snapshot.params.id

        this.dataService.getUserById(id)
            .pipe(
                pluck('data')
            )
            .subscribe((user: User) => {
                this.selectedUser = user;
                console.log('User', user);
            })
    }

    saveChanges(): void {
        this.dataService.updateUser(this.selectedUser)
            .subscribe(
                (data: void) => console.log(`${this.selectedUser.first_name} update successfully`),
                (err: any) => console.log('Err', err),
            ) 
    }

}
