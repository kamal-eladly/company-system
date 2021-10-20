import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmpolyeeComponent } from './update-empolyee.component';

describe('UpdateEmpolyeeComponent', () => {
  let component: UpdateEmpolyeeComponent;
  let fixture: ComponentFixture<UpdateEmpolyeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEmpolyeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmpolyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
