import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from '../movie';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const movies: Movie[] = [
      {
        title: 'Peter Rabbit 2',
        background: 'assets/1.jpg',
        poster: 'assets/poster1.jpg',
        id: 1,
        releaseDate: '27th Mar 2020',
        director: 'Will Gluck',
        cast: 'James Corden, Margot Robbie, Rose Byrne, Domhnall Gleeson',
        synopsis: 'Peter Rabbit and his bunny buddies are back, along with Bea and new husband Thomas McGregor.' +
          ' But Peter is tired of his reputation for mischief and runs away from the countryside where he bumps into an old, ' +
          'adventure-loving friend of his father’s. ' +
          'James Corden, Rose Byrne, Margot Robbie, and Domhnall Gleeson reprise their roles in this funny new part-animated adventure, ' +
          'directed by Will Gluck, based on the stories by Beatrix Potter.'
      },
      {
        title: 'Mulan',
        background: 'assets/2.jpg',
        poster: 'assets/poster2.jpg',
        id: 2,
        releaseDate: '27th Mar 2020',
        director: 'Niki Caro',
        cast: 'Yifei Liu',
        synopsis: 'When the Emperor of China issues a decree that one man per family must' +
          ' serve in the Imperial Army to defend the country from Northern invaders, Hua Mulan,' +
          ' the eldest daughter of an honored warrior, steps in to take the place of her ailing father.' +
          ' Masquerading as a man, Hua Jun, she is tested every step of the way and must harness her ' +
          'inner-strength and embrace her true potential. It is an epic journey that will ' +
          'transform her into an honored warrior and earn her the respect of a grateful nation...' +
          ' and a proud father. "Mulan" features a celebrated international cast that ' +
          'includes: Yifei Liu as Mulan; Donnie Yen as Commander Tung; Jason Scott Lee as Bori' +
          ' Khan; Yoson An as Cheng Honghui; with Gong Li as Xianniang and Jet Li as the Emperor. The film ' +
          'is directed by Niki Caro from a screenplay by Rick Jaffa & Amanda Silver and Elizabeth Martin &' +
          ' Lauren Hynek based on the narrative poem "The Ballad of Mulan.'
      },
      {
        title: 'Black Widow',
        background: 'assets/3.jpg',
        poster: 'assets/poster3.jpg',
        id: 3,
        releaseDate: '1st May 2020',
        director: 'Cate Shortland',
        cast: 'Scarlett Johansson, Rachel Weisz, FLorence Pugh, David Harbour',
        synopsis: ''
      },
      {
        title: 'Wonder Woman 1984',
        background: 'assets/4.jpg',
        poster: 'assets/poster4.jpg',
        id: 4,
        releaseDate: '13th Aug 2020',
        director: 'Patty Jenkins', cast: 'Gal Gadot, Chris Pine, Connie Nielsen, Kristen Wiig, Pedro Pascal',
        synopsis: ''
      },
      {
        title: 'Soul',
        background: 'assets/5.jpg',
        poster: '',
        id: 5,
        releaseDate: '19th Jun 2020',
        director: 'Pete Docter',
        cast: 'Jamie Foxx, Tina Fey, Questlove, Phylicia Rashad',
        synopsis: ''
      },
      {
        title: 'No time to die',
        background: 'assets/6.jpg',
        poster: 'assets/poster6.jpg',
        id: 6,
        releaseDate: '12th Nov 2020',
        director: 'Cary Joji Fukunaga',
        cast: 'Daniel Craig, Lashana Lynch, Ana de Armas, Rami Malek, Jeffrey Wright, Naomie Harris, ' +
          'Lea Seydoux, Ben Whishaw, Ralph Fiennes',
        synopsis: ''
      },
      {
        title: 'Minions 2: the rise of gru',
        background: 'assets/7.jpg',
        poster: 'assets/poster7.jpg',
        id: 7,
        releaseDate: '2nd Jul 2021',
        director: 'Kyle Balda',
        cast: 'Steve Carell',
        synopsis: 'asdks asdasd as asd sd sd sd f sgdf sfg sdfg fdg sdfg sdg sfg sdf gsdf '
      },
      {
        title: 'Tenet',
        background: 'assets/8.jpg',
        poster: '',
        id: 8,
        releaseDate: '17th Jul 2020',
        director: 'Christopher Nolan',
        cast: 'Robert Pattinson, John David Washington, Elizabeth Debicki, Aaron Taylor-Johnson',
        synopsis: ''
      }
    ];
    return {movies};
  }

  constructor() { }
}
