import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../shared/provider/Backend/api-service.service';

@Component({
  selector: 'app-core-details',
  templateUrl: './core-details.component.html',
  styleUrls: ['./core-details.component.css']
})
export class CoreDetailsComponent implements OnInit {
  coreDetails: CoreDetails[];

  constructor(private spaceXAPI: ApiServiceService) { }

  ngOnInit(): void {
    this.spaceXAPI.getAllDetailsCore()
      .subscribe(data => {
        this.coreDetails = data;
        console.log(this.coreDetails);
      });
  }

}
