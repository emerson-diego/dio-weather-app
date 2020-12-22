(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{TyDT:function(t,e,i){"use strict";i.r(e),i.d(e,"DetailsModule",(function(){return X}));var n=i("ofXK"),c=i("tyNb"),a=i("kt0X"),r=i("snw9");const o=Object(a.n)("[Details] Load Weather Details"),s=Object(a.n)("[Details] Load Weather Details Success",Object(a.s)()),b=Object(a.n)("[Details] Load Weather Details Failed"),d=Object(a.o)("details"),l=Object(a.q)(d,t=>t.entity),u=Object(a.q)(d,t=>t.loading),h=Object(a.q)(d,t=>t.error);var f=i("eTSW"),O=i("fXoL"),p=i("668k"),y=i("Zllk"),m=i("f0Wu"),g=i("neNJ"),j=i("wHSu"),v=i("6NWb");let w=(()=>{class t{constructor(){this.faTemperatureHigh=j.f,this.faTint=j.i,this.faWind=j.j,this.faSun=j.e,this.faMoon=j.c}get weather(){return this.dailyWeather.weather}get date(){return m.unix(this.dailyWeather.date).format("DD MMM - dddd")}get icon(){return`http://openweathermap.org/img/wn/${this.weather.icon}@2x.png`}get unitSymbol(){return Object(g.a)(this.unit)}unixToHourMinute(t){return m.unix(t).tz(this.timeZone).format("HH:mm")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=O.Db({type:t,selectors:[["jv-daily-weather"]],inputs:{dailyWeather:"dailyWeather",timeZone:"timeZone",unit:"unit"},decls:28,vars:18,consts:[[1,"row","mt-3","justify-content-md-center"],[1,"col-md-12","col-lg-8"],[1,"card"],[1,"card-body"],[1,"badge","badge-secondary"],[1,"row"],[1,"col-sm-12","col-md-6","align-middle"],[1,"mt-3"],[3,"icon"],[3,"src"]],template:function(t,e){1&t&&(O.Ob(0,"div",0),O.Ob(1,"div",1),O.Ob(2,"div",2),O.Ob(3,"div",3),O.Ob(4,"span",4),O.qc(5),O.Zb(6,"uppercase"),O.Nb(),O.Ob(7,"div",5),O.Ob(8,"div",6),O.Ob(9,"h5",7),O.Kb(10,"fa-icon",8),O.qc(11),O.Nb(),O.Kb(12,"img",9),O.Ob(13,"p"),O.qc(14),O.Nb(),O.Nb(),O.Ob(15,"div",6),O.Ob(16,"p"),O.Kb(17,"fa-icon",8),O.qc(18),O.Nb(),O.Ob(19,"p"),O.Kb(20,"fa-icon",8),O.qc(21),O.Nb(),O.Ob(22,"p"),O.Kb(23,"fa-icon",8),O.qc(24),O.Nb(),O.Ob(25,"p"),O.Kb(26,"fa-icon",8),O.qc(27),O.Nb(),O.Nb(),O.Nb(),O.Nb(),O.Nb(),O.Nb(),O.Nb()),2&t&&(O.zb(5),O.rc(O.ac(6,16,e.date)),O.zb(5),O.dc("icon",e.faTemperatureHigh),O.zb(1),O.uc(" ",e.weather.minTemp," ",e.unitSymbol," ~ ",e.weather.maxTemp," ",e.unitSymbol," "),O.zb(1),O.dc("src",e.icon,O.lc),O.zb(2),O.rc(e.weather.description),O.zb(3),O.dc("icon",e.faTint),O.zb(1),O.sc(" Humidade: ",e.weather.humidity,"% "),O.zb(2),O.dc("icon",e.faWind),O.zb(1),O.sc(" Velocidade do vento: ",e.weather.wind.speed," m/s "),O.zb(2),O.dc("icon",e.faSun),O.zb(1),O.sc(" Nascer do sol: ",e.unixToHourMinute(e.weather.sunrise)," "),O.zb(2),O.dc("icon",e.faMoon),O.zb(1),O.sc(" P\xf4r do sol: ",e.unixToHourMinute(e.weather.sunset)," "))},directives:[v.a],pipes:[n.o],styles:[".align-middle[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}"],changeDetection:0}),t})();function N(t,e){1&t&&O.Kb(0,"jv-loader")}function Z(t,e){if(1&t&&(O.Kb(0,"jv-daily-weather",12),O.Zb(1,"async"),O.Zb(2,"async")),2&t){const t=e.$implicit,i=O.Yb(3);O.dc("dailyWeather",t)("timeZone",O.ac(1,3,i.details$).city.timeZone)("unit",O.ac(2,5,i.unit$))}}function z(t,e){if(1&t&&(O.Mb(0),O.Ob(1,"div",1),O.Ob(2,"div",6),O.Ob(3,"div",7),O.Ob(4,"div",8),O.Ob(5,"h3",9),O.qc(6),O.Zb(7,"async"),O.Zb(8,"async"),O.Nb(),O.Kb(9,"hr"),O.Kb(10,"jv-detailed-weather",10),O.Zb(11,"async"),O.Zb(12,"async"),O.Nb(),O.Nb(),O.Nb(),O.Nb(),O.oc(13,Z,3,7,"jv-daily-weather",11),O.Zb(14,"async"),O.Lb()),2&t){const t=O.Yb(2);O.zb(6),O.tc("",O.ac(7,5,t.details$).city.name,", ",O.ac(8,7,t.details$).city.country,""),O.zb(4),O.dc("weather",O.ac(11,9,t.details$).current)("unit",O.ac(12,11,t.unit$)),O.zb(3),O.dc("ngForOf",O.ac(14,13,t.details$).daily)}}function $(t,e){1&t&&(O.Ob(0,"div"),O.qc(1,"Erro"),O.Nb())}function W(t,e){if(1&t&&(O.oc(0,z,15,15,"ng-container",5),O.Zb(1,"async"),O.oc(2,$,2,0,"div",5),O.Zb(3,"async")),2&t){const t=O.Yb();O.dc("ngIf",!O.ac(1,2,t.error$)),O.zb(2),O.dc("ngIf",O.ac(3,4,t.error$))}}let q=(()=>{class t{constructor(t){this.store=t}ngOnInit(){this.store.dispatch(o()),this.details$=this.store.pipe(Object(a.t)(l)),this.loading$=this.store.pipe(Object(a.t)(u)),this.error$=this.store.pipe(Object(a.t)(h)),this.unit$=this.store.pipe(Object(a.t)(f.a))}}return t.\u0275fac=function(e){return new(e||t)(O.Jb(a.h))},t.\u0275cmp=O.Db({type:t,selectors:[["jv-details"]],decls:7,vars:4,consts:[[1,"container"],[1,"row","mt-3","justify-content-md-center"],[1,"col-md-12"],[4,"ngIf","ngIfElse"],["notLoading",""],[4,"ngIf"],[1,"col-md-12","col-lg-8"],[1,"card"],[1,"card-body"],[1,"card-title"],[3,"weather","unit"],[3,"dailyWeather","timeZone","unit",4,"ngFor","ngForOf"],[3,"dailyWeather","timeZone","unit"]],template:function(t,e){if(1&t&&(O.Ob(0,"div",0),O.Ob(1,"div",1),O.Ob(2,"div",2),O.oc(3,N,1,0,"jv-loader",3),O.Zb(4,"async"),O.Nb(),O.Nb(),O.oc(5,W,4,6,"ng-template",null,4,O.pc),O.Nb()),2&t){const t=O.ic(6);O.zb(3),O.dc("ngIf",O.ac(4,2,e.loading$))("ngIfElse",t)}},directives:[n.k,p.a,y.a,n.j,w],pipes:[n.b],styles:[""]}),t})(),S=(()=>{class t{constructor(t){this.router=t}canActivate(t,e){return!(!t.queryParams.lat||!t.queryParams.lon)||this.router.createUrlTree([""])}}return t.\u0275fac=function(e){return new(e||t)(O.Sb(c.e))},t.\u0275prov=O.Fb({token:t,factory:t.\u0275fac}),t})();const D=Object(a.p)({entity:void 0,loading:!1,error:!1},Object(a.r)(o,t=>Object.assign(Object.assign({},t),{entity:void 0,loading:!0,error:!1})),Object(a.r)(s,(t,{entity:e})=>Object.assign(Object.assign({},t),{entity:e,loading:!1})),Object(a.r)(b,t=>Object.assign(Object.assign({},t),{loading:!1,error:!0})));function T(t,e){return D(t,e)}var K=i("itXk"),M=i("zp1y"),k=i("5+tZ"),x=i("JIr8"),H=i("lJxs");const I=Object(a.o)("router"),F=Object(a.q)(I,t=>t&&t.state||{}),J=Object(a.q)(F,t=>t&&t.queryParams||{});var L=i("d3tU");let C=(()=>{class t{constructor(t,e,i){this.actions$=t,this.store=e,this.weatherService=i,this.loadCurrentWeather$=Object(r.c)(()=>this.actions$.pipe(Object(r.d)(o),Object(M.a)(this.store.pipe(Object(a.t)(J))),Object(k.a)(([,t])=>Object(K.a)([this.weatherService.getCityWeatherByCoord(t.lat,t.lon),this.weatherService.getWeatherDetails(t.lat,t.lon)])),Object(x.a)((t,e)=>(this.store.dispatch(b()),e)),Object(H.a)(([t,e])=>{const i=e;return i.city=Object.assign(Object.assign({},t.city),{timeZone:e.city.timeZone}),s({entity:i})})))}}return t.\u0275fac=function(e){return new(e||t)(O.Sb(r.a),O.Sb(a.h),O.Sb(L.a))},t.\u0275prov=O.Fb({token:t,factory:t.\u0275fac}),t})();var P=i("V/fk");let X=(()=>{class t{}return t.\u0275mod=O.Hb({type:t}),t.\u0275inj=O.Gb({factory:function(e){return new(e||t)},providers:[S],imports:[[n.c,c.g.forChild([{path:"",component:q,canActivate:[S]}]),a.j.forFeature("details",T),r.b.forFeature([C]),P.a,v.b]]}),t})()}}]);