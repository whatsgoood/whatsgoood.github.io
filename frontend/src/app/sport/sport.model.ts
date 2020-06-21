export interface Sport {
    context: context;
    name: string;
    rating: number;
}

export interface context {
    idvRatings: ratingModel;
    overview: string;
}

export interface ratingModel {
    cloudCover: any;
    rain: any;
    temparature: any;
    waveSize: any;
    windAvg: any;
    windHigh: any;
    windLow: any;
}