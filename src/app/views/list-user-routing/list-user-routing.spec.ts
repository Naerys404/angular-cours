import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserRouting } from './list-user-routing';

describe('ListUserRouting', () => {
  let component: ListUserRouting;
  let fixture: ComponentFixture<ListUserRouting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListUserRouting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUserRouting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
