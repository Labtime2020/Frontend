import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteSenhaComponent } from './componente-senha.component';

describe('ComponenteSenhaComponent', () => {
  let component: ComponenteSenhaComponent;
  let fixture: ComponentFixture<ComponenteSenhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteSenhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
