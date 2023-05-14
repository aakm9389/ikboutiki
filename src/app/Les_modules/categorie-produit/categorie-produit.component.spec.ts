import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriePRODUITComponent } from './categorie-produit.component';

describe('CategoriePRODUITComponent', () => {
  let component: CategoriePRODUITComponent;
  let fixture: ComponentFixture<CategoriePRODUITComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriePRODUITComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriePRODUITComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
