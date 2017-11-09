import { LibrosModule } from './libros/libros.module';
import { AboutModule } from './about/about.module';
import { CursosModule } from './cursos/cursos.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { appRouting } from './app-routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    SharedModule,
    HomeModule,
    CursosModule,
    AboutModule,
    LibrosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
