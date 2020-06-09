import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { pluck } from 'rxjs/operators';
import { User } from 'src/app/models/user';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    allUsers: User[];

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.dataService.getAllUsers()
            .pipe(
                pluck('data')
            )
            .subscribe(
                (data: any) => {
                    this.allUsers = data;
                    console.log('Users', data);
                },
                (err) => console.log('Err', err),
                () => console.log('All done all Users')
            )
    }

    deleteUser(id: number): void {
        this.dataService.deleteUser(id)
            .subscribe((data: void) => {
                let index = this.allUsers.findIndex(user => user.id === id);
                this.allUsers.splice(index, 1)
            }),
            (err: any) => console.log('Err', err);

    }

}
