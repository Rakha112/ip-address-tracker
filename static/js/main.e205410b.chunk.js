(this["webpackJsonpip-address-tracker"]=this["webpackJsonpip-address-tracker"]||[]).push([[0],{29:function(t,e,c){},51:function(t,e,c){"use strict";c.r(e);var a=c(0),n=c.n(a),r=c(12),i=c.n(r),s=(c(29),c(5)),o=c.n(s),p=c(7),l=c(4),j=c(1),u=c(14);var d=function(t){var e=t.ip,c=Object(a.useState)({ip:"",city:"",country:"",time:"",isp:"",lat:"",lng:""}),n=Object(l.a)(c,2),r=n[0],i=n[1];return Object(a.useEffect)((function(){function t(){return(t=Object(p.a)(o.a.mark((function t(){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.get("https://geo.ipify.org/api/v1?apiKey=at_E5aJ3dqIjuQwcpgr1pLKWxKX5xz92&ipAddress="+String(e));case 3:c=t.sent,i({ip:c.data.ip,city:c.data.location.city,country:c.data.location.country,time:c.data.location.timezone,isp:c.data.isp,lat:c.data.location.lat,lng:c.data.location.lng}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),Object(j.jsxs)("div",{className:"ip__detail",children:[Object(j.jsxs)("div",{className:"ip_address",children:[Object(j.jsx)("p",{children:"IP ADDRESS"}),Object(j.jsx)("h2",{children:r.ip})]}),Object(j.jsxs)("div",{className:"location",children:[Object(j.jsx)("p",{children:"LOCATION"}),Object(j.jsxs)("h2",{children:[r.city,", ",r.country]})]}),Object(j.jsxs)("div",{className:"timezone",children:[Object(j.jsx)("p",{children:"TIMEZONE"}),Object(j.jsxs)("h2",{children:["UTC ",r.time]})]}),Object(j.jsxs)("div",{className:"isp",children:[Object(j.jsx)("p",{children:"ISP"}),Object(j.jsx)("h2",{children:r.isp})]})]})},b=c(53),h=c(54),O=c(57),x=c(55),f=c(56),v=c(14);var y=function(t){var e=t.ip,c=Object(a.useState)({lat:"",lng:"",city:"",country:""}),n=Object(l.a)(c,2),r=n[0],i=n[1],s=[r.lat,r.lng];function u(t){var e=t.coords,c=Object(b.a)();return c.setView(e,c.getZoom()),null}return Object(a.useEffect)((function(){function t(){return(t=Object(p.a)(o.a.mark((function t(){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.get("https://geo.ipify.org/api/v1?apiKey=at_E5aJ3dqIjuQwcpgr1pLKWxKX5xz92&ipAddress="+String(e));case 3:c=t.sent,i({lat:c.data.location.lat,lng:c.data.location.lng,city:c.data.location.city,country:c.data.location.country}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),Object(j.jsx)("div",{className:"map",children:Object(j.jsxs)(h.a,{center:s,zoom:23,scrollWheelZoom:!1,children:[Object(j.jsx)(u,{coords:s}),Object(j.jsx)(O.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(j.jsx)(x.a,{position:s,children:Object(j.jsxs)(f.a,{children:[r.city,", ",r.country,"."]})})]})})},m=c.p+"static/media/icon-arrow.2eaaa5ee.svg",g=c(14);var w=function(){var t=Object(a.useState)([""]),e=Object(l.a)(t,2),c=e[0],n=e[1],r=Object(a.useState)(""),i=Object(l.a)(r,2),s=i[0],u=i[1];return Object(a.useEffect)((function(){function t(){return(t=Object(p.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.get("https://api.ipify.org?format=json");case 3:e=t.sent,n(e.data.ip),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"IP Address Tracker"}),Object(j.jsx)("div",{className:"form",children:Object(j.jsxs)("form",{action:"submit",onSubmit:function(t){!function(t){t.preventDefault(),n(s)}(t)},children:[Object(j.jsx)("input",{onChange:function(t){!function(t){t.preventDefault(),u(t.target.value)}(t)},type:"text",placeholder:"Search for any IP address"}),Object(j.jsx)("button",{type:"submit",children:Object(j.jsx)("img",{src:m,alt:"icon-arrow"})})]})}),Object(j.jsx)(d,{ip:c}),Object(j.jsx)(y,{ip:c})]})};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.e205410b.chunk.js.map