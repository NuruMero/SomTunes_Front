import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentboxsongsComponent } from './contentboxsongs.component';

describe('ContentboxsongsComponent', () => {
  let component: ContentboxsongsComponent;
  let fixture: ComponentFixture<ContentboxsongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentboxsongsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentboxsongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
