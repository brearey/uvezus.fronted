import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailCodeService {

  constructor() { }

  public getCode(email: string): string {
    return `code for ${email}`
  }

  public checkCode(code: string): boolean {
    return code === '1234'
  }
}
