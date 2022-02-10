import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PjesmaIndexComponent } from './pjesma-index.component';

describe('PjesmaIndexComponent', () => {
  let component: PjesmaIndexComponent;
  let fixture: ComponentFixture<PjesmaIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PjesmaIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PjesmaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
