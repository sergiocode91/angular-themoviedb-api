import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
	providedIn: 'root'
})
export class ApiService {

	private URI = 'https://api.themoviedb.org/3';
	private KEY = '9b1b03771b7512043cad4c52efe1d4f6';

	constructor( private _htpp: HttpClient ) { }

	getPopulares() {
		return this._htpp.get(`${this.URI}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.KEY}`)
		.pipe( map( (data: any) => data.results));
	}
}


