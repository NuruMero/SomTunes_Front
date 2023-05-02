import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { BandService } from 'src/app/shared/services/bandservice/bandservice.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbands',
  templateUrl: './searchbands.component.html',
  styleUrls: ['./searchbands.component.css']
})
export class SearchbandsComponent {

  bandForm = this.formBuilder.group({
    name : [''],
    mainGenre : [''],
    origin : ['']
  })

  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
  ) {}

  onSubmit() {
    let name = this.bandForm.get('name')?.value;
    let mainGenre = this.bandForm.get('mainGenre')?.value;
    let origin = this.bandForm.get('origin')?.value;

    this.router.navigate(['/bands', { name: name, mainGenre: mainGenre, origin: origin}])
  }
}
