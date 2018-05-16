import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './../../Provider/Backend/api-service.service';
@Component({
  selector: 'app-lastest-launche',
  templateUrl: './lastest-launche.component.html',
  styleUrls: ['./lastest-launche.component.css']
})
export class LastestLauncheComponent implements OnInit {

  constructor(private spaceXAPI: ApiServiceService) { }

  ngOnInit(): void {
    this.spaceXAPI.getLastLaunche()
      .subscribe(data => console.log(data));
  }

}
