import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MoviesServiceService } from '../services/movies-service.service';
import { Movie } from '../models/movies.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public newList!: Movie[];
  public genersList: any;
  public yearsList: any;
  public searchTerm: any;

  filters: any = { year: `Select your gener`, genre: 'Year' };

  @Output() moviesList = new EventEmitter<any>();

  constructor(private movieService: MoviesServiceService) { }

  ngOnInit() {
    this.movieService.getMoviesData().subscribe((newMovieList: Movie[]) => {
      this.newList = newMovieList;
    });
    this.getGenerList();
  }

  getGenerList() {
    let newGener: any = [];
    let yearList: number[] = [];

    this.newList.forEach((element: Movie) => {
      let data = element.info.genres;
      yearList.push(element.year);

      data?.forEach((newList: any) => {
        newGener.push(newList);
      });
    });

    this.genersList = [...new Set(newGener)].sort();
    let years = [...new Set(yearList)];
    this.yearsList = years.sort((a : number, b:number) => b - a);
  }

  onChange(event: any) {
    this.moviesList.emit(event.target.value);
      }

  searchFeature() {
     this.moviesList.emit(this.searchTerm);
  }

  sendSearchTerm(){
    this.moviesList.emit(this.searchTerm);
  }

}
