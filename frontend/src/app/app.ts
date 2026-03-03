import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { NotificationsComponent } from './components/notifications/notifications';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, NotificationsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
