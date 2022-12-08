import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainheadComponent } from './mainhead/mainhead.component';
import { MainlateralComponent } from './mainlateral/mainlateral.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { MainfooterComponent } from './mainfooter/mainfooter.component';
import { ErrorHelperComponent } from './shared/components/error-helper/error-helper.component';

import { MostrarocultarDirective } from './mostrarocultar.directive';




@NgModule({
  declarations: [
    AppComponent,
    MainheadComponent,
    MainlateralComponent,
    MainbodyComponent,
    MainfooterComponent,
    MostrarocultarDirective,
    ErrorHelperComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
