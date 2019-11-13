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

	getUncoming() {
		return this._htpp.get(`${this.URI}/movie/upcoming?api_key=${this.KEY}&language=es-ES`)
		.pipe( map( (data: any) => data.results));
	}

	getPopular() {
		return this._htpp.get(`${this.URI}/movie/popular?api_key=${this.KEY}&language=es-ES`)
		.pipe( map( (data: any) => data.results));
	}

	getTrending() {
		return this._htpp.get(`${this.URI}/trending/tv/week?api_key=${this.KEY}&language=es-ES`)
		.pipe( map( (data: any) => data.results));
	}

	getPopularKids() {
		return this._htpp.get(`${this.URI}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.KEY}&language=es-ES`)
		.pipe( map( (data: any) => data.results));
	}

	getTopRated() {
		return this._htpp.get(`${this.URI}/movie/top_rated?api_key=${this.KEY}&language=es-ES`)
		.pipe( map( (data: any) => data.results));
	}
}