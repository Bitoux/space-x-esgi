import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-equipements',
  templateUrl: './card-equipements.component.html',
  styleUrls: ['./card-equipements.component.css']
})
export class CardEquipementsComponent implements OnInit {
  @Input() objects: any;
  searchText: string = '';

  constructor() { }

  ngOnInit() {
  }

}
