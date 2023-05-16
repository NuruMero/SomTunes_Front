import { Component, OnInit } from '@angular/core';
import { BandService } from 'src/app/shared/services/bandservice/bandservice.service';
import { Band } from 'src/app/shared/models/band';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RemovedialogComponent } from '../removedialog/removedialog.component';

@Component({
  selector: 'app-contentbox',
  templateUrl: './contentbox.component.html',
  styleUrls: ['./contentbox.component.css']
})
export class ContentboxComponent {
  bands: Band[] = [];

  displayedColumns: string[] = ['name', 'mainGenre', 'origin', 'delete'];

  constructor(
    private dialog: MatDialog,
    private bandService: BandService,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    if (Object.keys(this.route.snapshot.params).length) {
      this.getFilteredBands();
    } else {
      this.getBands();
    }
  }

  ngOnChanges(): void {
    this.getBands();
  }

  openDialog(band: Band) {
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
        this.delete(band);
      }
    })
  }

  getBands(): void {
    this.bandService.findAll()
      .subscribe(bands => this.bands = bands);
  }

  getFilteredBands(): void {
    let name = String(this.route.snapshot.paramMap.get('name'));
    let mainGenre = String(this.route.snapshot.paramMap.get('mainGenre'));
    let origin = String(this.route.snapshot.paramMap.get('origin'));

    this.bandService.filter(
      name, mainGenre, origin
    ).subscribe(bands => this.bands = bands);
  }

  delete(band: Band): void {
    this.bands = this.bands.filter(b => b !== band);
    this.bandService.delete(band.id).subscribe();
  }
}
