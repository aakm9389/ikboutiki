import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieACCUEILComponent } from './categorie-accueil.component';

describe('CategorieACCUEILComponent', () => {
  let component: CategorieACCUEILComponent;
  let fixture: ComponentFixture<CategorieACCUEILComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieACCUEILComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieACCUEILComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
