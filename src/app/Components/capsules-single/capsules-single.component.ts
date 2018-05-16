import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../Provider/Backend/api-service.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-capsules-single',
  templateUrl: './capsules-single.component.html',
  styleUrls: ['./capsules-single.component.css']
})
export class CapsulesSingleComponent implements OnInit {
  id: string;
  capsule: Capsules;

  constructor(private spaceXAPI: ApiServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      console.log(this.id);
      this.spaceXAPI.getSingleCapsules(this.id)
        .subscribe(data => {
          this.capsule = data;
          console.log(this.capsule);
        });
    });
  }

}
