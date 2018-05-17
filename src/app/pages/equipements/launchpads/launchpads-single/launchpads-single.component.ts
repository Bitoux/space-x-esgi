import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../../../shared/provider/Backend/api-service.service';
import { ActivatedRoute } from '@angular/router';
import {RoutingState} from '../../../../shared/provider/route-history.provider';

@Component({
  selector: 'app-launchpads-single',
  templateUrl: './launchpads-single.component.html',
  styleUrls: ['./launchpads-single.component.css']
})
export class LaunchpadsSingleComponent implements OnInit {
  id: string;
  launchpad: Launchpads;
  prevRoute: string;

  constructor(private spaceXAPI: ApiServiceService, private route: ActivatedRoute, private routingState: RoutingState) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.id = params.id;
      console.log(this.id);
      this.spaceXAPI.getSingleLaunchpads(this.id)
        .subscribe(data => {
          this.launchpad = data;
          this.prevRoute = this.routingState.getPreviousUrl();
        });
    });
  }

}
