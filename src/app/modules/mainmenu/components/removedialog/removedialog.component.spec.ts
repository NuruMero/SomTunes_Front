import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovedialogComponent } from './removedialog.component';

describe('RemovedialogComponent', () => {
  let component: RemovedialogComponent;
  let fixture: ComponentFixture<RemovedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovedialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
