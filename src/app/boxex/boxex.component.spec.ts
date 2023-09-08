import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxexComponent } from './boxex.component';

describe('BoxexComponent', () => {
  let component: BoxexComponent;
  let fixture: ComponentFixture<BoxexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxexComponent]
    });
    fixture = TestBed.createComponent(BoxexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
