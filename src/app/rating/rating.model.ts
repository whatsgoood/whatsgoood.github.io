export interface SportRating {
    name: string;
    rating: number;
}

export interface ForecastSportRating {
  time: number;
  ratingList: SportRating[];
}