import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroAngularAppJSComponent } from './HeroAppNg1/hero-angularjs-app.component';

// Match any URL that starts with `app2` and loads particular frame work related page
export function isAngularJSUrl(url: UrlSegment[]) {
  return url.length > 0 && !url[0].path.startsWith('app2') ? ({ consumed: url }) : null;
}

const routes: Routes = [
  {
    path: 'herodetail',
    component: HeroDetailComponent,
    pathMatch: 'full'
  },
  { matcher: isAngularJSUrl, component: HeroAngularAppJSComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
