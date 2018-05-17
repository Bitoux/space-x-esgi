import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../shared/provider/Backend/api-service.service';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {
  info: any;

  constructor(private spaceXAPI: ApiServiceService) { }

  ngOnInit(): void {
    this.spaceXAPI.getCompanyInfos()
      .subscribe(data => {
        console.log(data);
        this.info = data;
      });
  }

}
