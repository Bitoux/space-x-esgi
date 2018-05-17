import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../Provider/Backend/api-service.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-capsules-details-search',
  templateUrl: './capsules-details-search.component.html',
  styleUrls: ['./capsules-details-search.component.css']
})
export class CapsulesDetailsSearchComponent implements OnInit {
  filterForm: FormGroup;
  capsuleDetailsFilter: CapsuleDetailsFilter;

  constructor(private spaceXAPI: ApiServiceService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      capsule_serial: new FormControl(),
      capsule_id: new FormControl(),
      status: new FormControl(),
      original_launch: new FormControl(),
      missions: new FormControl(),
      landings: new FormControl(),
      type: new FormControl()
    });
  }

  searchByFilter(formValue): void{
    this.capsuleDetailsFilter = formValue;
    console.log(this.capsuleDetailsFilter);
    this.spaceXAPI.searchCapsuleDetailsByFilter(this.capsuleDetailsFilter)
      .subscribe(data => console.log(data));
  }

}
