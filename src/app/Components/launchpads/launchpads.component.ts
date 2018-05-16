import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../Provider/Backend/api-service.service';

@Component({
  selector: 'app-launchpads',
  templateUrl: './launchpads.component.html',
  styleUrls: ['./launchpads.component.css']
})
export class LaunchpadsComponent implements OnInit {
  launchpads: Launchpads[];

  constructor(private spaceXAPI: ApiServiceService) { }

  ngOnInit(): void {
    this.spaceXAPI.getAllLaunchpads()
      .subscribe(data => {
        this.launchpads = data;
        console.log(this.launchpads);
      });
  }

}
