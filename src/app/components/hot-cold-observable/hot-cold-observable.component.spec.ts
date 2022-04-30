import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotColdObservableComponent } from './hot-cold-observable.component';

describe('HotColdObservableComponent', () => {
  let component: HotColdObservableComponent;
  let fixture: ComponentFixture<HotColdObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotColdObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotColdObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
