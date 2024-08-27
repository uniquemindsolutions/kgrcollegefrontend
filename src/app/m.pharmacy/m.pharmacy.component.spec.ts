import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MPharmacyComponent } from './m.pharmacy.component';

describe('MPharmacyComponent', () => {
  let component: MPharmacyComponent;
  let fixture: ComponentFixture<MPharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MPharmacyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MPharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
