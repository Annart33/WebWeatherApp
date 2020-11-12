import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Location } from '../models/location'


@Injectable({
  providedIn: 'root'
})

export class FavoritesActionsService {

  locations: Location[];
  currentSelectedLocation: Location;

  private data = new BehaviorSubject(this.locations);
  sharedData = this.data.asObservable();

  constructor() {
    this.locations = [];
    this.currentSelectedLocation = JSON.parse(localStorage.getItem("SelectedLocationObject"));
  }

  //Share data with components 
  shareData(locations: Location[]) {
    this.data.next(locations);
  }

  getFavoriteLocations() {
    return this.locations;
  }

  //Add to list the selected location and update array in local storage- function called by different components
  addToList() {
    this.locations.push(this.currentSelectedLocation);
    this.shareData(this.locations);
    localStorage.setItem("locations", JSON.stringify(this.locations));
  }

  //Remove from list the selected location and update array in local storage- function called by different components
  removeFromList(locationToRemove: Location) {
    let locations = JSON.parse(localStorage.getItem("locations"));
    for (let i = 0; i < locations.length; i++) {
      if (JSON.stringify(locations[i]) === JSON.stringify(locationToRemove)) {
        locations.splice(i, 1);
        this.locations.splice(i, 1);
        localStorage.setItem("locations", JSON.stringify(locations));
        location.reload();
        break;
      }
    }
  }

  //Set the Selected location
  setCurrentSelection(selectedLocation: Location) {
    this.currentSelectedLocation = selectedLocation;
  }

}
