"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[75380],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>h});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},g=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),p=m(a),u=r,h=p["".concat(s,".").concat(u)]||p[u]||d[u]||i;return a?n.createElement(h,l(l({ref:t},g),{},{components:a})):n.createElement(h,l({ref:t},g))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},83706:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(58168),r=(a(96540),a(15680));const i={description:"Getting started with Seeed Studio 60GHz mmWave for XIAO",title:"60GHz mmWave for XIAO",keywords:["mmwave","radar"],image:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.jpg",slug:"/mmwave_for_xiao_60ghz",last_update:{date:"08/19/2024",author:"Spencer"}},l="Seeed Studio 60GHz mmWave for XIAO",o={unversionedId:"Sensor/mmWave_radar_sensor/mmwave-for-XIAO/mmwave-for-xiao-60GHz",id:"Sensor/mmWave_radar_sensor/mmwave-for-XIAO/mmwave-for-xiao-60GHz",title:"60GHz mmWave for XIAO",description:"Getting started with Seeed Studio 60GHz mmWave for XIAO",source:"@site/docs/Sensor/mmWave_radar_sensor/mmwave-for-XIAO/mmwave-for-xiao-60GHz.md",sourceDirName:"Sensor/mmWave_radar_sensor/mmwave-for-XIAO",slug:"/mmwave_for_xiao_60ghz",permalink:"/mmwave_for_xiao_60ghz",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/mmWave_radar_sensor/mmwave-for-XIAO/mmwave-for-xiao-60GHz.md",tags:[],version:"current",lastUpdatedBy:"Spencer",lastUpdatedAt:1724025600,formattedLastUpdatedAt:"Aug 19, 2024",frontMatter:{description:"Getting started with Seeed Studio 60GHz mmWave for XIAO",title:"60GHz mmWave for XIAO",keywords:["mmwave","radar"],image:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.jpg",slug:"/mmwave_for_xiao_60ghz",last_update:{date:"08/19/2024",author:"Spencer"}},sidebar:"ProductSidebar",previous:{title:"mmWave for XIAO to Home Assistant via Bluetooth",permalink:"/mmwave_for_xiao_to_ha_bt"},next:{title:"mmWave Human Detection Sensor Kit",permalink:"/mmwave_human_detection_kit"}},s={},m=[{value:"Features",id:"features",level:3},{value:"Specification",id:"specification",level:3},{value:"Application",id:"application",level:3},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Software Preparation (Arduino)",id:"software-preparation-arduino",level:3},{value:"Usage",id:"usage",level:3},{value:"Breath Module",id:"breath-module",level:3},{value:"Fall Module",id:"fall-module",level:3},{value:"Blink RGB LED",id:"blink-rgb-led",level:3},{value:"Light Sensor (BH1750)",id:"light-sensor-bh1750",level:3},{value:"API Explanation",id:"api-explanation",level:2},{value:"Breath Module API",id:"breath-module-api",level:3},{value:"Fall Module API",id:"fall-module-api",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],g={toc:m},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"seeed-studio-60ghz-mmwave-for-xiao"},"Seeed Studio 60GHz mmWave for XIAO"),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.jpg",style:{width:"auto",height:"auto","border-radius":"12.8px"}})),(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,r.yg)("br",null),(0,r.yg)("p",null,"Introducing our advanced ",(0,r.yg)("strong",{parentName:"p"},"mmWave Sensor Modules")," for XIAO, designed to provide cutting-edge monitoring solutions for both fall detection and heartbeat monitoring. Powered by the robust XIAO ESP32 microcontroller with built-in Wi-Fi and Bluetooth connectivity, these modules offer precise and reliable detection capabilities. Whether you need to monitor falls in real-time or track heartbeats with sensitive accuracy, our modules are equipped with state-of-the-art technology, including customizable RGB LEDs and ambient light sensing. With easy expansion options through Grove GPIO ports, these versatile modules are perfect for a wide range of applications, from smart home integration to healthcare monitoring."),(0,r.yg)("h3",{id:"features"},"Features"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Wi-Fi & Bluetooth Enabled"),": Both modules are powered by XIAO ESP32 with pre-flashed ESPHome firmware, ensuring quick setup and customization."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Fall Detection Module"),":",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Precise Fall Detection"),": Covers a 3x3x3 meter area with a 100\xb0 x 40\xb0 detection angle."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Static Presence Detection"),": Monitors stationary individuals up to 6 meters away."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Heartbeat Detection Module"),":",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Sensitive Heartbeat Monitoring"),": Detects heartbeats from up to 1.5 meters."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Static Presence Detection"),": Monitors stationary individuals up to 6 meters away."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Environmental Sensing"),":",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"BH1750 Light Sensor"),": Measures ambient light from 1 to 65,535 lux."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"WS2812 RGB LED"),": Customizable LED for visual feedback and DIY projects."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Expandable Connectivity"),": Includes Grove GPIO ports for adding additional sensors and modules.")),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/human-caring.jpg",style:{height:"auto","border-radius":"3.8px"}})),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/environmental-inductor.jpg",style:{height:"auto","border-radius":"3.8px"}})),(0,r.yg)("h3",{id:"specification"},"Specification"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"General Parameters")),(0,r.yg)("th",{parentName:"tr",align:null}))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"mmWave Firmware")),(0,r.yg)("td",{parentName:"tr",align:null},"Fall Detection & Heartbeat Monitoring")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Microcontroller Unit (MCU)")),(0,r.yg)("td",{parentName:"tr",align:null},"Seeed Studio XIAO ESP32")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"LED Indicator")),(0,r.yg)("td",{parentName:"tr",align:null},"WS2812 RGB LED: Full-Color, Programmable Lighting")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"User Interface")),(0,r.yg)("td",{parentName:"tr",align:null},"Single-Button Interface for Reset")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Ambient Light Sensor")),(0,r.yg)("td",{parentName:"tr",align:null},"BH1750: High-Precision Digital Light Intensity Measurement")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Connectivity")),(0,r.yg)("td",{parentName:"tr",align:null},"Grove Connector: 1 GPIO Port (D0, D10) for Versatile I/O Integration")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Pin Header Spacing")),(0,r.yg)("td",{parentName:"tr",align:null},"Standard 2.54mm Female Header for Easy Prototyping")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Power Supply")),(0,r.yg)("td",{parentName:"tr",align:null},"5V/1A Input for Stable and Reliable Operation")))),(0,r.yg)("h3",{id:"application"},"Application"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Human body sensor light control"),(0,r.yg)("li",{parentName:"ul"},"Life safety protection"),(0,r.yg)("li",{parentName:"ul"},"Smart home appliances"),(0,r.yg)("li",{parentName:"ul"},"Intelligent security")),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/application.jpg",style:{width:"auto",height:"auto","border-radius":"2.8px"}})),(0,r.yg)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/hardware-overview.jpg",style:{"border-radius":"12.8px"}})),(0,r.yg)("br",null),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/6-mmWave-size.jpg",style:{width:"auto",height:"auto","border-radius":"6.6px"}})),(0,r.yg)("h2",{id:"getting-started"},"Getting Started"),(0,r.yg)("h3",{id:"software-preparation-arduino"},"Software Preparation (Arduino)"),(0,r.yg)("p",null,"If this is your first time using Arduino with the XIAO series, follow the appropriate setup guide for your board:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"XIAO ESP32S3"),": Refer to the ",(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/"},"XIAO ESP32S3 Getting Started Guide"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"XIAO ESP32C3"),": Follow the ",(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/"},"Getting Started with Seeed Studio XIAO ESP32C3")," guide.")),(0,r.yg)("p",null,"Once your board is set up, proceed with the following steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Download the Seeed mmWave Library"),":",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Download the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/Love4yzp/Seeed-mmWave-library"},"Seeed mmWave library")," from GitHub.")))),(0,r.yg)("div",{class:"github_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"github_item",href:"https://github.com/Love4yzp/Seeed-mmWave-library"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," Download the Code")))," ",(0,r.yg)("svg",{"aria-hidden":"true",focusable:"false",role:"img",className:"mr-2",viewBox:"-3 10 9 1",width:16,height:16,fill:"currentColor",style:{textAlign:"center",display:"inline-block",userSelect:"none",verticalAlign:"text-bottom",overflow:"visible"}},(0,r.yg)("path",{d:"M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"})))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Install the Library in Arduino IDE"),":"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Open the Arduino IDE."),(0,r.yg)("li",{parentName:"ul"},"Navigate to ",(0,r.yg)("strong",{parentName:"li"},"Sketch > Include Library > Add .ZIP Library..."),"."),(0,r.yg)("li",{parentName:"ul"},"Select the downloaded ",(0,r.yg)("inlineCode",{parentName:"li"},".zip")," file to install the library."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Connect Your XIAO Board"),":"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Plug your XIAO board into your computer via USB."),(0,r.yg)("li",{parentName:"ul"},"In the Arduino IDE, go to ",(0,r.yg)("strong",{parentName:"li"},"Tools > Board")," and select your XIAO board model."),(0,r.yg)("li",{parentName:"ul"},"Choose the correct port under ",(0,r.yg)("strong",{parentName:"li"},"Tools > Port"),"."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Load an Example Sketch"),":"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Go to ",(0,r.yg)("strong",{parentName:"li"},"File > Examples > Seeed Arduino mmWave"),"."),(0,r.yg)("li",{parentName:"ul"},"Select the relevant example for either Fall Detection or Heartbeat Detection."),(0,r.yg)("li",{parentName:"ul"},"Review the code and make any necessary adjustments."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Upload the Sketch"),":"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Click ",(0,r.yg)("strong",{parentName:"li"},"Upload")," to flash the code to your XIAO board."),(0,r.yg)("li",{parentName:"ul"},"Open the ",(0,r.yg)("strong",{parentName:"li"},"Serial Monitor")," in the Arduino IDE to view real-time sensor data.")))),(0,r.yg)("h3",{id:"usage"},"Usage"),(0,r.yg)("p",null,"This section provides example code snippets to help you quickly start using the Seeed Arduino mmWave Library with various functionalities, including breath monitoring, fall detection, RGB LED control, and light sensing."),(0,r.yg)("h3",{id:"breath-module"},"Breath Module"),(0,r.yg)("p",null,"This example demonstrates how to use the ",(0,r.yg)("strong",{parentName:"p"},"MR60BHA2")," sensor for monitoring breathing and heartbeat."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <Arduino.h>\n#include "Seeed_Arduino_mmWave.h"\n\n// Set up serial communication depending on the board type\n#ifdef ESP32\n#  include <HardwareSerial.h>\nHardwareSerial mmWaveSerial(0);\n#else\n#  define mmWaveSerial Serial1\n#endif\n\nSEEED_MR60BHA2 mmWave;\n\nvoid setup() {\nSerial.begin(115200);\nmmWave.begin(&mmWaveSerial);\n}\n\nvoid loop() {\nif (mmWave.update(100)) {\n float total_phase, breath_phase, heart_phase;\n if (mmWave.getHeartBreathPhases(total_phase, breath_phase, heart_phase)) {\n   Serial.printf("total_phase: %.2f\\t", total_phase);\n   Serial.printf("breath_phase: %.2f\\t", breath_phase);\n   Serial.printf("heart_phase: %.2f\\n", heart_phase);\n }\n\n float breath_rate;\n if (mmWave.getBreathRate(breath_rate)) {\n   Serial.printf("breath_rate: %.2f\\n", breath_rate);\n }\n\n float heart_rate;\n if (mmWave.getHeartRate(heart_rate)) {\n   Serial.printf("heart_rate: %.2f\\n", heart_rate);\n }\n\n float distance;\n if (mmWave.getDistance(distance)) {\n   Serial.printf("distance: %.2f\\n", distance);\n }\n}\n}\n')),(0,r.yg)("h3",{id:"fall-module"},"Fall Module"),(0,r.yg)("p",null,"This example shows how to use the ",(0,r.yg)("strong",{parentName:"p"},"MR60FDA2")," sensor for fall detection."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <Arduino.h>\n#include "Seeed_Arduino_mmWave.h"\n\n#ifdef ESP32\n#  include <HardwareSerial.h>\nHardwareSerial mmWaveSerial(0);\n#else\n#  define mmWaveSerial Serial1\n#endif\n\nSEEED_MR60FDA2 mmWave;\n\nvoid setup() {\nSerial.begin(115200);\nmmWave.begin(&mmWaveSerial);\n\ndelay(1000);\n\nuint32_t sensitivity = 15;\nfloat height = 3.0, threshold = 1.0;\nfloat rect_XL, rect_XR, rect_ZF, rect_ZB;\n\nif (mmWave.setInstallationHeight(height)) {\n Serial.printf("setInstallationHeight success: %.2f\\n", height);\n} else {\n Serial.println("setInstallationHeight failed");\n}\n\nif (mmWave.setThreshold(threshold)) {\n Serial.printf("setThreshold success: %.2f\\n", threshold);\n} else {\n Serial.println("setThreshold failed");\n}\n\nif (mmWave.setSensitivity(sensitivity)) {\n Serial.printf("setSensitivity success %d\\n", sensitivity);\n} else {\n Serial.println("setSensitivity failed");\n}\n\nif (mmWave.getRadarParameters(height, threshold, sensitivity, rect_XL,\n                             rect_XR, rect_ZF, rect_ZB)) {\n Serial.printf("height: %.2f\\tthreshold: %.2f\\tsensitivity: %d\\n", height,\n               threshold, sensitivity);\n Serial.printf(\n     "rect_XL: %.2f\\trect_XR: %.2f\\trect_ZF: %.2f\\trect_ZB: %.2f\\n", rect_XL,\n     rect_XR, rect_ZF, rect_ZB);\n} else {\n Serial.println("getRadarParameters failed");\n}\n}\n\nvoid loop() {\nif (mmWave.update(100)) {\n bool is_human = mmWave.getHuman();\n if (is_human) {\n   Serial.printf("People Exist: %s\\n", is_human ? "true" : "false");\n }\n\n bool is_fall = mmWave.getFall();\n if (is_fall) {\n   Serial.printf("isFall: %s\\n", is_fall ? "true" : "false");\n }\n}\n}\n')),(0,r.yg)("h3",{id:"blink-rgb-led"},"Blink RGB LED"),(0,r.yg)("p",null,"This example demonstrates how to control an RGB LED using the NeoPixel library."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"#include <Adafruit_NeoPixel.h>\n#include <Arduino.h>\n\nconst int pixelPin = D1;\n\nAdafruit_NeoPixel pixels = Adafruit_NeoPixel(1, pixelPin, NEO_GRB + NEO_KHZ800);\n\nvoid setup() {\nSerial.begin(115200);\npixels.begin();\npixels.clear();\npixels.show();\n}\n\nvoid loop() {\nfor (int i = 0; i < 10; i++) {\n pixels.setPixelColor(0, pixels.Color(255, 0, 0));\n pixels.show();\n delay(100);\n pixels.setPixelColor(0, pixels.Color(0, 0, 0));\n pixels.show();\n delay(100);\n}\n\nfor (int i = 255; i >= 0; i--) {\n pixels.setPixelColor(0, pixels.Color(i, 0, 0));\n pixels.show();\n delay(10);\n}\n}\n")),(0,r.yg)("h3",{id:"light-sensor-bh1750"},"Light Sensor (BH1750)"),(0,r.yg)("p",null,"This example shows how to read light intensity values using the BH1750 sensor."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <Arduino.h>\n#include <hp_BH1750.h>\n\nhp_BH1750 BH1750;\n\nvoid setup() {\nSerial.begin(9600);\n\nbool avail = BH1750.begin(BH1750_TO_GROUND);\n\nif (!avail) {\n Serial.println("No BH1750 sensor found!");\n while (true) {}\n}\n\nSerial.printf("conversion time: %dms\\n", BH1750.getMtregTime());\nBH1750.start();\n}\n\nvoid loop() {\nif (BH1750.hasValue()) {\n float lux = BH1750.getLux();\n Serial.println(lux);\n\n BH1750.start();\n}\n}\n')),(0,r.yg)("h2",{id:"api-explanation"},"API Explanation"),(0,r.yg)("h3",{id:"breath-module-api"},"Breath Module API"),(0,r.yg)("p",null,"This example uses the ",(0,r.yg)("inlineCode",{parentName:"p"},"SEEED_MR60BHA2")," class to interface with the MR60BHA2 sensor for heart and breath monitoring. Here\u2019s what each key function does:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"mmWave.begin(&mmWaveSerial)")),": "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Initializes the sensor for communication using the specified serial interface. It sets up the connection between the XIAO board and the MR60BHA2 sensor."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"mmWave.update(100)")),":"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Updates the sensor data. The parameter ",(0,r.yg)("inlineCode",{parentName:"li"},"100")," is a timeout value in milliseconds, specifying how long to wait for the sensor to provide new data. If new data is available within this timeframe, the function returns ",(0,r.yg)("inlineCode",{parentName:"li"},"true"),"."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"mmWave.getHeartBreathPhases(float &total_phase, float &breath_phase, float &heart_phase)")),":"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Retrieves the phase information related to heart and breath activities. "),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"total_phase")," represents the overall phase shift, while ",(0,r.yg)("inlineCode",{parentName:"li"},"breath_phase")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"heart_phase")," are specific to breathing and heartbeat activities, respectively."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"mmWave.getBreathRate(float &rate)")),":"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Fetches the current breath rate detected by the sensor. The rate is returned in the reference variable ",(0,r.yg)("inlineCode",{parentName:"li"},"rate"),"."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"mmWave.getHeartRate(float &rate)")),":"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Retrieves the current heart rate detected by the sensor. The rate is returned in the reference variable ",(0,r.yg)("inlineCode",{parentName:"li"},"rate"),"."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"mmWave.getDistance(float &distance)")),":"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Gets the distance from the sensor to the detected object (e.g., human body). This function is useful for understanding the range of the detected signal.")))),(0,r.yg)("h3",{id:"fall-module-api"},"Fall Module API"),(0,r.yg)("p",null,"This example uses the ",(0,r.yg)("inlineCode",{parentName:"p"},"SEEED_MR60FDA2")," class to interface with the MR60FDA2 sensor for fall detection. Here\u2019s what each key function does:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"mmWave.begin(&mmWaveSerial)")),":"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Initializes the sensor for communication, similar to the breath module, setting up the serial connection between the XIAO board and the MR60FDA2 sensor."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"mmWave.setInstallationHeight(float height)")),":"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Sets the installation height of the radar, which is crucial for accurate fall detection. The ",(0,r.yg)("inlineCode",{parentName:"li"},"height")," parameter specifies the height (in meters) at which the sensor is installed, with a valid range typically between 1 and 5 meters."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"mmWave.setThreshold(float threshold)")),":"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Sets the fall detection threshold. This value determines the sensitivity of the radar in terms of detecting falls based on the height and distance from the sensor."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"mmWave.setSensitivity(uint32_t sensitivity)")),":"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Adjusts the sensitivity of the radar for fall detection. The sensitivity value typically ranges from 3 to 10, with higher values making the sensor more responsive to potential falls."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"mmWave.getRadarParameters(float &height, float &threshold, uint32_t &sensitivity)")),":"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Retrieves the current configuration parameters of the radar, including installation height, fall detection threshold, and sensitivity settings. These parameters are returned via the reference variables."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"mmWave.getHuman()")),":"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Checks if a human presence is detected by the radar. Returns ",(0,r.yg)("inlineCode",{parentName:"li"},"true")," if a human is detected, and ",(0,r.yg)("inlineCode",{parentName:"li"},"false")," otherwise."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"mmWave.getFall()")),":"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Determines whether a fall has been detected. This function returns ",(0,r.yg)("inlineCode",{parentName:"li"},"true")," if a fall is detected and ",(0,r.yg)("inlineCode",{parentName:"li"},"false")," if not.")))),(0,r.yg)("h2",{id:"resources"},"Resources"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"GitHub Repository"),": Access the full codebase and documentation at the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/Love4yzp/Seeed-mmWave-library"},"Seeed mmWave Library GitHub page"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"ESPHome Documentation"),": For further customization and integration, refer to the ",(0,r.yg)("a",{parentName:"li",href:"https://esphome.io/"},"ESPHome documentation"),".")),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"table-center"},(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"}))))}d.isMDXComponent=!0}}]);