import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchsongs',
  templateUrl: './searchsongs.component.html',
  styleUrls: ['./searchsongs.component.css']
})
export class SearchsongsComponent {

  songForm = this.formBuilder.group({

  })

  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router
  ) {}

  onSubmit() {

  }

}
