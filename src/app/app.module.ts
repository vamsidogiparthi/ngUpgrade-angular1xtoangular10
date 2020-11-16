import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import * as angular from 'angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpgradeModule, downgradeComponent, setAngularJSGlobal } from '@angular/upgrade/static';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListAngularDirective } from './HeroAppNg1/shared/hero-list-module/hero-list-angular.directive';
import { HeroApp } from './HeroAppNg1/shared/hero-app';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroListAngularDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule
  ],
  entryComponents: [
    HeroDetailComponent,
    AppComponent
  ],
  providers: [{ provide: '$scope', useExisting: '$rootScope' }]
})

// bootstrap both angular and angular js application together. 
export class AppModule implements DoBootstrap {
  constructor(private upgrade: UpgradeModule) { }
  public ngDoBootstrap(app: ApplicationRef) {
    setAngularJSGlobal(angular);
    this.upgrade.bootstrap(document.body, [HeroApp.name], { strictDi: true });
    app.bootstrap(AppComponent);
  }
}
