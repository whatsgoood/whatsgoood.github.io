import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ForecastSportRating } from '../rating.model';
import { RatingService } from '../rating.service';

@Component({
  selector: "app-rating-forecast",
  templateUrl: "./forecast.component.html",
  styleUrls: ["./forecast.component.scss"],
})
export class ForecastComponent implements OnInit, OnDestroy {
  public forecastRatings: ForecastSportRating[] = [];
  public forecastRatingServiceSub: Subscription = null;

  constructor(private ratingService: RatingService) {}

  ngOnInit(): void {
    this.forecastRatingServiceSub = this.ratingService
      .getForecastRatings()
      .subscribe(
        (data) => {
          this.forecastRatings = data;
        },
        (error) => {
          this.forecastRatingServiceSub.unsubscribe();
        }
      );
  }

  ngOnDestroy() {
    this.forecastRatingServiceSub.unsubscribe();
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
