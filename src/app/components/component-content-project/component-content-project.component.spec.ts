import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentContentProjectComponent } from './component-content-project.component';

describe('ComponentContentProjectComponent', () => {
  let component: ComponentContentProjectComponent;
  let fixture: ComponentFixture<ComponentContentProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentContentProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentContentProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
