import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {

	@Input('movies') movies: any;
	@Input('titulo') titulo: any;

	constructor() { }

	ngOnInit() {
	}

}
