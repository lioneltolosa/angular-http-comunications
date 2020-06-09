import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { tap, map, pluck } from 'rxjs/operators';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    allUsers: [];

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

}
