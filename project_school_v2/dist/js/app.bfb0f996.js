(function(t){function e(e){for(var n,a,i=e[0],u=e[1],l=e[2],p=0,d=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);c&&c(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,i=1;i<o.length;i++){var u=o[i];0!==r[u]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},r={app:0},s=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var c=u;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("64a9"),r=o.n(n);r.a},1:function(t,e){},"37f2":function(t,e,o){},"48c4":function(t,e,o){"use strict";var n=o("affc"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Nav"),o("router-view",{key:t.$route.fullPath})],1)},s=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("nav",[o("ul",[o("li",[o("router-link",{attrs:{to:"/professores"}},[t._v("Professores")])],1),o("li",[o("router-link",{attrs:{to:"/alunos"}},[t._v("Alunos")])],1),o("li",{staticStyle:{float:"right"}},[o("router-link",{attrs:{to:"/sobre"}},[t._v("Sobre")])],1)])])])},i=[],u={},l=u,c=(o("48c4"),o("2877")),p=Object(c["a"])(l,a,i,!1,null,"835990d0",null),d=p.exports,f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("titulo",{attrs:{texto:void 0!=t.professorid?"Professor: "+t.professor.nome:"Todos os Alunos"}}),void 0!=t.professorid?o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.nome,expression:"nome"}],attrs:{type:"text",placeholder:"Nome do Aluno"},domProps:{value:t.nome},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addAluno()},input:function(e){e.target.composing||(t.nome=e.target.value)}}}),o("button",{staticClass:"btn-adicionar",staticStyle:{"margin-left":"2em"},on:{click:function(e){return t.addAluno()}}},[t._v("+ Adicionar")])]):t._e(),o("table",{staticClass:"table"},[t._m(0),t.alunos.length?o("tbody",t._l(t.alunos,(function(e,n){return o("tr",{key:n},[o("td",[t._v(t._s(e.id))]),o("router-link",{staticStyle:{cursor:"pointer"},attrs:{tag:"td",to:"/AlunoDetalhe/"+e.id}},[t._v(t._s(e.nome)+" "+t._s(e.sobrenome))]),o("td",[o("button",{staticClass:"btn-remove",on:{click:function(o){return t.remover(e)}}},[t._v("Remover")])])],1)})),0):o("div",{staticClass:"foot"},[t._v("NENHUM ALUNO ENCONTRADO")])])],1)},m=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("th",[t._v("Matricula")]),o("th",[t._v("Nome")]),o("th",[t._v("Opções")])])}],v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{display:"flex"}},[o("h1",[t._v(t._s(t.texto))]),t._t("default"),o("button",{directives:[{name:"show",rawName:"v-show",value:t.btnVoltar,expression:"btnVoltar"}],staticClass:"btn btn-voltar",staticStyle:{"margin-left":"0.1em"},on:{click:function(e){return t.voltar()}}},[t._v("Voltar")])],2)},h=[],_={props:{texto:String,btnVoltar:Boolean},methods:{voltar:function(){this.$router.back()}}},b=_,g=Object(c["a"])(b,v,h,!1,null,"073ead56",null),y=g.exports,x={components:{Titulo:y},data:function(){return{titulo:"ALUNO",professorid:this.$route.params.prof_id,professor:{},nome:"",alunos:[]}},created:function(){var t=this;this.professorid?(this.carregarProfessores(),this.$http.get("http://localhost:3000/alunos?professor.id="+this.professorid).then((function(t){return t.json()})).then((function(e){return t.alunos=e}))):this.$http.get("http://localhost:3000/alunos").then((function(t){return t.json()})).then((function(e){return t.alunos=e}))},props:{},methods:{addAluno:function(){var t=this,e={nome:this.nome,sobrenome:"",professor:{id:this.professor.id,nome:this.professor.nome}};this.$http.post("http://localhost:3000/alunos",e).then((function(t){return t.json()})).then((function(e){t.alunos.push(e),t.nome=""}))},remover:function(t){var e=this;this.$http.delete("http://localhost:3000/alunos/".concat(t.id)).then((function(){var o=e.alunos.indexOf(t);e.alunos.splice(o,1)}))},carregarProfessores:function(){var t=this;this.$http.get("http://localhost:3000/professores/"+this.professorid).then((function(t){return t.json()})).then((function(e){t.professor=e}))}}},P=x,O=(o("60f1"),Object(c["a"])(P,f,m,!1,null,"1701cf30",null)),$=O.exports,A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("titulo",{attrs:{texto:"Professores"}}),o("table",{staticClass:"table"},[t._m(0),t.professores.length?o("tbody",t._l(t.professores,(function(e,n){return o("tr",{key:n},[o("td",[t._v(t._s(e.id))]),o("router-link",{staticStyle:{cursor:"pointer"},attrs:{tag:"td",to:"/alunos/"+e.id}},[t._v(t._s(e.nome))]),o("td",[t._v(t._s(e.qtdAlunos))])],1)})),0):o("div",{staticClass:"foot"},[t._v("NENHUM PROFESSOR ENCONTRADO")])])],1)},j=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("th",[t._v("Registro")]),o("th",[t._v("Nome")]),o("th",[t._v("Alunos")])])}],k=(o("ac6a"),{components:{Titulo:y},data:function(){return{professores:[],alunos:[]}},created:function(){var t=this;this.$http.get("http://localhost:3000/alunos").then((function(t){return t.json()})).then((function(e){t.alunos=e,t.carregarProfessores()}))},props:{},methods:{pegarQtdAlunosProfessor:function(){var t=this;this.professores.forEach((function(e,o){e={id:e.id,nome:e.nome,qtdAlunos:t.alunos.filter((function(t){return t.professor.id==e.id})).length},t.professores[o]=e}))},carregarProfessores:function(){var t=this;this.$http.get("http://localhost:3000/professores").then((function(t){return t.json()})).then((function(e){t.professores=e,t.pegarQtdAlunosProfessor()}))}}}),N=k,q=(o("7231"),Object(c["a"])(N,A,j,!1,null,"6047bde0",null)),C=q.exports,w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Titulo",{attrs:{texto:"Sobre"}}),o("p",[t._v("\n    Lorem, ipsum dolor sit amet consectetur adipisicing elit.\n    Consectetur molestias consequuntur soluta repellat aut voluptate distinctio aperiam\n    quibusdam non, in repellendus delectus cum quos odit aliquid neque illum perferendis\n    voluptatem.\n  ")]),o("p",[t._v("\n    Lorem, ipsum dolor sit amet consectetur adipisicing elit.\n    Consectetur molestias consequuntur soluta repellat aut voluptate distinctio aperiam\n    quibusdam non, in repellendus delectus cum quos odit aliquid neque illum perferendis\n    voluptatem.\n  ")]),o("p",[t._v("\n    Lorem, ipsum dolor sit amet consectetur adipisicing elit.\n    Consectetur molestias consequuntur soluta repellat aut voluptate distinctio aperiam\n    quibusdam non, in repellendus delectus cum quos odit aliquid neque illum perferendis\n    voluptatem.\n  ")])],1)},S=[],E={components:{Titulo:y}},T=E,M=Object(c["a"])(T,w,S,!1,null,"34c4e014",null),R=M.exports,D={name:"app",components:{Alunos:$,Nav:d,Professores:C,Sobre:R}},L=D,V=(o("034f"),Object(c["a"])(L,r,s,!1,null,null,null)),U=V.exports,H=o("8c4f"),J=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Titulo",{attrs:{texto:"Aluno: "+t.aluno.nome+" "+t.aluno.sobrenome,btnVoltar:!0}},[o("button",{staticClass:"btn-editar",staticStyle:{"margin-left":"31em"},on:{click:function(e){return t.editarAluno()}}},[t._v(t._s(this.editar?"Cancelar":"Editar"))])]),o("table",{staticClass:"table"},[o("tbody",[o("tr",[o("td",{staticClass:"colPequeno"},[t._v("Matrícula:")]),o("td",[o("label",[t._v(t._s(t.aluno.id))])])]),o("tr",[o("td",{staticClass:"colPequeno"},[t._v("Nome:")]),o("td",[t.editar?o("input",{directives:[{name:"model",rawName:"v-model",value:t.aluno.nome,expression:"aluno.nome"}],attrs:{type:"text"},domProps:{value:t.aluno.nome},on:{input:function(e){e.target.composing||t.$set(t.aluno,"nome",e.target.value)}}}):o("label",[t._v(t._s(t.aluno.nome))])])]),o("tr",[o("td",{staticClass:"colPequeno"},[t._v("Sobrenome:")]),o("td",[t.editar?o("input",{directives:[{name:"model",rawName:"v-model",value:t.aluno.sobrenome,expression:"aluno.sobrenome"}],attrs:{type:"text"},domProps:{value:t.aluno.sobrenome},on:{input:function(e){e.target.composing||t.$set(t.aluno,"sobrenome",e.target.value)}}}):o("label",[t._v(t._s(t.aluno.sobrenome))])])]),o("tr",[o("td",{staticClass:"colPequeno"},[t._v("Data de Nascimento:")]),o("td",[t.editar?o("input",{directives:[{name:"model",rawName:"v-model",value:t.aluno.nasc,expression:"aluno.nasc"}],attrs:{type:"text"},domProps:{value:t.aluno.nasc},on:{input:function(e){e.target.composing||t.$set(t.aluno,"nasc",e.target.value)}}}):o("label",[t._v(t._s(t.aluno.nasc))])])]),o("tr",[o("td",{staticClass:"colPequeno"},[t._v("Professor:")]),o("td",[t.editar?o("select",{directives:[{name:"model",rawName:"v-model",value:t.aluno.professor,expression:"aluno.professor"}],on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.aluno,"professor",e.target.multiple?o:o[0])}}},t._l(t.professores,(function(e,n){return o("option",{key:n,domProps:{value:e}},[t._v(t._s(e.nome))])})),0):o("label",[t._v(t._s(t.aluno.professor.nome))])])])])]),o("div",[t.editar?o("button",{staticClass:"btn-adicionar",on:{click:function(e){return t.addAluno(t.aluno)}}},[t._v("Salvar Alterações")]):t._e()])],1)},Q=[],B={components:{Titulo:y},data:function(){return{aluno:{professor:{}},professores:[],id:this.$route.params.id,editar:!1,acao:"Editar"}},methods:{editarAluno:function(){this.editar=!this.editar},addAluno:function(t){var e={id:t.id,nome:t.nome,sobrenome:t.sobrenome,nasc:t.nasc,professor:t.professor};this.$http.put("http://localhost:3000/alunos/".concat(e.id),e),this.editar=!this.editar}},created:function(){var t=this;this.$http.get("http://localhost:3000/alunos/"+this.id).then((function(t){return t.json()})).then((function(e){return t.aluno=e})),this.$http.get("http://localhost:3000/professores").then((function(t){return t.json()})).then((function(e){return t.professores=e}))}},F=B,z=(o("5e4a"),Object(c["a"])(F,J,Q,!1,null,"2a6d62c5",null)),G=z.exports;n["a"].use(H["a"]);var I=new H["a"]({routes:[{path:"/professores",nome:"Professores",component:C},{path:"/alunos",nome:"Alunos",component:$},{path:"/alunos/:prof_id",nome:"Alunos",component:$},{path:"/alunodetalhe/:id",nome:"Detalhe",component:G},{path:"/sobre",nome:"Sobre",component:R}]}),K=o("28dd");n["a"].config.productionTip=!1,n["a"].use(K["a"]),new n["a"]({router:I,render:function(t){return t(U)}}).$mount("#app")},"5e4a":function(t,e,o){"use strict";var n=o("966d"),r=o.n(n);r.a},"60f1":function(t,e,o){"use strict";var n=o("37f2"),r=o.n(n);r.a},"64a9":function(t,e,o){},7231:function(t,e,o){"use strict";var n=o("d7db"),r=o.n(n);r.a},"966d":function(t,e,o){},affc:function(t,e,o){},d7db:function(t,e,o){}});
//# sourceMappingURL=app.bfb0f996.js.map