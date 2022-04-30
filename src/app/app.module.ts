import { CustomStyleDirectiveModule } from './utils/directives/customStyleDirective';
import { CustomIfDirectiveModule } from './utils/directives/customIfDirective';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotColdObservableComponent } from './components/hot-cold-observable/hot-cold-observable.component';
import { PromiseComponent } from './components/promise/promise.component';
import { ObservableComponent } from './components/observable/observable.component';
import { ComponentContentProjectComponent } from './components/component-content-project/component-content-project.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HotColdObservableComponent,
    PromiseComponent,
    ObservableComponent,
    ComponentContentProjectComponent,
    UserFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    CustomIfDirectiveModule,
    CustomStyleDirectiveModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
