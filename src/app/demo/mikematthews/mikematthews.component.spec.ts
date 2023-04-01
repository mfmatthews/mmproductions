import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MikematthewsComponent } from './mikematthews.component';

describe('MikematthewsComponent', () => {
  let component: MikematthewsComponent;
  let fixture: ComponentFixture<MikematthewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MikematthewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MikematthewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
