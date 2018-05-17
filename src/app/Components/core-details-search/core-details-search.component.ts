import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../Provider/Backend/api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-core-details-search',
  templateUrl: './core-details-search.component.html',
  styleUrls: ['./core-details-search.component.css']
})
export class CoreDetailsSearchComponent implements OnInit {
  id: string;
  coreDetail: CoreDetails;

  constructor(private spaceXAPI: ApiServiceService, private route: ActivatedRoute) { }

  /* TODO CHANGER POUR SINGLE */
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
