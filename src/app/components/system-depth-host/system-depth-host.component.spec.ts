import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemDepthHostComponent } from './system-depth-host.component';

describe('SystemDepthHostComponent', () => {
  let component: SystemDepthHostComponent;
  let fixture: ComponentFixture<SystemDepthHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemDepthHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemDepthHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
