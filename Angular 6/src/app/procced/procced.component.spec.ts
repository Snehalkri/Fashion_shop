import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProccedComponent } from './procced.component';

describe('ProccedComponent', () => {
  let component: ProccedComponent;
  let fixture: ComponentFixture<ProccedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProccedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProccedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
