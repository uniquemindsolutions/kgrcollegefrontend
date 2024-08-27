import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyMbaComponent } from './faculty-mba.component';

describe('FacultyMbaComponent', () => {
  let component: FacultyMbaComponent;
  let fixture: ComponentFixture<FacultyMbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyMbaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyMbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
