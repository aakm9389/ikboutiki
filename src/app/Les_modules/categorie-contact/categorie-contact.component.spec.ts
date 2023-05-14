import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieCONTACTComponent } from './categorie-contact.component';

describe('CategorieCONTACTComponent', () => {
  let component: CategorieCONTACTComponent;
  let fixture: ComponentFixture<CategorieCONTACTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieCONTACTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieCONTACTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
