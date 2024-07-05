import { MoviePageComponent } from './pages/movie/movie-page/movie-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AccountComponent } from './pages/account/account.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'account', component: AccountComponent },
  { path: 'movie/:title', component: MoviePageComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
