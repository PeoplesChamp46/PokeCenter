import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoketypComponent } from './poketyp.component';

describe('PoketypComponent', () => {
  let component: PoketypComponent;
  let fixture: ComponentFixture<PoketypComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoketypComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoketypComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
