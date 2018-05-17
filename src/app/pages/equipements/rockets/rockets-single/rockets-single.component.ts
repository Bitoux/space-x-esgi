import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../../../shared/provider/Backend/api-service.service';
import { ActivatedRoute } from '@angular/router';
import {RoutingState} from '../../../../shared/provider/route-history.provider';

@Component({
  selector: 'app-rockets-single',
  templateUrl: './rockets-single.component.html',
  styleUrls: ['./rockets-single.component.css']
})
export class RocketsSingleComponent implements OnInit {
  id: string;
  rocket: Rockets;
  prevRoute: string;

  constructor(private spaceXAPI: ApiServiceService, private route: ActivatedRoute, private routingState: RoutingState) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.spaceXAPI.getSingleRocket(this.id)
        .subscribe(data => {
          this.rocket = data;
          this.prevRoute = this.routingState.getPreviousUrl();
          console.log(this.prevRoute);
        });
    });
  }

}
