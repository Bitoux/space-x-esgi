import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './Provider/Backend/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private spaceXAPI: ApiServiceService) {

  }

  ngOnInit(): void{
    this.spaceXAPI.getCompanyInfos()
      .subscribe(data => console.log((data)));
  }
}
