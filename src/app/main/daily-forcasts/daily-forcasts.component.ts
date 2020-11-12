import { Component, OnInit } from '@angular/core';
import { GetForcastsService } from 'src/app/services/get-forcasts.service';
import { Forcast } from 'src/app/models/forcast';

@Component({
  selector: 'app-daily-forcasts',
  templateUrl: './daily-forcasts.component.html',
  styleUrls: ['./daily-forcasts.component.css']
})
export class DailyForcastsComponent implements OnInit {

  private forcast: Forcast;

  constructor(private getForcastService: GetForcastsService) {
  }

  //Show upcoming forecast on init
  ngOnInit() {
    this.getForcastService.showForcast();
    this.getForcastService.sharedData.subscribe(newForcast => {
      this.forcast = newForcast;
    }, error => {
      alert("Couldn't fetch current forcast details");
    });
  }


}
