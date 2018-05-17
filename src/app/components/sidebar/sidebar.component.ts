import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/', title: 'Home', icon: 'home', class: '' },
    { path: '/launches', title: 'Launches',  icon: 'person', class: '' },
    { path: '/equipments', title: 'Equipments',  icon: 'notifications', class: '' },
    { path: '/capsules-details', title: 'Capsules details',  icon: 'unarchive', class: '' },
    { path: '/core-details', title: 'Core details',  icon: 'unarchive', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
