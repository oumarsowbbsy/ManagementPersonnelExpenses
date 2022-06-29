import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSalaireComponent } from './detail-salaire.component';

describe('DetailSalaireComponent', () => {
  let component: DetailSalaireComponent;
  let fixture: ComponentFixture<DetailSalaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSalaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSalaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
