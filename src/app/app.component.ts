import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './shared/provider/Backend/api-service.service';
import {RoutingState} from './shared/provider/route-history.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private spaceXAPI: ApiServiceService, routingState: RoutingState) {
    routingState.loadRouting();
  }

  ngOnInit() {}
}
