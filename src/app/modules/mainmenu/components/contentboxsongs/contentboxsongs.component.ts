import { Component } from '@angular/core';
import { SongService } from 'src/app/shared/services/songservice/songservice.service';
import { Song } from 'src/app/shared/models/song';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RemovedialogComponent } from '../removedialog/removedialog.component';
import { Auth, getAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-contentboxsongs',
  templateUrl: './contentboxsongs.component.html',
  styleUrls: ['./contentboxsongs.component.css']
})
export class ContentboxsongsComponent {
  songs: Song[] = [];

  displayedColumns: string[] = ['name', 'genre', 'release', 'length', 'delete'];

  currentUser = this.auth.currentUser;

  constructor(
    private dialog: MatDialog,
    private songService: SongService,
    private route: ActivatedRoute,
    private auth: Auth = getAuth()
    ) {
      this.auth.onAuthStateChanged((user) => {
        if (user) {
          this.currentUser = this.auth.currentUser;
        } else {
          this.currentUser = null;
        }
      })
    }

  ngOnInit(): void {
    if (Object.keys(this.route.snapshot.params).length) {
      this.getFilteredSongs();
    } else {
      this.getSongs();
    }
  }

  ngOnChanges(): void {
    this.getSongs();
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

  getSongs(): void {
    this.songService.findAll()
      .subscribe(songs => this.songs = songs);
  }

  getFilteredSongs(): void {
    let name = String(this.route.snapshot.paramMap.get('name'));
    let genre = String(this.route.snapshot.paramMap.get('genre'));
    let release_min;
    if (this.route.snapshot.paramMap.get('release_min')?.length) {
      release_min = new Date(this.route.snapshot.paramMap.get('release_min') as string);
    }

    let release_max;
    if (this.route.snapshot.paramMap.get('release_max')?.length) {
      release_max = new Date(this.route.snapshot.paramMap.get('release_max') as string);
    }

    let length = Number(this.route.snapshot.paramMap.get('length'));
    let lyrics = String(this.route.snapshot.paramMap.get('lyrics'));
    let band = Number(this.route.snapshot.paramMap.get('band'));

    let parsed_min = "";
    if (release_min) {
      parsed_min = String(release_min.getFullYear()+"-"+(release_min.getMonth()+1)+"-"+release_min.getDate());
    }
    let parsed_max = "";
    if (release_max) {
      parsed_max = String(release_max.getFullYear()+"-"+(release_max.getMonth()+1)+"-"+release_max.getDate());
    }

    this.songService.filter(
      name, genre,
      parsed_min, parsed_max,
      length, lyrics, band
    ).subscribe(songs => this.songs = songs);
  }

  delete(song: Song): void {
    this.songs = this.songs.filter(s => s !== song);
    this.songService.delete(song.id).subscribe();
  }
}
