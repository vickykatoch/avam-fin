import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvamCheckboxComponent } from './avam-checkbox.component';

describe('AvamCheckboxComponent', () => {
  let component: AvamCheckboxComponent;
  let fixture: ComponentFixture<AvamCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvamCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvamCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
