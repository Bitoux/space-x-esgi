import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../../shared/provider/Backend/api-service.service';

@Component({
  selector: 'app-launchpads',
  templateUrl: './launchpads.component.html',
  styleUrls: ['./launchpads.component.css']
})
export class LaunchpadsComponent implements OnInit {
  launchpads: Launchpads[];
  searchText: string = '';

  constructor(private spaceXAPI: ApiServiceService) { }

  ngOnInit(): void {
    this.spaceXAPI.getAllLaunchpads()
      .subscribe(data => {
        this.launchpads = data;
        console.log(this.launchpads);
      });
  }

}
