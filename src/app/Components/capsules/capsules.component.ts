import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../Provider/Backend/api-service.service';

@Component({
  selector: 'app-capsules',
  templateUrl: './capsules.component.html',
  styleUrls: ['./capsules.component.css']
})
export class CapsulesComponent implements OnInit {

  constructor(private spaceXAPI: ApiServiceService) { }

  ngOnInit(): void {
    this.spaceXAPI.getAllCapsules()
      .subscribe(data => console.log(data));
  }

}
