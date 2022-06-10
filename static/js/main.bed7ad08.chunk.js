(this["webpackJsonpreact-movie"]=this["webpackJsonpreact-movie"]||[]).push([[0],{77:function(n,e,t){"use strict";t.r(e);t(0);var c=t(23),o=t.n(c),i=t(14),r=t(11),a=t(7),s=t(6),l=t(22),d=t(9),b="https://api.coinpaprika.com/v1";function j(){return fetch("".concat(b,"/coins")).then((function(n){return n.json()}))}var u=Object(r.b)({key:"isDark",default:!0}),h=t(44),p=t.n(h),x=t(1);var O,f=function(n){var e,t=n.coinId,c=Object(r.c)(u),o=Object(i.useQuery)(["ohlcv",t],(function(){return function(n){var e=Math.ceil(Date.now()/1e3),t=e-604800;return fetch("".concat(b,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}(t)})),a=o.isLoading,s=o.data;return Object(x.jsx)("div",{children:a?"Loading chart...":Object(x.jsx)(p.a,{type:"candlestick",series:[{name:"Price",data:null!==(e=null===s||void 0===s?void 0:s.map((function(n){return{x:n.time_close,y:[n.open.toFixed(3),n.high.toFixed(3),n.low.toFixed(3),n.close.toFixed(3)]}})))&&void 0!==e?e:[]}],options:{theme:{mode:c?"dark":"light"},chart:{height:500,width:500,toolbar:{show:!1},background:"transparent"},plotOptions:{candlestick:{colors:{upward:"#ee5353",downward:"#2e86de"}}},yaxis:{show:!1},xaxis:{type:"numeric",categories:null===s||void 0===s?void 0:s.map((function(n){return n.time_open.substring(5,10)})),labels:{show:!0,hideOverlappingLabels:!1,style:{fontSize:"10px"}},axisBorder:{strokeWidth:5}}}})})},g=s.c.li(O||(O=Object(a.a)(["\n    width: 100%;\n    line-height: 40px;\n    color: black;\n    background-color: ",";\n    margin-bottom: 15px;\n    text-align: center;\n    display: flex;\n    justify-content: space-around;\n    border-radius: 10px;\n    font-weight: bold;\n    color: ",";\n    span {\n        font-weight: normal;\n    }\n"])),(function(n){return n.theme.contentsBgColor}),(function(n){return n.theme.textColor}));var m,v,y,k,w,C,I,L,F,q,z,B=function(n){var e,t,c,o,r,a=n.coinId,s=Object(i.useQuery)(["todayPrice",a],(function(){return function(n){return fetch("".concat(b,"/coins/").concat(n,"/ohlcv/today")).then((function(n){return n.json()}))}(a)}),{refetchInterval:5e3}),l=s.isLoading,d=s.data;return Object(x.jsx)("div",{children:l?"Loading price...":Object(x.jsxs)("ul",{children:[Object(x.jsxs)(g,{children:["Open ",Object(x.jsx)("span",{children:null===d||void 0===d||null===(e=d.at(0))||void 0===e?void 0:e.open.toFixed(3)})]}),Object(x.jsxs)(g,{children:["High ",Object(x.jsx)("span",{children:null===d||void 0===d||null===(t=d.at(0))||void 0===t?void 0:t.high.toFixed(3)})]}),Object(x.jsxs)(g,{children:["Low ",Object(x.jsx)("span",{children:null===d||void 0===d||null===(c=d.at(0))||void 0===c?void 0:c.low.toFixed(3)})]}),Object(x.jsxs)(g,{children:["Volume ",Object(x.jsx)("span",{children:null===d||void 0===d||null===(o=d.at(0))||void 0===o?void 0:o.volume})]}),Object(x.jsxs)(g,{children:["Market cap ",Object(x.jsx)("span",{children:null===d||void 0===d||null===(r=d.at(0))||void 0===r?void 0:r.market_cap})]})]})})},S=s.c.div(m||(m=Object(a.a)(["\n    padding: 0px 20px;\n    max-width: 480px;\n    margin: 0 auto;\n"]))),Q=s.c.header(v||(v=Object(a.a)(["\n    width: 100%;\n    height: 15vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n"]))),P=s.c.h1(y||(y=Object(a.a)(["\n    font-size: 48px;\n    color: ",";\n"])),(function(n){return n.theme.accentColor})),_=s.c.span(k||(k=Object(a.a)(["\n    text-align: center;\n    display: block;\n"]))),D=s.c.div(w||(w=Object(a.a)(["\n    display: flex;\n    justify-content: space-between;\n    background-color: ",";\n    padding: 10px 20px;\n    border-radius: 10px;\n"])),(function(n){return n.theme.contentsBgColor})),A=s.c.div(C||(C=Object(a.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    span:first-child {\n        font-size: 10px;\n        font-weight: 400;\n        text-transform: uppercase;\n        margin-bottom: 5px;\n    }\n"]))),M=s.c.p(I||(I=Object(a.a)(["\n    margin: 20px 0px;\n"]))),E=s.c.div(L||(L=Object(a.a)(["\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    margin: 25px 0px;\n    gap: 10px;\n"]))),J=s.c.span(F||(F=Object(a.a)(["\n    text-align: center;\n    text-transform: uppercase;\n    font-size: 12px;\n    font-weight: 400;\n    background-color: ",";\n    padding: 7px 0px;\n    border-radius: 10px;\n    color: ",";\n    a {\n        display: block;\n    }\n"])),(function(n){return n.theme.contentsBgColor}),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor})),R=s.c.button(q||(q=Object(a.a)(["\n    font-size: 30px;\n    border: none;\n    background-color: transparent;\n    padding: 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 70px;\n    line-height: 15vh;\n    a {\n        display: block;\n    }\n"]))),H=s.c.button(z||(z=Object(a.a)(["\n    position: absolute;\n    right: 0;\n    padding: 0;\n    margin: auto 10px;\n    border: none;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    font-size: 20px;\n    background-color: ",";\n    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);\n    cursor: pointer;\n"])),(function(n){return n.theme.textColor}));var T,U,V,W,$,G,K,N,X=function(){var n=Object(d.g)().coinId,e=Object(d.f)().state,t=Object(d.h)("/:coinId/price"),c=Object(d.h)("/:coinId/chart"),o=Object(r.d)(u),a=Object(r.c)(u),s=Object(i.useQuery)(["info",n],(function(){return function(n){return fetch("".concat(b,"/coins/").concat(n)).then((function(n){return n.json()}))}(n)})),j=s.isLoading,h=s.data,p=Object(i.useQuery)(["tickers",n],(function(){return function(n){return fetch("".concat(b,"/tickers/").concat(n)).then((function(n){return n.json()}))}(n)})),O=p.isLoading,g=p.data,m=j||O;return Object(x.jsxs)(S,{children:[Object(x.jsxs)(Q,{children:[Object(x.jsx)(R,{children:Object(x.jsx)(l.b,{to:"/",children:"\ud83d\udc48"})}),Object(x.jsxs)(P,{children:[null!==e&&void 0!==e&&e.name?e.name:m?"Loading...":null===h||void 0===h?void 0:h.name,Object(x.jsx)(H,{onClick:function(){return o((function(n){return!n}))},children:a?"\ud83c\udf1e":"\ud83c\udf19"})]})]}),m?Object(x.jsx)(_,{children:"Loading..."}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(D,{children:[Object(x.jsxs)(A,{children:[Object(x.jsx)("span",{children:"Rank:"}),Object(x.jsx)("span",{children:null===h||void 0===h?void 0:h.rank})]}),Object(x.jsxs)(A,{children:[Object(x.jsx)("span",{children:"Symbol:"}),Object(x.jsxs)("span",{children:["$",null===h||void 0===h?void 0:h.symbol]})]}),Object(x.jsxs)(A,{children:[Object(x.jsx)("span",{children:"Price:"}),Object(x.jsx)("span",{children:null===g||void 0===g?void 0:g.quotes.USD.price.toFixed(3)})]})]}),Object(x.jsx)(M,{children:null===h||void 0===h?void 0:h.description}),Object(x.jsxs)(D,{children:[Object(x.jsxs)(A,{children:[Object(x.jsx)("span",{children:"Total Suply:"}),Object(x.jsx)("span",{children:null===g||void 0===g?void 0:g.total_supply})]}),Object(x.jsxs)(A,{children:[Object(x.jsx)("span",{children:"Max Supply:"}),Object(x.jsx)("span",{children:null===g||void 0===g?void 0:g.max_supply})]})]}),Object(x.jsxs)(E,{children:[Object(x.jsx)(J,{isActive:null!==c,children:Object(x.jsx)(l.b,{to:"/".concat(n,"/chart"),children:"Chart"})}),Object(x.jsx)(J,{isActive:null!==t,children:Object(x.jsx)(l.b,{to:"/".concat(n,"/price"),children:"Price"})})]}),Object(x.jsxs)(d.c,{children:[Object(x.jsx)(d.a,{path:"/:coinId/price",children:Object(x.jsx)(B,{coinId:n})}),Object(x.jsx)(d.a,{path:"/:coinId/chart",children:Object(x.jsx)(f,{coinId:n})})]})]})]})},Y=t(49),Z=s.c.div(T||(T=Object(a.a)(["\n    padding: 0px 20px;\n    max-width: 480px;\n    margin: 0 auto;\n"]))),nn=s.c.header(U||(U=Object(a.a)(["\n    width: 100%;\n    height: 15vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n"]))),en=s.c.ul(V||(V=Object(a.a)([""]))),tn=s.c.li(W||(W=Object(a.a)(["\n    background-color: ",";\n    color: ",";\n    border-radius: 15px;\n    margin-bottom: 10px;\n    a {\n        padding: 20px;\n        transition: color 0.2s ease-in;\n        display: flex;\n        align-items: center;\n    }\n    &:hover {\n        a {\n            color: ",";\n        }\n    }\n"])),(function(n){return n.theme.contentsBgColor}),(function(n){return n.theme.textColor}),(function(n){return n.theme.accentColor})),cn=s.c.h1($||($=Object(a.a)(["\n    font-size: 48px;\n    color: ",";\n"])),(function(n){return n.theme.accentColor})),on=s.c.img(G||(G=Object(a.a)(["\n    width: 35px;\n    height: 35px;\n    margin-right: 10px;\n"]))),rn=s.c.span(K||(K=Object(a.a)(["\n    text-align: center;\n    display: block;\n"]))),an=s.c.button(N||(N=Object(a.a)(["\n    position: absolute;\n    right: 0;\n    padding: 0;\n    margin: auto 10px;\n    border: none;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    font-size: 20px;\n    background-color: ",";\n    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);\n    cursor: pointer;\n"])),(function(n){return n.theme.textColor}));var sn=function(){var n=Object(r.d)(u),e=Object(r.c)(u),t=Object(i.useQuery)("allCoins",j),c=t.isLoading,o=t.data;return Object(x.jsxs)(Z,{children:[Object(x.jsx)(Y.a,{children:Object(x.jsx)("title",{children:"coin"})}),Object(x.jsxs)(nn,{children:[Object(x.jsx)(cn,{children:"Coins"}),Object(x.jsx)(an,{onClick:function(){return n((function(n){return!n}))},children:e?"\ud83c\udf1e":"\ud83c\udf19"})]}),c?Object(x.jsx)(rn,{children:"Loading..."}):Object(x.jsx)(en,{children:null===o||void 0===o?void 0:o.slice(0,100).map((function(n){return Object(x.jsx)(tn,{children:Object(x.jsxs)(l.b,{to:{pathname:"/".concat(n.id),state:{name:n.name}},children:[Object(x.jsx)(on,{src:"https://coinicons-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase())}),n.name," \u2192"]})},n.id)}))})]})};var ln,dn=function(){return Object(x.jsx)(l.a,{basename:"/react-crypto-tracker",children:Object(x.jsxs)(d.c,{children:[Object(x.jsx)(d.a,{path:"/:coinId",children:Object(x.jsx)(X,{})}),Object(x.jsx)(d.a,{path:"/",children:Object(x.jsx)(sn,{})})]})})},bn=t(52),jn={bgColor:"#2f3640",textColor:"#f5f6fa",accentColor:"#44bd32",contentsBgColor:"rgba(0,0,0,0.5)"},un={bgColor:"#f5f6fa",textColor:"#2f3640",accentColor:"#44bd32",contentsBgColor:"#F9EBC8"},hn=Object(s.b)(ln||(ln=Object(a.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, font, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\toutline: 0;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n\tbackground: transparent;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\n\n:focus {\n\toutline: 0;\n}\n\nins {\n\ttext-decoration: none;\n}\ndel {\n\ttext-decoration: line-through;\n}\n\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n* {\n    box-sizing: border-box;\n}\nbody {\n    font-family: 'Source Sans Pro', sans-serif;\n    background-color: ",";\n    color: ",";\n}\na {\n    text-decoration: none;\n    color: inherit;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var pn=function(){var n=Object(r.c)(u);return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(s.a,{theme:n?jn:un,children:[Object(x.jsx)(hn,{}),Object(x.jsx)(dn,{}),Object(x.jsx)(bn.ReactQueryDevtools,{initialIsOpen:!1})]})})},xn=new i.QueryClient;o.a.render(Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(r.a,{children:Object(x.jsx)(i.QueryClientProvider,{client:xn,children:Object(x.jsx)(pn,{})})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.bed7ad08.chunk.js.map