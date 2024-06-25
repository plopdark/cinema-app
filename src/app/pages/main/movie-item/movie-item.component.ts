import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MovieInterface } from '../../../utilities/interfaces/movie.interface';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.scss',
})
export class MovieItemComponent {
  @Input() movie!: MovieInterface;
}
