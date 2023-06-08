import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LogInComponent } from './log-in/log-in.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { AskQuestionComponent } from './Questions/ask-question/ask-question.component';
import { QuestionDetailsComponent } from './Questions/question-details/question-details.component';
import { QuestionStatsComponent } from './Questions/question-stats/question-stats.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LandingComponent,
    LogInComponent,
    MenuComponent,
    ProfileComponent,
    AskQuestionComponent,
    QuestionDetailsComponent,
    QuestionStatsComponent,
    RegisterComponent,
    ResetPasswordComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
