import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 { path: 'home', loadChildren: '/home/home.component#homeModule'},
 { path: 'cursos', loadChildren: '/cursos/cursos.component#homeModule'},
 { path: 'libros', loadChildren: '/libros/libros.component#homeModule'},
 { path: 'about', loadChildren: '/about/about.component'},

  /*
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'cursos', component: CursosComponent},
  { path: 'libros', component: LibrosComponent},*/
  { path: '', pathMatch: 'full', redirectTo: 'home'},
];

export const appRouting = RouterModule.forRoot(routes);
