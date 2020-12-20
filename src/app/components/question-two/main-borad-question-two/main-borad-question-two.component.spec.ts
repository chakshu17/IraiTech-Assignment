import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBoradQuestionTwoComponent } from './main-borad-question-two.component';

describe('MainBoradQuestionTwoComponent', () => {
  let component: MainBoradQuestionTwoComponent;
  let fixture: ComponentFixture<MainBoradQuestionTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBoradQuestionTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBoradQuestionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
