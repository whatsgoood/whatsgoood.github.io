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

    public idvKeys = {};
    public isExpandedDict = {};
    public ratingPhrases = ["bad","average","good"]; 
    
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
        if (rating > 0.7) {
            return 'card-green'
        } else if (rating > 0.3) {
            return 'card-orange'
        } else {
            return 'card-red'
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

    public getRatingPhrase(rating){

        var floored = Math.floor(rating / 0.33)

        if (floored > 2) {
            floored = 2
        } else if (floored < 0) {
            floored = 0
        }

        return floored
    }

    public toggleExpand(cardIndex) {

        if (this.isExpandedDict[cardIndex]){
            this.isExpandedDict[cardIndex] = false;
        } else {
            this.idvKeys = Object.keys(this.sports[cardIndex].context.idvRatings);
            this.isExpandedDict[cardIndex] = true;
        }

        for (let key of Object.keys(this.isExpandedDict)){
            if (key != cardIndex && this.isExpandedDict[key] == true){
                this.isExpandedDict[key] = false;
            }
        }
    }

}