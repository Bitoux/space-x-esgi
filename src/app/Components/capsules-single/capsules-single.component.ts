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

  constructor(private spaceXAPI: ApiServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => console.log(params));
  }

}
