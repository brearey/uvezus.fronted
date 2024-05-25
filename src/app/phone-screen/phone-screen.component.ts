import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {AppService} from "../app.service";

@Component({
  selector: 'app-phone-screen',
  standalone: true,
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './phone-screen.component.html',
  styleUrl: './phone-screen.component.scss'
})
export class PhoneScreenComponent {
  appDesc: string
  appName: string
  appSlogan: string
  constructor(appService: AppService) {
    this.appDesc = appService.appDesc;
    this.appName = appService.appName;
    this.appSlogan = appService.appSlogan;
  }
}
