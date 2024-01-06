import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMagicComponent } from './our-magic.component';

describe('OurMagicComponent', () => {
  let component: OurMagicComponent;
  let fixture: ComponentFixture<OurMagicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurMagicComponent]
    });
    fixture = TestBed.createComponent(OurMagicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
