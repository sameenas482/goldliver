import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsPage } from './js.page';

describe('JsPage', () => {
  let component: JsPage;
  let fixture: ComponentFixture<JsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
