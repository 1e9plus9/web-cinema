import { Injectable } from '@angular/core';
import { Movie } from '../movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movie[] = [
    { title: 'Peter Rabbit 2', background: 'assets/1.jpg', poster: 'assets/poster1.jpg', id: 1, releaseDate: '27th Mar 2020',
      director: 'Will Gluck', cast: 'James Corden, Margot Robbie, Rose Byrne, Domhnall Gleeson'},
    { title: 'Mulan', background: 'assets/2.jpg', poster: 'assets/poster2.jpg', id: 2, releaseDate: '27th Mar 2020',
      director: 'Niki Caro', cast: 'Yifei Liu'},
    { title: 'Black Widow', background: 'assets/3.jpg', poster: 'assets/poster3.jpg', id: 3, releaseDate: '1st May 2020',
     director: 'Cate Shortland', cast: 'Scarlett Johansson, Rachel Weisz, FLorence Pugh, David Harbour'},
    { title: 'Wonder Woman 1984', background: 'assets/4.jpg', poster: 'assets/poster4.jpg', id: 4, releaseDate: '13th Aug 2020',
     director: 'Patty Jenkins', cast: 'Gal Gadot, Chris Pine, Connie Nielsen, Kristen Wiig, Pedro Pascal'},
    { title: 'Soul', background: 'assets/5.jpg', poster: '', id: 5, releaseDate: '19th Jun 2020',
     director: 'Pete Docter', cast: 'Jamie Foxx, Tina Fey, Questlove, Phylicia Rashad'},
    { title: 'No time to die', background: 'assets/6.jpg', poster: 'assets/poster6.jpg', id: 6, releaseDate: '12th Nov 2020',
     director: 'Cary Joji Fukunaga',
      cast: 'Daniel Craig, Lashana Lynch, Ana de Armas, Rami Malek, Jeffrey Wright, Naomie Harris, ' +
        'Lea Seydoux, Ben Whishaw, Ralph Fiennes'},
    { title: 'Minions 2: the rise of gru', background: 'assets/7.jpg', poster: 'assets/poster7.jpg', id: 7, releaseDate: '2nd Jul 2021',
      director: 'Kyle Balda', cast: 'Steve Carell'},
    { title: 'Tenet', background: 'assets/8.jpg', poster: '', id: 8, releaseDate: '17th Jul 2020',
    director: 'Christopher Nolan', cast: 'Robert Pattinson, John David Washington, Elizabeth Debicki, Aaron Taylor-Johnson'}
  ];
  getMovies(): Movie[] {
    return this.movies;
  }
  getMovieById(id: number): Movie | null {
    for (const movie of this.movies) {
      if (movie.id === id) {
        return movie;
      }
    }
    return null;
  }
  constructor() { }
}
