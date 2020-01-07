import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JwPage } from './jw.page';

describe('JwPage', () => {
  let component: JwPage;
  let fixture: ComponentFixture<JwPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JwPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
