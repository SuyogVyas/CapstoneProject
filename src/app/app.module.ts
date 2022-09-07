import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockInterviewsModule } from './mock-interviews/mock-interviews.module';
import { InterviewExperienceModule } from './interview-experience/interview-experience.module';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CompanyModule } from './company/company.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MockInterviewsModule,
    InterviewExperienceModule,
    AuthModule,
    DashboardModule,
    CompanyModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
