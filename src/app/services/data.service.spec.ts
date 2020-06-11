import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

import { DataService } from './data.service';
import { User } from '../models/user';
import { UserError } from '../models/userError';

describe('DataService', () => {
    let dataService: DataService;
    let httpTestingController: HttpTestingController;

    let testUsers: User[] = [
        { id: 1, first_name: 'George', last_name: 'Bluth', email: 'george.bluth@reqres.in', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg' },
        { id: 2, first_name: 'Janet', last_name: 'Weaver', email: 'janet.weaver@reqres.in', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg' },
        { id: 3, first_name: 'Emma', last_name: 'Wong', email: 'emma.wong@reqres.in', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg' }
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [DataService]
        });
        dataService = TestBed.get(DataService);
        httpTestingController = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should GET all Users', () => {
        dataService.getAllUsers()
            .subscribe((data: User[]) => {
                expect(data.length).toBe(3)
            })

        let usersRequest: TestRequest = httpTestingController.expectOne('https://reqres.in/api/users');

        expect(usersRequest.request.method).toEqual('GET');

        usersRequest.flush(testUsers);
    });

    it('should return a BookTrackerError', () => {

        dataService.getAllUsers()
            .subscribe(
                (data: User[]) => fail('this should have been an error'),
                (err: UserError) => {
                    expect(err.errorNumber).toEqual(100);
                    expect(err.friendlyMessage).toEqual('An error occurred retrieving data.');
                }
            );

        let usersRequest: TestRequest = httpTestingController.expectOne('https://reqres.in/api/users');

        usersRequest.flush('error', {
            status: 500,
            statusText: 'Server Error'
        });

    });
});
