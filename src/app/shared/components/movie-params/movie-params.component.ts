import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-params',
  standalone: true,
  imports: [],
  templateUrl: './movie-params.component.html',
  styleUrl: './movie-params.component.scss',
})
export class MovieParamsComponent {
  @Input() param: string = '';
  @Input() value: any;
}
