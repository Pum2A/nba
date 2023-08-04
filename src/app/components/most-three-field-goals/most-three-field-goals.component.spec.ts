import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostThreeFieldGoalsComponent } from './most-three-field-goals.component';

describe('MostThreeFieldGoalsComponent', () => {
  let component: MostThreeFieldGoalsComponent;
  let fixture: ComponentFixture<MostThreeFieldGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostThreeFieldGoalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostThreeFieldGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
