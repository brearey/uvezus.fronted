import { Routes } from '@angular/router';
import {SplashScreenComponent} from "./splash-screen/splash-screen.component";
import {PhoneScreenComponent} from "./phone-screen/phone-screen.component";

export const routes: Routes = [
  {path: '', redirectTo: 'splash', pathMatch: 'full'},
  {path: 'splash', component: SplashScreenComponent},
  {path: 'phone', component: PhoneScreenComponent},
];
