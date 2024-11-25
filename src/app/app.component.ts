import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GenogramComponent } from './portal/component/genogram/genogram.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GenogramComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GenogramClient';
}
