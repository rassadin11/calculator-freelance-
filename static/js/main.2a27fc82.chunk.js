(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{45:function(t,n,e){},50:function(t,n,e){},51:function(t,n,e){"use strict";e.r(n);var r,o=e(2),c=e.n(o),i=e(31),u=e.n(i),a=(e(45),e(18)),s=e(15),b=e(80),l=e(83),m=e(37),p=e(74),f=e(79),j=e(3),x=Object(m.a)({typography:{fontFamily:["Digital Numbers"].join(",")}}),d=function(t){var n=t.result;console.log(n),isNaN(+n)&&(n=0);for(var e=n.toString().split("");e.length<10;)e.push("z");return Object(j.jsx)(p.a,{theme:x,children:Object(j.jsx)("div",{children:Object(j.jsx)("div",{style:{fontSize:42,marginTop:"24px",fontFamily:"Digital Numbers",lineHeight:1,height:"100%",padding:"22px",background:"linear-gradient(92.94deg, #CAD4C5 0%, #B2BFA5 100%)",boxShadow:"inset 0px 0px 9px rgba(0, 0, 0, 0.25)",borderRadius:"10px"},children:e.map((function(t){return Object(j.jsxs)("span",{style:{position:"relative"},children:["z"!==t?t:Object(j.jsx)("span",{style:{opacity:0,visibility:"hidden",width:0},children:t}),"."!==t&&Object(j.jsx)("span",{style:{position:"absolute",top:5.4,left:0,opacity:.15},children:"0"})]},Object(f.a)())}))})})})},g=e(5),h=e(82);function y(t,n){return Number.parseFloat(t).toExponential(n)}function O(t){var n=t.button,e=t.symbol,o=t.number,c=t.setTemporaryResult,i=t.result,u=t.sendNumber,a=t.computeOperation,s=t.clearNumbers,b=function(){if(o){if(i.toString().split("").length>9)return;c("0"===i?e:i+e)}};return Object(j.jsx)(h.a,{item:!0,className:n,onClick:function(){if(r[0]===e||r[1]===e||r[2]===e||r[3]===e)return function(){return u(e)};if(e===r[4])return function(){return c(String(-1*Number(i)))};if(e===r[5])return function(){return a()};if(e===r[6])return function(){return s()};if(e===r[7]){var t=Number(i)/100;return t.toString().split("").length>10&&(t=Number(y(String(t),4))),function(){return c(t)}}if(e===r[8]){if(i.toString().split("").includes("."))return;return function(){return c("".concat(i,"."))}}return b}(),children:Object(j.jsx)("div",{children:e})})}!function(t){t[t["+"]=0]="+",t[t["-"]=1]="-",t[t.X=2]="X",t[t["\xf7"]=3]="\xf7",t[t["+/-"]=4]="+/-",t[t["="]=5]="=",t[t.AC=6]="AC",t[t["%"]=7]="%",t[t[","]=8]=","}(r||(r={}));var F=e(78),S=Object(F.a)({button:{alignItems:"center",justifyContent:"center",display:"flex",height:"79.46px",background:"#F1F3F6",boxShadow:"-5px -5px 10px #FFFFFF, 5px 5px 10px rgba(55, 84, 170, 0.1)",borderRadius:"20px",margin:"0 7.5px 15px",marginTop:"10px",flex:"0 0 20%",fontFamily:"Montserrat",fontWeight:"bold",fontSize:"29px",color:"#3A4E89",cursor:"pointer",transition:"all .3s ease","&:hover":{boxShadow:"-5px -5px 10px #FFFFFF, 5px 5px 10px rgba(55, 84, 170, 0.4)"}},largeButton:{flex:"0 0 calc(40% + 25px)"},containedButton:{background:"#3A4E89",color:"#fff",fontSize:"29px"}});function v(){var t=S(),n=t.button,e=t.containedButton,o=t.largeButton;return[{button:n,symbol:r[6],number:!1},{button:n,symbol:r[4],number:!1},{button:n,symbol:r[7],number:!1},{button:"".concat(n," ").concat(e),symbol:r[3],number:!1},{button:n,symbol:"7",number:!0},{button:n,symbol:"8",number:!0},{button:n,symbol:"9",number:!0},{button:"".concat(n," ").concat(e),symbol:r[2],number:!1},{button:n,symbol:"4",number:!0},{button:n,symbol:"5",number:!0},{button:n,symbol:"6",number:!0},{button:"".concat(n," ").concat(e),symbol:r[1],number:!1},{button:n,symbol:"1",number:!0},{button:n,symbol:"2",number:!0},{button:n,symbol:"3",number:!0},{button:"".concat(n," ").concat(e),symbol:r[0],number:!1},{button:"".concat(n," ").concat(o),symbol:"0",number:!0},{button:n,symbol:r[8],number:!1},{button:"".concat(n," ").concat(e),symbol:r[5],number:!1}]}function N(t){var n=t.setNumbers,e=t.numbers,r=t.signs,c=t.setSigns,i=t.temporaryResult,u=t.setTemporaryResult,s=t.computeOperation,b=t.clearNumbers,l=function(t){u(""),n([].concat(Object(g.a)(e),[i])),c([].concat(Object(g.a)(r),[t]))};return Object(j.jsx)("div",{children:Object(j.jsx)(h.a,{container:!0,spacing:0,sx:{marginTop:"14px",justifyContent:"space-between"},children:v().map((function(t){return Object(o.createElement)(O,Object(a.a)(Object(a.a)({},t),{},{key:Object(f.a)(),result:i,setTemporaryResult:u,sendNumber:l,computeOperation:s,clearNumbers:b}))}))})})}var k=Object(m.a)({typography:{fontFamily:["Museo","Digital Numbers","Montserrat"].join(",")}}),A={maxWidth:410,padding:"24px",background:"#F1F3F6"},C={fontFamily:"Museo",fontSize:28,letterSpacing:"0.85px",fontWeight:"600",color:"#373A37",lineHeight:"33.8px",fontStyle:"normal"},R=function(){var t=Object(o.useState)([]),n=Object(s.a)(t,2),e=n[0],r=n[1],i=Object(o.useState)([]),u=Object(s.a)(i,2),m=u[0],f=u[1],x=Object(o.useState)("0"),g=Object(s.a)(x,2),h=g[0],O=g[1];c.a.useEffect((function(){console.log(h)}),[h]);return Object(j.jsx)(p.a,{theme:k,children:Object(j.jsx)("div",{children:Object(j.jsxs)(b.a,{sx:Object(a.a)({},A),children:[Object(j.jsx)(l.a,{variant:"h1",component:"div",sx:Object(a.a)({},C),children:"Calculator"}),Object(j.jsx)(d,{result:h}),Object(j.jsx)(N,{setNumbers:r,numbers:e,signs:m,setSigns:f,temporaryResult:h,setTemporaryResult:O,computeOperation:function(){O(function(t,n,e,r){t.push(e),console.log(t,n);var o=+t[0];return t.shift(),t.forEach((function(t,e){var r=n[e]||n[n.length-1];"+"===r&&(o+=+t),"-"===r&&(o-=+t),"X"===r&&(o*=+t),"\xf7"===r&&(o/=+t),console.log(o)})),r([]),o.toString().length>9?y(String(o),4).toString():o.toString()}(e,m,h,r)),f([])},clearNumbers:function(){r([]),f([]),O("0")}})]})})})};var w=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(R,{})})};e(50);u.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.2a27fc82.chunk.js.map