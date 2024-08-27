import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyLabComponent } from './pharmacy-lab.component';

describe('PharmacyLabComponent', () => {
  let component: PharmacyLabComponent;
  let fixture: ComponentFixture<PharmacyLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmacyLabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
