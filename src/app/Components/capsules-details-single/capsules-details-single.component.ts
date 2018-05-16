import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../Provider/Backend/api-service.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-capsules-details-single',
  templateUrl: './capsules-details-single.component.html',
  styleUrls: ['./capsules-details-single.component.css']
})
export class CapsulesDetailsSingleComponent implements OnInit {
  id: string;
  capsuleDetail: CapsulesDetails;

  constructor(private spaceXAPI: ApiServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      console.log(this.id);
      this.spaceXAPI.getSingleCapsuleDetail(this.id)
        .subscribe(data => {
          this.capsuleDetail = data;
          console.log(this.capsuleDetail);
        });
    });
  }

}
