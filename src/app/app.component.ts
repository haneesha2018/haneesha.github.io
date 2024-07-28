import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { InvolvementsComponent } from './involvements/involvements.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    AboutComponent,
    ExperienceComponent,
    InvolvementsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}


