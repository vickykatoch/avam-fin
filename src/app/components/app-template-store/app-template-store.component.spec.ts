import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTemplateStoreComponent } from './app-template-store.component';

describe('AppTemplateStoreComponent', () => {
  let component: AppTemplateStoreComponent;
  let fixture: ComponentFixture<AppTemplateStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTemplateStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTemplateStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
