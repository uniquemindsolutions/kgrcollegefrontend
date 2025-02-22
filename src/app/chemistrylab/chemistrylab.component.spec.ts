import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemistrylabComponent } from './chemistrylab.component';

describe('ChemistrylabComponent', () => {
  let component: ChemistrylabComponent;
  let fixture: ComponentFixture<ChemistrylabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChemistrylabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChemistrylabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
