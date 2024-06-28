import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface City {
  value: string;
  label: string;
}
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public readonly logoImg = '../../../../assets/cinema-logo.png';
  public readonly locationImg = '../../../../assets/location.png';
}
