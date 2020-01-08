import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponeteemailComponent } from './componeteemail.component';

describe('ComponeteemailComponent', () => {
  let component: ComponeteemailComponent;
  let fixture: ComponentFixture<ComponeteemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponeteemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponeteemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
