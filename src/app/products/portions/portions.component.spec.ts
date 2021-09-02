import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortionsComponent } from './portions.component';

describe('PortionsComponent', () => {
  let component: PortionsComponent;
  let fixture: ComponentFixture<PortionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
