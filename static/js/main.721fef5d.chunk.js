(this["webpackJsonpdigimon-finder"]=this["webpackJsonpdigimon-finder"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/digivice.a5cae623.svg"},,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),i=(n(14),n(3)),s=n(4),l=n(7),m=n(5),u=n(8),h=(n(15),n(6)),d=n.n(h),p=(n(16),n(17),n(18),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{src:e.monster.img}),r.a.createElement("h2",null,e.monster.name),r.a.createElement("h5",null,e.monster.level))}),f=function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(p,{key:e.id,monster:e})})))},g=(n(19),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("div",null,r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n}))}),v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={monsters:[],searchList:""},n.handleChange=function(e){n.setState({searchList:e.target.value})},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://digimon-api.herokuapp.com/api/digimon").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){console.log(this.state.searchList);var e=this.state,t=e.monsters,n=e.searchList,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),r.a.createElement(g,{placeholder:"Search Digimon",handleChange:this.handleChange}),r.a.createElement(f,{className:"card-list",monsters:a})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.721fef5d.chunk.js.map