import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripContentComponent } from './trip-content.component';

describe('TripContentComponent', () => {
  let component: TripContentComponent;
  let fixture: ComponentFixture<TripContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
