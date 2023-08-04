import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostFieldGoalsComponent } from './most-field-goals.component';

describe('MostFieldGoalsComponent', () => {
  let component: MostFieldGoalsComponent;
  let fixture: ComponentFixture<MostFieldGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostFieldGoalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostFieldGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
