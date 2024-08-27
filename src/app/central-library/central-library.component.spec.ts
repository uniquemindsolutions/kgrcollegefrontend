import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralLibraryComponent } from './central-library.component';

describe('CentralLibraryComponent', () => {
  let component: CentralLibraryComponent;
  let fixture: ComponentFixture<CentralLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentralLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
