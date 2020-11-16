import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpgradeModule, } from '@angular/upgrade/static';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { UrlHandlingStrategy } from '@angular/router';
import { HeroListAngularDirective } from './HeroAppNg1/hero-list-module/hero-list-angular.directive';
import { NavBarDirective } from './HeroAppNg1/navigation-bar-module/nav-bar-component';



export class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) { return url.toString().startsWith("/herodetail"); }
  extract(url) { return url; }
  merge(url, whole) { return url; }
}

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroListAngularDirective,
    NavBarDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule
  ],
  entryComponents: [
    AppComponent,
    HeroDetailComponent   
  ],
  providers: [
    { provide: '$scope', useExisting: '$rootScope' }
  ]
})

export class AppModule implements DoBootstrap {
  constructor(private upgrade: UpgradeModule) { }
  public ngDoBootstrap(app: ApplicationRef) {
    app.bootstrap(AppComponent);
  }
}
