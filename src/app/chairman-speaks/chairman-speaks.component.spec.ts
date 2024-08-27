import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairmanSpeaksComponent } from './chairman-speaks.component';

describe('ChairmanSpeaksComponent', () => {
  let component: ChairmanSpeaksComponent;
  let fixture: ComponentFixture<ChairmanSpeaksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChairmanSpeaksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChairmanSpeaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
