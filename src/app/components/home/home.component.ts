import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

	public uncoming: any;
	public popular: any;
	public trending: any;
	public popular_kids: any;
	public top_rated: any;

	constructor( private _apiService: ApiService ) {
		this._apiService.getUncoming()
			.subscribe(data => this.uncoming = data);

		this._apiService.getPopular()
			.subscribe(data => this.popular = data);

		this._apiService.getTrending()
			.subscribe(data => this.trending = data);

		this._apiService.getPopularKids()
			.subscribe(data => this.popular_kids = data);

		this._apiService.getTopRated()
			.subscribe(data => this.top_rated = data);
	}

	ngOnInit() {}
}