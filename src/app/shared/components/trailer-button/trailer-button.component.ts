import { Component, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieInterface } from '../../../utilities/interfaces/movie.interface';

@Component({
  selector: 'app-trailer-button',
  standalone: true,
  imports: [],
  templateUrl: './trailer-button.component.html',
  styleUrl: './trailer-button.component.scss',
})
export class TrailerButtonComponent {
  @Input() value: string | undefined = '';

  public readonly playButton = this.movieService.playButton;

  constructor(private movieService: MoviesService) {}
}
