import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyToTranslateComponent } from './body-to-translate.component';

describe('BodyToTranslateComponent', () => {
  let component: BodyToTranslateComponent;
  let fixture: ComponentFixture<BodyToTranslateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyToTranslateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyToTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
