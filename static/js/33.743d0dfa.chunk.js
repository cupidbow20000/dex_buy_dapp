(this.webpackJsonpswitchdex=this.webpackJsonpswitchdex||[]).push([[33],{2109:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return u})),t.d(n,"d",(function(){return s})),t.d(n,"e",(function(){return b}));var i,r=t(10),a=t.n(r),c=t(21);function u(){return i||(i=a.a.createContext({})),i}var o,l=function(e){var n=e.client,t=e.children,i=u();return a.a.createElement(i.Consumer,null,(function(e){return void 0===e&&(e={}),n&&e.client!==n&&(e=Object.assign({},e,{client:n})),Object(c.b)(e.client,5),a.a.createElement(i.Provider,{value:e},t)}))};!function(e){e[e.Query=0]="Query",e[e.Mutation=1]="Mutation",e[e.Subscription=2]="Subscription"}(o||(o={}));var f=new Map;function s(e){var n;switch(e){case o.Query:n="Query";break;case o.Mutation:n="Mutation";break;case o.Subscription:n="Subscription"}return n}function b(e){var n,t,i=f.get(e);if(i)return i;Object(c.b)(!!e&&!!e.kind,1);var r=e.definitions.filter((function(e){return"FragmentDefinition"===e.kind})),a=e.definitions.filter((function(e){return"OperationDefinition"===e.kind&&"query"===e.operation})),u=e.definitions.filter((function(e){return"OperationDefinition"===e.kind&&"mutation"===e.operation})),l=e.definitions.filter((function(e){return"OperationDefinition"===e.kind&&"subscription"===e.operation}));Object(c.b)(!r.length||a.length||u.length||l.length,2),Object(c.b)(a.length+u.length+l.length<=1,3),t=a.length?o.Query:o.Mutation,a.length||u.length||(t=o.Subscription);var s=a.length?a:u.length?u:l;Object(c.b)(1===s.length,4);var b=s[0];n=b.variableDefinitions||[];var d={name:b.name&&"Name"===b.name.kind?b.name.value:"data",type:t,variables:n};return f.set(e,d),d}},2426:function(e,n,t){"use strict";t.r(n),t.d(n,"MarginApp",(function(){return E})),t.d(n,"default",(function(){return E}));var i=t(2109),r=t(10),a=t.n(r),c=t(181),u=t(94),o=t(328),l=t(1),f=t(107),s=t(7),b=t(2120),d=t(456),p=t(2119),h=t(2136),m=a.a.createElement(h.a,null),v=a.a.lazy((function(){return Promise.all([t.e(0),t.e(17)]).then(t.bind(null,2422))})),g=a.a.lazy((function(){return Promise.all([t.e(0),t.e(16)]).then(t.bind(null,2420))})),E=function(){var e=Object(c.e)(s.D);return a.a.createElement(o.a,{theme:e},a.a.createElement(i.a,{client:Object(f.b)()},a.a.createElement(p.a,{toolbar:m},a.a.createElement(b.a,null),a.a.createElement(r.Suspense,{fallback:a.a.createElement(d.a,null)},a.a.createElement(u.d,null,a.a.createElement(u.b,{exact:!0,path:"".concat(l.E,"/lend"),component:v}),a.a.createElement(u.b,{exact:!0,path:"".concat(l.k),component:g}))))))}}}]);