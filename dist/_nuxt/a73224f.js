(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{462:function(e,t,n){"use strict";n.r(t);var o=n(200),r=n(527),c=n(520),l=n(523),d=n(524),f=n(407),m=n(521),v=(n(84),{data:function(){return{date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),menu:!1}},computed:{dateRangeText:function(){return this.dates.join(" ~ ")}}}),_=n(91),component=Object(_.a)(v,(function(){var e=this,t=e._self._c;return t(d.a,[t(r.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(l.a,{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[t(m.a,e._g(e._b({attrs:{label:"Picker in menu","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},"v-text-field",r,!1),o))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),t(c.a,{attrs:{range:"","no-title":"",scrollable:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},[t(f.a),e._v(" "),t(o.a,{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v("\n          Cancel\n        ")]),e._v(" "),t(o.a,{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu.save(e.date)}}},[e._v("\n          OK\n        ")])],1)],1)],1),e._v(" "),t(f.a)],1)}),[],!1,null,null,null);t.default=component.exports}}]);