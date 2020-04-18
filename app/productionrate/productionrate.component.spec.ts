import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionrateComponent } from './productionrate.component';

describe('ProductionrateComponent', () => {
  let component: ProductionrateComponent;
  let fixture: ComponentFixture<ProductionrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
