import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtoncmpComponent } from './buttoncmp.component';

describe('ButtoncmpComponent', () => {
  let component: ButtoncmpComponent;
  let fixture: ComponentFixture<ButtoncmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtoncmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtoncmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
