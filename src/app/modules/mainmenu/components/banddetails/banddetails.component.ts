import { Component, Input } from '@angular/core';
import { Band } from 'src/app/shared/models/band';
import { Song } from 'src/app/shared/models/song';
import { BandService } from 'src/app/shared/services/bandservice/bandservice.service';
import { SongService } from 'src/app/shared/services/songservice/songservice.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { RemovedialogComponent } from '../removedialog/removedialog.component';

@Component({
  selector: 'app-banddetails',
  templateUrl: './banddetails.component.html',
  styleUrls: ['./banddetails.component.css']
})
export class BanddetailsComponent {

  @Input() band?: Band;
  songs: Song[] = [];

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private bandService: BandService,
    private songService: SongService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBand();
  }

  openDialog(song: Song) {
    const dialogRef = this.dialog.open(RemovedialogComponent, {
      data:{
        message: 'Are you sure you want to delete?',
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.delete(song);
      }
    })
  }

  getBand(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bandService.getById(id)
      .subscribe(band => {
        this.band = band

        this.getBandSongs();
      });
  }

  getBandSongs(): void {
    if (this.band?.id) {
      this.songService.getByBand(this.band?.id)
        .subscribe(songs => this.songs = songs);
    }
  }

  delete(song: Song): void {
    this.songs = this.songs.filter(s => s !== song);
    this.songService.delete(song.id).subscribe();
  }

  goBack(): void {
    this.location.back();
  }
}
