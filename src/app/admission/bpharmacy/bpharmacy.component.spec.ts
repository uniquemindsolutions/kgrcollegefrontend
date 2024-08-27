import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpharmacyComponent } from './bpharmacy.component';

describe('BpharmacyComponent', () => {
  let component: BpharmacyComponent;
  let fixture: ComponentFixture<BpharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BpharmacyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
