(this["webpackJsonpip-address-tracker"]=this["webpackJsonpip-address-tracker"]||[]).push([[0],{29:function(t,e,c){},51:function(t,e,c){"use strict";c.r(e);var r=c(0),n=c.n(r),a=c(10),i=c.n(a),s=(c(29),c(8)),o=c.n(s),p=c(11),j=c(4),u=c(1),l=c(15);var d=function(t){var e=t.ip,c=Object(r.useState)({ip:"",city:"",country:"",time:"",isp:""}),n=Object(j.a)(c,2),a=n[0],i=n[1];return Object(r.useEffect)((function(){function t(){return(t=Object(p.a)(o.a.mark((function t(){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.get("https://geo.ipify.org/api/v1?apiKey=at_Oipz0K4dVUIircj8WZjgSm9zio6Ky&ipAddress="+String(e));case 3:c=t.sent,i({ip:c.data.ip,city:c.data.location.city,country:c.data.location.country,time:c.data.location.timezone,isp:c.data.isp}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),Object(u.jsxs)("div",{className:"ip__detail",children:[Object(u.jsx)("p",{children:"IP ADDRESS"}),Object(u.jsx)("h2",{children:a.ip}),Object(u.jsx)("p",{children:"LOCATION"}),Object(u.jsxs)("h2",{children:[a.city,", ",a.country]}),Object(u.jsx)("p",{children:"TIMEZONE"}),Object(u.jsxs)("h2",{children:["UTC ",a.time]}),Object(u.jsx)("p",{children:"ISP"}),Object(u.jsx)("h2",{children:a.isp})]})},b=c(53),h=c(56),O=c(54),f=c(55);var x=function(){var t=[51.505,-.09];return Object(u.jsx)("div",{className:"map",children:Object(u.jsxs)(b.a,{center:t,zoom:13,scrollWheelZoom:!1,children:[Object(u.jsx)(h.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(u.jsx)(O.a,{position:t,children:Object(u.jsxs)(f.a,{children:["A pretty CSS3 popup. ",Object(u.jsx)("br",{})," Easily customizable."]})})]})})},m=c.p+"static/media/icon-arrow.2eaaa5ee.svg",v=c(15);var y=function(){var t=Object(r.useState)([""]),e=Object(j.a)(t,2),c=e[0],n=e[1],a=Object(r.useState)(""),i=Object(j.a)(a,2),s=i[0],l=i[1];return Object(r.useEffect)((function(){function t(){return(t=Object(p.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.get("https://api.ipify.org?format=json");case 3:e=t.sent,n(e.data.ip),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"IP Address Tracker"}),Object(u.jsx)("div",{className:"form",children:Object(u.jsxs)("form",{action:"submit",onSubmit:function(t){!function(t){t.preventDefault(),n(s)}(t)},children:[Object(u.jsx)("input",{onChange:function(t){!function(t){t.preventDefault(),l(t.target.value)}(t)},type:"text",placeholder:"Search for any IP address"}),Object(u.jsx)("button",{type:"submit",children:Object(u.jsx)("img",{src:m,alt:"icon-arrow"})})]})}),Object(u.jsx)(d,{ip:c}),Object(u.jsx)(x,{})]})};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.a402dffe.chunk.js.map