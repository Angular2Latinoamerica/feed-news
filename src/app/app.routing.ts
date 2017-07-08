import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { ForgetComponent } from '../components/forget/forget.component';
import { FeedComponent } from '../components/feed/feed.component';
import { NewFeedComponent } from '../components/new-feed/new-feed.component';

export const AppComponents = [
  LoginComponent,
  RegisterComponent,
  ForgetComponent,
  HomeComponent,
  FeedComponent,
  NewFeedComponent,
];

export const AppRoutes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forget',
    component: ForgetComponent
  }
];