import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrochureEngComponent } from './brochure-eng.component';

describe('BrochureEngComponent', () => {
  let component: BrochureEngComponent;
  let fixture: ComponentFixture<BrochureEngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrochureEngComponent]
    });
    fixture = TestBed.createComponent(BrochureEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
