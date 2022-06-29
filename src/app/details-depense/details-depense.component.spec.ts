import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDepenseComponent } from './details-depense.component';

describe('DetailsDepenseComponent', () => {
  let component: DetailsDepenseComponent;
  let fixture: ComponentFixture<DetailsDepenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsDepenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDepenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
