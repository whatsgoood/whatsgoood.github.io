import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Sport } from './sport.model';

@Injectable({
    providedIn: 'root'
})
export class SportService {
    private liveSportUrl = environment.baseApiUrl + 'ratings/live';
    // TODO: Move into forecast service
    private forecastedSportUrl = environment.baseApiUrl + 'ratings/forecast';

    constructor(
        private http: HttpClient
    ) { }

    public getLiveSportList() {
        return this.http.get<Sport[]>(this.liveSportUrl)
            .pipe(
                catchError(this.handleError)
            );
    }

    public getForecastedSportList() {
        // TODO: create sport forecast type
        return this.http.get<any[]>(this.forecastedSportUrl)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    };
}