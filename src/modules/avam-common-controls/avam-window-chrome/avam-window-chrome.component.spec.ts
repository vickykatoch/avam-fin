import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvamWindowChromeComponent } from './avam-window-chrome.component';

describe('FalconWindowChromeComponent', () => {
  let component: AvamWindowChromeComponent;
  let fixture: ComponentFixture<AvamWindowChromeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvamWindowChromeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvamWindowChromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
