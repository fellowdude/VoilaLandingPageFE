import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrochureEspComponent } from './brochure-esp.component';

describe('BrochureEspComponent', () => {
  let component: BrochureEspComponent;
  let fixture: ComponentFixture<BrochureEspComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrochureEspComponent]
    });
    fixture = TestBed.createComponent(BrochureEspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
