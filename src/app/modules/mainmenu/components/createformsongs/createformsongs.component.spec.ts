import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateformsongsComponent } from './createformsongs.component';

describe('CreateformsongsComponent', () => {
  let component: CreateformsongsComponent;
  let fixture: ComponentFixture<CreateformsongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateformsongsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateformsongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
