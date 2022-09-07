import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockInterviewsComponent } from './mock-interviews.component';

describe('MockInterviewsComponent', () => {
  let component: MockInterviewsComponent;
  let fixture: ComponentFixture<MockInterviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockInterviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MockInterviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
