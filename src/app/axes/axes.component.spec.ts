import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxesComponent } from './axes.component';

describe('AxesComponent', () => {
  let component: AxesComponent;
  let fixture: ComponentFixture<AxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
