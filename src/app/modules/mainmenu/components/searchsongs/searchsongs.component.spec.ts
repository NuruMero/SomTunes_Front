import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchsongsComponent } from './searchsongs.component';

describe('SearchsongsComponent', () => {
  let component: SearchsongsComponent;
  let fixture: ComponentFixture<SearchsongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchsongsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchsongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
