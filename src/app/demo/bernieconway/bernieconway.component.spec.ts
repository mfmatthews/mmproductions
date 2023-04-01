import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BernieconwayComponent } from './bernieconway.component';

describe('BernieconwayComponent', () => {
  let component: BernieconwayComponent;
  let fixture: ComponentFixture<BernieconwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BernieconwayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BernieconwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
