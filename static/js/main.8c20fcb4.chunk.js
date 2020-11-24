(this["webpackJsonpfinding-falcone"]=this["webpackJsonpfinding-falcone"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n.n(c),s=n(18),l=n.n(s),i=n(25),o=n(54),u=n(55),d=n.n(u),j=n(7),b=n(30),p=n(9),h=n(108),f=n(59),O="GET_PLANETS",y="GET_VEHICLES",m="FIND_PLANET",x="LOADING",v="ERROR",g="VALID_PLANET_OPTIONS",C="SELECTED_PLANETS",k="SELECTED_VEHICLES",P="CLEAR";function E(){var e=Object(p.f)(),t=Object(j.b)();return Object(a.jsxs)(h.a,{bg:"dark",variant:"dark",style:{marginBottom:"2rem"},children:[Object(a.jsx)(h.a.Brand,{"data-testid":"navBarBrand",onClick:function(t){return e.push("/")},children:"Finding Falcone!"}),Object(a.jsx)(f.a,{"data-testid":"resetButton",className:"ml-auto",onClick:function(e){t({type:P})},style:{float:"centre"},variant:"outline-info",children:"Reset"})]})}var w=n(110);var D=function(){return Object(a.jsx)(w.a,{className:"text-center",children:Object(a.jsxs)(w.a.Body,{children:[Object(a.jsx)("h1",{children:"404 Page Not Found"}),Object(a.jsx)("h1",{children:Object(a.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})},F=n(106),T=n(61),L=n(105),S=n(26),N=n(63),V=n(107),_=n(13),A=n.n(_),B=n(22),I=n(37),R=n.n(I),H={getPlanets:function(){var e=Object(B.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("https://5f5ff7f790cf8d00165573ed.mockapi.io/planets");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getVehicles:function(){var e=Object(B.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("https://5f5ff7f790cf8d00165573ed.mockapi.io/vehicles");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),findPlanet:function(){var e=Object(B.a)(A.a.mark((function e(t,n){var a,c,r,s,l;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("https://5f5ff7f790cf8d00165573ed.mockapi.io/planets");case 2:return a=e.sent,c=a.data,r=Math.floor(Math.random()*c.length),s=c[r].name,l={planet_name:s},t.includes(s)?l.status="success":l.status="false",e.abrupt("return",l);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},G=n(109),W=r.a.forwardRef((function(e,t){var n=e.children,c=e.onClick,r=e.value;return Object(a.jsxs)(G.a.Group,{children:[Object(a.jsx)(G.a.Label,{as:"h5",style:{display:"block"},children:n}),Object(a.jsxs)(f.a,{style:{minWidth:"8rem"},ref:t,onClick:function(e){e.preventDefault(),c(e)},children:[r||"Select"," \u25bc"]})]})})),M=n(64),J=n(60),K=Object(c.forwardRef)((function(e,t){var n=e.children,r=e.style,s=e.className,l=e["aria-labelledby"],i=Object(c.useState)(""),o=Object(M.a)(i,2),u=o[0],d=o[1];return Object(a.jsxs)("div",{ref:t,style:r,className:s,"aria-labelledby":l,children:[Object(a.jsx)(J.a,{autoFocus:!0,className:"mx-3 my-2 w-auto",placeholder:"Type to filter...",onChange:function(e){return d(e.target.value)},value:u}),Object(a.jsx)("ul",{className:"list-unstyled",children:c.Children.toArray(n).filter((function(e){return!u||e.props.children.toLowerCase().startsWith(u)}))})]})}));function Y(e){var t=e.planetId,n=Object(j.b)(),c=Object(j.c)((function(e){var n=e.formControl.selectedPlanets[t],a=e.formControl.selectedPlanets,c=e.formControl.validPlanetOptions.filter((function(e){return!Object.values(a).includes(e)}));return n?[].concat(Object(N.a)(c),[n]):c})),r=Object(j.c)((function(e){return e.formControl.selectedPlanets[t]})),s=Object(j.c)((function(e){return e.getData.planets})),l=Object(j.c)((function(e){return e.getData.vehicles}));return Object(a.jsx)(w.a,{style:{minHeight:"16rem"},children:Object(a.jsxs)(w.a.Body,{children:[Object(a.jsxs)(V.a,{style:{marginBottom:"1rem"},onSelect:function(e){return n({type:C,payload:Object(S.a)({},t,e)})},children:[Object(a.jsxs)(V.a.Toggle,{value:r,as:W,children:["Destination ",t]}),Object(a.jsx)(V.a.Menu,{as:K,children:c&&c.map((function(e){return Object(a.jsx)(V.a.Item,{eventKey:e,active:e===r,children:e},e)}))})]}),Object(a.jsx)("div",{hidden:!r,onChange:function(e){return n(function(e,t){return function(n,a){var c=a().getData.vehicles,r=a().formControl.selectedVehicles[e];r&&(c[r].remaining=c[r].remaining+1),c[t].remaining=c[t].remaining-1,n({type:k,payload:Object(S.a)({},e,t)}),n({type:y,payload:c})}}(t,e.target.value))},children:Object.keys(l).map((function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{disabled:0===l[e].remaining||l[e].maxDistance<s[r],style:{marginRight:"1rem"},type:"radio",id:"".concat(e).concat(t),name:"vehicle".concat(t),value:e}),Object(a.jsxs)("label",{htmlFor:"".concat(e).concat(t),children:[e," (",l[e].remaining,"/",l[e].total,")"]})]},e)}))})]})})}var q=function(e){var t=e.getData.planets,n=e.getData.vehicles,a=e.formControl.selectedPlanets,c=e.formControl.selectedVehicles,r=0;return Object.keys(c).forEach((function(e){var s=c[e],l=a[e];r+=t[l]/n[s].speed})),r},z=function(e){var t=e.formControl.selectedPlanets,n=e.formControl.selectedVehicles;return 4===Object.values(t).length&&4===Object.values(n).length};var Q=function(){var e,t=Object(j.b)(),n=Object(j.c)(z),c=Object(j.c)(q),r=Object(p.f)(),s=[],l=[];for(e=0;e<4;e++)l.push(Object(a.jsx)(T.a,{md:3,children:Object(a.jsx)(Y,{planetId:e})},"col".concat(e))),(e+1)%4===0&&0!==e&&(s.push(Object(a.jsx)(L.a,{children:l},"row".concat(e))),l=[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(w.a,{style:{margin:"1rem 2rem"},children:[Object(a.jsx)(w.a.Header,{as:"h5",children:"Select planets you want to search in"}),Object(a.jsx)(w.a.Body,{children:s})]}),Object(a.jsx)(w.a,{style:{margin:"2rem 2rem"},children:Object(a.jsxs)(L.a,{children:[Object(a.jsx)(T.a,{style:{textAlign:"center"},children:Object(a.jsx)(f.a,{style:{margin:"0.1rem"},disabled:!n,onClick:function(e){t(function(){var e=Object(B.a)(A.a.mark((function e(t,n){var a,c,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:x,payload:!0}),a=Object.values(n().formControl.selectedPlanets),c=Object.values(n().formControl.selectedVehicles),e.next=6,H.findPlanet(a,c);case 6:r=e.sent,t({type:v,payload:null}),t({type:m,payload:r}),t({type:x,payload:!1}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),t({type:v,payload:e.t0.message}),t({type:x,payload:!1});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n){return e.apply(this,arguments)}}()),r.push("/Result")},variant:"primary",children:"Find Falcone!"})}),Object(a.jsx)(T.a,{children:Object(a.jsxs)("h3",{style:{textAlign:"center"},children:["Time taken: ",c]})})]})})]})};var U=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.getData.planets})),n=Object(j.c)((function(e){return e.getData.loading}));return Object(c.useEffect)((function(){e(function(){var e=Object(B.a)(A.a.mark((function e(t){var n,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:x,payload:!0}),e.next=4,H.getPlanets();case 4:n=e.sent,a={},n.forEach((function(e){return a[e.name]=e.distance})),t({type:O,payload:a}),t({type:v,payload:null}),t({type:x,payload:!1}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),t({type:v,payload:e.t0.message}),t({type:x,payload:!1});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(B.a)(A.a.mark((function e(t){var n,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:x,payload:!0}),e.next=4,H.getVehicles();case 4:n=e.sent,a={},n.forEach((function(e){return a[e.name]={total:e.total_no,remaining:e.total_no,maxDistance:e.max_distance,speed:e.speed}})),t({type:v,payload:null}),t({type:y,payload:a}),t({type:x,payload:!1}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),t({type:v,payload:e.t0.message}),t({type:x,payload:!1});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(c.useEffect)((function(){e({type:g,payload:Object.keys(t)}),e({type:C,payload:{}}),e({type:k,payload:{}})}),[t]),Object(a.jsx)(a.Fragment,{children:n?Object(a.jsx)(F.a,{style:{margin:"auto",display:"block"},animation:"border"}):Object(a.jsx)(Q,{})})};var X=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.getData.hiddenPlanet})),n=Object(j.c)(z),c=Object(j.c)(q),r=Object(p.f)(),s=Object(j.c)((function(e){return e.getData.loading}));return Object(a.jsx)(w.a,{className:"text-center",children:s?Object(a.jsx)(F.a,{style:{margin:"auto",display:"block"},animation:"border"}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(w.a.Header,{as:"h5",children:n?"success"===t.status?"Success! Congratulations on Finding Falcone, King Shan is mighty pleased.":"Failed! Couldn't find Falcone, sad.":"Hmm, you havent explored the maximum number of planets"}),Object(a.jsxs)(w.a.Body,{children:[Object(a.jsxs)(w.a.Title,{hidden:"success"!==t.status,children:["Time taken: ",c]}),Object(a.jsxs)(w.a.Text,{hidden:"success"!==t.status,children:["Planet found: ",t.planet_name]}),Object(a.jsxs)(f.a,{variant:"primary",onClick:function(t){e({type:P}),r.push("/")},children:["Start ",n?"Again":"Playing"]})]})]})})};n(99);var Z=function(){return Object(a.jsx)("footer",{children:Object(a.jsx)("h1",{children:"Good Luck With Your Search"})})};var $=function(){var e=Object(j.c)((function(e){return e.getData.error}));return Object(a.jsxs)(b.a,{children:[Object(a.jsx)(E,{}),e&&Object(a.jsx)("h3",{style:{color:"red",textAlign:"center"},children:e}),Object(a.jsxs)(p.c,{children:[Object(a.jsx)(p.a,{exact:!0,path:"/",component:U}),Object(a.jsx)(p.a,{exact:!0,path:"/Result",component:X}),Object(a.jsx)(p.a,{component:D})]}),Object(a.jsx)(Z,{})]})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,111)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},te=n(8),ne={planets:{},vehicles:{},hiddenPlanet:{status:null,planet_name:null},loading:!1,error:null},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(te.a)(Object(te.a)({},e),{},{loading:t.payload});case v:return Object(te.a)(Object(te.a)({},e),{},{error:t.payload});case O:return Object(te.a)(Object(te.a)({},e),{},{planets:t.payload});case y:return Object(te.a)(Object(te.a)({},e),{},{vehicles:t.payload});case m:return Object(te.a)(Object(te.a)({},e),{},{hiddenPlanet:t.payload});default:return e}},ce={selectedPlanets:{},selectedVehicles:{},validPlanetOptions:[]},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(te.a)(Object(te.a)({},e),{},{selectedPlanets:Object(te.a)(Object(te.a)({},e.selectedPlanets),t.payload)});case k:return Object(te.a)(Object(te.a)({},e),{},{selectedVehicles:Object(te.a)(Object(te.a)({},e.selectedVehicles),t.payload)});case g:return Object(te.a)(Object(te.a)({},e),{},{validPlanetOptions:t.payload});case P:return Object(te.a)(Object(te.a)({},e),{},{selectedPlanets:{},selectedVehicles:{}});default:return e}},se=Object(i.c)({getData:ae,formControl:re});l.a.render(Object(a.jsx)(j.a,{store:Object(i.d)(se,{},Object(i.a)(o.a,d.a)),children:Object(a.jsx)($,{})}),document.getElementById("root")),ee()},99:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.8c20fcb4.chunk.js.map