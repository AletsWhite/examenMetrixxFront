import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramiteUnoComponent } from './tramite-uno.component';

describe('TramiteUnoComponent', () => {
  let component: TramiteUnoComponent;
  let fixture: ComponentFixture<TramiteUnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TramiteUnoComponent]
    });
    fixture = TestBed.createComponent(TramiteUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
