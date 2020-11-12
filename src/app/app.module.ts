import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SelectedLocationComponent } from './main/selected-location/selected-location.component';
import { DailyForcastsComponent } from './main/daily-forcasts/daily-forcasts.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FavoritesActionsService } from './services/favorites-actions.service';
import { GetWeatherService } from './services/get-weather.service';
import { GetForcastsService } from './services/get-forcasts.service';
import { GetLocationService } from './services/get-location.service';

const routes: Routes = [
  { path: "home", component: MainComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "favorites", component: FavoritesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AutocompleteComponent,
    FavoritesComponent,
    SelectedLocationComponent,
    DailyForcastsComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [FavoritesActionsService, GetWeatherService, GetForcastsService, GetLocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
