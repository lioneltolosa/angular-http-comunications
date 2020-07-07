import { Component, OnInit } from '@angular/core';
import { Companie } from '../../models/companie';
import { ActivatedRoute } from '@angular/router';
import { CompaniesService } from '../../sevices/companies.service';
import { pluck } from 'rxjs/operators';

@Component({
    selector: 'app-companies-details',
    templateUrl: './companies-details.component.html',
    styleUrls: ['./companies-details.component.scss']
})
export class CompaniesDetailsComponent implements OnInit {

    companies: Companie[];

    constructor(private route: ActivatedRoute,
                private companieService: CompaniesService) { }

    ngOnInit(): void {
        //let id = +this.route.snapshot.params.id;
        const id = +this.route.snapshot.paramMap.get('id');
        console.log('id', id);

        this.companieService.getCompaniesById(id)
            .pipe(
                pluck('data')
            )
            .subscribe((companies: any) => {
                console.log('Companies Details', companies);
                this.companies = companies
            })
    }

}
