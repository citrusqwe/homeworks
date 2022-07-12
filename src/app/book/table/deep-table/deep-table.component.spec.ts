import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepTableComponent } from './deep-table.component';

describe('DeepTableComponent', () => {
  let component: DeepTableComponent;
  let fixture: ComponentFixture<DeepTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeepTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeepTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
