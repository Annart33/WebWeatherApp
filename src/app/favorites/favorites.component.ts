import { Component, OnInit } from '@angular/core';
import { Location } from '../models/location'
import { FavoritesActionsService } from '../services/favorites-actions.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { GetWeatherService } from '../services/get-weather.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {

  private locations: Location[];

  constructor(private favoritesActionsService: FavoritesActionsService, private router: Router, private getWeatherService: GetWeatherService) {
    this.locations = JSON.parse(localStorage.getItem("locations"));
  }

  ngOnInit() {
  }

  //Remove location from favorites
  removeFromList(location: Location) {
    this.favoritesActionsService.removeFromList(location);
  }

  //Go to the selected location - update local storage and route to home page
  goToLocation(location: Location) {
    localStorage.setItem("SelectedLocationKey", location.Key);
    localStorage.setItem("SelectedLocationName", location.Country.LocalizedName);
    localStorage.setItem("SelectedLocationObject", JSON.stringify(location));
    this.favoritesActionsService.setCurrentSelection(location);
    this.getWeatherService.showCurrentWeather();
    this.router.navigate(['/home']);
  }



}
