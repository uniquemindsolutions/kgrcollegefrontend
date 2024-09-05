import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import AOS from 'aos';
import 'aos/dist/aos.css';

if (environment.production) {
  enableProdMode();
}
AOS.init();
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  // platformBrowserDynamic().bootstrapModule(AppModule)
  // .catch(err => console.error(err));
