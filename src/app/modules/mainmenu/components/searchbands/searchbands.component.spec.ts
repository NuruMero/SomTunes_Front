import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbandsComponent } from './searchbands.component';

describe('SearchbandsComponent', () => {
  let component: SearchbandsComponent;
  let fixture: ComponentFixture<SearchbandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchbandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
