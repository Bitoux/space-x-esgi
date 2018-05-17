import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../../shared/provider/Backend/api-service.service';

@Component({
  selector: 'app-upcoming-launche',
  templateUrl: './upcoming-launche.component.html',
  styleUrls: ['./upcoming-launche.component.css']
})
export class UpcomingLauncheComponent implements OnInit {
  launches: Launches[];

  constructor(private spaceXAPI: ApiServiceService) { }

  ngOnInit(): void {
    this.spaceXAPI.getUpcomingLauches()
      .subscribe(data => {
        this.launches = data;
        console.log(this.launches);
      });
  }

}
