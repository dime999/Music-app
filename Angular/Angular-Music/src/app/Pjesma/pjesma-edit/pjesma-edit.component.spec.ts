import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PjesmaEditComponent } from './pjesma-edit.component';

describe('PjesmaEditComponent', () => {
  let component: PjesmaEditComponent;
  let fixture: ComponentFixture<PjesmaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PjesmaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PjesmaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
