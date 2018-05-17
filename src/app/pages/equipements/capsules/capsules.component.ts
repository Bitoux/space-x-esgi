import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../../shared/provider/Backend/api-service.service';

@Component({
  selector: 'app-capsules',
  templateUrl: './capsules.component.html',
  styleUrls: ['./capsules.component.css']
})
export class CapsulesComponent implements OnInit {
  capsules: Capsules[];
  searchText: string = '';

  constructor(private spaceXAPI: ApiServiceService) { }

  ngOnInit(): void {
    this.spaceXAPI.getAllCapsules()
      .subscribe(data => {
        this.capsules = data;
        console.log(this.capsules);
      });
  }

}
