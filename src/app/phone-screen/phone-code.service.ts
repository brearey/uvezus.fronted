import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneCodeService {

  constructor() { }

  public getPhoneCode(phoneNumber: string): string {
    return `code for ${phoneNumber}`
  }

  public checkCode(code: string): boolean {
    return code === '1234'
  }
}
