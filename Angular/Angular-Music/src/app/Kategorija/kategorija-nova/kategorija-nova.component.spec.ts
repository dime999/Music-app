import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorijaNovaComponent } from './kategorija-nova.component';

describe('KategorijaNovaComponent', () => {
  let component: KategorijaNovaComponent;
  let fixture: ComponentFixture<KategorijaNovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KategorijaNovaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorijaNovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
