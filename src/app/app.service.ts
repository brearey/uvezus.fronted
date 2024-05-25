import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public appDesc: string = 'Веб приложение'
  public appName: string = 'Увезусь'
  public appSlogan = 'Такси Октемцы'
  constructor() { }
}
