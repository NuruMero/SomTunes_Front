import { Component } from '@angular/core';

@Component({
  selector: 'app-searchentry',
  templateUrl: './searchentry.component.html',
  styleUrls: ['./searchentry.component.css']
})
export class SearchentryComponent {

  searchOptions: string[] = ['Bands', 'Songs'];
  searching: string = "";
}
