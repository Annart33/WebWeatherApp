import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Forcast } from '../models/forcast'

@Injectable({
  providedIn: 'root'
})
export class GetForcastsService {

  private apiKey = "XEtdn6FtOxaQWyI0BLFnpG0tQwyU0q7P";
  private forcast: Forcast;

  private data = new BehaviorSubject(this.forcast);
  sharedData = this.data.asObservable();


  constructor(private http: HttpClient) {
  }

  //Share data with components 
  shareData(forcast: Forcast) {
    this.data.next(forcast);
  }

  //Show forecast and share data with components 
  showForcast() {
    let selectedLocationKey = localStorage.getItem("SelectedLocationKey");
    let observable = this.getSelectedLocationForcast(selectedLocationKey);
    observable.subscribe(newForcast => {
      this.forcast = newForcast;
      this.shareData(this.forcast);
    }, error => {
      alert("Couldn't fetch Forcast details");
    });
  }

  //Get request for upcoming forecast
  public getSelectedLocationForcast(locationKey: string): Observable<Forcast[]> {
    return this.http.get<Forcast[]>("http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + locationKey + "?apikey=" + this.apiKey);
  }
}
