import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KycPagePage } from './kyc-page.page';

describe('KycPagePage', () => {
  let component: KycPagePage;
  let fixture: ComponentFixture<KycPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KycPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KycPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
