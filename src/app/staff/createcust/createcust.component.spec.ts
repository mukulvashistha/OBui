import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecustComponent } from './createcust.component';

describe('CreatecustComponent', () => {
  let component: CreatecustComponent;
  let fixture: ComponentFixture<CreatecustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecustComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
