import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Band } from 'src/app/shared/models/band';
import { BandService } from 'src/app/shared/services/bandservice/bandservice.service';

@Component({
  selector: 'app-searchsongs',
  templateUrl: './searchsongs.component.html',
  styleUrls: ['./searchsongs.component.css']
})
export class SearchsongsComponent {

  bands : Band[] = [];

  songForm = this.formBuilder.group({
    name : [''],
    genre : [''],
    release_min : [''],
    release_max : [''],
    length : [''],
    lyrics : [''],
    band : ['']
  })

  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private bandService: BandService
  ) {}

  ngOnInit(): void {
    this.bandService.findAll()
      .subscribe(b => {
        this.bands = b
      })
  }

  onSubmit() {
    let name = this.songForm.get('name')?.value;
    let genre = this.songForm.get('genre')?.value;

    let release_min = this.songForm.get('release_min')?.value;
    let release_max = this.songForm.get('release_max')?.value;

    let length = this.songForm.get('length')?.value;
    let lyrics = this.songForm.get('lyrics')?.value;
    let band = this.songForm.get('band')?.value;

    this.router.navigate(['/songs', {
      name: name,
      genre: genre,
      release_min: release_min,
      release_max: release_max,
      length: length,
      lyrics: lyrics,
      band: band
    }])
  }

}
