import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {AppService} from "../app.service";
import {PhoneCodeService} from "./phone-code.service";

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

  phoneCodeService: PhoneCodeService

  constructor(appService: AppService, phoneCodeService: PhoneCodeService) {
    this.appDesc = appService.appDesc;
    this.appName = appService.appName;
    this.appSlogan = appService.appSlogan;
    this.phoneCodeService = phoneCodeService
  }

  public getCode():string {
    const code = this.phoneCodeService.getPhoneCode('89246628934')
    console.log(code)
    return code
  }
}
