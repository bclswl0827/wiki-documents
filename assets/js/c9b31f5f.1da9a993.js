"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[49802],{15680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>f});var o=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(c,".").concat(d)]||u[d]||g[d]||i;return r?o.createElement(f,a(a({ref:t},l),{},{components:r})):o.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90675:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=r(9668),n=(r(96540),r(15680));const i={description:"Configure_the_Parameters_of_Wio_Tracker_1110",title:"Parameters  Configuration",keywords:["Tracker","Wio"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/configure_param_for_wio_tracker",unlisted:!0,last_update:{date:"9/14/2023",author:"Jessie"}},a=void 0,s={unversionedId:"Network/LoRa_Wio_Series/Wio_Tracker_1110_Dev_Board/Configure_the_parameters",id:"Network/LoRa_Wio_Series/Wio_Tracker_1110_Dev_Board/Configure_the_parameters",title:"Parameters  Configuration",description:"Configure_the_Parameters_of_Wio_Tracker_1110",source:"@site/docs/Network/LoRa_Wio_Series/Wio_Tracker_1110_Dev_Board/Configure_the_parameters.md",sourceDirName:"Network/LoRa_Wio_Series/Wio_Tracker_1110_Dev_Board",slug:"/configure_param_for_wio_tracker",permalink:"/configure_param_for_wio_tracker",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/LoRa_Wio_Series/Wio_Tracker_1110_Dev_Board/Configure_the_parameters.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1694649600,formattedLastUpdatedAt:"Sep 14, 2023",frontMatter:{description:"Configure_the_Parameters_of_Wio_Tracker_1110",title:"Parameters  Configuration",keywords:["Tracker","Wio"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/configure_param_for_wio_tracker",unlisted:!0,last_update:{date:"9/14/2023",author:"Jessie"}},sidebar:"ProductSidebar",previous:{title:"Setup Your Toolchain",permalink:"/setup_toolchain_for_wio_tracker"},next:{title:"Change Antenna Path",permalink:"/change_antenna_path"}},c={},p=[{value:"Region configuration",id:"region-configuration",level:3},{value:"Triad Info configuration",id:"triad-info-configuration",level:3}],l={toc:p},u="wrapper";function g(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,o.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Before starting, please check ",(0,n.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/setup_toolchain_for_wio_tracker"},"Setup your toolchain")," first."),(0,n.yg)("h3",{id:"region-configuration"},"Region configuration"),(0,n.yg)("p",null,"The default region of the factory firmware is EU868, to configure the region, to meet the frequency requirements of different regions, you can follow the steps below to change the region."),(0,n.yg)("p",null,"Replace the 'Region' part in the LoRaWAN example."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},"REGION = SMTC_MODEM_REGION_'Region'\n")),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/set-region.png",alt:"pir",width:800,height:"auto"})),(0,n.yg)("p",null,"Then click ",(0,n.yg)("inlineCode",{parentName:"p"},"Upload")," to upload the program."),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/program.png",alt:"pir",width:800,height:"auto"})),(0,n.yg)("p",null,"You can also use the ",(0,n.yg)("inlineCode",{parentName:"p"},"Serial Monitor")," button in the upper right corner to check the logs."),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/port-monitor.png",alt:"pir",width:800,height:"auto"})),(0,n.yg)("h3",{id:"triad-info-configuration"},"Triad Info configuration"),(0,n.yg)("p",null,"Wio Tracker 1110 Dev board allows users to set the DevEUI, AppEUI, and AppKey, this is required when registering to other network servers."),(0,n.yg)("p",null,"Open the ",(0,n.yg)("inlineCode",{parentName:"p"},"LoRaWAN/TTN Example"),", define the triad info and click ",(0,n.yg)("inlineCode",{parentName:"p"},"Upload"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},"static const uint8_t DEV_EUI[8]  = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };\nstatic const uint8_t JOIN_EUI[8] = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };\nstatic const uint8_t APP_KEY[16] = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };\n")),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/change-3-codes.png",alt:"pir",width:800,height:"auto"})),(0,n.yg)("details",null,(0,n.yg)("summary",null,"Info"),(0,n.yg)("p",null,"Or you can just get the triad information generated by the network server, then fill into the ",(0,n.yg)("inlineCode",{parentName:"p"},"Constants")," part and run it on your board."),(0,n.yg)("p",null,"example: from TTS."),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device3.png",alt:"pir",width:800,height:"auto"}))))}g.isMDXComponent=!0}}]);