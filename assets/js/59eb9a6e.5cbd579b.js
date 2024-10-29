"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[22653],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),g=a,y=u["".concat(l,".").concat(g)]||u[g]||c[g]||i;return n?o.createElement(y,r(r({ref:t},p),{},{components:n})):o.createElement(y,r({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},58671:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(9668),a=(n(96540),n(15680));const i={description:"Lorawan sensor node based on Wio SX1262 with XIAO esp32s3 module",title:"LoRaWAN Sensor Node",image:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png",slug:"/wio_sx1262_xiao_esp32s3_for_lora_sensor_node",last_update:{date:"10/23/2024",author:"Evelyn Chen"}},r="**Configuring Wio-SX1262 with XIAO ESP32S3 kit as LoRaWAN Sensor Node**",s={unversionedId:"Sensor/Wio_Series/Wio_SX1262/Wio_SX1262_with_XIAO_ESP32S3_Kit/LoRaWAN_Sensor_Node",id:"Sensor/Wio_Series/Wio_SX1262/Wio_SX1262_with_XIAO_ESP32S3_Kit/LoRaWAN_Sensor_Node",title:"LoRaWAN Sensor Node",description:"Lorawan sensor node based on Wio SX1262 with XIAO esp32s3 module",source:"@site/docs/Sensor/Wio_Series/Wio_SX1262/Wio_SX1262_with_XIAO_ESP32S3_Kit/LoRaWAN_Sensor_Node.md",sourceDirName:"Sensor/Wio_Series/Wio_SX1262/Wio_SX1262_with_XIAO_ESP32S3_Kit",slug:"/wio_sx1262_xiao_esp32s3_for_lora_sensor_node",permalink:"/wio_sx1262_xiao_esp32s3_for_lora_sensor_node",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Series/Wio_SX1262/Wio_SX1262_with_XIAO_ESP32S3_Kit/LoRaWAN_Sensor_Node.md",tags:[],version:"current",lastUpdatedBy:"Evelyn Chen",lastUpdatedAt:1729641600,formattedLastUpdatedAt:"Oct 23, 2024",frontMatter:{description:"Lorawan sensor node based on Wio SX1262 with XIAO esp32s3 module",title:"LoRaWAN Sensor Node",image:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png",slug:"/wio_sx1262_xiao_esp32s3_for_lora_sensor_node",last_update:{date:"10/23/2024",author:"Evelyn Chen"}},sidebar:"ProductSidebar",previous:{title:"Single Channel LoRaWAN Gateway",permalink:"/wio_sx1262_xiao_esp32s3_for_single_channel_gateway"},next:{title:"Connect to TTN",permalink:"/wio_sx1262_xiao_esp32s3_LNS_TTN"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Hardware Setup",id:"hardware-setup",level:2},{value:"Video Instructure",id:"video-instructure",level:2},{value:"Register &amp; Setup on TTN",id:"register--setup-on-ttn",level:2},{value:"Register gateway on TTN",id:"register-gateway-on-ttn",level:3},{value:"Create a new application on TTN",id:"create-a-new-application-on-ttn",level:3},{value:"Register end device on TTN",id:"register-end-device-on-ttn",level:3},{value:"Configure Wio-SX1262 with XIAO ESP32S3 kit as LoRaWAN Sensor Node",id:"configure-wio-sx1262-with-xiao-esp32s3-kit-as-lorawan-sensor-node",level:2},{value:"Install the necessary libraries for XIAO ESP32S3 and DHT20 sensor",id:"install-the-necessary-libraries-for-xiao-esp32s3-and-dht20-sensor",level:3},{value:"Setup",id:"setup",level:3},{value:"Read sensor data and send LoRa uplink payload",id:"read-sensor-data-and-send-lora-uplink-payload",level:3},{value:"Flash Firmware",id:"flash-firmware",level:2},{value:"Setup Payload Formatter",id:"setup-payload-formatter",level:2},{value:"Monitor LoRaWAN data",id:"monitor-lorawan-data",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,o.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"configuring-wio-sx1262-with-xiao-esp32s3-kit-as-lorawan-sensor-node"},(0,a.yg)("strong",{parentName:"h1"},"Configuring Wio-SX1262 with XIAO ESP32S3 kit as LoRaWAN Sensor Node")),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"This wiki provides a step-by-step guide on configuring the Wio-SX1262 with XIAO ESP32S3 to act as a LoRaWAN sensor node, connecting a DHT20 temperature and humidity sensor, adding an M2 LoRaWAN gateway, and sending data to the The Things Network LNS platform. It also covers the configuration of a format decoder."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/67.png",style:{width:400,height:"auto"}})),(0,a.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Wio-SX1262 with XIAO ESP32S3 Kit"),(0,a.yg)("li",{parentName:"ul"},"DHT20 temperature and humidity sensor"),(0,a.yg)("li",{parentName:"ul"},"XIAO Expansion Board"),(0,a.yg)("li",{parentName:"ul"},"M2 LoRaWAN Indoor gateway"),(0,a.yg)("li",{parentName:"ul"},"Access to The Things Network account")),(0,a.yg)("div",{class:"table-center"},(0,a.yg)("table",{align:"center"},(0,a.yg)("tr",null,(0,a.yg)("th",null,"Wio-SX1262 module with XIAO ESP32S3 Kit"),(0,a.yg)("th",null,"XIAO Expansion Board"),(0,a.yg)("th",null,"DHT20 temperature & humidity sensor"),(0,a.yg)("th",null,"M2 LoRaWAN Indoor gateway")),(0,a.yg)("tr",null,(0,a.yg)("td",null,(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png",style:{width:250,height:"auto"}}))),(0,a.yg)("td",null,(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg",style:{width:250,height:"auto"}}))),(0,a.yg)("td",null,(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg",style:{width:250,height:"auto"}}))),(0,a.yg)("td",null,(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://www.sensecapmx.com/wp-content/uploads/2023/02/Pasted-into-1-10.png",style:{width:250,height:"auto"}})))),(0,a.yg)("tr",null,(0,a.yg)("td",null,(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,a.yg)("td",null,(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,a.yg)("td",null,(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,a.yg)("td",null,(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-AS923-p-5473.html"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,a.yg)("h2",{id:"hardware-setup"},"Hardware Setup"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Connect the Wio-SX1262 module to the XIAO ESP32S3."),(0,a.yg)("li",{parentName:"ol"},"Connect the DHT20 sensor(I2C grove connector) and Wio-SX1262 with XIAO ESP32S3 to the XIAO Expansion board."),(0,a.yg)("li",{parentName:"ol"},"Connect the kit to your PC."),(0,a.yg)("li",{parentName:"ol"},"Connect M2 gateway to power and Ethernet port.")),(0,a.yg)("h2",{id:"video-instructure"},"Video Instructure"),(0,a.yg)("div",{class:"table-center"},(0,a.yg)("iframe",{width:"100%",height:"315",src:"https://youtu.be/7NptcHkVcpk?autoplay=0",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}," ")),(0,a.yg)("h2",{id:"register--setup-on-ttn"},"Register & Setup on TTN"),(0,a.yg)("p",null,"Go to ",(0,a.yg)("a",{parentName:"p",href:"https://www.thethingsnetwork.org/get-started"},"https://www.thethingsnetwork.org/get-started")," and register - just like any other website. These instructions are for TTS Sandbox."),(0,a.yg)("p",null,"Go to ",(0,a.yg)("a",{parentName:"p",href:"https://www.thethingsnetwork.org/get-started"},"the instruction of TTS Sandbox")," and register.\nOnce you have confirmed your email address, you can log in to the ",(0,a.yg)("a",{parentName:"p",href:"https://console.cloud.thethings.network/"},"console"),". If you have any doubts, you can ask on ",(0,a.yg)("a",{parentName:"p",href:"https://www.thethingsnetwork.org/forum/"},"the things network forum"),". You log in with exactly the same details."),(0,a.yg)("h3",{id:"register-gateway-on-ttn"},"Register gateway on TTN"),(0,a.yg)("p",null,"It is simpler to register your gateway first. I got ",(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-AS923-p-5473.html"},"SenseCAP M2 LoRaWAN Indoor Gateway(SX1302)")," as an example."),(0,a.yg)("p",null,"For your personal LoRaWAN Gateway, you can read up on key concepts and troubleshooting ",(0,a.yg)("a",{parentName:"p",href:"https://www.thethingsindustries.com/docs/gateways/"},"here"),"."),(0,a.yg)("h3",{id:"create-a-new-application-on-ttn"},"Create a new application on TTN"),(0,a.yg)("p",null,"An application is like a box to keep some devices in - normally doing the same thing - on larger deployments this may be 1,000's of similar devices. Starting out it is likely to be just a few so there is no need to get concerned about how to divide up your use just yet."),(0,a.yg)("p",null,"Once logged in to the console you can go in to Applications to create your first application. The ID must be all lower case or numbers, no spaces, dashes are OK and it has to be unique to the entire TTN community - so first-app will be rejected - you could use your-username-first-app as that's likely to be unique. The name and description are for your own use and are optional."),(0,a.yg)("h3",{id:"register-end-device-on-ttn"},"Register end device on TTN"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 1"),". Go to the application you created in the previous step."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 2"),". Click to create new end device"),(0,a.yg)("p",null,"On the right hand side about half way down on your application's summary is a big blue button ",(0,a.yg)("strong",{parentName:"p"},"+ Register end device"),". Click this to create the settings for your first device."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 3"),". Enter end device specifics"),(0,a.yg)("p",null,"You are making your own device using a third party LoRaWAN stack so there will not be an entry in the device repository so choose '",(0,a.yg)("strong",{parentName:"p"},"Enter end device specifics manually"),"'."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/61.png",style:{width:400,height:"auto"}})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 4"),". Enter device specifics"),(0,a.yg)("p",null,"Choose the ",(0,a.yg)("strong",{parentName:"p"},"Frequency plan")," appropriate for your region. Consider that almost all countries have laws relating to what frequencies you use so don't get creative. For Europe please use the recommended option. For other regions use the entry marked 'used by TTN'. For this case, select ",(0,a.yg)("strong",{parentName:"p"},"868 MHz"),"."),(0,a.yg)("p",null,"Choose ",(0,a.yg)("strong",{parentName:"p"},"LoRaWAN 1.1.0")," - the last one in the list - the latest specification. ",(0,a.yg)("strong",{parentName:"p"},"RadioLib uses RP001 Regional Parameters 1.1 revision A"),"."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/62.png",style:{width:400,height:"auto"}})),(0,a.yg)("p",null,"At this point you will be asked for your ",(0,a.yg)("strong",{parentName:"p"},"JoinEUI"),". As this is a DIY device and we are using RadioLib, you can use ",(0,a.yg)("strong",{parentName:"p"},"all zero's")," as recommended by The LoRa Alliance TR007 Technical Recommendations document. Once you've put in all zeros and clicked confirm you will be asked for a ",(0,a.yg)("strong",{parentName:"p"},"DevEUI"),", ",(0,a.yg)("strong",{parentName:"p"},"AppKey")," and ",(0,a.yg)("strong",{parentName:"p"},"NwkKey"),". It is preferable to have the console ",(0,a.yg)("strong",{parentName:"p"},"generate")," them so they are properly formatted."),(0,a.yg)("p",null,"Your End device ID can be changed to make the device more identifiable. Something related to your hardware helps - like ",(0,a.yg)("strong",{parentName:"p"},"test-device"),". The you can click the blue '",(0,a.yg)("strong",{parentName:"p"},"Register device"),"'."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/63.png",style:{width:400,height:"auto"}})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 5"),". Copy device details to config file on Arduino"),(0,a.yg)("p",null,"You then need to copy over the device details in to the ",(0,a.yg)("strong",{parentName:"p"},"config file")," for RadioLib. There are buttons to copy items to the clipboard so you don't have to hand type them."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/64.png",style:{width:400,height:"auto"}})),(0,a.yg)("h2",{id:"configure-wio-sx1262-with-xiao-esp32s3-kit-as-lorawan-sensor-node"},"Configure Wio-SX1262 with XIAO ESP32S3 kit as LoRaWAN Sensor Node"),(0,a.yg)("p",null,"The code is written in Arduino and is designed to configure a Wio-SX1262 module along with an XIAO ESP32S3 board to act as a LoRaWAN sensor node. It connects a DHT20 sensor to read temperature and humidity data and sends this data via LoRaWAN to The Things Network."),(0,a.yg)("h3",{id:"install-the-necessary-libraries-for-xiao-esp32s3-and-dht20-sensor"},"Install the necessary libraries for XIAO ESP32S3 and DHT20 sensor"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Install Arduino Environnment for XIAO ESP32S3")),(0,a.yg)("p",null,"Refer to ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/#software-preparation"},"https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/#software-preparation"),"."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Install ",(0,a.yg)("inlineCode",{parentName:"li"},"DHT20")," sensor library\npackage:")),(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/DHT.zip"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Download \u2b07\ufe0f"))))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Install ",(0,a.yg)("inlineCode",{parentName:"li"},"RadioLib")," library\nNote. Install ",(0,a.yg)("strong",{parentName:"li"},"version 6.6.0"),", otherwise the code will not compile.")),(0,a.yg)("h3",{id:"setup"},"Setup"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 1"),". Fill in LoRaWAN device authentication and network access parameters"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"RADIOLIB_LORAWAN_JOIN_EUI")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"RADIOLIB_LORAWAN_DEV_EUI"),' are used for device identification when a device joins the LoRaWAN network. Just like in a large online community, these two parameters are the "identity card" of the device, letting the network know which device is requesting to join.'),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"RADIOLIB_LORAWAN_APP_KEY")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"RADIOLIB_LORAWAN_NWK_KEY"),' are used for security authentication and network access control. They are similar to the "password" for entering the network community, ensuring that only devices with the correct keys can communicate securely with the network. Moreover, they can restrict the operation of the device according to the permissions of the application (distinguished by APP_KEY) and the network (distinguished by NWK_KEY).'),(0,a.yg)("p",null,"Just ",(0,a.yg)("strong",{parentName:"p"},"copy")," the parameter from TTN to the config file."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Here, a macro named ",(0,a.yg)("inlineCode",{parentName:"li"},"RADIOLIB_LORAWAN_JOIN_EUI")," is defined. If this macro is not defined elsewhere, it will be set to a hexadecimal ",(0,a.yg)("inlineCode",{parentName:"li"},"all-zero")," value. ")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"#ifndef RADIOLIB_LORAWAN_JOIN_EUI\n#define RADIOLIB_LORAWAN_JOIN_EUI  0x0000000000000000\n#endif\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Similarly, the ",(0,a.yg)("inlineCode",{parentName:"li"},"RADIOLIB_LORAWAN_DEV_EUI")," macro is defined, representing the ",(0,a.yg)("inlineCode",{parentName:"li"},"DevEUI")," (Device Unique Identifier), with a specific hexadecimal value set here, which is used for device identification when a device joins the LoRaWAN network.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"#ifndef RADIOLIB_LORAWAN_DEV_EUI\n#define RADIOLIB_LORAWAN_DEV_EUI   0x****************\n#endif\n")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"The ",(0,a.yg)("inlineCode",{parentName:"li"},"RADIOLIB_LORAWAN_APP_KEY")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"RADIOLIB_LORAWAN_NWK_KEY")," macros are defined, representing the AppKey and NwkKey, respectively, used for security authentication and network access control. ")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"#ifndef RADIOLIB_LORAWAN_APP_KEY\n#define RADIOLIB_LORAWAN_APP_KEY   0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**\n#endif\n\n#ifndef RADIOLIB_LORAWAN_NWK_KEY   // Put your Nwk Key here\n#define RADIOLIB_LORAWAN_NWK_KEY   0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**\n#endif\n")),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},"The following macros are defined, representing the ",(0,a.yg)("inlineCode",{parentName:"li"},"LoRaWAN uplink parameters"),". These parameters are used to configure the uplink payload sent to the LoRaWAN network.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"#define LORAWAN_UPLINK_USER_PORT  2\n#define LORAWAN_UPLINK_DATA_RATE  3\n\n#define LORAWAN_UPLINK_PERIOD     10000 // ms\n\n#define LORAWAN_UPLINK_DATA_MAX   115 // byte\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 2"),". Select the LoRaWAN regional parameters"),(0,a.yg)("p",null,"There are several regional choices available for LoRaWAN communication, including ",(0,a.yg)("inlineCode",{parentName:"p"},"EU868")," (European 868 MHz band), ",(0,a.yg)("inlineCode",{parentName:"p"},"US915")," (United States 915 MHz band), ",(0,a.yg)("inlineCode",{parentName:"p"},"AU915")," (Australian 915 MHz band), ",(0,a.yg)("inlineCode",{parentName:"p"},"AS923")," (Asian 923 MHz band), ",(0,a.yg)("inlineCode",{parentName:"p"},"IN865")," (Indian 865 MHz band), ",(0,a.yg)("inlineCode",{parentName:"p"},"KR920")," (South Korean 920 MHz band), ",(0,a.yg)("inlineCode",{parentName:"p"},"CN780")," (Chinese 780 MHz band), and ",(0,a.yg)("inlineCode",{parentName:"p"},"CN500"),"."),(0,a.yg)("p",null,"The line const ",(0,a.yg)("inlineCode",{parentName:"p"},"LoRaWANBand_t Region = EU868;")," sets the region for the LoRaWAN communication to EU868. This means that the device will be configured to operate in the European 868 MHz frequency band."),(0,a.yg)("p",null,"For US915 and AU915 defines a sub-band variable. In this case, it is set to 0. The comment suggests that this sub-band variable is specifically for the US915 and AU915 regions, although it is not being used for the EU868 region in this code snippet."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"const LoRaWANBand_t Region = EU868;\nconst uint8_t subBand = 0; // For US915 and AU915\n")),(0,a.yg)("h3",{id:"read-sensor-data-and-send-lora-uplink-payload"},"Read sensor data and send LoRa uplink payload"),(0,a.yg)("p",null,"Read and send sensor data via LoRa communication. The conversion to bytes with decimal precision allows for more accurate representation of the temperature and humidity values in the uplink payload."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'  float temp_hum_val[2] = {0};\n  if (!dht.readTempAndHumidity(temp_hum_val)) {\n    uplinkPayloadLen = 0;\n    memset(uplinkPayload, sizeof(uplinkPayload), 0);\n\n    // Convert temperature and humidity to bytes with decimal precision\n    uint16_t tempDecimal = (temp_hum_val[1] * 100);\n    uint16_t humDecimal = (temp_hum_val[0] * 100);\n    uplinkPayload[uplinkPayloadLen++] = (tempDecimal >> 8);\n    uplinkPayload[uplinkPayloadLen++] = tempDecimal & 0xFF;\n    uplinkPayload[uplinkPayloadLen++] = (humDecimal >> 8);\n    uplinkPayload[uplinkPayloadLen++] = humDecimal & 0xFF;\n\n    for (int i = 0; i < uplinkPayloadLen; i++) {\n      Serial.print(uplinkPayload[i], HEX);\n      Serial.print(" ");\n    }\n')),(0,a.yg)("h2",{id:"flash-firmware"},"Flash Firmware"),(0,a.yg)("p",null,"The completed firmware package here: "),(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Wio_SX1262_XIAO_ESP32S3_code_package_20241025.zip"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Download \u2b07\ufe0f"))))),(0,a.yg)("p",null,"Please download and flash it to the XIAO ESP32S3. For the first use of XIAO ESP32S3, refer to ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/#software-preparation"},"the flashing tutorial")," here."),(0,a.yg)("h2",{id:"setup-payload-formatter"},"Setup Payload Formatter"),(0,a.yg)("p",null,"The payload formatter is used to convert the raw data received from the sensor into a human-readable format. In this case, the payload formatter is used to convert the raw data received from the DHT20 sensor into a JSON format."),(0,a.yg)("p",null,"Formatter type: ",(0,a.yg)("inlineCode",{parentName:"p"},"Custom Javascript formatter")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"function decodeUplink(input) {\n  var bytes = input.bytes;\n  var temperatureDecimal = (bytes[0] << 8) | bytes[1];\n  var humidityDecimal = (bytes[2] << 8) | bytes[3];\n\n  var temperature = temperatureDecimal / 100;\n  var humidity = humidityDecimal / 100;\n\n  return {\n    data: {\n      temperature: temperature,\n      humidity: humidity\n    }\n  };\n}\n")),(0,a.yg)("h2",{id:"monitor-lorawan-data"},"Monitor LoRaWAN data"),(0,a.yg)("p",null,"For specific device activity, click the device in the middle list. A device's main menu has options like Device Overview, Live Data, etc. Click ",(0,a.yg)("strong",{parentName:"p"},"Live Data")," or the link above the activity box."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/65.png",style:{width:800,height:"auto"}})),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/66.png",style:{width:800,height:"auto"}})),(0,a.yg)("h2",{id:"resource"},"Resource"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Wio_SX1262_XIAO_ESP32S3_code_package_20241025.zip"},"Code Package"))),(0,a.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.yg)("div",{class:"table-center"},(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"}))))}c.isMDXComponent=!0}}]);