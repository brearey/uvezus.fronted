import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.scss'
})
export class SplashScreenComponent {
  appDesc: string = 'Веб приложение'
  appName: string = 'Увезусь'
  appSlogan = 'Такси Октемцы'
}
