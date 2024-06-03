import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {AppService} from "../../app.service";
import {EmailCodeService} from "../services/email-code.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-email-screen',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FormsModule
  ],
  templateUrl: './email-screen.component.html',
  styleUrl: './email-screen.component.scss'
})
export class EmailScreenComponent {
  appDesc: string
  appName: string
  appSlogan: string
  inputName: string = ''

  emailCodeService: EmailCodeService

  constructor(appService: AppService, emailCodeService: EmailCodeService) {
    this.appDesc = appService.appDesc;
    this.appName = appService.appName;
    this.appSlogan = appService.appSlogan;
    this.emailCodeService = emailCodeService
  }

  public getCode():string {
    const code = this.emailCodeService.getCode(this.inputName)
    console.log(code)
    return code
  }
}
