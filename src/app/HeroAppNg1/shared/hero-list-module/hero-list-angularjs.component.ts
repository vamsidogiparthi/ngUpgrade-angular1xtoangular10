
HeroListComponentAngularJSController.$inject = [];
function HeroListComponentAngularJSController() {
    var vm = this;
    vm.Heros = ['SuperMan', 'Batman', 'SpiderMan', 'Aquaman'];
}

// Example angular js component
export const heroListComponentAngular = {
    template: `
    <h1> {{ hLCtrl.widgetTitle }} </h1>
    <ul>
    <li ng-repeat="hero in hLCtrl.Heros track by $index">
    <hero-detail-angular2 [hero]="hero"></hero-detail-angular2>
    </hero-detail-angular2></li>    
    </ul>
  `,
    controller: HeroListComponentAngularJSController,
    controllerAs: 'hLCtrl'
};