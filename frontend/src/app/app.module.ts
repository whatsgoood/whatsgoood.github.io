import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SportComponent } from './sport/sport.component';
import { GreetingComponent } from './greeting/greeting.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { WeatherComponent } from './weather/weather.component';
import { ErrorCardComponent } from './cards/error-card/error-card.component';
import { LoadingCardComponent } from './cards/loading-card/loading-card.component';


@NgModule({
  declarations: [
    AppComponent,
    SportComponent,
    GreetingComponent,
    ToolbarComponent,
    FooterComponent,
    WeatherComponent,
    ErrorCardComponent,
    LoadingCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
