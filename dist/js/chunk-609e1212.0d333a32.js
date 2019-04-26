(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-609e1212"],{"259a":function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.error?r("div",{staticClass:"alert alert-dismissible alert-danger"},[e._v(e._s(e.error))]):e._e()])},a=[],n={name:"ResourceRetrievalError",props:["error"]},i=n,l=r("2877"),o=Object(l["a"])(i,s,a,!1,null,null,null);o.options.__file="ResourceRetrievalError.vue";t["a"]=o.exports},"4b73":function(e,t,r){"use strict";var s=r("8b14"),a=r.n(s);a.a},"56c8":function(e,t,r){"use strict";function s(e){return e.charAt(0).toUpperCase()+e.slice(1)}r.d(t,"a",function(){return s})},"89dd":function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",{attrs:{id:"page-title"}},[e._v(e._s(e.capitalizeFirstLetter(e.pageTitle)))])])},a=[],n=r("56c8"),i={name:"pageTitle",props:["pageTitle"],methods:{capitalizeFirstLetter:function(e){return Object(n["a"])(e)}}},l=i,o=r("2877"),u=Object(o["a"])(l,s,a,!1,null,null,null);u.options.__file="PageTitle.vue";t["a"]=u.exports},"8b14":function(e,t,r){},aeda:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{directives:[{name:"show",rawName:"v-show",value:e.list,expression:"list"}]},[r("p",{attrs:{id:"total-items"}},[e._v("Total "+e._s(e.listName)+": "+e._s(e.totalItems))]),r("ul",{staticClass:"list-group"},e._l(e.list,function(t){return r("li",{key:t._id,staticClass:"list-group-item",attrs:{href:"#"}},[r(e.view,{tag:"component",attrs:{listItem:t}})],1)}),0)])])},a=[],n={name:"unorderedList",props:["list","listName","totalItems","view"]},i=n,l=(r("4b73"),r("2877")),o=Object(l["a"])(i,s,a,!1,null,"2814a5df",null);o.options.__file="UnorderedList.vue";t["a"]=o.exports},ed81:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container",attrs:{id:"page-content"}},[r("PageTitle",{attrs:{pageTitle:e.pageTitle}}),r("UnorderedList",{attrs:{view:e.view,list:e.users,listName:e.listName,totalItems:e.totalUsers}}),e.error?r("ResourceRetrievalError",{attrs:{error:e.error}}):e._e()],1)},a=[],n=(r("96cf"),r("3b8d")),i=r("bf92"),l=r("259a"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("AvatarImage",{attrs:{user:e.listItem}}),r("router-link",{attrs:{to:"/user/"+e.listItem.username}},[e._v(e._s(e.listItem.username))]),r("br"),r("label",[e._v("\n    Number of posts:\n    "+e._s(e.listItem.number_of_posts)+"\n  ")])],1)},u=[],c=r("6ce2"),p={name:"usersItemView",props:["listItem"],components:{AvatarImage:c["a"]}},m=p,v=r("2877"),d=Object(v["a"])(m,o,u,!1,null,null,null);d.options.__file="UsersItemView.vue";var f=d.exports,_=r("aeda"),b=r("89dd"),g={name:"users",components:{PageTitle:b["a"],ResourceRetrievalError:l["a"],UnorderedList:_["a"]},data:function(){return{users:[],pageTitle:"All Users",listName:"users",view:f,error:""}},computed:{totalUsers:function(){return this.users.length}},mounted:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(i["m"])();case 3:t=e.sent,200===t.status?this.users=t.data:this.error=t.data.message,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(){return e.apply(this,arguments)}return t}()},h=g,w=Object(v["a"])(h,s,a,!1,null,null,null);w.options.__file="Users.vue";t["default"]=w.exports}}]);
//# sourceMappingURL=chunk-609e1212.0d333a32.js.map