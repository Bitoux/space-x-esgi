import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../Provider/Backend/api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rockets-single',
  templateUrl: './rockets-single.component.html',
  styleUrls: ['./rockets-single.component.css']
})
export class RocketsSingleComponent implements OnInit {
  id: string;
  rocket: Rockets;

  constructor(private spaceXAPI: ApiServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.spaceXAPI.getSingleRocket(this.id)
        .subscribe(data => {
          this.rocket = data;
        });
    });
  }

}
