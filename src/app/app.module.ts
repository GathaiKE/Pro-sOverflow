import { NgModule, isDevMode } from '@angular/core';
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
import { CommentComponent } from './Questions/comment/comment.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { QuestionEffectsService } from './NgRx/Effects/question-effects.service';
import { QuestionsReducer } from './NgRx/Reducers/questionReducers';
import { HttpClientModule } from '@angular/common/http';
import { answerReducer } from './NgRx/Reducers/answerReducers';
import { AnswerEffectsService } from './NgRx/Effects/answer-effects.service';
import { UserReducer } from './NgRx/Reducers/userReducer';
import { UserEffectaService } from './NgRx/Effects/user-effecta.service';
import { FilterPipe } from './Pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FilterPipe,
    StoreModule.forRoot({question:QuestionsReducer,answer:answerReducer, users:UserReducer}),
    EffectsModule.forRoot([QuestionEffectsService,AnswerEffectsService,UserEffectaService]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
