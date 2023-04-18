import { Component, OnInit } from '@angular/core';
import { BandService } from 'src/app/shared/services/bandservice/bandservice.service';
import { Band } from 'src/app/shared/models/band';

@Component({
  selector: 'app-contentbox',
  templateUrl: './contentbox.component.html',
  styleUrls: ['./contentbox.component.css']
})
export class ContentboxComponent {
  bands: Band[] = [];

  constructor(private bandService: BandService) {}

  ngOnInit(): void {
    this.getBands();
  }

  ngOnChanges(): void {
    this.getBands();
  }

  getBands(): void {
    this.bandService.findAll()
      .subscribe(bands => this.bands = bands);
  }

  delete(band: Band): void {
    this.bands = this.bands.filter(b => b !== band);
    this.bandService.delete(band.id).subscribe();
  }
}
