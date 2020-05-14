import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicUserDetailComponent } from './basic-user-detail.component';

describe('BasicUserDetailComponent', () => {
  let component: BasicUserDetailComponent;
  let fixture: ComponentFixture<BasicUserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicUserDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
