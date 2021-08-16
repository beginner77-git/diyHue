(this.webpackJsonpdiyhue=this.webpackJsonpdiyhue||[]).push([[14],{111:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return f}));var o=c(14),n=c(2),l=c(16),a=c.n(l),s=c(96),i=c(12),r=c(27),u=c(92),d=(c(93),c(6)),j=function(e){var t=e.light,c=e.lightsCatalog,o=e.setMessage,n=e.setType,l=function(){o("Begin light firmware update"),n("none"),n("success")};return Object(d.jsx)(d.Fragment,{children:["native_single","native_multi"].includes(t.protocol)&&"undefined"!==t.protocol_cfg.type&&t.protocol_cfg.version===c[t.protocol_cfg.type].version&&Object(d.jsx)("div",{className:"btn blue",children:Object(d.jsx)(r.c,{title:"Update available",onClick:function(){Object(u.confirmAlert)({title:"Update light "+t.name+" firmware?",message:"Are you sure to do this?",buttons:[{label:"Yes",onClick:function(){return l()}},{label:"No"}]})}})})})},h=c(94),b=c.n(h),g=(c(95),function(e){var t=e.HOST_IP,c=e.api_key,o=e.id,n=e.light,l=e.modelIds,h=e.setType,g=e.setMessage,p=e.lightsCatalog,m=function(){a.a.delete("".concat(t,"/api/").concat(c,"/lights/").concat(o)).then((function(e){console.log(e.data),g("Light successfully deleted"),h("none"),h("success")})).catch((function(e){console.error(e),g("Error occured, check browser console"),h("none"),h("error")}))};return Object(d.jsxs)("div",{className:"card light expanded",children:[Object(d.jsxs)("div",{className:"row1",children:[Object(d.jsx)("div",{className:"icon",children:Object(d.jsx)(i.g,{onClick:function(){a.a.put("".concat(t,"/api/").concat(c,"/lights/").concat(o,"/state"),{alert:"select"}).then((function(e){console.log(e.data),g("Light alerted"),h("none"),h("success")})).catch((function(e){console.error(e),g("Error occured, check browser console"),h("none"),h("error")}))}})}),Object(d.jsxs)("div",{className:"text",children:[n.name," "]})]}),Object(d.jsxs)("div",{className:"row3",children:[Object(d.jsx)(b.a,{options:l,value:n.modelid,onChange:function(e){return c=e.value,console.log(Object(s.a)({},o,c)),void a.a.post("".concat(t,"/light-types"),Object(s.a)({},o,c)).then((function(e){console.log(e.data),g("Modelid updated"),h("none"),h("success")})).catch((function(e){console.error(e),g("Error occured, check browser console"),h("none"),h("error")}));var c},placeholder:"Choose light modelid"}),Object(d.jsx)(j,{light:n,lightsCatalog:p,setMessage:g,setType:h}),Object(d.jsxs)("div",{className:"btn red",children:[Object(d.jsx)(r.a,{title:"Delete",onClick:function(){Object(u.confirmAlert)({title:"Delete light "+n.name,message:"Are you sure to do this?",buttons:[{label:"Yes",onClick:function(){return m()}},{label:"No"}]})}})," "]})]}),Object(d.jsx)("div",{className:"row4",children:Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:["Protocol: ",n.protocol]}),Object(d.jsxs)("li",{children:["IP: ",n.protocol_cfg.ip]})]})}),n.state.reachable||Object(d.jsx)("div",{className:"label",children:"Offline"})]})}),p=c(102),m=c(100),O=function(e){var t=e.setType,c=e.setMessage,l=e.HOST_IP,i=e.API_KEY,r=Object(n.useState)({protocol:"auto"}),u=Object(o.a)(r,2),j=u[0],h=u[1],g=function(e,t){h(Object(m.a)(Object(m.a)({},j),{},Object(s.a)({},e,t)))};return Object(d.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var o={protocol:j.protocol,ip:j.ip,config:Object(p.a)(j,["protocol","ip"])};a.a.post("".concat(l,"/api/").concat(i,"/lights"),o),c("Light added"),t("none"),t("success")}(e)},className:"add-form",children:[Object(d.jsx)(b.a,{options:[{value:"auto",label:"Autodetect"},{value:"domoticz",label:"Domoticz"},{value:"flex",label:"Flex"},{value:"jeedom",label:"Jeedom"},{value:"milight",label:"MiLight"},{value:"mibox",label:"Mi Box"},{value:"wiz",label:"Wiz"}],value:j.protocol,onChange:function(e){return g("protocol",e.value)},placeholder:"Choose light protocol"}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Light Ip"}),Object(d.jsx)("input",{type:"text",placeholder:"192.168.x.x",value:j.ip,onChange:function(e){return g("ip",e.target.value)}})]}),"auto"!==j.protocol&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Name"}),Object(d.jsx)("input",{type:"text",value:j.lightName,onChange:function(e){return g("lightName",e.target.value)},placeholder:"Name used on diyhue"})]}),Object(d.jsx)("div",{className:"form-control",children:Object(d.jsx)(b.a,{options:[{value:"LOM001",label:"On/Off Plug"},{value:"LWB010",label:"Dimmable Light"},{value:"LTW001",label:"Color temperature Light"},{value:"LCT015",label:"Color Light"},{value:"LST002",label:"Color Strip"}],value:j.lightModelID,onChange:function(e){return g("lightModelID",e.value)},placeholder:"Emulated light type"})})]}),("milight"===j.protocol||"mibox"===j.protocol)&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Device ID"}),Object(d.jsx)("input",{type:"text",value:j.miID,onChange:function(e){return g("miID",e.target.value)},placeholder:"0x1234"})]}),Object(d.jsx)(b.a,{options:[{value:"rgbw",label:"RGBW"},{value:"cct",label:"CCT"},{value:"rgb_cct",label:"RGB-CCT"},{value:"rgb",label:"RGB"}],value:j.miModes,onChange:function(e){return g("miModes",e.value)},placeholder:"Choose light mode"}),Object(d.jsx)(b.a,{options:["1","2","3","4"],value:j.miGroups,onChange:function(e){return g("miGroups",e.value)},placeholder:"Choose light group"})]}),"mibox"===j.protocol&&Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Port"}),Object(d.jsx)("input",{type:"number",placeholder:"Mi Box port",value:j.miBoxPort,onChange:function(e){return g("miboxPort",e.target.value)}})]}),"domoticz"===j.protocol&&Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Device ID"}),Object(d.jsx)("input",{type:"text",placeholder:"",value:j.domoticzID,onChange:function(e){return g("domoticzID",e.target.value)}})]}),"jeedom"===j.protocol&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Light Api"}),Object(d.jsx)("input",{type:"text",placeholder:"Light Api",value:j.jeedomlightAPI,onChange:function(e){return g("jeedomlightAPI",e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Light ID"}),Object(d.jsx)("input",{type:"text",placeholder:"Light ID",value:j.jeedomlightID,onChange:function(e){return g("jeedomlightID",e.target.value)}})]})]}),Object(d.jsx)("div",{className:"form-control",children:Object(d.jsx)("input",{type:"submit",value:"Add Light",className:"btn btn-block"})})]})},v=c(90);function f(e){var t=e.HOST_IP,c=e.API_KEY,l=Object(n.useState)({}),s=Object(o.a)(l,2),i=s[0],r=s[1],u=Object(n.useState)({}),j=Object(o.a)(u,2),h=j[0],b=j[1],p=Object(n.useState)([]),m=Object(o.a)(p,2),f=m[0],x=m[1],C=Object(n.useState)("none"),N=Object(o.a)(C,2),y=N[0],I=N[1],L=Object(n.useState)("no message"),D=Object(o.a)(L,2),k=D[0],T=D[1],S=Object(n.useState)(!1),_=Object(o.a)(S,2),P=_[0],w=_[1];return Object(n.useEffect)((function(){var e=function(){void 0!==c&&a.a.get("".concat(t,"/lights")).then((function(e){console.log(e.data),r(e.data)})).catch((function(e){console.error(e)}))};e(),void 0!==c&&a.a.get("".concat(t,"/light-types")).then((function(e){console.log(e.data),x(e.data.result)})).catch((function(e){console.error(e)})),a.a.get("https://raw.githubusercontent.com/diyhue/Lights/master/catalog.json").then((function(e){console.log(e.data),b(e.data)})).catch((function(e){console.error(e)}));var o=setInterval((function(){e()}),2e3);return function(){return clearInterval(o)}}),[t,c]),Object(d.jsxs)("div",{className:"content",children:["none"!==y&&Object(d.jsx)(v.a,{type:y,message:k,duration:"5000",setType:I}),Object(d.jsxs)("div",{className:"cardGrid",children:[Object(d.jsxs)("div",{className:"btn generic",onClick:function(){void 0!==c&&a.a.post("".concat(t,"/api/").concat(c,"/lights"),"").then((function(e){console.log(e.data),T("Searching for new lights..."),I("none"),I("success")})).catch((function(e){console.error(e),T("Error occured, check browser console"),I("none"),I("error")}))},children:["Scan For Lights",Object(d.jsx)("div",{className:"btn btn-block"})]}),Object(d.jsx)("button",{onClick:function(){return w(!P)},className:"generic",style:{},children:"Add light manually"}),P&&Object(d.jsx)(O,{setType:I,setMessage:T,HOST_IP:t,API_KEY:c})]}),Object(d.jsx)("div",{className:"cardGrid",children:Object.entries(i).map((function(e){var n=Object(o.a)(e,2),l=n[0],a=n[1];return Object(d.jsx)(g,{HOST_IP:t,api_key:c,id:l,light:a,modelIds:f,setType:I,setMessage:T,lightsCatalog:h},l)}))})]})}},90:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var o=c(12),n=c(91),l=c.n(n),a=c(6);function s(e){var t=e.type,c=e.message,n=e.duration,s=e.setType;return Object(a.jsx)(l.a,{duration:n,persistOnHover:!0,children:Object(a.jsx)("div",{className:"notificationContainer",children:Object(a.jsxs)("div",{className:"notification ".concat(t),children:[Object(a.jsx)("p",{children:c}),Object(a.jsx)("div",{className:"icon",children:Object(a.jsx)(o.m,{onClick:function(){return s("none")}})})]})})})}}}]);
//# sourceMappingURL=14.1cdbfcb6.chunk.js.map