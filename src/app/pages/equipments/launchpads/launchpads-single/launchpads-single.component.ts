import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../../../shared/provider/Backend/api-service.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-launchpads-single',
  templateUrl: './launchpads-single.component.html',
  styleUrls: ['./launchpads-single.component.css']
})
export class LaunchpadsSingleComponent implements OnInit {
  id: string;
  launchpad: Launchpads;

  constructor(private spaceXAPI: ApiServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.id = params.id;
      console.log(this.id);
      this.spaceXAPI.getSingleLaunchpads(this.id)
        .subscribe(data => {
          this.launchpad = data;
          console.log(this.launchpad);
        });
    });
  }

}
