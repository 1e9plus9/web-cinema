import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';


const routes: Routes = [
  { path: 'profile', component: UserProfileComponent },
  { path: 'movies/:id', component: MovieDetailsComponent},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
