import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebardropdownComponent } from './sidebardropdown.component';

describe('SidebardropdownComponent', () => {
  let component: SidebardropdownComponent;
  let fixture: ComponentFixture<SidebardropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebardropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebardropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
