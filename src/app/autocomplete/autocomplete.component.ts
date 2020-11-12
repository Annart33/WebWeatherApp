import { Component, OnInit, Input, HostListener } from '@angular/core';
import { GetLocationService } from '../services/get-location.service';
import { Location, Country } from '../models/location';
import { Weather } from '../models/weather'
import { GetWeatherService } from '../services/get-weather.service';
import { FavoritesActionsService } from '../services/favorites-actions.service';
import { SelectedLocationComponent } from '../main/selected-location/selected-location.component';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
})
export class AutocompleteComponent implements OnInit {

  private inputValue: string;
  private locations: Location[];
  private isDropdownActive: boolean = false;

  constructor(private getLocationService: GetLocationService, private getWeatherService: GetWeatherService, private favoritesActionsService: FavoritesActionsService) {
  }

  ngOnInit() {
  }

  //Make dropdown close after clicking anywhere in the window
  @HostListener('document:click', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  handleOutsideClick(event) {
    this.isDropdownActive = false;
  }

  //Send a request for a list of locations on every key press
  onKeyPress(event) {
    let observable = this.getLocationService.getSelectedLocation(this.inputValue);
    observable.subscribe(data => {
      this.locations = data;
      this.isDropdownActive = true;
    }, error => {
      console.log('Error retrieving data');
    });
  }

  //Set data in local storage after choosing a location & close dropdown
  onLocationSelected(selectedLocation: Location) {
    localStorage.setItem("SelectedLocationKey", selectedLocation.Key);
    localStorage.setItem("SelectedLocationName", selectedLocation.Country.LocalizedName);
    localStorage.setItem("SelectedLocationObject", JSON.stringify(selectedLocation));
    this.favoritesActionsService.setCurrentSelection(selectedLocation);
    this.getWeatherService.showCurrentWeather();
    this.isDropdownActive = false;
  }

}
