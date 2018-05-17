import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../../shared/provider/Backend/api-service.service';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.scss']
})
export class RocketsComponent implements OnInit {
  rockets: Rockets[];
  searchText: string = '';

  constructor(private spaceXAPI: ApiServiceService) { }

  ngOnInit(): void {
    this.spaceXAPI.getAllRockets()
      .subscribe(data => {
        this.rockets = data;
        console.log(this.rockets);
      });
  }

}
