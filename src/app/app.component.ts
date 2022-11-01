import { LogginService } from './loggin.service';
import { AuthService } from './auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private logginService: LogginService
  ) {}
  ngOnInit(): void {
    this.authService.autoLogin();
    this.logginService.printLog('Hello from AppComponent ngOnInit');
  }
}
