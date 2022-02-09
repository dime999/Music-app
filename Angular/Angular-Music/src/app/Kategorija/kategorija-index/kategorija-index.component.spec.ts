import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorijaIndexComponent } from './kategorija-index.component';

describe('KategorijaIndexComponent', () => {
  let component: KategorijaIndexComponent;
  let fixture: ComponentFixture<KategorijaIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KategorijaIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorijaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
