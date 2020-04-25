import { Injectable } from '@angular/core';
import { Movie } from '../movie';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable   } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class MovieService {


  constructor(private http: HttpClient) { }

  private baseUrl = 'http://127.0.0.1:8000/api/movies/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl, this.httpOptions);
  }

  getMovieById(id: number): Observable<Movie> {
    const url = `${this.baseUrl}${id}/`;
    return this.http.get<Movie>(url);
  }
}
