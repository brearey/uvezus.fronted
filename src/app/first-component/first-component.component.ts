import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.scss'
})
export class FirstComponentComponent {
  constructor(private router: Router) {

  }
  async goToNextPage() {
    await this.router.navigate(['/second'])
  }
}
