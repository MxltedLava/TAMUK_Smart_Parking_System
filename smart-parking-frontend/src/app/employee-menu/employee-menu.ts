import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-menu',
  templateUrl: './employee-menu.component.html',
  styleUrls: ['./employee-menu.component.css']
})
export class EmployeeMenuComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
