"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[60385],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>h});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),g=r,h=p["".concat(l,".").concat(g)]||p[g]||d[g]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(96540),r=a(20053);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,o),hidden:a},t)}},11470:(e,t,a)=>{a.d(t,{A:()=>N});var n=a(9668),r=a(96540),i=a(20053),o=a(23104),s=a(56347),l=a(57485),c=a(31682),u=a(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=d(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[l,c]=h({queryString:a,groupId:n}),[p,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,u.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),y=(()=>{const e=l??p;return g({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),m(e)}),[c,m,i]),tabValues:i}}var y=a(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.a_)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==s&&(p(t),l(n))},g=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:g,onClick:d},o,{className:(0,i.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=m(e);return r.createElement("div",{className:(0,i.A)("tabs-container",f.tabList)},r.createElement(b,(0,n.A)({},e,t)),r.createElement(w,(0,n.A)({},e,t)))}function N(e){const t=(0,y.A)();return r.createElement(v,(0,n.A)({key:String(t)},e))}},97845:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=a(9668),r=(a(96540),a(15680)),i=a(11470),o=a(19365);const s={description:"Get Started with SenseCAP Indicator for Meshtastic",title:"Get Started with Indicator for Meshtastic",keywords:["Meshtastic","Indicator"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/sensecap_indicator_meshtastic",last_update:{date:"10/29/2024",author:"Jessie"}},l=void 0,c={unversionedId:"Network/Meshtastic_Network/SenseCAP_Indicator/sensecap_indicator_meshtastic",id:"Network/Meshtastic_Network/SenseCAP_Indicator/sensecap_indicator_meshtastic",title:"Get Started with Indicator for Meshtastic",description:"Get Started with SenseCAP Indicator for Meshtastic",source:"@site/docs/Network/Meshtastic_Network/SenseCAP_Indicator/sensecap_indicator_meshtastic.md",sourceDirName:"Network/Meshtastic_Network/SenseCAP_Indicator",slug:"/sensecap_indicator_meshtastic",permalink:"/sensecap_indicator_meshtastic",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/Meshtastic_Network/SenseCAP_Indicator/sensecap_indicator_meshtastic.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:173016e4,formattedLastUpdatedAt:"Oct 29, 2024",frontMatter:{description:"Get Started with SenseCAP Indicator for Meshtastic",title:"Get Started with Indicator for Meshtastic",keywords:["Meshtastic","Indicator"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/sensecap_indicator_meshtastic",last_update:{date:"10/29/2024",author:"Jessie"}},sidebar:"ProductSidebar",previous:{title:"Get Started with T1000-E Tracker",permalink:"/sensecap_t1000_e"},next:{title:"Wio-E5",permalink:"/wio_e5_class"}},u={},p=[{value:"Flash Firmware",id:"flash-firmware",level:2},{value:"Get Started",id:"get-started",level:2},{value:"Connect via App",id:"connect-via-app",level:3},{value:"Configure the Parameters",id:"configure-the-parameters",level:3}],d={toc:p},g="wrapper";function h(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/indicator-page.png",alt:"pir",width:800,height:"auto"})),(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap%20indicator"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap%20indicator"},"SenseCAP Indicator")," is a 4-inch touch screen driven by ESP32-S3 and RP2040 Dual-MCU, it supports Meshtastic network now! "),(0,r.yg)("h2",{id:"flash-firmware"},"Flash Firmware"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Video Instruction")),(0,r.yg)("iframe",{width:"100%",height:"500",src:"https://www.youtube.com/embed/55Sz8kHSyV4",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.yg)("p",null,"Visit ",(0,r.yg)("a",{parentName:"p",href:"https://flasher.meshtastic.org/"},"Meshtastic Web Flasher"),"."),(0,r.yg)("p",null,"Select the target device to ",(0,r.yg)("inlineCode",{parentName:"p"},"Seeed SenseCAP Indicator")," and choose the latest firmware, then click ",(0,r.yg)("inlineCode",{parentName:"p"},"Flash"),"."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/indicator-flash.png",alt:"pir",width:800,height:"auto"})),(0,r.yg)("p",null,"Press and hold the button while plugging in the USB cable."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/press-button.png",alt:"pir",width:400,height:"auto"})),(0,r.yg)("p",null,"Enable the ",(0,r.yg)("inlineCode",{parentName:"p"},"Full Erase and Install"),", and click ",(0,r.yg)("inlineCode",{parentName:"p"},"Erase Flash and Install"),"."),(0,r.yg)("p",null,"There will show 2 ports, select the ",(0,r.yg)("inlineCode",{parentName:"p"},"USB serial port")," and click ",(0,r.yg)("inlineCode",{parentName:"p"},"Connect"),"."),(0,r.yg)("admonition",{title:"note",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Please select the ",(0,r.yg)("inlineCode",{parentName:"p"},"USB Serial")," one, not the INDICATOR RP2040.")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect11.png",alt:"pir",width:800,height:"auto"})),(0,r.yg)("h2",{id:"get-started"},"Get Started"),(0,r.yg)("p",null,"Download ",(0,r.yg)("inlineCode",{parentName:"p"},"Meshtastic")," App:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://meshtastic.org/docs/category/apple-apps/"},"IOS App")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://meshtastic.org/docs/category/android-app/"},"Android App"))),(0,r.yg)("h3",{id:"connect-via-app"},"Connect via App"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Power on the device, the device page will display the mac address of the current device.")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name4.png",alt:"pir",width:700,height:"auto"})),(0,r.yg)(i.A,{mdxType:"Tabs"},(0,r.yg)(o.A,{value:"ios",label:"IOS App",mdxType:"TabItem"},(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Select the target device on the Bluetooth panel.")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png",alt:"pir",width:300,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Enter the code and then click ",(0,r.yg)("inlineCode",{parentName:"li"},"Pair")," to connect the device.")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair111.png",alt:"pir",width:800,height:"auto"}))),(0,r.yg)(o.A,{value:"android",label:"Android App",mdxType:"TabItem"},(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Click ",(0,r.yg)("inlineCode",{parentName:"li"},"+")," and choose the target device.")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Enter the code(default code is ",(0,r.yg)("inlineCode",{parentName:"li"},"123456"),") and then click ",(0,r.yg)("inlineCode",{parentName:"li"},"OK")," to connect the device.")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png",alt:"pir",width:300,height:"auto"})))),(0,r.yg)("h3",{id:"configure-the-parameters"},"Configure the Parameters"),(0,r.yg)("p",null,"In order to start communicating over the mesh, you must set your region. This setting controls which frequency range your device uses and should be set according to your regional location."),(0,r.yg)(i.A,{mdxType:"Tabs"},(0,r.yg)(o.A,{value:"ios",label:"IOS App",mdxType:"TabItem"},(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png",alt:"pir",width:600,height:"auto"}))),(0,r.yg)(o.A,{value:"android",label:"Android App",mdxType:"TabItem"},(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png",alt:"pir",width:300,height:"auto"})))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Region List")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},(0,r.yg)("strong",{parentName:"th"},"Region Code")),(0,r.yg)("th",{parentName:"tr",align:"center"},(0,r.yg)("strong",{parentName:"th"},"Description")),(0,r.yg)("th",{parentName:"tr",align:"center"},(0,r.yg)("strong",{parentName:"th"},"Frequency Range (MHz)")),(0,r.yg)("th",{parentName:"tr",align:"center"},(0,r.yg)("strong",{parentName:"th"},"Duty Cycle (%)")),(0,r.yg)("th",{parentName:"tr",align:"center"},(0,r.yg)("strong",{parentName:"th"},"Power Limit (dBm)")))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"UNSET"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Unset"),(0,r.yg)("td",{parentName:"tr",align:"center"},"N/A"),(0,r.yg)("td",{parentName:"tr",align:"center"},"N/A"),(0,r.yg)("td",{parentName:"tr",align:"center"},"N/A")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"US"),(0,r.yg)("td",{parentName:"tr",align:"center"},"United States"),(0,r.yg)("td",{parentName:"tr",align:"center"},"902",".","0 - 928.0"),(0,r.yg)("td",{parentName:"tr",align:"center"},"100"),(0,r.yg)("td",{parentName:"tr",align:"center"},"30")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"EU","_","868"),(0,r.yg)("td",{parentName:"tr",align:"center"},"European Union 868MHz"),(0,r.yg)("td",{parentName:"tr",align:"center"},"869",".","4 - 869.65"),(0,r.yg)("td",{parentName:"tr",align:"center"},"10"),(0,r.yg)("td",{parentName:"tr",align:"center"},"27")))),(0,r.yg)("p",null,"Refer to ",(0,r.yg)("a",{parentName:"p",href:"https://meshtastic.org/docs/configuration/region-by-country/"},"LoRa Region by Country")," for a more comprehensive list."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"p"},"EU_868")," has to adhere to an hourly duty cycle limitation of 10%, calculated every minute on a rolling 1-hour basis. Your device will stop transmitting if you reach it, until it is allowed again.")),(0,r.yg)("p",null,"Now that you have set the LoRa region on your device, you can continue with configuring any ",(0,r.yg)("a",{parentName:"p",href:"https://meshtastic.org/docs/configuration/radio/lora/"},"LoRa Configs")," to suit your needs."))}h.isMDXComponent=!0}}]);