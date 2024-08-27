import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EVENTSandACTIVITIESComponent } from './eventsand-activities.component';

describe('EVENTSandACTIVITIESComponent', () => {
  let component: EVENTSandACTIVITIESComponent;
  let fixture: ComponentFixture<EVENTSandACTIVITIESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EVENTSandACTIVITIESComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EVENTSandACTIVITIESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
