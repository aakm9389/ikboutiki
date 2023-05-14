import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieAPROPOSComponent } from './categorie-apropos.component';

describe('CategorieAPROPOSComponent', () => {
  let component: CategorieAPROPOSComponent;
  let fixture: ComponentFixture<CategorieAPROPOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieAPROPOSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieAPROPOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
