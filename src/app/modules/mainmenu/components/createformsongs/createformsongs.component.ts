import { Component } from '@angular/core';
import { FormControl, FormGroup, UntypedFormArray, UntypedFormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SongService } from 'src/app/shared/services/songservice/songservice.service';
import { BandService } from 'src/app/shared/services/bandservice/bandservice.service';
import { Song } from 'src/app/shared/models/song';

@Component({
  selector: 'app-createformsongs',
  templateUrl: './createformsongs.component.html',
  styleUrls: ['./createformsongs.component.css']
})
export class CreateformsongsComponent {

  bandExists : boolean = false;

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
    let bandid = Number(this.route.snapshot.paramMap.get('band'));
    if (bandid) {
      this.bandService.getById(bandid)
        .subscribe(b => {
          this.songForm.patchValue({
            band: b.name
          })
        })
    }
  }

  checkIfBandExists(): void {
    const bandName: string = this.songForm.get('band')?.getRawValue();
    if (bandName) {
      this.bandService.getByName(bandName)
        .subscribe(band => {
          if(band.name) {
            this.bandExists = true;
          } else {
            this.bandExists = false;
          }
        });
    }
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit() {
    this.checkIfBandExists();
    if (!this.bandExists) {
      alert('Band is not valid.');
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
