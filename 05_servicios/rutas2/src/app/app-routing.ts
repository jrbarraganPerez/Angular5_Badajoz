import { LibrosComponent } from './libros/libros.component';
import { LibrosService } from './../../../librosmock/src/app/services/libros.service';
import { CursosComponent } from './cursos/cursos.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'cursos', component: CursosComponent},
  { path: 'libros', component: LibrosComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home'},
];

export const appRouting = RouterModule.forRoot(routes);
