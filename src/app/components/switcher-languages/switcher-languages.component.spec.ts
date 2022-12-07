import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitcherLanguagesComponent } from './switcher-languages.component';

describe('SwitcherLanguagesComponent', () => {
  let component: SwitcherLanguagesComponent;
  let fixture: ComponentFixture<SwitcherLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitcherLanguagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitcherLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
