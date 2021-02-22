import { Component, OnInit, OnDestroy } from '@angular/core';
import { Sport } from '../sport/sport.model';
import { Subscription } from 'rxjs';
import { SportService } from '../sport/sport.service';
import { ForecastedSport } from './forecastedSport.model';

@Component({
  selector: "app-forecast",
  templateUrl: "./forecast.component.html",
  styleUrls: ["./forecast.component.scss"],
})
export class ForecastComponent implements OnInit, OnDestroy {
  public forecastedSports: ForecastedSport[] = [];
  public forecastedSportServiceSub: Subscription = null;

  constructor(private sportService: SportService) {}

  ngOnInit(): void {
    this.forecastedSportServiceSub = this.sportService
      .getForecastedSportList()
      .subscribe(
        (data) => {
          this.forecastedSports = data;
        },
        (error) => {
          this.forecastedSportServiceSub.unsubscribe();
        }
      );
  }

  ngOnDestroy() {
    this.forecastedSportServiceSub.unsubscribe();
  }

  public ratingClass(rating: number) {
    if (rating > 0.7) {
      return { "loader-green": true };
    } else if (rating > 0.3) {
      return { "loader-orange": true };
    } else {
      return { "loader-red": true };
    }
  }
}
