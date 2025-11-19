import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpGigaBind } from './tp-giga-bind';

describe('TpGigaBind', () => {
  let component: TpGigaBind;
  let fixture: ComponentFixture<TpGigaBind>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TpGigaBind]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TpGigaBind);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
