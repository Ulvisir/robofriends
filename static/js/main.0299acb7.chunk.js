(this.webpackJsonprobfriends=this.webpackJsonprobfriends||[]).push([[0],{12:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),i=t(7),s=t.n(i),c=(t(12),t(2)),o=t(3),l=t(5),h=t(4),d=t(0),u=function(e){var n=e.name,t=e.email,a=e.id;return Object(d.jsxs)("div",{className:" tc bg-light-blue dib b3 pa3 ma2 grow bw2 shadow-5",children:[Object(d.jsx)("img",{alt:"robotphotos",src:"https://robohash.org/".concat(a,"?200x200")}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:n}),Object(d.jsx)("p",{children:t})]})]})},m=function(e){var n=e.robots,t=n.map((function(e,t){return Object(d.jsx)(u,{id:n[t].id,name:n[t].name,email:n[t].email},t)}));return Object(d.jsx)("div",{children:t})},b=function(e){var n=e.searchfield,t=e.searchChange;return Object(d.jsxs)("div",{className:"pa3",children:[Object(d.jsx)("input",{value:n,type:"search",placeholder:"search robots",onChange:t}),";"]})},j=[{id:1,name:" Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],f=function(e){return Object(d.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"1000px"},children:e.children})},O=function(e){Object(l.a)(t,e);var n=Object(h.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).state={hasError:!1},a}return Object(o.a)(t,[{key:"componentdDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(d.jsx)("h1",{children:"Ooops, that didn't work"}):this.props.children}}]),t}(r.a.Component),p=function(e){Object(l.a)(t,e);var n=Object(h.a)(t);function t(){var e;return Object(c.a)(this,t),(e=n.call(this)).onSearchChange=function(n){e.setState({searchfield:n.target.value})},e.state={robots:j,searchfield:""},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this,n=this.state.robots.filter((function(n){return n.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{className:"title",children:"RoboFriends"}),Object(d.jsx)(b,{searchChange:this.onSearchChange,searchfield:this.searchfield}),Object(d.jsx)(f,{children:Object(d.jsxs)(O,{children:[" ",Object(d.jsx)(m,{robots:n})," "]})})]})}}]),t}(a.Component),v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,i=n.getLCP,s=n.getTTFB;t(e),a(e),r(e),i(e),s(e)}))};t(14);s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),v()}},[[15,1,2]]]);
//# sourceMappingURL=main.0299acb7.chunk.js.map