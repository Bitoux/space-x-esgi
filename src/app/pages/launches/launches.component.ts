import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../shared/provider/Backend/api-service.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {

  constructor(private spaceXAPI: ApiServiceService) { }

  ngOnInit(): void {
  }

}
