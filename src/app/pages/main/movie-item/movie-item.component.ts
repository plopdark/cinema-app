import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MovieInterface } from '../../../utilities/interfaces/movie.interface';
import { RouterModule } from '@angular/router';
import { MoviesService } from '../../../shared/services/movies.service';
import { TrailerButtonComponent } from '../../../shared/components/trailer-button/trailer-button.component';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [CommonModule, RouterModule, TrailerButtonComponent],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.scss',
})
export class MovieItemComponent {
  @Input() movie!: MovieInterface;

  constructor(private movieService: MoviesService) {}
}
