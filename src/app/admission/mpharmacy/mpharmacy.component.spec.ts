import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpharmacyComponent } from './mpharmacy.component';

describe('MpharmacyComponent', () => {
  let component: MpharmacyComponent;
  let fixture: ComponentFixture<MpharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MpharmacyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
