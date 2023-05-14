import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieUTILISATEURComponent } from './categorie-utilisateur.component';

describe('CategorieUTILISATEURComponent', () => {
  let component: CategorieUTILISATEURComponent;
  let fixture: ComponentFixture<CategorieUTILISATEURComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieUTILISATEURComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieUTILISATEURComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
