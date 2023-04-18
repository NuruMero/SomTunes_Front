import { Component } from '@angular/core';
import { SongService } from 'src/app/shared/services/songservice/songservice.service';
import { Song } from 'src/app/shared/models/song';

@Component({
  selector: 'app-contentboxsongs',
  templateUrl: './contentboxsongs.component.html',
  styleUrls: ['./contentboxsongs.component.css']
})
export class ContentboxsongsComponent {
  songs: Song[] = [];

  constructor(private songService: SongService) {}

  ngOnInit(): void {
    this.getSongs();
  }

  ngOnChanges(): void {
    this.getSongs();
  }

  getSongs(): void {
    this.songService.findAll()
      .subscribe(songs => this.songs = songs);
  }

  delete(song: Song): void {
    this.songs = this.songs.filter(s => s !== song);
    this.songService.delete(song.id).subscribe();
  }
}
