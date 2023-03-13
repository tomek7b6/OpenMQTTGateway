(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{379:function(t,s,a){t.exports=a.p+"assets/img/OpenMQTTGateway_TTGO32_LORA_Send.e375b049.jpg"},380:function(t,s,a){t.exports=a.p+"assets/img/OpenMQTTGateway_TTGO32_LORA_Receive.ce846ec8.jpg"},430:function(t,s,a){"use strict";a.r(s);var e=a(14),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"lora-gateway"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lora-gateway"}},[t._v("#")]),t._v(" LORA gateway")]),t._v(" "),s("p",[t._v("Tutorial on how to leverage LORA for a mailbox sensor from "),s("a",{attrs:{href:"https://www.youtube.com/channel/UCz75N6inuLHXnRC5tqagNLw",target:"_blank",rel:"noopener noreferrer"}},[t._v("PricelessToolkit"),s("OutboundLink")],1),t._v(":\n"),s("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/6DftaHxDawM",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}})]),t._v(" "),s("h2",{attrs:{id:"receiving-data-from-lora-signal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#receiving-data-from-lora-signal"}},[t._v("#")]),t._v(" Receiving data from LORA signal")]),t._v(" "),s("p",[t._v("Subscribe to all the messages with mosquitto or open your MQTT client software:")]),t._v(" "),s("p",[s("code",[t._v("sudo mosquitto_sub -t +/# -v")])]),t._v(" "),s("p",[t._v("Generate your LORA signals by using another TTGO LORA module, you can flash the sender program from "),s("a",{attrs:{href:"https://github.com/LilyGO/TTGO-LORA32-V2.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("this repository"),s("OutboundLink")],1),t._v(" and the SSD1306 library "),s("a",{attrs:{href:"https://github.com/ThingPulse/esp8266-oled-ssd1306",target:"_blank",rel:"noopener noreferrer"}},[t._v("there"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("img",{attrs:{src:a(379),alt:""}})]),t._v(" "),s("p",[t._v("Once one board flashed with OMG and the other with the sender program you should receive regular packets into "),s("code",[t._v("home/OpenMQTTGateway_ESP32_LORA_TEST/LORAtoMQTT")]),t._v(" like below:")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rssi"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("-16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"snr"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.25")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pferror"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("-3598")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"packetSize"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello 35"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rssi"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("-26")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"snr"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pferror"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("-3598")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"packetSize"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello 36"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rssi"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("-16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"snr"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pferror"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("-3581")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"packetSize"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello 37"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("Messages that contain non-printable characters will be converted to hexadecimal and look like this:")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rssi"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("-121")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"snr"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("-11.75")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pferror"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("-29116")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"packetSize"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hex"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C0FFEE"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("And from a supported device (in this case, a WiPhone), looks like this:")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rssi"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("-50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"snr"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.25")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pferror"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20728")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"packetSize"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"from"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123ABC"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"to"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"000000"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hi from WiPhone"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WiPhone"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"send-data-by-mqtt-to-convert-it-on-lora-signal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#send-data-by-mqtt-to-convert-it-on-lora-signal"}},[t._v("#")]),t._v(" Send data by MQTT to convert it on LORA signal")]),t._v(" "),s("p",[s("code",[t._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoLORA -m \'{"message":"hello OMG1"}\'')])]),t._v(" "),s("p",[t._v('This command will send by LORA the message "hello OMG1" and use the default parameters defined in '),s("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/blob/4b8d28179b63ae3f3d454da57ec8c109c159c386/config_LORA.h#L32",target:"_blank",rel:"noopener noreferrer"}},[t._v("config_LORA.h"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("img",{attrs:{src:a(380),alt:""}})]),t._v(" "),s("p",[t._v("If you want to test that your sending works you can use another TTGO LORA module, you can flash the receiver program from "),s("a",{attrs:{href:"https://github.com/LilyGO/TTGO-LORA32-V2.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("this repository"),s("OutboundLink")],1),t._v("  and the SSD1306 library "),s("a",{attrs:{href:"https://github.com/ThingPulse/esp8266-oled-ssd1306",target:"_blank",rel:"noopener noreferrer"}},[t._v("there"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"send-data-by-mqtt-with-advanced-lora-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#send-data-by-mqtt-with-advanced-lora-parameters"}},[t._v("#")]),t._v(" Send data by MQTT with advanced LORA parameters")]),t._v(" "),s("p",[t._v("LORA  sending support the following parameters that should be specified in the json message;")]),t._v(" "),s("ul",[s("li",[t._v("txpower: 2 to 20")]),t._v(" "),s("li",[t._v("spreadingfactor: 6 to 12. If a spreading factor of 6 is set, implicit header mode must be used to transmit and receive * * packets.")]),t._v(" "),s("li",[t._v("frequency: 433E6, 866E6, 915E6")]),t._v(" "),s("li",[t._v("signalbandwidth: 7.8E3, 10.4E3, 15.6E3, 20.8E3, 31.25E3, 41.7E3, 62.5E3, 125E3, and 250E3")]),t._v(" "),s("li",[t._v("codingrate: 5 to 8")]),t._v(" "),s("li",[t._v("preamblelength: 6 to 65535")]),t._v(" "),s("li",[t._v("syncword: byte")]),t._v(" "),s("li",[t._v("enablecrc: boolean")])]),t._v(" "),s("p",[t._v("More info on where the LORA library is born "),s("a",{attrs:{href:"https://github.com/sandeepmistry/arduino-LoRa/blob/master/API.md#radio-parameters",target:"_blank",rel:"noopener noreferrer"}},[t._v("@sandeepmistry"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Examples:")]),t._v(" "),s("ul",[s("li",[t._v("Plain text message: "),s("code",[t._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoLORA -m \'{"message":"test8","txpower":17}\'')]),s("br"),t._v('\nwill make LORA use the a txpower of 17 when sending the message "test8"')]),t._v(" "),s("li",[t._v("Binary message: "),s("code",[t._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoLORA" -m \'{"hex":"01C0FFEE"}\'')]),s("br"),t._v("\nwill send binary 0x01C0FFEE")]),t._v(" "),s("li",[t._v("WiPhone message: "),s("code",[t._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoLORA" -m \'{"message":"test","type":"WiPhone","to":"123ABC","from":"FFFFFF"}\'')]),s("br"),t._v('\nwill send "test" to a WiPhone with chip ID 123ABC')])])])}),[],!1,null,null,null);s.default=r.exports}}]);