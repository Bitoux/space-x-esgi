import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../../../shared/provider/Backend/api-service.service';
import { ActivatedRoute } from "@angular/router";
import {RoutingState} from "../../../../shared/provider/route-history.provider";

@Component({
  selector: 'app-capsules-single',
  templateUrl: './capsules-single.component.html',
  styleUrls: ['./capsules-single.component.css']
})
export class CapsulesSingleComponent implements OnInit {
  id: string;
  capsule: Capsules;
  prevRoute: string;

  constructor(private spaceXAPI: ApiServiceService, private route: ActivatedRoute, private routingState: RoutingState) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      console.log(this.id);
      this.spaceXAPI.getSingleCapsules(this.id)
        .subscribe(data => {
          this.capsule = data;
          console.log(this.capsule);
          this.prevRoute = this.routingState.getPreviousUrl();
          console.log(this.prevRoute);
        });
    });
  }

}
