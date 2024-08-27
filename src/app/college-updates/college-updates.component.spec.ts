import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeUpdatesComponent } from './college-updates.component';

describe('CollegeUpdatesComponent', () => {
  let component: CollegeUpdatesComponent;
  let fixture: ComponentFixture<CollegeUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollegeUpdatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollegeUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
