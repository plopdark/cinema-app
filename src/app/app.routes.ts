import { MoviePageComponent } from './pages/movie/movie-page/movie-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AccountComponent } from './pages/account/account.component';
import { ShowComponent } from './pages/movie/show/show.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'account', component: AccountComponent },
  { path: 'movie/:title', component: MoviePageComponent },
  { path: 'movie/:title/:session', component: ShowComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
