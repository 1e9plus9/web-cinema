import { Injectable } from '@angular/core';
import { Movie } from '../movie';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private moviesUrl = 'api/movies';

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl);
  }

  getMovieById(id: number): Observable<Movie> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get<Movie>(url);
  }
  constructor(private http: HttpClient) { }
}
