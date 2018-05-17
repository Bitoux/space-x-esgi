import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../shared/provider/Backend/api-service.service';

@Component({
  selector: 'app-capsules-details',
  templateUrl: './capsules-details.component.html',
  styleUrls: ['./capsules-details.component.css']
})
export class CapsulesDetailsComponent implements OnInit {
  capsulesDetails: CapsulesDetails[];

  constructor(private spaceXAPI: ApiServiceService) { }

  ngOnInit(): void {
    this.spaceXAPI.getAllCapsulesDetails()
      .subscribe(data => {
        this.capsulesDetails = data;
        console.log(this.capsulesDetails);
      })
  }

}
