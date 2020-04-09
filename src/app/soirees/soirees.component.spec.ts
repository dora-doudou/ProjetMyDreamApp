import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoireesComponent } from './soirees.component';

describe('SoireesComponent', () => {
  let component: SoireesComponent;
  let fixture: ComponentFixture<SoireesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoireesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoireesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
