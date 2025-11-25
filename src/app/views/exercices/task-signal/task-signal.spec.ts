import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSignal } from './task-signal';

describe('TaskSignal', () => {
  let component: TaskSignal;
  let fixture: ComponentFixture<TaskSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskSignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskSignal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
