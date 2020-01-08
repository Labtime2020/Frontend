import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteNomeComponent } from './componente-nome.component';

describe('ComponenteNomeComponent', () => {
  let component: ComponenteNomeComponent;
  let fixture: ComponentFixture<ComponenteNomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteNomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteNomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
