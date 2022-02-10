import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PjesmaFormaComponent } from './pjesma-forma.component';

describe('PjesmaFormaComponent', () => {
  let component: PjesmaFormaComponent;
  let fixture: ComponentFixture<PjesmaFormaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PjesmaFormaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PjesmaFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
