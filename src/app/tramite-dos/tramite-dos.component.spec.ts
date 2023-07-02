import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramiteDosComponent } from './tramite-dos.component';

describe('TramiteDosComponent', () => {
  let component: TramiteDosComponent;
  let fixture: ComponentFixture<TramiteDosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TramiteDosComponent]
    });
    fixture = TestBed.createComponent(TramiteDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
