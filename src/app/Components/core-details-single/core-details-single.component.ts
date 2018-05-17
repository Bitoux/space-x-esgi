import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../Provider/Backend/api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-core-details-single',
  templateUrl: './core-details-single.component.html',
  styleUrls: ['./core-details-single.component.css']
})
export class CoreDetailsSingleComponent implements OnInit {
  id: string;
  coreDetail: CoreDetails;

  constructor(private spaceXAPI: ApiServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.spaceXAPI.getSingleDetailsCore(this.id)
        .subscribe(data => {
          this.coreDetail = data;
          console.log(this.coreDetail);
        });
    });
  }

}
