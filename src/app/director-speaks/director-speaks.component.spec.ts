import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorSpeaksComponent } from './director-speaks.component';

describe('DirectorSpeaksComponent', () => {
  let component: DirectorSpeaksComponent;
  let fixture: ComponentFixture<DirectorSpeaksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectorSpeaksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorSpeaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
