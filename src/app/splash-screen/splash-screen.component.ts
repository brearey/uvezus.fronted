import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {AppService} from "../app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [ NgOptimizedImage ],
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.scss'
})
export class SplashScreenComponent implements OnInit{
  appDesc: string
  appName: string
  appSlogan: string
  __router: Router
  constructor(appService: AppService, router: Router) {
    this.appDesc = appService.appDesc;
    this.appName = appService.appName;
    this.appSlogan = appService.appSlogan;
    this.__router = router;
  }

  async gotoPhoneScreen () {
    await this.__router.navigateByUrl('/phone')
  }

  ngOnInit(): void {
    // Go to phone screen after 1 second
    setTimeout(async () => {
      await this.gotoPhoneScreen()
    }, 1000)
  }
}
