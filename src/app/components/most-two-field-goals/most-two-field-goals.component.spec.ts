import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostTwoFieldGoalsComponent } from './most-two-field-goals.component';

describe('MostTwoFieldGoalsComponent', () => {
  let component: MostTwoFieldGoalsComponent;
  let fixture: ComponentFixture<MostTwoFieldGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostTwoFieldGoalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostTwoFieldGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
