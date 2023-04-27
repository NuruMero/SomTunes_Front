import { Component } from '@angular/core';
import { FormControl, FormGroup, UntypedFormArray, UntypedFormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SongService } from 'src/app/shared/services/songservice/songservice.service';
import { BandService } from 'src/app/shared/services/bandservice/bandservice.service';
import { Song } from 'src/app/shared/models/song';
import { Band } from 'src/app/shared/models/band';

@Component({
  selector: 'app-createformsongs',
  templateUrl: './createformsongs.component.html',
  styleUrls: ['./createformsongs.component.css']
})
export class CreateformsongsComponent {

  bands : Band[] = [];
  bandid : number = 0;

  songForm = this.formBuilder.group({
    name : ['', Validators.required],
    genre : [''],
    release : [''],
    length : [''],
    band: [''],
    lyrics: ['']
  })

  constructor(
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private songService: SongService,
    private bandService: BandService
  ) {}

  ngOnInit(): void {
    this.bandid = Number(this.route.snapshot.paramMap.get('band'));
    if (this.bandid) {
      this.bandService.getById(this.bandid)
        .subscribe(b => {
          this.songForm.patchValue({
            band: b.name
          })
        })
    } else {
      this.bandService.findAll()
        .subscribe(b => {
          this.bands = b
        })
    }
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit() {
    if (!this.songForm.get('band')?.value) {
      alert('You need to choose a band!');
      return;
    }

    if (!this.songForm.get('name')?.getRawValue()) {
      alert('You need to add a name!');
      return;
    }

    const name = this.songForm.get('name')?.value;
    const genre = this.songForm.get('genre')?.value;
    const release = this.songForm.get('release')?.value;
    const length = this.songForm.get('length')?.value;
    const lyrics = this.songForm.get('lyrics')?.value;

    this.bandService.getByName(
      this.songForm.get('band')?.value
    ).subscribe(b => {
      let band = b.id;
      this.songService.create({
        name, genre, release, length, lyrics, band
      } as Song).subscribe(() => {
        this.goBack();
      });
    });

  }
}
