import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanddetailsComponent } from './banddetails.component';

describe('BanddetailsComponent', () => {
  let component: BanddetailsComponent;
  let fixture: ComponentFixture<BanddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanddetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
