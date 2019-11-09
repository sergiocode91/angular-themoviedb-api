import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

	public movies: {};

	constructor( private _apiService: ApiService ) { }

	ngOnInit() {
		this._apiService.getPopulares()
			.subscribe(data => {
				this.movies = data
				console.log(data);
			});
  	}

}