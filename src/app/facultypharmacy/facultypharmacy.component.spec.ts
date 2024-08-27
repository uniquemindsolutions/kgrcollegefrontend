import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultypharmacyComponent } from './facultypharmacy.component';

describe('FacultypharmacyComponent', () => {
  let component: FacultypharmacyComponent;
  let fixture: ComponentFixture<FacultypharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultypharmacyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultypharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
