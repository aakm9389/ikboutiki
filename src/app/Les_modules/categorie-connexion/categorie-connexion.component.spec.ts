import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieCONNEXIONComponent } from './categorie-connexion.component';

describe('CategorieCONNEXIONComponent', () => {
  let component: CategorieCONNEXIONComponent;
  let fixture: ComponentFixture<CategorieCONNEXIONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieCONNEXIONComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieCONNEXIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
