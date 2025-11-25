import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableGenerator } from './observable';

describe('Observable', () => {
  let component: ObservableGenerator;
  let fixture: ComponentFixture<ObservableGenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableGenerator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableGenerator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
