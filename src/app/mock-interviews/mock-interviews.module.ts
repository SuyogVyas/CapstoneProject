import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockInterviewsComponent } from './mock-interviews.component';



@NgModule({
  declarations: [MockInterviewsComponent],
  imports: [
    CommonModule
  ]
  ,exports:[
    MockInterviewsComponent
  ]
})
export class MockInterviewsModule { }
