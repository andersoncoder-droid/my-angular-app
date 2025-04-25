import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cats', component: CatsComponent },
  { path: 'dogs', component: DogsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' },
];
