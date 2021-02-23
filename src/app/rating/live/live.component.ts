import { Component, OnInit, OnDestroy } from "@angular/core";
import { SportRating } from "../rating.model";
import { Subscription } from "rxjs";
import { RatingService } from '../rating.service';

enum Sport {
    kiting = "Kiting",
    climbing = "Climbing",
    surfing = "Surfing"
}

@Component({
  selector: "app-rating-live",
  templateUrl: "./live.component.html",
  styleUrls: ["./live.component.scss"],
})
export class LiveComponent implements OnInit, OnDestroy {
  public liveRatings: SportRating[] = [];
  public liveRatingServiceSub: Subscription = null;

  constructor(private ratingService: RatingService) {}

  ngOnInit(): void {
    this.liveRatingServiceSub = this.ratingService.getLiveRatings().subscribe(
      (data) => {
        this.populateSportCards(data);
      },
      (error) => {
        // TODO: Popup/modal of error card
        this.liveRatingServiceSub.unsubscribe();
      }
    );
  }

  ngOnDestroy() {
    this.liveRatingServiceSub.unsubscribe();
  }

  private populateSportCards(sportRatings: SportRating[]) {
    this.liveRatings = sportRatings.sort((a, b) => b.rating - a.rating);
  }

  public ratingClass(rating: number) {
    if (rating > 0.7) {
      return { "card-green": true };
    } else if (rating > 0.3) {
      return { "card-orange": true };
    } else {
      return { "card-red": true };
    }
  }

  public isKiting(name: string): boolean {
    return name === Sport.kiting;
  }

  public isSurfing(name: string): boolean {
    return name === Sport.surfing;
  }

  public isClimbing(name: string): boolean {
    return name === Sport.climbing;
  }

  public sports(): number[] {
      return Array(Object.keys(Sport).length);
  }
}
