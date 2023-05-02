import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  collapse = false;

  constructor() {}

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.collapse = !this.collapse;
  }
}
