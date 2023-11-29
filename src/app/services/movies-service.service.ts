import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { moviesData } from 'src/assets/movielist';
import { Movie } from 'src/app/models/movies.model'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesServiceService {
  public movies: Movie[] = moviesData;
  filters: any = {};

  constructor(private http: HttpClient) {}

  public getMoviesData() {
    return of(this.movies);
  }

  setFilters(newFilters: any): void {
    this.filters = { ...newFilters };
  }
}
