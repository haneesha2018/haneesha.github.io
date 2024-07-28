import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { InvolvementsComponent } from './involvements/involvements.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'involvements', component: InvolvementsComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: '**', redirectTo: '/about' } // Handle unknown routes
];
