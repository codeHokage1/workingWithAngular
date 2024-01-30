import { Routes } from '@angular/router';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
   {
      path: "home",
      component: FirstCompComponent
   },
   {
      path: "about",
      component: AboutComponent
   },
   {
      path: "about/:username",
      component: AboutComponent
   }
];
