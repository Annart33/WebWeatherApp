import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Weather } from 'src/app/models/weather';
import { GetWeatherService } from 'src/app/services/get-weather.service';
import { FavoritesActionsService } from 'src/app/services/favorites-actions.service';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-selected-location',
  templateUrl: './selected-location.component.html',
  styleUrls: ['./selected-location.component.css']
})
export class SelectedLocationComponent implements OnInit {

  private weather: Weather;
  private favoriteBtnStatus = "Add To Favorites";
  private selectedLocationName: string;
  private isDayTime: boolean;
  private selectedLocation: Location;


  constructor(private getWeatherService: GetWeatherService, private favoritesActionsService: FavoritesActionsService) {
  }

  //Show selected location - get data from local storage
  ngOnInit() {
    this.getWeatherService.showCurrentWeather();

    this.getWeatherService.sharedData.subscribe(newWeather => {
      this.weather = newWeather;
      this.selectedLocationName = localStorage.getItem("SelectedLocationName");
      this.selectedLocation = JSON.parse(localStorage.getItem("SelectedLocationObject"));
      this.isDayTime = JSON.parse(localStorage.getItem("IsDayTime"));

      //Iterate over array of favorite locations in local storage and update the favorites button
      let locations = JSON.parse(localStorage.getItem("locations"));
      for (let i = 0; i < locations.length; i++) {
        if (JSON.stringify(locations[i]) === JSON.stringify(this.selectedLocation)) {
          this.favoriteBtnStatus = "Remove From Favorites";
        } else {
          this.favoriteBtnStatus = "Add To Favorites";
        }
      }
    }, error => {
      alert("Couldn't fetch current weather details");
    });
  }

  //Add to favorites button - add / remove the selected location from favorites list
  addToFavorites(event) {
    if (this.favoriteBtnStatus == "Add To Favorites") {
      this.favoriteBtnStatus = "Remove From Favorites";
      this.favoritesActionsService.addToList();
    } else {
      this.favoriteBtnStatus = "Add To Favorites";
      let currentLocation = JSON.parse(localStorage.getItem("SelectedLocationObject"));
      this.favoritesActionsService.removeFromList(currentLocation);
    }
  }

}




