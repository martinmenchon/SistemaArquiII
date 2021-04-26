(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{208:function(e,t,n){"use strict";n.r(t);var c=n(206),a=n(0),i=n.n(a),r=n(158),s=n(170),l=n(196),j=n(209),o=n(169),d=n(34),m=n(194),b=n(195),u=n(125),h=n(171),O=n(161),x=n(179),p=n.n(x),f=n(164),g=n(168),k=n(154),v=n(155),M=n(156),w=n(157),y=n(4),I=function(e){var t=e.open,n=e.setOpen,c=e.formulaName,a=e.formulaSource,i=Object(o.a)().t,r=function(){return n(!1)},s=Object(f.a)("(prefers-color-scheme: dark)"),l={arithmeticMedian:i("formulas.arithmeticMedian"),geometricMedian:i("formulas.geometricMedian"),weightedArithmeticMedian:i("formulas.weightedArithmeticMedian")};return Object(y.jsxs)(g.a,{fullWidth:!0,open:t,onClose:r,children:[Object(y.jsx)(k.a,{children:i("modals.formulaViewer.title",{formula:l[c]})}),Object(y.jsx)(v.a,{children:Object(y.jsx)("img",{style:{width:"100%",background:s?"#fff":void 0},alt:l[c],src:a})}),Object(y.jsx)(M.a,{children:Object(y.jsx)(w.a,{color:"primary",onClick:r,children:"OK"})})]})},B=Object(r.a)((function(e){return Object(s.a)({header:{backgroundColor:e.palette.primary.main},title:{color:"#fff"},icon:{color:e.palette.common.white}})})),N=function(e){var t=e.title,n=e.children,c=e.formulaName,i=e.formulaSource,r=Object(a.useState)(!1),s=Object(d.a)(r,2),l=s[0],j=s[1],x=B(),f=Object(o.a)().t;return Object(y.jsxs)(m.a,{children:[Object(y.jsx)(b.a,{className:x.header,title:Object(y.jsx)(u.a,{className:x.title,variant:"h6",children:t}),subheader:Object(y.jsx)(u.a,{variant:"subtitle1",className:x.title,children:f("main.results.subtitle")}),action:Object(y.jsx)(h.a,{title:f("main.results.openFormula").toString(),children:Object(y.jsx)(O.a,{onClick:function(){return j((function(e){return!e}))},children:Object(y.jsx)(p.a,{className:x.icon})})})}),n,Object(y.jsx)(I,{open:l,setOpen:j,formulaName:c,formulaSource:i})]})},C=n(68),S=n.p+"static/media/arithmeticMedian.1822f913.png",F=Object(r.a)((function(e){return Object(s.a)({chip:{margin:e.spacing(.5)}})})),E=function(){var e=F(),t=Object(o.a)().t,n=Object(C.b)(),c=n.machines,a=n.getArithmeticMedian,i=c.map((function(e){return{machineId:e,value:a(e)}}));return Object(y.jsx)(N,{title:t("main.results.arithmeticMedian"),formulaName:"arithmeticMedian",formulaSource:S,children:Object(y.jsx)(l.a,{children:i.map((function(t){return Object(y.jsx)(j.a,{label:"".concat(t.machineId,": ").concat(t.value.toFixed(2)),className:e.chip},"benchmark-chip-".concat(t.machineId))}))})})},T=n.p+"static/media/geometric.c08a434d.png",W=Object(r.a)((function(e){return Object(s.a)({chip:{margin:e.spacing(.5)},row:{marginBottom:e.spacing(1)}})})),q=function(){var e=W(),t=Object(o.a)().t,n=Object(C.b)(),c=n.machines,a=n.getGeometricMedian;return Object(y.jsx)(N,{title:t("main.results.geometricMedian"),formulaName:"geometricMedian",formulaSource:T,children:Object(y.jsx)(l.a,{children:c.map((function(n){return Object(y.jsxs)("div",{className:e.row,children:[Object(y.jsx)(u.a,{children:t("main.results.geometricSubtitle",{machineId:n})}),c.map((function(t){return Object(y.jsx)(j.a,{className:e.chip,label:"".concat(t,": ").concat(a(t,n).toFixed(2))},"normalized-by-".concat(n,"-").concat(t))}))]},n)}))})})},A=n.p+"static/media/weighted.06a2cd42.png",D=Object(r.a)((function(e){return Object(s.a)({chip:{margin:e.spacing(.5)},row:{marginBottom:e.spacing(1)}})})),K=function(){var e=D(),t=Object(o.a)().t,n=Object(C.b)(),c=n.machines,a=n.getWeightedArithmeticMedian;return Object(y.jsx)(N,{title:t("main.results.weightedMedian"),formulaName:"weightedArithmeticMedian",formulaSource:A,children:Object(y.jsx)(l.a,{children:c.map((function(n){return Object(y.jsxs)("div",{className:e.row,children:[Object(y.jsx)(u.a,{children:t("main.results.weightedSubtitle",{machineId:n})}),c.map((function(t){return Object(y.jsx)(j.a,{className:e.chip,label:"".concat(t,": ").concat(a(t,n).toFixed(2))},"weighted-by-".concat(n,"-").concat(t))}))]},n)}))})})},J=n(201),R=n(205),V=n(204),z=n(200),G=n(202),L=n(203),H=n(122),P=n(160),Q=Object(r.a)((function(e){return Object(s.a)({root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1),backgroundColor:e.palette.primary.main,borderRadius:"4px 4px 0px 0px"},title:{flex:"1 1 100%",color:e.palette.common.white},actionButton:{color:e.palette.common.white}})})),U=function(e){var t=e.isEmpty,n=e.actions,c=Q();return Object(y.jsxs)(P.a,{className:c.root,color:"primary",children:[Object(y.jsx)(u.a,{className:c.title,variant:"h6",id:"tableTitle",component:"div",children:"Benchmarks"}),n&&n.map((function(e){return Object(y.jsx)(h.a,{title:e.title,children:Object(y.jsx)("span",{children:Object(y.jsx)(O.a,{"aria-label":"".concat(e.title," toolbar action"),onClick:e.handler,disabled:t,className:c.actionButton,children:e.icon})})},e.title)}))]})},X=n(180),Y=n.n(X),Z=n(124),$=n(197),_=n(198),ee=n(207),te=n(153),ne=n(199),ce=n(175),ae=n.n(ce),ie=function(e){var t=e.open,n=e.setOpen,c=Object(C.b)(),i=c.machines,r=c.benchmarks,s=c.deleteMachine,l=c.addMachine,j=Object(a.useState)(!1),m=Object(d.a)(j,2),b=m[0],u=m[1],x=function(){return n(!1)},p=Object(o.a)().t,f=function(){return u(!0)},I=function(e){var t=e.machineId;return Object(y.jsxs)(Z.a,{children:[Object(y.jsx)($.a,{children:t}),Object(y.jsx)(_.a,{children:Object(y.jsx)(h.a,{title:"Eliminar",children:Object(y.jsx)("span",{children:Object(y.jsx)(O.a,{disabled:b,onClick:function(){return function(e){return s(e)}(t)},children:Object(y.jsx)(ae.a,{})})})})})]})},B=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Z.a,{children:Object(y.jsx)(ee.a,{required:!0,id:"new-machine-name",name:"machineID",label:p("modals.editMachines.newMachineId")})}),r.map((function(e){return Object(y.jsx)(Z.a,{children:Object(y.jsx)(ee.a,{required:!0,fullWidth:!0,type:"number",name:e.id,label:p("modals.editMachines.valueForBenchmark",{id:e.id})})},"input-machineValue-".concat(e.id))}))]})};return Object(y.jsx)(g.a,{fullWidth:!0,open:t,onClose:x,children:Object(y.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.namedItem("machineID").value,n=r.map((function(t){return parseInt(e.currentTarget.elements.namedItem(t.id).value)}));l(t,n),u(!1)},children:[Object(y.jsx)(k.a,{children:"Editar M\xe1quinas"}),Object(y.jsx)(v.a,{children:Object(y.jsxs)(te.a,{children:[i.map((function(e){return Object(y.jsx)(I,{machineId:e},"listItem-machine-".concat(e))})),Object(y.jsx)(ne.a,{in:b,children:Object(y.jsx)(B,{})})]})}),Object(y.jsx)(M.a,{children:b?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(w.a,{color:"secondary",type:"reset",onClick:function(){return u(!1)},children:p("modals.editMachines.cancelEditing")}),Object(y.jsx)(w.a,{color:"primary",type:"submit",onClick:f,children:p("modals.editMachines.addNewMachine")})]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(w.a,{color:"primary",onClick:f,children:p("modals.editMachines.addMachine")}),Object(y.jsx)(w.a,{color:"primary",onClick:x,children:"OK"})]})})]})})},re=function(e){var t=e.open,n=e.setOpen,c=Object(C.b)(),i=c.benchmarks,r=c.deleteBenchmark,s=c.addBenchmark,l=c.machines,j=Object(a.useState)(!1),m=Object(d.a)(j,2),b=m[0],u=m[1],x=Object(o.a)().t,p=function(){return n(!1)},f=function(){return u(!0)},I=function(e){var t=e.benchmarkId;return Object(y.jsxs)(Z.a,{children:[Object(y.jsx)($.a,{children:t}),Object(y.jsx)(_.a,{children:Object(y.jsx)(h.a,{title:x("modals.editBenchmarks.deleteBenchmark").toString(),children:Object(y.jsx)("span",{children:Object(y.jsx)(O.a,{disabled:b,onClick:function(){return function(e){return r(e)}(t)},children:Object(y.jsx)(ae.a,{})})})})})]})},B=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Z.a,{children:Object(y.jsx)(ee.a,{required:!0,id:"new-machine-name",name:"benchmarkId",label:x("modals.editBenchmarks.newBenchmarkId")})}),l.map((function(e){return Object(y.jsx)(Z.a,{children:Object(y.jsx)(ee.a,{required:!0,fullWidth:!0,type:"number",name:e,label:x("modals.editBenchmarks.valueForMachine",{machine:e})})},"input-benchmark-".concat(e))}))]})};return Object(y.jsx)(g.a,{fullWidth:!0,open:t,onClose:p,children:Object(y.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.namedItem("benchmarkId").value,n={};l.forEach((function(t){n[t]=parseInt(e.currentTarget.elements.namedItem(t).value)})),s({id:t,values:n}),u(!1)},children:[Object(y.jsx)(k.a,{children:x("modals.editBenchmarks.title")}),Object(y.jsx)(v.a,{children:Object(y.jsxs)(te.a,{children:[i.map((function(e){return Object(y.jsx)(I,{benchmarkId:e.id},"listItem-benchmark-".concat(e.id))})),Object(y.jsx)(ne.a,{in:b,children:Object(y.jsx)(B,{})})]})}),Object(y.jsx)(M.a,{children:b?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(w.a,{color:"secondary",type:"reset",onClick:function(){return u(!1)},children:x("modals.editBenchmarks.cancelEditing")}),Object(y.jsx)(w.a,{color:"primary",type:"submit",onClick:f,children:x("modals.editBenchmarks.addNewBenchmark")})]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(w.a,{color:"primary",onClick:f,children:x("modals.editBenchmarks.addBenchmark")}),Object(y.jsx)(w.a,{color:"primary",onClick:p,children:"OK"})]})})]})})},se=n(77);function le(e){var t=e.data,n=e.machines,c=i.a.useState(null),r=Object(d.a)(c,2),s=r[0],l=r[1],j=Object(a.useState)(!1),m=Object(d.a)(j,2),b=m[0],u=m[1],h=Object(a.useState)(!1),O=Object(d.a)(h,2),x=O[0],p=O[1],f=Object(o.a)().t,g=function(){return l(null)},k=[{label:f("table.optionsMenu.editMahcines"),handler:function(){u(!0),g()},component:"button"},{label:f("table.optionsMenu.editBenchmarks"),handler:function(){p(!0),g()},component:"button"}],v=[{title:f("table.toolbar.edit"),icon:Object(y.jsx)(Y.a,{}),handler:function(e){l(e.currentTarget)}}];return Object(y.jsxs)(z.a,{component:H.a,children:[Object(y.jsx)(U,{actions:v}),Object(y.jsxs)(J.a,{"aria-label":"simple table",children:[Object(y.jsx)(G.a,{children:Object(y.jsx)(L.a,{children:n.map((function(e){return Object(y.jsx)(V.a,{align:"center",children:e},e)}))})}),Object(y.jsx)(R.a,{children:t.map((function(e){return Object(y.jsx)(L.a,{children:Object.values(e.values).map((function(e){return Object(y.jsx)(V.a,{align:"center",children:e},e)}))},"benchmark-".concat(e.id))}))})]}),Object(y.jsx)(se.a,{anchorEl:s,handleClose:g,options:k}),Object(y.jsx)(ie,{open:b,setOpen:u}),Object(y.jsx)(re,{open:x,setOpen:p})]})}t.default=function(){var e=Object(C.b)(),t=e.machines,n=e.benchmarks;return Object(y.jsxs)(c.a,{container:!0,spacing:1,justify:"space-between",children:[Object(y.jsx)(c.a,{item:!0,xs:12,children:Object(y.jsx)(le,{machines:t,data:n})}),Object(y.jsx)(c.a,{item:!0,xs:12,md:4,children:Object(y.jsx)(E,{})}),Object(y.jsx)(c.a,{item:!0,xs:12,md:4,children:Object(y.jsx)(q,{})}),Object(y.jsx)(c.a,{item:!0,xs:12,md:4,children:Object(y.jsx)(K,{})})]})}}}]);
//# sourceMappingURL=4.a34ca155.chunk.js.map