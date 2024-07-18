import { HeaderComponent } from './../../../shared/components/header/header.component';
import { Component, OnInit } from '@angular/core';
import { MovieInterface } from '../../../utilities/interfaces/movie.interface';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MoviesService } from '../../../shared/services/movies.service';
import { CommonModule } from '@angular/common';
import { SeatsEnum } from '../../../utilities/enums/seats.enum';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [HeaderComponent, RouterModule, CommonModule],
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss',
})
export class ShowComponent implements OnInit {
  public movie?: MovieInterface;
  public session?: string | null;
  public seatsArr: number[] = [];
  public rowsCount: number = 0;
  public rowsCountArr: number[] = [];
  public chosenPlaces: number[] = [];
  public totalPrice: number = 0;

  public readonly seatImage: string = '../../../../assets/seat-white.png';
  public readonly arrowLeft: string = this.movieService.arrowLeft;

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');
    this.session = this.route.snapshot.paramMap.get('session');

    if (title) {
      this.movie = this.movieService.getMovie().find((m) => m.title === title);
      if (this.movie) {
        this.getSeats(this.movie.seats!);
        this.loadChosenSeats();
      }
    }
  }

  public getSeats(seats: SeatsEnum): void {
    this.seatsArr = Array(seats)
      .fill(0)
      .map((x, i) => i + 1);

    this.rowsCount = seats === 70 ? 7 : 5;
    this.rowsCountArr = Array(this.rowsCount)
      .fill(0)
      .map((x, i) => i + 1);
  }

  public toggleSeat(seatId: number): void {
    const index = this.chosenPlaces.indexOf(seatId);
    if (index === -1) {
      this.chosenPlaces.push(seatId);
    } else {
      this.chosenPlaces.splice(index, 1);
    }

    this.updateTotalPrice();
    this.saveChosenSeats();
  }

  public calculatedRow(seatId: number): number {
    if (!this.movie?.hall) {
      return 0;
    }
    return Math.ceil(seatId / 10);
  }

  public calculatedPlace(seatId: number): number {
    const lastDigit = seatId % 10;
    return lastDigit === 0 ? 10 : lastDigit;
  }

  public deleteSeat(seatId: number): void {
    const index = this.chosenPlaces.indexOf(seatId);
    if (index !== -1) {
      this.chosenPlaces.splice(index, 1);
      this.totalPrice -= this.movie?.price!;
      this.saveChosenSeats();
    }
  }

  public updateTotalPrice(): void {
    this.totalPrice = this.chosenPlaces.length * this.movie?.price!;
  }

  public isSelectedSeat(seatId: number): boolean {
    return this.chosenPlaces.includes(seatId);
  }

  public saveChosenSeats(): void {
    localStorage.setItem('chosenSeats', JSON.stringify(this.chosenPlaces));
  }

  public loadChosenSeats(): void {
    const savedSeats = localStorage.getItem('chosenSeats');
    if (savedSeats) {
      this.chosenPlaces = JSON.parse(savedSeats);
      this.updateTotalPrice();
    }
  }
}
