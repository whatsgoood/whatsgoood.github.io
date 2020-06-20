import { Component, OnInit, OnDestroy } from '@angular/core';
import { SportService } from './sport.service';
import { Sport } from './sport.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-sport',
    templateUrl: './sport.component.html',
    styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit, OnDestroy {
    
    public sports: Sport[] = [];
    public sportServiceSub: Subscription = null;

    constructor(
        private sportService: SportService
    ) { }

    ngOnInit(): void {
        this.sportServiceSub = this.sportService.getSportList()
            .subscribe(
                data => {
                    this.populateSportCards(data);
                },
                error => {
                    // TODO: Popup/modal of error card
                    this.ngOnDestroy();
                }
            );
    }

    ngOnDestroy() {
        this.sportServiceSub.unsubscribe();
    }

    private populateSportCards(sports: Sport[]) {
        this.sports = sports.sort((a, b) => (b.rating - a.rating));
    }

    public ratingClass(rating: number) {
        if (rating > 0.6) {
            return { 'card-green': true }
        } else if (rating > 0.3) {
            return { 'card-orange': true }
        } else {
            return { 'card-red': true }
        }
    }

    public isKiting(name: string) {
        return name === 'Kiting';
    }

    public isSurfing(name: string) {
        return name === 'Surfing';
    }

    public isClimbing(name: string) {
        return name === 'Climbing';
    }

    public isCycling(name: string) {
        return name === 'Cycling';
    }

}