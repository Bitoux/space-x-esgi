import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../../../shared/provider/Backend/api-service.service';

@Component({
  selector: 'app-launche-single',
  templateUrl: './launche-single.component.html',
  styleUrls: ['./launche-single.component.css']
})
export class LauncheSingleComponent implements OnInit {
  id: string;
  launche: Launches;
  constructor(private spaceXAPI: ApiServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.spaceXAPI.getLauncheByFlightNumber(this.id)
        .subscribe(data => {
          this.launche = data[0];
          console.log(this.launche);
        });
    });
  }

}
