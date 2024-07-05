import { Component, OnInit } from '@angular/core';
import { MovieInterface } from '../../../utilities/interfaces/movie.interface';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../../shared/services/movies.service';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [],
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss',
})
export class ShowComponent implements OnInit {
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
