"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[13517],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>m});var i=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),g=o,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||n;return r?i.createElement(m,a(a({ref:t},c),{},{components:r})):i.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<n;p++)a[p]=r[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}g.displayName="MDXCreateElement"},71359:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var i=r(58168),o=(r(96540),r(15680));const n={description:"This article will show you how to use the Logic Builder of FIN Framwork",title:"reComputer R1000 with FIN Logic Builder",keywords:["Edge Controller","reComputer R1000","FIN","ModbusTCP","LOGIC"],image:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png",slug:"/reComputer_r1000_fin_logic_builder",last_update:{date:"07/16/2024",author:"ShuishengPeng"}},a=void 0,l={unversionedId:"Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/Fin/recomputer_r1000_with-_fin_use_logic_to_alarm",id:"Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/Fin/recomputer_r1000_with-_fin_use_logic_to_alarm",title:"reComputer R1000 with FIN Logic Builder",description:"This article will show you how to use the Logic Builder of FIN Framwork",source:"@site/docs/Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/Fin/recomputer_r1000_with-_fin_use_logic_to_alarm.md",sourceDirName:"Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/Fin",slug:"/reComputer_r1000_fin_logic_builder",permalink:"/reComputer_r1000_fin_logic_builder",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/Fin/recomputer_r1000_with-_fin_use_logic_to_alarm.md",tags:[],version:"current",lastUpdatedBy:"ShuishengPeng",lastUpdatedAt:1721088e3,formattedLastUpdatedAt:"Jul 16, 2024",frontMatter:{description:"This article will show you how to use the Logic Builder of FIN Framwork",title:"reComputer R1000 with FIN Logic Builder",keywords:["Edge Controller","reComputer R1000","FIN","ModbusTCP","LOGIC"],image:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png",slug:"/reComputer_r1000_fin_logic_builder",last_update:{date:"07/16/2024",author:"ShuishengPeng"}},sidebar:"ProductSidebar",previous:{title:"reComputer R1000 with FIN to use modbus TCP/RTU",permalink:"/reComputer_r1000_fin_modbus_tcp_and_rtu"},next:{title:"reComputer R1000 with N3uron",permalink:"/recomputer_r1000_n3uron"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Getting Start",id:"getting-start",level:2},{value:"Hardware Preparation",id:"hardware-preparation",level:3},{value:"Software Preparation",id:"software-preparation",level:3},{value:"Hardware Configuration",id:"hardware-configuration",level:3},{value:"Steps of implement an alarm",id:"steps-of-implement-an-alarm",level:2},{value:"Create new Logic Builder program",id:"create-new-logic-builder-program",level:3},{value:"Configure Block logic",id:"configure-block-logic",level:3},{value:"Alarm demonstration",id:"alarm-demonstration",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.yg)(d,(0,i.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"FIN Framework (FIN) is a software framework with application suites that can integrate, control, manage, analyze, visualize and connect. Its capabilities can be integrated by OEMs into a range of products and services."),(0,o.yg)("p",null,"This article will show you how to use the ",(0,o.yg)("inlineCode",{parentName:"p"},"Logic Builder")," of FIN Framwork, and to implement an alarm using the ",(0,o.yg)("inlineCode",{parentName:"p"},"Logic Builder"),".We monitor the value of a Modbus device. When the value exceeds the critical value, FIN will alarm."),(0,o.yg)("h2",{id:"getting-start"},"Getting Start"),(0,o.yg)("p",null,"Before you start this project, you may need to prepare your hardware and software in advance as described here."),(0,o.yg)("h3",{id:"hardware-preparation"},"Hardware Preparation"),(0,o.yg)("div",{class:"table-center"},(0,o.yg)("table",{class:"table-nobg"},(0,o.yg)("tr",{class:"table-trnobg"},(0,o.yg)("th",{class:"table-trnobg"},"reComputer R1000")),(0,o.yg)("tr",{class:"table-trnobg"}),(0,o.yg)("tr",{class:"table-trnobg"},(0,o.yg)("td",{class:"table-trnobg"},(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png",style:{width:300,height:"auto"}})))),(0,o.yg)("tr",{class:"table-trnobg"}),(0,o.yg)("tr",{class:"table-trnobg"},(0,o.yg)("td",{class:"table-trnobg"},(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,o.yg)("h3",{id:"software-preparation"},"Software Preparation"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Regarding how to install FIN Framwork, you can refer to this ",(0,o.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reComputer_r1000_install_fin/"},"wiki"),"."),(0,o.yg)("li",{parentName:"ul"},"About reComputer R1000 using FIN for Modbus communication, you can refer to this ",(0,o.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reComputer_r1000_use_rs485_modbus_rtu/"},"wiki"),"."),(0,o.yg)("li",{parentName:"ul"},"Using ",(0,o.yg)("a",{parentName:"li",href:"https://modbusmechanic.scifidryer.com/"},"modbusmechanic")," on W10 PC.You can also use other modbus testing tools.")),(0,o.yg)("h3",{id:"hardware-configuration"},"Hardware Configuration"),(0,o.yg)("p",null,"For ModbusTCP, we use Ethernet cables to connect the W10 PC and reComputer R1000 to a switch to ensure that they are on the same network segment."),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png",alt:"pir",width:"500",height:"auto"})),(0,o.yg)("h2",{id:"steps-of-implement-an-alarm"},"Steps of implement an alarm"),(0,o.yg)("h3",{id:"create-new-logic-builder-program"},"Create new Logic Builder program"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 1"),": First click the directory bar at the top to switch the system directory to the desired target location."),(0,o.yg)("center",null,(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Logic_path_location.png"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 2"),": Click ",(0,o.yg)("inlineCode",{parentName:"p"},"Logic Builder => new")," on the setting interface, and the following pop-up window will appear:"),(0,o.yg)("center",null,(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Logic_create_logic.png"})),(0,o.yg)("p",null,"To fill in the following parameters:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Name")," - Name of the program"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Description")," - Description for what the program is for/does"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Program On")," -  Used to specify what the program will run on"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Points")," - Able to choose points from the equip to use"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Tags")," - Find tags used on equip or refs"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Project Variables")," - If other project variables exist on other programs, it provides a list of variables that can be used in the new program being create"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Absolute Points")," - Able to add hardcoded points based on their id")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"Points")," can enter multiple points, but we only entered one here. After filling in the information, click ",(0,o.yg)("inlineCode",{parentName:"p"},"OK")," and click ",(0,o.yg)("inlineCode",{parentName:"p"},"Edit")," in the pop-up window on the right to enter the Logic editing interface."),(0,o.yg)("center",null,(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_1.gif"})),(0,o.yg)("h3",{id:"configure-block-logic"},"Configure Block logic"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 1"),": Add an ",(0,o.yg)("inlineCode",{parentName:"p"},"if")," block. There are two ways to add blocks in the workspace. The first is to click on the port of a block to add it, as shown in the figure:"),(0,o.yg)("center",null,(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_2.gif"})),(0,o.yg)("p",null,"The second way is to add through the search box in the lower left corner, as shown in the figure:"),(0,o.yg)("center",null,(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_3.gif"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 2"),": Add the data points to be judged. On the left, you can see the data points we introduced when we created the Logic Builder program. It has two functions: ",(0,o.yg)("inlineCode",{parentName:"p"},"get")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"set"),". Our logic is to determine whether the sensor value exceeds the critical value, so we choose ",(0,o.yg)("inlineCode",{parentName:"p"},"get")," here. . Click ",(0,o.yg)("inlineCode",{parentName:"p"},"get")," and drag it into the workspace, and a ",(0,o.yg)("inlineCode",{parentName:"p"},"sensor")," block will appear."),(0,o.yg)("center",null,(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_4.gif"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 3"),": Add the ",(0,o.yg)("inlineCode",{parentName:"p"},">=")," block. We need to determine whether the sensor value exceeds the critical value, so we need to add a ",(0,o.yg)("inlineCode",{parentName:"p"},">=")," block, which will output a result to the ",(0,o.yg)("inlineCode",{parentName:"p"},"if")," block. The ",(0,o.yg)("inlineCode",{parentName:"p"},"if")," block determines the next step by judging the result of the ",(0,o.yg)("inlineCode",{parentName:"p"},">=")," block. action. Here we set the critical value to ",(0,o.yg)("inlineCode",{parentName:"p"},"23"),"."),(0,o.yg)("center",null,(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_5.gif"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 4"),": Add a delay block. Sometimes we need to make the system more anti-interference, we can add a delay module, and the alarm will only occur after a certain condition is met for a certain period of time. We set the delay time to 3s and connect the output of the module to the ",(0,o.yg)("inlineCode",{parentName:"p"},"if")," block."),(0,o.yg)("center",null,(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_6.gif"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 5"),": Create variables. When the sensor value exceeds the critical value, we can set a flag to mark the sensor value as abnormal. This flag can be implemented by creating a ",(0,o.yg)("inlineCode",{parentName:"p"},"variable"),". ",(0,o.yg)("inlineCode",{parentName:"p"},"variable")," has the following types:"),(0,o.yg)("center",null,(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Logic_variable_type.png"})),(0,o.yg)("p",null,"As shown in the figure, we added a variable named ",(0,o.yg)("inlineCode",{parentName:"p"},"Alarm_bool"),", which also has ",(0,o.yg)("inlineCode",{parentName:"p"},"set")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"get")," function blocks. We connect the ",(0,o.yg)("inlineCode",{parentName:"p"},"set")," block of ",(0,o.yg)("inlineCode",{parentName:"p"},"Alarm_bool")," after the ",(0,o.yg)("inlineCode",{parentName:"p"},"if")," block. When the sensor value exceeds the critical value, it is set to ",(0,o.yg)("inlineCode",{parentName:"p"},"True"),". When the sensor does not exceed the critical value, it is set to ",(0,o.yg)("inlineCode",{parentName:"p"},"False"),"."),(0,o.yg)("center",null,(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_7.gif"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 6"),": Click ",(0,o.yg)("inlineCode",{parentName:"p"},"alarm")," at the top to enter the ",(0,o.yg)("inlineCode",{parentName:"p"},"alarm")," configuration interface. Type ",(0,o.yg)("inlineCode",{parentName:"p"},"alarm")," in the lower left corner to find ",(0,o.yg)("inlineCode",{parentName:"p"},"alarmBlock")," and drag it into the workspace. We need to select the ",(0,o.yg)("inlineCode",{parentName:"p"},"Alarm_bool")," variable we created for ",(0,o.yg)("inlineCode",{parentName:"p"},"alarmBlock"),". When the ",(0,o.yg)("inlineCode",{parentName:"p"},"Alarm_bool")," variable is ",(0,o.yg)("inlineCode",{parentName:"p"},"True"),", the alarm will be triggered, and when the ",(0,o.yg)("inlineCode",{parentName:"p"},"Alarm_bool")," variable is ",(0,o.yg)("inlineCode",{parentName:"p"},"False"),", the alarm will not be triggered."),(0,o.yg)("center",null,(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_8.gif"})),(0,o.yg)("h3",{id:"alarm-demonstration"},"Alarm demonstration"),(0,o.yg)("center",null,(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_9.gif"})),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);