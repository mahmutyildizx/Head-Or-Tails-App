(this["webpackJsonphead-or-tails"]=this["webpackJsonphead-or-tails"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/1-lira-tura.7c42669a.png"},function(e,t,a){e.exports=a.p+"static/media/1-lira-yazi.9b70882e.png"},,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),l=a.n(o),c=(a(15),a(16),a(7)),i=a(3),s=a(4),u=a(9),m=a(8),p=(a(17),a(18),a(5)),d=a.n(p),h=a(6),f=a.n(h),y=function(e){var t=e.currentStatus,a=e.donuyor;return r.a.createElement("div",{className:"Coin-container"},r.a.createElement("div",{className:"Coin ".concat(a&&"Coin-rotate")},r.a.createElement("img",{src:d.a,alt:"tura",className:"Tura"===t?"Coin-front":"Coin-back"}),r.a.createElement("img",{src:f.a,alt:"yazi",className:"Yazi"===t?"Coin-front":"Coin-back"})))},E=["Yazi","Tura"],g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).atisYap=function(){n.setState({donuyor:!0});var e,t=(e=E)[Math.floor(Math.random()*e.length)];setTimeout((function(){n.setState({currentStatus:t,gelenler:[].concat(Object(c.a)(n.state.gelenler),[t]),donuyor:!1})}),1e3),t===E[0]?n.setState({yaziGelenToplam:n.state.yaziGelenToplam+1}):t===E[1]&&n.setState({turaGelenToplam:n.state.turaGelenToplam+1}),n.setState({toplamAtis:n.state.toplamAtis+1})},n.state={currentStatus:E[0],gelenler:[],donuyor:!1,yaziGelenToplam:0,turaGelenToplam:0,toplamAtis:0},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.currentStatus,a=e.donuyor,n=e.gelenler,o=e.yaziGelenToplam,l=e.turaGelenToplam,c=e.toplamAtis;return r.a.createElement("div",null,r.a.createElement("h1",null,"Yaz\u0131 ya da Tura"),r.a.createElement(y,{currentStatus:t,donuyor:a}),r.a.createElement("button",{onClick:this.atisYap,className:"btn"},"At\u0131\u015f yap"),n.length>0&&!a&&r.a.createElement("h3",null,t," geldi"),r.a.createElement("h3",null,"Toplam at\u0131\u015f: ",c," "),r.a.createElement("h3",null,"Toplam yaz\u0131: ",o," "),r.a.createElement("h3",null,"Toplam tura: ",l," "))}}]),a}(n.Component);var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.2f7880d3.chunk.js.map