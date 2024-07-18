import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { MovieInterface } from '../../../utilities/interfaces/movie.interface';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MoviesService } from '../../../shared/services/movies.service';
import { MovieParamsComponent } from '../../../shared/components/movie-params/movie-params.component';
import { TrailerButtonComponent } from '../../../shared/components/trailer-button/trailer-button.component';

@Component({
  selector: 'app-movie-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    MovieParamsComponent,
    TrailerButtonComponent,
    RouterModule,
  ],
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.scss',
})
export class MoviePageComponent implements OnInit {
  @Input() movie?: MovieInterface;
  public filteredShows: string[] = [];

  public readonly arrowLeft = this.movieService.arrowLeft;

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');
    if (title) {
      this.movie = this.movieService.getMovie().find((m) => m.title === title);
      if (this.movie) {
        this.filteredShows = this.filterShows(this.movie?.shows!);
      }
    }
  }

  public parseTime(time: string): Date {
    const [hours, minutes] = time.split(':').map(Number);
    const now = new Date();
    const showTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      hours,
      minutes
    );
    return showTime;
  }

  public filterShows(shows: string[]): string[] {
    const now = new Date();
    return shows.filter((show) => {
      const showsStartTime = this.parseTime(show.split(' - ')[0]);
      return showsStartTime > now;
    });
  }
}
