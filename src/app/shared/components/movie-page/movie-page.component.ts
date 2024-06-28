import { Component, OnInit } from '@angular/core';
import { MovieInterface } from '../../../utilities/interfaces/movie.interface';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-page',
  standalone: true,
  imports: [],
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.scss',
})
export class MoviePageComponent implements OnInit {
  public movie?: MovieInterface;

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');
    if (title) {
      this.movie = this.movieService.getMovie().find((m) => m.title === title);
    }
  }
}
