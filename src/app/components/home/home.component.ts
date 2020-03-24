import { Component, OnInit } from '@angular/core';
import { Movie } from '../../movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  movies: Movie[] = [
    { title: 'Peter Rabbit 2', background: 'assets/1.jpg', id: 1},
    { title: 'Mulan', background: 'assets/2.jpg', id: 2},
    { title: 'Black Widow', background: 'assets/3.jpg', id: 3},
    { title: 'Wonder Woman 1984', background: 'assets/4.jpg', id: 4},
    { title: 'Soul', background: 'assets/5.jpg', id: 5},
    { title: 'No time to die', background: 'assets/6.jpg', id: 6},
    { title: 'Minions 2: the rise of gru', background: 'assets/7.jpg', id: 7},
    { title: 'Tenet', background: 'assets/8.jpg', id: 8}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
