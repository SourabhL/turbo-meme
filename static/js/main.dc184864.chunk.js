(this["webpackJsonpmonsters-robodex"]=this["webpackJsonpmonsters-robodex"]||[]).push([[0],[,,,,,,,function(e,n,t){e.exports=t(17)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),c=t(2),r=t.n(c),l=(t(12),t(3)),s=t(4),i=t(5),u=t(6),m=(t(13),t(14),function(e){return a.a.createElement("div",{className:"card-container"},a.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),a.a.createElement("h2",null,e.monster.name),a.a.createElement("p",null,e.monster.email))}),h=(t(15),function(e){return a.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return a.a.createElement(m,{monster:e,key:e.id})})))}),d=(t(16),function(e){var n=e.placeholder,t=e.onSearchChange;return a.a.createElement("input",{className:"search",type:"search",placeholder:n,onChange:t})}),p=function(e){Object(u.a)(t,e);var n=Object(i.a)(t);function t(){var e;return Object(l.a)(this,t),(e=n.call(this)).handleClick=function(){e.setState({name:"Buddy"})},e.handleSearchChange=function(n){e.setState({searchField:n.target.value})},e.state={monsters:[],searchField:""},e}return Object(s.a)(t,[{key:"componentWillMount",value:function(){console.log("Into ... componentWillMount")}},{key:"componentDidMount",value:function(){var e=this;console.log("Into ... componentDidMount"),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({monsters:n})}))}},{key:"componentWillUnmount",value:function(){console.log("Into ... componentWillUnmount")}},{key:"componentWillUpdate",value:function(){console.log("Into ... componentWillUpdate")}},{key:"componentDidUpdate",value:function(){console.log("Into ... componentDidUpdate")}},{key:"componentWillReceiveProps",value:function(){console.log("Into ... componentWillReceiveProps")}},{key:"componentDidCatch",value:function(){console.log("Into ... componentDidCatch")}},{key:"render",value:function(){var e=this.state,n=e.monsters,t=e.searchField,o=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return console.log("Into ... render"),a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Monster Rolodex"),a.a.createElement(d,{onSearchChange:this.handleSearchChange,placeholder:"Search Monsters"}),a.a.createElement(h,{monsters:o,search:this.state.searchField}))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.dc184864.chunk.js.map