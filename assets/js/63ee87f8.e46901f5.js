"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[39253],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(r),g=a,m=u["".concat(l,".").concat(g)]||u[g]||c[g]||i;return r?n.createElement(m,s(s({ref:t},d),{},{components:r})):n.createElement(m,s({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},47510:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(9668),a=(r(96540),r(15680));const i={description:"reCamera Getting Started",title:"reCamera",keywords:["Edge","reCamera"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/recamera_getting_started",last_update:{date:"09/29/2024",author:"Parker Hu"}},s="reCamera Getting Started",o={unversionedId:"Edge/reCamera/reCamera_Getting_Started",id:"Edge/reCamera/reCamera_Getting_Started",title:"reCamera",description:"reCamera Getting Started",source:"@site/docs/Edge/reCamera/reCamera_Getting_Started.md",sourceDirName:"Edge/reCamera",slug:"/recamera_getting_started",permalink:"/recamera_getting_started",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reCamera/reCamera_Getting_Started.md",tags:[],version:"current",lastUpdatedBy:"Parker Hu",lastUpdatedAt:1727568e3,formattedLastUpdatedAt:"Sep 29, 2024",frontMatter:{description:"reCamera Getting Started",title:"reCamera",keywords:["Edge","reCamera"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/recamera_getting_started",last_update:{date:"09/29/2024",author:"Parker Hu"}},sidebar:"ProductSidebar",previous:{title:"Upgrading BIOS and Installing Drivers",permalink:"/reServer-Update-BIOS-Install-Drivers"},next:{title:"Quantum Mini Linux Development Kit",permalink:"/Quantum-Mini-Linux-Development-Kit"}},l={},p=[{value:"Set up the working environment",id:"set-up-the-working-environment",level:2},{value:"USB NET setup",id:"usb-net-setup",level:3},{value:'<span id="jump1"> Windows </span>',id:"-windows-",level:3},{value:"Install NCM for windows",id:"install-ncm-for-windows",level:4},{value:'<span id="jump2"> Linux </span>',id:"-linux-",level:3},{value:'<span id="jump3"> MacOS </span>',id:"-macos-",level:3},{value:"Computer network error",id:"computer-network-error",level:3},{value:"System update and upgrade",id:"system-update-and-upgrade",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"recamera-getting-started"},"reCamera Getting Started"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reCamera/001.jpg"})),(0,a.yg)("p",null,"reCamera is a combination of a ",(0,a.yg)("strong",{parentName:"p"},"processor")," and a camera ",(0,a.yg)("strong",{parentName:"p"},"sensor"),"."),(0,a.yg)("p",null,"This combination makes reCamera a standalone system that can handle basic detection and control tasks on its own."),(0,a.yg)("h2",{id:"set-up-the-working-environment"},"Set up the working environment"),(0,a.yg)("h3",{id:"usb-net-setup"},"USB NET setup"),(0,a.yg)("p",null,"To use USB networking, we enabled UsbNcm and DHCP by default on the system.\nUsbNcm is driver-free on Linux, macOS, and the latest Windows systems. You can log in to\nrecamera's terminal directly using ",(0,a.yg)("inlineCode",{parentName:"p"},"ssh recamrea@192.168.42.1")," ,",(0,a.yg)("inlineCode",{parentName:"p"},"passwd = recamera")," ."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#jump1"},"Windows")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#jump2"},"Linux")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#jump3"},"MacOS"))),(0,a.yg)("h3",{id:"-windows-"},(0,a.yg)("span",{id:"jump1"}," Windows ")),(0,a.yg)("p",null,"Make sure the Ncm driver is correctly installed on your computer, as shown in the image. You can check this by going to: Device Manager -> Network adapters."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reCamera/002.png"})),(0,a.yg)("p",null,"If your machine does not have this driver, follow the steps below to install Ncm."),(0,a.yg)("h4",{id:"install-ncm-for-windows"},"Install NCM for windows"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"step1"),":\nPress ",(0,a.yg)("inlineCode",{parentName:"p"},"win+x")," and select ",(0,a.yg)("inlineCode",{parentName:"p"},"Device Manager"),".\nFind the unrecognized device in ",(0,a.yg)("inlineCode",{parentName:"p"},"other devices")," and select ",(0,a.yg)("inlineCode",{parentName:"p"},"Update driver"),"."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reCamera/003.png"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"step2"),":\nSelect ",(0,a.yg)("inlineCode",{parentName:"p"},"Browse my computer for drivers")),(0,a.yg)("br",null),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reCamera/004.png"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"step3:"),":\nSelect ",(0,a.yg)("inlineCode",{parentName:"p"},"Let me pick from a list of available drivers on my computer"),"  "),(0,a.yg)("br",null),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reCamera/005.png"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"step4"),":Selet ",(0,a.yg)("inlineCode",{parentName:"p"},"Microsoft")," -> ",(0,a.yg)("inlineCode",{parentName:"p"},"UsbNcm Host Device")," then click Next."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reCamera/006.png"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"step5"),":When the alert bar pops up, select ",(0,a.yg)("inlineCode",{parentName:"p"},"Yes")),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reCamera/007.png"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"step6"),":Enter ping 192.168.42.1 in a terminal window."),(0,a.yg)("br",null),"The following output shows that you have successfully connected to the reCamera.",(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reCamera/008.png"})),(0,a.yg)("h3",{id:"-linux-"},(0,a.yg)("span",{id:"jump2"}," Linux ")),(0,a.yg)("p",null,"No extra setup, just plug in a USB cable. Enter ",(0,a.yg)("inlineCode",{parentName:"p"},"ifconfig"),", and you will see the usb1 network adapter. For example: 192.168.42.89. The ip of the device is 192.168.42.1"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reCamera/009.png"})),(0,a.yg)("h3",{id:"-macos-"},(0,a.yg)("span",{id:"jump3"}," MacOS ")),(0,a.yg)("p",null,"Check the usb network adapter in System Settings -> Network. The ip of the device is 192.168.42.1"),(0,a.yg)("h3",{id:"computer-network-error"},"Computer network error"),(0,a.yg)("p",null,"If your Windows 10 System computer has network access issues after using the USB network of reCamera.\nPress ",(0,a.yg)("inlineCode",{parentName:"p"},"win+x")," click Control Panel. Select All Control Panel Items -> Network Connections. "),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reCamera/010.png"})),(0,a.yg)("p",null,"Right mouse click UsbNcm Host Device. Select ",(0,a.yg)("inlineCode",{parentName:"p"},"Properties")," -> ",(0,a.yg)("inlineCode",{parentName:"p"},"TCP/IPv4")," -> ",(0,a.yg)("inlineCode",{parentName:"p"},"Properties")," -> ",(0,a.yg)("inlineCode",{parentName:"p"},"Advanced")," -> Uncheck ",(0,a.yg)("inlineCode",{parentName:"p"},"Automatic metric")," -> Enter ",(0,a.yg)("inlineCode",{parentName:"p"},"255")," in the ",(0,a.yg)("inlineCode",{parentName:"p"},"Interface metric")," field -> click ",(0,a.yg)("inlineCode",{parentName:"p"},"ok")),(0,a.yg)("br",null),(0,a.yg)("p",null,"Then your network is back up."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reCamera/011.png"})),(0,a.yg)("p",null,"If your computer is running MacOS. You only need to set the priority of the computer network card UsbNcm network card last"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reCamera/012.png"})),(0,a.yg)("h2",{id:"system-update-and-upgrade"},"System update and upgrade"),(0,a.yg)("p",null,"You can check out the latest version of the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/reCamera-OS"},"reCamera OS here.")),(0,a.yg)("p",null,"Manually update the latest OTA firmware:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"/mnt/system/upgrade.sh latest https://github.com/Seeed-Studio/reCamera-OS/releases/latest \n\n/mnt/system/upgrade.sh start\n")),(0,a.yg)("p",null,"Manually update the specified version of OTA firmware. You can also update the system version in your branch."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"/mnt/system/upgrade.sh latest https://github.com/Seeed-Studio/reCamera-OS/releases/download/0.0.5/sg2002_reccamera_emmc_md5sum.txt #Replace it with your branch link\n\n/mnt/system/upgrade.sh start\n")),(0,a.yg)("p",null,"Update the firmware manually using the local ota package."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"/mnt/system/upgrade.sh start sg2002_reCamera_0.0.5_emmc_ota.zip\n")),(0,a.yg)("p",null,"You can change system files to be readable or writable by typing ",(0,a.yg)("inlineCode",{parentName:"p"},"rootfs_rw on/off"),"."),(0,a.yg)("p",null,"Manually restore factory Settings."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"/mnt/system/upgrade.sh recovery\n")),(0,a.yg)("h2",{id:"resources"},"Resources"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/reCamera-OS"},"reCamera OS")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/OSHW-reCamera-Series"},"reCamera Series")),(0,a.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);