import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Weather } from '../models/weather';


@Injectable({
  providedIn: 'root'
})

export class GetWeatherService {

  private apiKey = "XEtdn6FtOxaQWyI0BLFnpG0tQwyU0q7P";
  private weather: Weather;

  private data = new BehaviorSubject(this.weather);
  sharedData = this.data.asObservable();


  constructor(private http: HttpClient) {
  }

  //Share data with compenents
  shareData(weather: Weather) {
    this.data.next(weather);
  }

  //Show updated weather and share data with components
  showCurrentWeather() {
    let selectedLocationKey = localStorage.getItem("SelectedLocationKey");
    let observable = this.getCurrentWeather(selectedLocationKey);
    observable.subscribe(newWeather => {
      this.weather = newWeather;
      this.shareData(this.weather);
      localStorage.setItem('IsDayTime', this.weather[0].IsDayTime.toString());
    }, error => {
      alert("Couldn't fetch current weather details");
    });
  }

  //Get request for a weather object
  public getCurrentWeather(locationKey: string): Observable<Weather> {
    return this.http.get<Weather>("http://dataservice.accuweather.com/currentconditions/v1/" + locationKey + "?apikey=" + this.apiKey);
  }
}