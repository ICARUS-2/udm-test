import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { LearnMore } from './learn-more/learn-more';

export const routes: Routes = 
[
    {path: "", component: LandingPage},
    {path: "learn-more", component: LearnMore}
];
