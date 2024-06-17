import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OutSideClickDirective } from '../../directives/outsideClick.directive';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, OutSideClickDirective, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public isDropdownOpened: boolean = false;

  public readonly logoImg = '../../../../assets/cinema-logo.png';
  public readonly locationImg = '../../../../assets/location.png';

  public toggleChange(): void {
    this.isDropdownOpened = !this.isDropdownOpened;
  }
}
