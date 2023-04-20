import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditformsongsComponent } from './editformsongs.component';

describe('EditformsongsComponent', () => {
  let component: EditformsongsComponent;
  let fixture: ComponentFixture<EditformsongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditformsongsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditformsongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
