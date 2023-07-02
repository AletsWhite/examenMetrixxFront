import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramiteTresComponent } from './tramite-tres.component';

describe('TramiteTresComponent', () => {
  let component: TramiteTresComponent;
  let fixture: ComponentFixture<TramiteTresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TramiteTresComponent]
    });
    fixture = TestBed.createComponent(TramiteTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
