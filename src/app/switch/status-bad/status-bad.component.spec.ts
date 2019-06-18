import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusBadComponent } from './status-bad.component';

describe('StatusBadComponent', () => {
  let component: StatusBadComponent;
  let fixture: ComponentFixture<StatusBadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusBadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusBadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
