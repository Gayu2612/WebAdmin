import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothViewComponent } from './cloth-view.component';

describe('ClothViewComponent', () => {
  let component: ClothViewComponent;
  let fixture: ComponentFixture<ClothViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
