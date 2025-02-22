import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiochemistrylabComponent } from './biochemistrylab.component';

describe('BiochemistrylabComponent', () => {
  let component: BiochemistrylabComponent;
  let fixture: ComponentFixture<BiochemistrylabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiochemistrylabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiochemistrylabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
