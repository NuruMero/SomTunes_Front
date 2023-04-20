import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Song } from 'src/app/shared/models/song';
import { SongService } from 'src/app/shared/services/songservice/songservice.service';
import { BandService } from 'src/app/shared/services/bandservice/bandservice.service';
import { ActivatedRoute } from '@angular/router';
import { UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editformsongs',
  templateUrl: './editformsongs.component.html',
  styleUrls: ['./editformsongs.component.css']
})
export class EditformsongsComponent {

  bandExists : boolean = false;

  songForm = this.formBuilder.group({
    name : ['', Validators.required],
    genre : [''],
    release : [''],
    length : [''],
    band: [''],
    lyrics: ['']
  })

  id = Number(this.route.snapshot.paramMap.get('id'));;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private songService: SongService,
    private bandService: BandService
  ) {}

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

  ngOnInit(): void {
    this.getSong();
  }

  getSong(): void {
    this.songService.getById(this.id)
      .subscribe(song => {
        this.id = song.id;

        this.bandService.getById(song.band)
          .subscribe(b => {
            this.songForm.setValue({
              name: song.name,
              genre: song.genre,
              release: song.release,
              length: song.length,
              band: b.name,
              lyrics: song.lyrics
            })

            this.checkIfBandExists();
          })
      });
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
    const id = this.id;

    this.bandService.getByName(
      this.songForm.get('band')?.value
    ).subscribe(b => {
      let band = b.id;

      this.songService.edit({
        id, name, genre, release, length, lyrics, band
      } as Song).subscribe(() => {
        this.goBack();
      });
    });
  }
}
