import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',loadComponent:()=>import('./landing/landing.component').then(c=>c.LandingComponent) },
  {path:'logIn',loadComponent:()=>import('./log-in/log-in.component').then(c=>c.LogInComponent) },
  {path:'register',loadComponent:()=>import('./register/register.component').then(c=>c.RegisterComponent) },
  {path:'reset',loadComponent:()=>import('./reset-password/reset-password.component').then(c=>c.ResetPasswordComponent) },
  {path:'home',loadComponent:()=>import('./home/home.component').then(c=>c.HomeComponent) },
  {path:'profile',loadComponent:()=>import('./profile/profile.component').then(c=>c.ProfileComponent) },
  {path:'ask',loadComponent:()=>import('./Questions/ask-question/ask-question.component').then(c=>c.AskQuestionComponent) },
  {path:'details/:question_id',loadComponent:()=>import('./Questions/question-details/question-details.component').then(c=>c.QuestionDetailsComponent) },
  {path:'stats',loadComponent:()=>import('./Questions/question-stats/question-stats.component').then(c=>c.QuestionStatsComponent) },
  {path:'admin',loadComponent:()=>import('./admin/admin.component').then(c=>c.AdminComponent) },
  {path:'comment',loadComponent:()=>import('./Questions/comment/comment.component').then(c=>c.CommentComponent) },
  {path:'tags',loadComponent:()=>import('./mobiletags/mobiletags.component').then(c=>c.MobiletagsComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }