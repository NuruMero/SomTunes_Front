import { Component, Input } from '@angular/core';
import { Band } from 'src/app/shared/models/band';
import { BandService } from 'src/app/shared/services/bandservice/bandservice.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-banddetails',
  templateUrl: './banddetails.component.html',
  styleUrls: ['./banddetails.component.css']
})
export class BanddetailsComponent {

  @Input() band?: Band;

  constructor(
    private route: ActivatedRoute,
    private bandService: BandService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBand();
  }

  getBand(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bandService.getById(id)
      .subscribe(band => this.band = band);
  }

  goBack(): void {
    this.location.back();
  }
}
