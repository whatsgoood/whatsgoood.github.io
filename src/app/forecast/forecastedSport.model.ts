import { Sport } from '../sport/sport.model';

export interface ForecastedSport {
    time: number;
    ratingList: Sport[];
}