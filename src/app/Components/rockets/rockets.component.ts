import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../Provider/Backend/api-service.service';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css']
})
export class RocketsComponent implements OnInit {

  constructor(private spaceXAPI: ApiServiceService) { }

  ngOnInit(): void {
    this.spaceXAPI.getAllRockets()
      .subscribe(data => console.log(data));
  }

}
