import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { routes } from './app.routes';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Empty array for now, will import routes later
    NgbModule,
    // AppRoutingModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [RouterModule],

})
export class AppModule {}
