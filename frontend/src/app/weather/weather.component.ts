import { Component, OnInit } from '@angular/core';
import { Weather } from './weather.model';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public weather: Weather = null;

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.weatherService.getWeather()
      .subscribe(
        data => {
          this.populateWeather(data);
        },
        error => {
          console.log('UI display... ', error);
        }
      );
  }

  private populateWeather(weather: Weather) {
    this.weather = weather;
  }

}
