import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorijaFormaComponent } from './kategorija-forma.component';

describe('KategorijaFormaComponent', () => {
  let component: KategorijaFormaComponent;
  let fixture: ComponentFixture<KategorijaFormaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KategorijaFormaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorijaFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
