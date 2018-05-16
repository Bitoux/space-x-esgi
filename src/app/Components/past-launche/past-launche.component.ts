import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../Provider/Backend/api-service.service';

@Component({
  selector: 'app-past-launche',
  templateUrl: './past-launche.component.html',
  styleUrls: ['./past-launche.component.css']
})
export class PastLauncheComponent implements OnInit {

  constructor(private spaceXAPI: ApiServiceService) { }

  ngOnInit(): void {
    this.spaceXAPI.getLastLaunche()
      .subscribe(data => console.log(data));
  }

}
