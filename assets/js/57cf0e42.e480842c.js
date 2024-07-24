"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[64031],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=c(r),d=o,m=l["".concat(p,".").concat(d)]||l[d]||g[d]||s;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3885:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(58168),o=(r(96540),r(15680));const s={description:"SenseCAP Data Logger Introduction",title:"SenseCAP Data Logger",keywords:["SenseCAP"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_Data_Logger_Intro",last_update:{date:"02/28/204",author:"Jessie"}},a=void 0,i={unversionedId:"Sensor/SenseCAP/SenseCAP_Intro/SenseCAP_Data_Logger_Intro",id:"Sensor/SenseCAP/SenseCAP_Intro/SenseCAP_Data_Logger_Intro",title:"SenseCAP Data Logger",description:"SenseCAP Data Logger Introduction",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Intro/SenseCAP_Data_Logger_Intro.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Intro",slug:"/SenseCAP_Data_Logger_Intro",permalink:"/SenseCAP_Data_Logger_Intro",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Intro/SenseCAP_Data_Logger_Intro.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:-55724630400,formattedLastUpdatedAt:"Feb 28, 204",frontMatter:{description:"SenseCAP Data Logger Introduction",title:"SenseCAP Data Logger",keywords:["SenseCAP"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_Data_Logger_Intro",last_update:{date:"02/28/204",author:"Jessie"}},sidebar:"ProductSidebar",previous:{title:"Adding more Grove modules into the Builder",permalink:"/list_of_supported_grove_n_adding_more"},next:{title:"SenseCAP Sensor Hub Data Logger",permalink:"/Sensor/SenseCAP/SenseCAP_Data_Logger/SenseCAP-Sensor-Hub-Data-Logger"}},p={},c=[{value:"\u2728 Contributor Project",id:"-contributor-project",level:2},{value:"SenseCAP Tech Support",id:"sensecap-tech-support",level:2}],u={toc:c},l="wrapper";function g(e){let{components:t,...r}=e;return(0,o.yg)(l,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Data Logger serves as the bridge to up to 200+ sensors covering industrial-level sensors, Grove sensors and Analog/RS485/GPIO sensors."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://sensecap-solution-upload.cdn.seeed.cn/cc/2022/09/8939fbb3c723aea6c946d42bd464ee32-1.png?x-oss-process=image%2Fformat,webp",alt:"pir",width:1e3,height:"auto"})),(0,o.yg)("p",null,"SenseCAP offers two types of Data logger:"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/introduction/hub.png",width:"475"})),(0,o.yg)("th",{parentName:"tr",align:null},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/introduction/log.png",width:"475"})))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"Get One Now!"))),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/SenseCAP-Sensor-Hub-4G-Data-Logger-with-builtin-battery-p-4852.html"},"Get One Now!")))))),(0,o.yg)("h2",{id:"-contributor-project"},"\u2728 Contributor Project"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"We have a task list for updating this page, which is categorized under our ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479"},"contributor project"),", as we are dedicated to enhancing the user experience and providing better support through the development of our wiki platform."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33961929"},"Your contribution to this page")," is essential to us! We really value your input and would greatly appreciate your assistance in generating ideas.")),(0,o.yg)("h2",{id:"sensecap-tech-support"},"SenseCAP Tech Support"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/sensecap",class:"button_tech_support_sensecap"}),(0,o.yg)("a",{href:"https://support.sensecapmx.com/portal/en/home",class:"button_tech_support_sensecap3"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"mailto:support@sensecapmx.com",class:"button_tech_support_sensecap2"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}g.isMDXComponent=!0}}]);