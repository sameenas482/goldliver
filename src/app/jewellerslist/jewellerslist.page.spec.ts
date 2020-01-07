import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JewellerslistPage } from './jewellerslist.page';

describe('JewellerslistPage', () => {
  let component: JewellerslistPage;
  let fixture: ComponentFixture<JewellerslistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JewellerslistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JewellerslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
