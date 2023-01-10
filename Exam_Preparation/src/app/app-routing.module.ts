import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [
  
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full',
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full',
  },
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full',
  },
  {
    path:'admin',
    component:DashboardComponent,
//    pathMatch:'full',
    canActivate:[AdminGuard],
    children:[
    { path:'',
      component: WelcomeComponent,
    },
    { path:'profile',
      component: ProfileComponent,
    },
    { path:'categories',
      component: ViewCategoriesComponent,
    },
    { path:'add-category',
    component: AddCategoryComponent,
    },
    { path:'quizzes',
    component: ViewQuizzesComponent,
    },
    { path:'add-quiz',
    component: AddQuizComponent,
    },
    { path:'quizzes/:qid',
    component: UpdateQuizComponent,
    },
    { path:'view-question/:qid/:title',
    component: ViewQuestionsComponent,
    },
    {
      path:'add-question/:qid/:title',
      component: AddQuestionComponent,
    }
    ]
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    canActivate:[NormalGuard],
    children:[
      {
        path:':catId',
        component: LoadQuizComponent
      }
    ]
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
