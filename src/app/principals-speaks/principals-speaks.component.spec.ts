import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalsSpeaksComponent } from './principals-speaks.component';

describe('PrincipalsSpeaksComponent', () => {
  let component: PrincipalsSpeaksComponent;
  let fixture: ComponentFixture<PrincipalsSpeaksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalsSpeaksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalsSpeaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
