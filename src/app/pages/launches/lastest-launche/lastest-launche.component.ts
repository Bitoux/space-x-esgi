import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../../shared/provider/Backend/api-service.service';
@Component({
  selector: 'app-lastest-launche',
  templateUrl: './lastest-launche.component.html',
  styleUrls: ['./lastest-launche.component.css']
})
export class LastestLauncheComponent implements OnInit {
  launches: Launches[];

  constructor(private spaceXAPI: ApiServiceService) { }

  ngOnInit(): void {
    this.spaceXAPI.getLastLaunche()
      .subscribe(data => this.launches = data);
  }

}
