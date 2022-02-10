import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PjesmaNovaComponent } from './pjesma-nova.component';

describe('PjesmaNovaComponent', () => {
  let component: PjesmaNovaComponent;
  let fixture: ComponentFixture<PjesmaNovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PjesmaNovaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PjesmaNovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
