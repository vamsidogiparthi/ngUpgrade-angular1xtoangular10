
HeroListComponentAngularJSController.$inject = [];
function HeroListComponentAngularJSController() {
    var vm = this;
    vm.Heros = ['SuperMan', 'Batman', 'SpiderMan', 'Aquaman'];
}

export const heroListComponentAngular = {
    template: `
    <h1> {{ hLCtrl.title }} </h1>
    <ul>
    <li ng-repeat="hero in hLCtrl.Heros track by $index">
    {{hero}}
    </hero-detail-angular2></li>    
    </ul>
  `,
    controller: HeroListComponentAngularJSController,
    controllerAs: 'hLCtrl',
    bindings: {
      title: '@'
  },
};
// <hero-detail-angular2 [hero]="hero">