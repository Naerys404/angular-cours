import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneUserRouting } from './one-user-routing';

describe('OneUserRouting', () => {
  let component: OneUserRouting;
  let fixture: ComponentFixture<OneUserRouting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneUserRouting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneUserRouting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
