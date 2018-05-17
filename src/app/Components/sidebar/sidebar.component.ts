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
    { path: '/launches/lastest', title: 'Launches latest',  icon: 'content_paste', class: '' },
    { path: '/launches/past', title: 'Past launches',  icon: 'library_books', class: '' },
    { path: '/launches/upcoming', title: 'Upcoming launches',  icon: 'bubble_chart', class: '' },
    { path: '/launches/search', title: 'Search launches',  icon: 'location_on', class: '' },
    { path: '/equipments', title: 'Equipments',  icon: 'notifications', class: '' },
    { path: '/capsules-details', title: 'Capsules details',  icon: 'unarchive', class: '' },
    { path: '/capsules-details/search', title: 'Search capsules',  icon: 'unarchive', class: ''},
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
