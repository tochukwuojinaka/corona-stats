(function(e){function a(a){for(var n,s,o=a[0],l=a[1],c=a[2],u=0,v=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&v.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(a);while(v.length)v.shift()();return r.push.apply(r,c||[]),t()}function t(){for(var e,a=0;a<r.length;a++){for(var t=r[a],n=!0,o=1;o<t.length;o++){var l=t[o];0!==i[l]&&(n=!1)}n&&(r.splice(a--,1),e=s(s.s=t[0]))}return e}var n={},i={app:0},r=[];function s(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=n,s.d=function(e,a,t){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)s.d(t,n,function(a){return e[a]}.bind(null,n));return t},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var d=l;r.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},1:function(e,a){},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-app",[t("app-header"),t("v-content",{staticClass:"pt-8"},[t("router-view")],1),t("app-footer")],1)},r=[],s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("v-container",[t("v-app-bar",{attrs:{app:"",color:"red lighten-1",dense:""}},[t("div",{staticClass:"d-flex align-center"},[t("div",[e._v("CORONA STATS")])]),t("div",{staticClass:"ml-5"},e._l(e.menuItems,(function(a){return t("v-btn",{key:a.name,staticClass:"pa-1 ma-2 hidden-sm-and-down text-capitalize",attrs:{depressed:"",small:"",to:a.path,color:"transparent"}},[e._v(" "+e._s(a.name)+" ")])})),1),t("v-spacer"),t("div",{staticClass:"mx-4 hidden-sm-and-down"},e._l(e.icons,(function(a){return t("v-btn",{key:a.name,attrs:{depressed:"",small:"",color:"transparent",href:a.link}},[t("v-icon",[e._v(e._s(a.name))])],1)})),1),t("v-btn",{staticClass:"hidden-lg-and-up",attrs:{color:"transparent"},on:{click:function(a){e.drawer=!e.drawer}}},[t("v-icon",[e._v("mdi-menu")])],1)],1)],1),t("v-navigation-drawer",{staticClass:"pa-3",attrs:{dark:"",temporary:"",app:"",right:""},model:{value:e.drawer,callback:function(a){e.drawer=a},expression:"drawer"}},[t("v-list",{staticClass:" pa-2 d-flex flex-column justify-center align-start"},e._l(e.menuItems,(function(a){return t("v-list-item",{key:a.name,attrs:{to:a.path}},[t("v-list-item-content",[e._v(" "+e._s(a.name)+" ")])],1)})),1)],1)],1)},o=[],l={name:"Header",data:function(){return{drawer:!1,menuItems:[{name:"Home",icon:"mdi-home",path:"/"},{name:"About",path:"/about"},{name:"Contact",path:"/contact"}],icons:[{name:"mdi-facebook",link:"http://facebook.com/speedadvisors"},{name:"mdi-twitter",link:"http://twitter.com/speedadvisors"},{name:"mdi-instagram",link:"http://instagram.com/speed.consulting"},{name:"mdi-linkedin",link:"http://linkedin.com/company/speed-consulting-limited"}]}}},c=l,d=t("2877"),u=t("6544"),v=t.n(u),p=t("40dc"),m=t("8336"),f=t("a523"),h=t("132d"),g=t("8860"),y=t("da13"),x=t("5d23"),b=t("f774"),_=t("2fa4"),w=Object(d["a"])(c,s,o,!1,null,null,null),C=w.exports;v()(w,{VAppBar:p["a"],VBtn:m["a"],VContainer:f["a"],VIcon:h["a"],VList:g["a"],VListItem:y["a"],VListItemContent:x["a"],VNavigationDrawer:b["a"],VSpacer:_["a"]});var V=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-card",[t("v-footer",{staticClass:"pa-0"},[t("v-card",{staticClass:"text-center pa-5",attrs:{flat:"",tile:"",width:"100%",color:"red lighten-1"}},[t("v-row",[t("v-col",{attrs:{cols:"12",lg:"4",md:"4"}},[t("v-card-text",{staticClass:"pa-5"},[t("div",{staticClass:"display-1"},[e._v("About")]),e._v(" Just an app to display statistical data about the current state of the corona pandemic ")]),t("div",{},e._l(e.icons,(function(a){return t("v-btn",{key:a.name,staticClass:"ma-2",attrs:{depressed:"",small:"",color:"transparent",href:a.link}},[t("v-icon",[e._v(e._s(a.name))])],1)})),1)],1),t("v-col",{attrs:{cols:"12",lg:"4",md:"4"}},[t("v-card-text",{staticClass:"pa-5"},[t("div",{staticClass:"display-1"},[e._v("Contact")]),t("div",[e._v("We are open on weekdays 9:00AM to 5:00PM")]),t("div",{staticClass:"ma-3"},[t("v-icon",[e._v("mdi-map-marker")]),e._v(" Address: Vinland")],1),t("div",{staticClass:"ma-3"},[t("v-icon",[e._v("mdi-phone")]),e._v(" Phone: ")],1),t("div",{staticClass:"ma-3"},[t("v-icon",[e._v("mdi-email")]),e._v(" Email: ")],1)])],1),t("v-col",{attrs:{cols:"12",lg:"4",md:"4"}},[t("v-card-text",{staticClass:"pa-5"},[t("div",{staticClass:"display-1"},[e._v("Subscribe")]),t("div",[e._v("subscribe to our email newsletter")]),t("div",[t("v-form",{staticClass:"pa-5"},[t("v-text-field",{attrs:{outlined:"",placeholder:"Enter your email",type:"email","prepend-inner-icon":"mdi-email"}}),t("v-btn",{attrs:{type:"submit"}},[e._v("Subscribe")])],1)],1)])],1)],1),t("v-divider"),t("v-card-text",{},[e._v(" Copyright © "+e._s((new Date).getFullYear())+" — "),t("strong",[e._v("Corona Stats")])])],1)],1)],1)},k=[],j={name:"Footer",data:function(){return{icons:[{name:"mdi-facebook",link:"http://facebook.com/speedadvisors"},{name:"mdi-twitter",link:"http://twitter.com/speedadvisors"},{name:"mdi-instagram",link:"http://instagram.com/speed.consulting"},{name:"mdi-linkedin",link:"http://linkedin.com/company/speed-consulting-limited"}]}}},T=j,S=t("b0af"),E=t("99d9"),O=t("62ad"),R=t("ce7e"),P=t("553a"),H=t("4bd4"),$=t("0fd9"),M=t("8654"),I=Object(d["a"])(T,V,k,!1,null,null,null),z=I.exports;v()(I,{VBtn:m["a"],VCard:S["a"],VCardText:E["a"],VCol:O["a"],VDivider:R["a"],VFooter:P["a"],VForm:H["a"],VIcon:h["a"],VRow:$["a"],VTextField:M["a"]});var A={name:"App",components:{"app-header":C,"app-footer":z},data:function(){return{}}},D=A,W=t("7496"),F=t("a75b"),L=Object(d["a"])(D,i,r,!1,null,null,null),N=L.exports;v()(L,{VApp:W["a"],VContent:F["a"]});var q=t("f309");n["a"].use(q["a"]);var B=new q["a"]({}),J=t("8c4f"),Y=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[e.loading?t("v-skeleton-loader",{attrs:{type:"article",transition:"fade-transition"}}):e._e(),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}]},[t("div",[t("v-card",{staticClass:"pa-5"},[t("div",{staticClass:"d-flex flex-row justify-space-around"},[t("v-icon",[e._v("mdi-map-marker mdi-16px")]),t("div",{staticClass:"caption"},[e._v("Country: "+e._s(e.location.country))]),t("div",{staticClass:"caption"},[e._v("State: "+e._s(e.location.city))])],1)])],1)])],1)},G=[],K={name:"Home",data:function(){return{loading:!0,loaded:!1,countries:[],location:"",gettingLocation:!1,errorStr:null}},methods:{loaded:function(){console.log("loaded function called"),this.loading=!1}},created:function(){var e=this,a=function a(){"complete"==document.readyState&&(e.loading=!1,e.loaded=!0,document.removeEventListener("readystatechange",a))};document.addEventListener("readystatechange",a),this.$http.get("https://api.covid19api.com/countries").then((function(a){e.countries=a.body})),this.$http.get("http://ip-api.com/json").then((function(a){e.location=a.body}))}},Q=K,U=t("3129"),X=Object(d["a"])(Q,Y,G,!1,null,null,null),Z=X.exports;v()(X,{VCard:S["a"],VIcon:h["a"],VSkeletonLoader:U["a"]});var ee=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div")},ae=[],te={name:"About",data:function(){return{}},methods:{start:function(){console.log("hello")}}},ne=te,ie=Object(d["a"])(ne,ee,ae,!1,null,null,null),re=ie.exports,se=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("v-card",[t("v-parallax",{attrs:{height:"300",src:"/20.jpg"}},[t("div",{staticClass:"d-flex flex-row  justify-space-between"},[t("div",{staticClass:"display-1 "},[e._v("Conferences")]),t("div",{})])])],1),t("div",{staticClass:"d-flex flex-row flex-wrap justify-space-around ma-5"},[t("v-card",{attrs:{"max-width":"800",flat:""}},[t("v-card-title",[e._v(" Conferences ")]),t("v-card-text",[e._v("SPEED Conferences organize industry based conferences which bring together tought leaders, experts, industry leaders and the general Nigerian Business community. The conferences are characterized by insightful discussions, debates and symposium aimed at addressing issues, charting the next course as well as influence public policy development. "),t("p",[e._v("Our flagship conferences;")]),t("ul",[t("li",[e._v("1. Nigeria Employment Conference")]),t("li",[e._v("2. HR and Technology conference")]),t("li",[e._v("3. HR and Finance Conference")]),t("li",[e._v("4. Nigeria Education conference")])])])],1),t("v-card",{staticClass:"pa-5 align-center",attrs:{"max-width":"400",flat:""}},[t("v-img",{attrs:{src:"/14.jpg"}})],1)],1)],1)},oe=[],le={name:"Conferences",data:function(){return{}}},ce=le,de=t("adda"),ue=t("8b9c"),ve=Object(d["a"])(ce,se,oe,!1,null,null,null),pe=ve.exports;v()(ve,{VCard:S["a"],VCardText:E["a"],VCardTitle:E["b"],VImg:de["a"],VParallax:ue["a"]});var me=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("v-card",[t("v-parallax",{attrs:{height:"300",src:"/22.jpg"}},[t("div",{staticClass:"d-flex flex-row  justify-space-between"},[t("div",{staticClass:"display-1 "},[e._v("Contact")]),t("div",{})])])],1),t("div",{staticClass:"d-flex flex-row flex-wrap-reverse justify-space-around ma-5 mt-10"},[t("v-card",{staticClass:"py-3 px-10",attrs:{"min-width":"400",flat:""}},[t("v-card-title",{attrs:{width:"100%"}},[t("div",{staticClass:"display-1 mx-auto"},[e._v("Fill the form")])]),t("v-form",{ref:"contact"},[t("v-text-field",{attrs:{placeholder:"your name",outlined:"",required:"",rules:e.validationRules.nameRules},model:{value:e.formValues.name,callback:function(a){e.$set(e.formValues,"name",a)},expression:"formValues.name"}}),t("v-text-field",{attrs:{placeholder:"Your Email",outlined:"",required:"",rules:e.validationRules.emailRules},model:{value:e.formValues.email,callback:function(a){e.$set(e.formValues,"email",a)},expression:"formValues.email"}}),t("v-text-field",{attrs:{placeholder:"Subject",outlined:""},model:{value:e.formValues.subject,callback:function(a){e.$set(e.formValues,"subject",a)},expression:"formValues.subject"}}),t("v-textarea",{attrs:{placeholder:"Your Message",outlined:""},model:{value:e.formValues.message,callback:function(a){e.$set(e.formValues,"message",a)},expression:"formValues.message"}}),t("v-btn",{staticClass:"mb-4",attrs:{color:"red"},on:{click:e.submit}},[e._v("submit")])],1)],1),t("v-card",{staticClass:"pa-12 mt-5",attrs:{"max-width":"600"}},[t("v-card-title",[t("div",{staticClass:"display-2 my-2"},[e._v("How Can We Help?")])]),t("v-card-title",[t("div",{staticClass:"display-1 my-4"},[e._v("We’d love to hear from you")])]),t("v-card-text",[e._v(" Whether you have a question about features, services, pricing, need a demo, or anything else, our team is ready to answer all your questions ")])],1)],1)],1)},fe=[],he={name:"Contact",data:function(){return{validationRules:{nameRules:[function(e){return e.length>3||"name must be more than 3 characters"}],emailRules:[function(e){return/.+@.+\..+/.test(e)||"must be a valid email address"}]},formValues:{name:"",email:"",subject:"",message:""}}},methods:{submit:function(){this.$refs.contact.validate()?(console.log("validation passed"),console.log(this.formValues)):(console.log("validation failed"),console.log(this.formValues))}}},ge=he,ye=t("a844"),xe=Object(d["a"])(ge,me,fe,!1,null,null,null),be=xe.exports;v()(xe,{VBtn:m["a"],VCard:S["a"],VCardText:E["a"],VCardTitle:E["b"],VForm:H["a"],VParallax:ue["a"],VTextField:M["a"],VTextarea:ye["a"]});var _e=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("v-card",[t("v-parallax",{attrs:{height:"300",src:"/21.jpg"}},[t("div",{staticClass:"d-flex flex-row  justify-space-between"},[t("div",{staticClass:"display-1 "},[e._v("CSR")]),t("div",{})])])],1),t("div",{staticClass:"d-flex flex-row flex-wrap justify-space-around ma-5"},[t("v-card",{staticClass:"pa-5 align-center",attrs:{"max-width":"400",flat:""}},[t("v-img",{attrs:{src:"/14.jpg"}})],1),t("v-card",{attrs:{"max-width":"600",flat:""}},[t("v-card-title",[e._v(" Corporate Social Responsibility ")]),t("v-card-text",[e._v("SPEED Consulting is a socially responsible corporate citizen and we try to live up to it through our CSR programmes. We partner with communities, local government authorities and nongovernmental organizations to drive several initiatives geared towards making social impact in the communities that we serve. The initiatives are usually driven by events, give-away, conferences, workshops, campaigns and sponsorship programmes. ")])],1)],1)],1)},we=[],Ce={name:"Csr",data:function(){return{}}},Ve=Ce,ke=Object(d["a"])(Ve,_e,we,!1,null,null,null),je=ke.exports;v()(ke,{VCard:S["a"],VCardText:E["a"],VCardTitle:E["b"],VImg:de["a"],VParallax:ue["a"]});var Te=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("v-card",[t("v-parallax",{attrs:{height:"300",src:"/17.jpg"}},[t("div",{staticClass:"d-flex flex-row  justify-space-between"},[t("div",{staticClass:"display-1 "},[e._v("People & Organization")]),t("div",{})])])],1),t("div",{staticClass:"d-flex flex-row flex-wrap justify-space-around ma-5"},[t("v-card",{attrs:{"max-width":"350",flat:""}},[t("v-card-text",[e._v(" Human Capital is said to be the most valuable resource of any organization. Ranking highest on the cost profile of any organization its activities cannot be down played . This makes it a very important role in driving economic value for share holders, work place value and service value to customers. SPEED Consulting will assist organization in building a cutting edge and impactful Human Resource function. ")])],1),t("v-card",{staticClass:"pa-5",attrs:{"max-width":"400",flat:""}},[t("v-img",{attrs:{src:"/11.jpg"}})],1),t("v-card",{attrs:{"max-width":"350",flat:""}},[t("v-card-text",[e._v(" Some of our people and organization related services service are; "),t("ul",[t("li",[e._v("Organization Design and Development")]),t("li",[e._v("HR policy and procedure development")]),t("li",[e._v("Small Business HR")]),t("li",[e._v("Organization HR Setup")]),t("li",[e._v("Human Capital valuation and ISO reporting")]),t("li",[e._v("Performance Management")]),t("li",[e._v("Workforce Analytics")]),t("li",[e._v("Workforce planning")]),t("li",[e._v("HR Transformation")])])])],1)],1)],1)},Se=[],Ee={name:"People",data:function(){return{}}},Oe=Ee,Re=Object(d["a"])(Oe,Te,Se,!1,null,null,null),Pe=Re.exports;v()(Re,{VCard:S["a"],VCardText:E["a"],VImg:de["a"],VParallax:ue["a"]});var He=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("v-card",[t("v-parallax",{attrs:{height:"300",src:"/18.jpg"}},[t("div",{staticClass:"d-flex flex-row  justify-space-between"},[t("div",{staticClass:"display-1 "},[e._v("Technology")]),t("div",{})])])],1),t("div",{staticClass:"d-flex flex-row flex-wrap justify-space-around ma-5"},[t("v-card",{attrs:{"max-width":"400",flat:""}},[t("v-card-title",[e._v(" Technology ")]),t("v-card-text",[e._v(" Through our partnerships with leading HR technology companies our technology service offering is in two streams; where we provide technology as a service or as a product by implementing the relevant technology to help improve your processes. "),t("p",{staticClass:"my-1"},[e._v("1. Technology as a Service:")]),t("p",[e._v("We run a bureau service where we use our technology to provide an outsourced payroll service to our clients.")])])],1),t("v-card",{attrs:{"max-width":"400",flat:""}},[t("v-card-text",[t("ul",[t("li",[e._v(" Payroll service")]),t("li",[e._v(" Electronic payment and collection service")]),t("li",[e._v("HRGIS for mapping and manpower planning")]),t("li",[e._v("Human Resource analytics")])]),t("p",{staticClass:"my-1"},[e._v("2. Technology as a product :")]),t("p",[e._v("We act as partners and representatives to notable technology companies to deploy their technology to optimize internal processes such as;")]),t("ul",[t("li",[e._v(" Payroll")]),t("li",[e._v(" Human Resource information System")])])])],1),t("v-card",{staticClass:"pa-5 align-center",attrs:{"max-width":"400",flat:""}},[t("v-img",{attrs:{src:"/12.jpg"}})],1)],1)],1)},$e=[],Me={name:"Technology",data:function(){return{}}},Ie=Me,ze=Object(d["a"])(Ie,He,$e,!1,null,null,null),Ae=ze.exports;v()(ze,{VCard:S["a"],VCardText:E["a"],VCardTitle:E["b"],VImg:de["a"],VParallax:ue["a"]});var De=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("v-card",[t("v-parallax",{attrs:{height:"300",src:"/19.jpg"}},[t("div",{staticClass:"d-flex flex-row  justify-space-between"},[t("div",{staticClass:"display-1 "},[e._v("Training")]),t("div",{})])])],1),t("div",{staticClass:"d-flex flex-row flex-wrap justify-space-around ma-5"},[t("v-card",{attrs:{"max-width":"400",flat:""}},[t("v-card-title",[e._v(" Training ")]),t("v-card-text",[e._v(" The training and development services of SPEED Consulting are carried out with the help of our consultants and a network of facilitators from diverse industries possessing varied levels of experience. Our training focus is in Human Resources, Leadership development and management development. We are accredited by Centre for Management Development and member of Nigerian Institute of Training and Development. ")])],1),t("v-card",{attrs:{"max-width":"400",flat:""}},[t("v-card-text",[e._v(" Our approach usually involves, training needs assessment, role plays, case studies, audio visual aids, with high participant involvement. Our flag ship Courses include ; "),t("ul",[t("li",[e._v("Human Resource Management Programme")]),t("li",[e._v("HR Metrics and Analytics")]),t("li",[e._v("Project Management for Human Resource Managers")]),t("li",[e._v("Finance for Human Resource Managers")]),t("li",[e._v("Human Resource Risk Management")]),t("li",[e._v("Human Resource Data Analyst Programme.")]),t("li",[e._v("Human Capital Valuation and ISO Reporting")])])])],1),t("v-card",{staticClass:"pa-5 align-center",attrs:{"max-width":"400",flat:""}},[t("v-img",{attrs:{src:"/13.jpg"}})],1)],1)],1)},We=[],Fe={name:"Training",data:function(){return{}}},Le=Fe,Ne=Object(d["a"])(Le,De,We,!1,null,null,null),qe=Ne.exports;v()(Ne,{VCard:S["a"],VCardText:E["a"],VCardTitle:E["b"],VImg:de["a"],VParallax:ue["a"]});var Be=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("v-card",[t("v-parallax",{attrs:{height:"300",src:"/23.jpg"}},[t("div",{staticClass:"d-flex flex-row  justify-space-between"},[t("div",{staticClass:"display-1 "},[e._v("SME")]),t("div",{})])])],1),t("div",{staticClass:"d-flex flex-row flex-wrap justify-space-around ma-5"},[t("v-card",{staticClass:"pa-5 align-center",attrs:{"max-width":"400",flat:""}},[t("v-img",{attrs:{src:"/24.jpg"}})],1),t("v-card",{attrs:{"max-width":"600",flat:""}},[t("v-card-title",[e._v(" SME ")]),t("v-card-text",[t("div",{staticClass:"caption"},[e._v("SMEs are critical to economic development within any economy by contributing considerably to the national GDP and private sector employment. However they are unable to overcome the primary obstacle of access to market, access to funding, management and human resources and business processes optimization. ")]),t("div",{staticClass:"caption"},[e._v("SPEED SME Consultants work with clients on strategy, planning and problem solving, and helps clients develop business skills and knowledge. The assistance offered range from designing a business model or marketing plan, to determining which marketing techniques to use and how to use them. The client learns how to carry out market analysis, pre qualification, networking, building partnerships and alliances . We also train them on how to prepare bankable proposals and also facilitate access to finance. We often help clients learn how to plan and implement projects. A small business consultant gives bespoke advice, teaches skills, and brainstorms with the client to produce practical results and enhance strategic thinking.")])])],1)],1)],1)},Je=[],Ye={name:"Sme",data:function(){return{}}},Ge=Ye,Ke=Object(d["a"])(Ge,Be,Je,!1,null,null,null),Qe=Ke.exports;v()(Ke,{VCard:S["a"],VCardText:E["a"],VCardTitle:E["b"],VImg:de["a"],VParallax:ue["a"]});var Ue=[{path:"/",component:Z},{path:"/about",component:re},{path:"/conferences",component:pe},{path:"/contact",component:be},{path:"/csr",component:je},{path:"/people",component:Pe},{path:"/technology",component:Ae},{path:"/training",component:qe},{path:"/sme",component:Qe}],Xe=t("28dd");n["a"].use(Xe["a"]),n["a"].use(J["a"]);var Ze=new J["a"]({routes:Ue,mode:"history"});n["a"].config.productionTip=!1,new n["a"]({vuetify:B,render:function(e){return e(N)},router:Ze}).$mount("#app")}});
//# sourceMappingURL=app.8b8182d3.js.map