import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BPharmacyComponent } from './b.pharmacy.component';

describe('BPharmacyComponent', () => {
  let component: BPharmacyComponent;
  let fixture: ComponentFixture<BPharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BPharmacyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BPharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
