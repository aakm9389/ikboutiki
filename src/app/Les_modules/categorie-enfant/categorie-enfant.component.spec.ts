import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieENFANTComponent } from './categorie-enfant.component';

describe('CategorieENFANTComponent', () => {
  let component: CategorieENFANTComponent;
  let fixture: ComponentFixture<CategorieENFANTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieENFANTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieENFANTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
