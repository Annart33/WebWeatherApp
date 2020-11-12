import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Location } from '../models/location'

@Injectable({
  providedIn: 'root'
})
export class GetLocationService {

  private apiKey = "XEtdn6FtOxaQWyI0BLFnpG0tQwyU0q7P";
  private location: Location;

  private data = new BehaviorSubject(this.location);
  sharedData = this.data.asObservable();

  constructor(private http: HttpClient) {
  }

  //Share data with components
  shareData(location: Location) {
    this.data.next(location);
  }

  //Get request for array of locations
  public getSelectedLocation(text: string): Observable<Location[]> {
    return this.http.get<Location[]>("http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=" + this.apiKey + "&q=" + text);
  }
}
