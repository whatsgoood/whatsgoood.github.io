import { Component, OnInit, OnDestroy } from '@angular/core';
import { Weather } from './weather.model';
import { WeatherService } from './weather.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {
  public weather: Weather = null;
  public weatherServiceSub: Subscription = null;
  
  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.weatherServiceSub = this.weatherService.getWeather()
      .subscribe(
        data => {
          this.populateWeather(data);
        },
        error => {
          // TODO: Popup/modal of error card
          this.ngOnDestroy();
        }
      );
  }

  ngOnDestroy() {
    this.weatherServiceSub.unsubscribe();
  }

  private populateWeather(weather: Weather) {
    this.weather = weather;
  }

}