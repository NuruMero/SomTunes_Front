import { Component, Input } from '@angular/core';
import { Song } from 'src/app/shared/models/song';
import { SongService } from 'src/app/shared/services/songservice/songservice.service';
import { BandService } from 'src/app/shared/services/bandservice/bandservice.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-songdetails',
  templateUrl: './songdetails.component.html',
  styleUrls: ['./songdetails.component.css']
})
export class SongdetailsComponent {

  @Input() song?: Song;
  bandname : string = "";

  constructor(
    private route: ActivatedRoute,
    private songService: SongService,
    private bandService: BandService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getSong();
  }

  getSong(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.songService.getById(id)
      .subscribe(song => {
        this.song = song;
        this.bandService.getById(song.band).subscribe(band => this.bandname = band.name);
      });
  }

  goBack(): void {
    this.location.back();
  }
}
