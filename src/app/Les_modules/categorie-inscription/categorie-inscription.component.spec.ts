import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieINSCRIPTIONComponent } from './categorie-inscription.component';

describe('CategorieINSCRIPTIONComponent', () => {
  let component: CategorieINSCRIPTIONComponent;
  let fixture: ComponentFixture<CategorieINSCRIPTIONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieINSCRIPTIONComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieINSCRIPTIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
