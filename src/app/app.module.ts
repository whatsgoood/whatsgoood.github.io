import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { LiveComponent } from "./rating/live/live.component";
import { GreetingComponent } from "./heading/greeting/greeting.component";
import { ToolbarComponent } from "./heading/toolbar/toolbar.component";
import { FooterComponent } from "./footer/footer.component";
import { ErrorCardComponent } from "./shared/cards/error-card/error-card.component";
import { LoadingCardComponent } from "./shared/cards/loading-card/loading-card.component";
import { ForecastComponent } from "./rating/forecast/forecast.component";
import { LoadingForecastComponent } from "./shared/cards/loading-card copy/loading-forecast.component";

@NgModule({
  declarations: [
    AppComponent,
    LiveComponent,
    GreetingComponent,
    ToolbarComponent,
    FooterComponent,
    ErrorCardComponent,
    LoadingCardComponent,
    LoadingForecastComponent,
    ForecastComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
