import { Component } from '@angular/core';
import {RouterOutlet } from '@angular/router';
import { NaviComponent } from './parts/navi/navi.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NaviComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new-app';
}
