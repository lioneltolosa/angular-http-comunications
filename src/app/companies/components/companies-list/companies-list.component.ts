import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../../sevices/companies.service';
import { Companie } from '../../models/companie';
import { pluck, map } from 'rxjs/operators';

@Component({
	selector: 'app-companies-list',
	templateUrl: './companies-list.component.html',
	styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent implements OnInit {

	allcompanies: Companie[];

	constructor(private companieService: CompaniesService) { }

	ngOnInit(): void {
		this.companieService.getCompanies()
			.pipe(
				pluck('data')
			)
			.subscribe((companies: any) => {
				this.allcompanies = companies
				console.log('Companies', companies);
			})
	}

}
