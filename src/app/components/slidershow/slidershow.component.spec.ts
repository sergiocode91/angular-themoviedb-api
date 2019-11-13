import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidershowComponent } from './slidershow.component';

describe('SlidershowComponent', () => {
  let component: SlidershowComponent;
  let fixture: ComponentFixture<SlidershowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidershowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidershowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
