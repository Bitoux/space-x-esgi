import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiServiceService } from '../../Provider/Backend/api-service.service';

@Component({
  selector: 'app-search-launch',
  templateUrl: './search-launch.component.html',
  styleUrls: ['./search-launch.component.css']
})
export class SearchLaunchComponent implements OnInit {
  filterForm: FormGroup;
  launcheFilter: LaunchFilter;

  constructor(private formBuilder: FormBuilder, private spaceXAPI: ApiServiceService) { }

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      id: new FormControl(),
      flight_id: new FormControl(),
      order: new FormControl(),
      flight_number: new FormControl(),
      launch_year: new FormControl(),
      launch_date_utc: new FormControl(),
      launch_date_local: new FormControl(),
      rocket_id: new FormControl(),
      rocket_name: new FormControl(),
      rocket_type: new FormControl(),
      core_serial: new FormControl(),
      cap_serial: new FormControl(),
      core_flight: new FormControl(),
      block: new FormControl(),
      core_reuse: new FormControl(),
      side_core1_reuse: new FormControl(),
      side_core2_reuse: new FormControl(),
      fairings_reuse: new FormControl(),
      capsule_reuse: new FormControl(),
      site_id: new FormControl(),
      site_name: new FormControl(),
      site_name_long: new FormControl(),
      payload_id: new FormControl(),
      customer: new FormControl(),
      payload_type: new FormControl(),
      orbit: new FormControl(),
      launch_success: new FormControl(),
      reused: new FormControl(),
      land_success: new FormControl(),
      landing_type: new FormControl(),
      landing_vehicle: new FormControl()
   });
  }

  searchByFilter(formValue): void{
    this.launcheFilter = formValue;
    console.log(this.launcheFilter);
    this.spaceXAPI.searchLaunches(this.launcheFilter)
      .subscribe(data => console.log(data));
  }

}
