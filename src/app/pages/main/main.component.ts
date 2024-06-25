import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { MovieInterface } from '../../utilities/interfaces/movie.interface';
import { MoviesService } from '../../shared/services/movies.service';
import { CommonModule } from '@angular/common';
import { MovieItemComponent } from './movie-item/movie-item.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, CommonModule, MovieItemComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  public movieList: MovieInterface[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movieList = this.movieService.getMovie();
  }
}
