import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentWithinComponent } from './component-within.component';

describe('ComponentWithinComponent', () => {
  let component: ComponentWithinComponent;
  let fixture: ComponentFixture<ComponentWithinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentWithinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentWithinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
