import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotList } from './plot-list';

describe('PlotList', () => {
  let component: PlotList;
  let fixture: ComponentFixture<PlotList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlotList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlotList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
