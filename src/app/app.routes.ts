import { Routes } from '@angular/router';
import {SplashScreenComponent} from "./screens/splash-screen/splash-screen.component";
import {EmailScreenComponent} from "./screens/email-screen/email-screen.component";

export const routes: Routes = [
  {path: '', redirectTo: 'splash', pathMatch: 'full'},
  {path: 'splash', component: SplashScreenComponent},
  {path: 'email', component: EmailScreenComponent},
];
