import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieSERVICESComponent } from './categorie-services.component';

describe('CategorieSERVICESComponent', () => {
  let component: CategorieSERVICESComponent;
  let fixture: ComponentFixture<CategorieSERVICESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieSERVICESComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieSERVICESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
