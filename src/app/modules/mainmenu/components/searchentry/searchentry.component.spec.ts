import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchentryComponent } from './searchentry.component';

describe('SearchentryComponent', () => {
  let component: SearchentryComponent;
  let fixture: ComponentFixture<SearchentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchentryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
