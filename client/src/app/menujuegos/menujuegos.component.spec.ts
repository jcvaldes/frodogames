import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenujuegosComponent } from './menujuegos.component';

describe('MenujuegosComponent', () => {
  let component: MenujuegosComponent;
  let fixture: ComponentFixture<MenujuegosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenujuegosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenujuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
