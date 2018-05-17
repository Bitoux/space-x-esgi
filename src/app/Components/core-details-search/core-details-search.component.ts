import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../Provider/Backend/api-service.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-core-details-search',
  templateUrl: './core-details-search.component.html',
  styleUrls: ['./core-details-search.component.css']
})
export class CoreDetailsSearchComponent implements OnInit {
  filterForm: FormGroup;
  coreDetailFilter: CoreDetailsFilter;

  constructor(private spaceXAPI: ApiServiceService, private formBuilder: FormBuilder) { }

  /* TODO CHANGER POUR SINGLE */
  ngOnInit(): void {
    this.filterForm = new FormGroup({
      core_serial: new FormControl(),
      block: new FormControl(),
      status: new FormControl(),
      original_launch: new FormControl(),
      missions: new FormControl(),
      rtls_attempt: new FormControl(),
      rtls_landings: new FormControl(),
      asds_attempt: new FormControl(),
      asds_landings: new FormControl(),
      water_landing: new FormControl()
    });
  }

  searchByFilter(formValue): void{
    this.coreDetailFilter = formValue;
    console.log(this.coreDetailFilter);
    this.spaceXAPI.searchCoreDetailsByFilter(this.coreDetailFilter)
      .subscribe(data => console.log(data));
  }

}
