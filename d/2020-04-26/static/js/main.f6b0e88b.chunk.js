(this["webpackJsonpremote-faces-web"]=this["webpackJsonpremote-faces-web"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(29)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=25},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(10),o=n.n(c),i=(n(21),n(11)),u=n(12),s=n(14),l=n(15),d=n(2),f=function(){var e=Object(r.useState)(30),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){n>0?setTimeout((function(){c(n-1)}),1e3):window.location.reload()})),a.a.createElement("div",null,a.a.createElement("h1",null,"Unrecoverable error occurred."),a.a.createElement("p",null,"Will auto reload in ",n," sec."))},m=(n(22),n(1)),v=n.n(m),p=n(3),b=function(){var e=window.crypto.getRandomValues(new Uint8Array(32));return Array.from(e).map((function(e){return e.toString(16).padStart(2,"0")})).join("")},g=function(){return 1e3+window.crypto.getRandomValues(new Uint16Array(1))[0]%9e3},h=function(e){try{var t=new URL(e).hash.slice(1);return new URLSearchParams(t).get("roomId")}catch(n){return null}},E=(n(24),n(4)),y=n(13),k=n.n(y),O=function(e,t){return"".concat(e,"_").concat(t)},I=function(e){return Number(e.split("_")[1])},j=function(e){return I(e.peer)},w=function(e){var t=I(e);return 10<=t&&t<=14},C=function(e,t,n,r,a){var c=!1,o=null,i=null,u=function(){var e=new Map;return{addConn:function(t){var n=e.get(t.peer);n&&n.conn.close(),e.set(t.peer,{conn:t})},markConnected:function(t){var n=e.get(t.peer);n&&(n.connected=!0)},isConnected:function(t){var n=e.get(t);return n&&n.connected||!1},setUserId:function(t,n){var r=e.get(t.peer);r&&(r.userId=n)},getUserId:function(t){var n=e.get(t.peer);return n&&n.userId},setLiveMode:function(t,n){var r=e.get(t.peer);r&&(r.liveMode=n)},getLiveMode:function(t){var n=e.get(t.peer);return n&&n.liveMode||!1},hasConn:function(t){return e.has(t)},delConn:function(t){var n=e.get(t.peer);n&&n.conn===t&&e.delete(t.peer)},getConnectedPeerIds:function(){return Array.from(e.keys()).filter((function(t){var n;return null===(n=e.get(t))||void 0===n?void 0:n.connected}))},forEachConnectedConns:function(t){Array.from(e.values()).forEach((function(e){e.connected&&t(e.conn)}))},forEachLiveConns:function(t){Array.from(e.values()).forEach((function(e){e.connected&&e.liveMode&&t(e.conn)}))},clearAll:function(){e.size&&console.log("connectionMap garbage:",e),e.clear()}}}(),s=!1,l=null,d=function(){if(!c){var e=u.getConnectedPeerIds().map(I);n({type:"CONNECTED_PEERS",peerIndexList:e})}},f=function(e){if(!c&&o&&o.id!==e&&!u.hasConn(e)){console.log("connectPeer",e);var t=o.connect(e,{serialization:"json"});y(t)}},m=function(e,n){if(!c){n&&(i=e);var r=u.getConnectedPeerIds();u.forEachConnectedConns((function(n){try{n.send({userId:t,data:e,peers:r,liveMode:s})}catch(a){console.error("broadcastData",a)}}))}},b=function(e,t){e.send({SDP:t})},h=function(){var e=Object(p.a)(v.a.mark((function e(t,n){var r,a,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n&&"object"===typeof n){e.next=2;break}return e.abrupt("return");case 2:if("object"!==typeof n.offer){e.next=20;break}return r=n.offer,e.prev=4,e.next=7,t.peerConnection.setRemoteDescription(r);case 7:return e.next=9,t.peerConnection.createAnswer();case 9:return a=e.sent,e.next=12,t.peerConnection.setLocalDescription(a);case 12:b(t,{answer:a}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),console.log("handleSDP offer failed",e.t0);case 18:e.next=33;break;case 20:if("object"!==typeof n.answer){e.next=32;break}return c=n.answer,e.prev=22,e.next=25,t.peerConnection.setRemoteDescription(c);case 25:e.next=30;break;case 27:e.prev=27,e.t1=e.catch(22),console.log("handleSDP answer failed",e.t1);case 30:e.next=33;break;case 32:console.warn("unkonwn SDP",n);case 33:case"end":return e.stop()}}),e,null,[[4,15],[22,27]])})));return function(t,n){return e.apply(this,arguments)}}(),E=function(t,n){if(!c&&(n||"object"===typeof n)){h(t,n.SDP),function(e,t){"string"===typeof t&&u.setUserId(e,t)}(t,n.userId),function(e,t){"boolean"===typeof t&&(u.setLiveMode(e,t),t?setTimeout((function(){T(e)}),3e3):setTimeout((function(){M(e)}),3e3))}(t,n.liveMode),Array.isArray(n.peers)&&n.peers.forEach((function(t){(function(e,t){return"string"===typeof t&&t.startsWith("".concat(e,"_"))})(e,t)&&f(t)}));var a=u.getUserId(t);if(a){var o={userId:a,peerIndex:j(t),liveMode:u.getLiveMode(t)};try{r(n.data,o)}catch(i){console.error("receiveData",i)}}}},y=function(e){u.isConnected(e.peer)?e.close():(u.addConn(e),e.on("open",(function(){u.markConnected(e),d(),i&&e.send({userId:t,data:i,peers:u.getConnectedPeerIds(),liveMode:s})})),e.on("data",(function(t){return E(e,t)})),e.peerConnection.addEventListener("negotiationneeded",Object(p.a)(v.a.mark((function t(){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u.isConnected(e.peer)){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.peerConnection.createOffer();case 4:return n=t.sent,t.next=7,e.peerConnection.setLocalDescription(n);case 7:b(e,{offer:n});case 8:case"end":return t.stop()}}),t)})))),e.peerConnection.addEventListener("track",(function(t){var n=u.getUserId(e);if(n){var r={userId:n,peerIndex:I(e.peer),liveMode:u.getLiveMode(e)};a(t.track,r)}})),e.on("close",(function(){if(u.delConn(e),console.log("dataConnection closed",e),n({type:"CONNECTION_CLOSED",peerIndex:j(e)}),d(),0===u.getConnectedPeerIds().length)S(!0);else if(w(e.peer)&&o&&!o.disconnected&&!w(o.id)){var t=30+Math.floor(60*Math.random());console.log("Disconnected seed peer: ".concat(I(e.peer),", reinit in ").concat(t,"sec...")),setTimeout(S,1e3*t)}})))},C=function t(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;if(!c&&!o){u.clearAll();var a=10<=r&&r<=14,i=a?r:g();n({type:"INITIALIZING_PEER",peerIndex:i});var s=O(e,i);console.log("initMyPeer start",r,s);var l=new k.a(s,{debug:2});o=l,l.on("open",(function(){o=l,n({type:"CONNECTING_SEED_PEERS"});for(var t=10;t<=14;t+=1){var r=O(e,t);f(r)}})),l.on("error",(function(e){"unavailable-id"===e.type?(o=null,l.destroy(),t(r+1)):"peer-unavailable"===e.type||("network"===e.type?(console.log("initMyPeer network error",r,e),l.destroy()):(console.error("initMyPeer",r,e.type,e),n({type:"UNKNOWN_ERROR"})))})),l.on("connection",(function(e){o===l?(console.log("new connection received",e),n({type:"NEW_CONNECTION",peerIndex:j(e)}),y(e)):e.close()})),l.on("disconnected",(function(){console.log("initMyPeer disconnected",r),setTimeout((function(){o!==l||l.destroyed||(console.log("initMyPeer reconnecting",r),n({type:"RECONNECTING"}),l.reconnect())}),5e3)})),l.on("close",(function(){o===l?(console.log("initMyPeer closed, re-initializing",r),o=null,setTimeout(t,1e4)):console.log("initMyPeer closed, ignoring",r)}))}};C();var S=function(t){if(o&&!o.disconnected){if(!t){if(w(o.id))return;for(var n=!0,r=10;r<=14;r+=1){var a=O(e,r);if(!u.isConnected(a)){n=!1;break}}if(n)return void d()}var c=o;o=null,c.destroy(),C()}},x=function(e){l&&(l.removeTrack(e),u.forEachLiveConns(function(){var t=Object(p.a)(v.a.mark((function t(n){var r,a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=n.peerConnection.getSenders(),(a=r.find((function(t){return t.track===e})))&&n.peerConnection.removeTrack(a);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))},T=function(e){l&&l.getTracks().forEach((function(t){try{if(!l)return;e.peerConnection.addTrack(t,l)}catch(n){if("InvalidAccessError"!==n.name)throw n}}))},M=function(e){e.peerConnection.getSenders().forEach((function(t){t.track&&e.peerConnection.removeTrack(t)}))};return{broadcastData:m,enableLiveMode:function(){s?console.warn("liveMode already enabled"):(s=!0,l=new MediaStream,m(i))},disableLiveMode:function(){s?(s=!1,l&&l.getTracks().forEach(x),l=null,m(i)):console.warn("liveMode already disabled")},addTrack:function(e){l&&(l.addTrack(e),u.forEachLiveConns(function(){var t=Object(p.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,l){t.next=3;break}return t.abrupt("return");case 3:n.peerConnection.addTrack(e,l),t.next=12;break;case 6:if(t.prev=6,t.t0=t.catch(0),"InvalidAccessError"!==t.t0.name){t.next=11;break}t.next=12;break;case 11:throw t.t0;case 12:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()))},removeTrack:x,dispose:function(){c=!0,o&&o.destroy()}}},S=new Map,x=function(e,t,n,r,a){var c="".concat(e,"_").concat(t),o=S.get(c);if(!o){var i=new Set,u=new Set,s=new Set,l=C(e,t,(function(e){i.forEach((function(t){t(e)}))}),(function(e,t){u.forEach((function(n){n(e,t)}))}),(function(e,t){s.forEach((function(n){n(e,t)}))}));o={room:l,networkStatusListeners:i,dataListeners:u,trackListeners:s,count:0},S.set(c,o)}n&&o.networkStatusListeners.add(n),r&&o.dataListeners.add(r),a&&(o.trackListeners.add(a),1===o.trackListeners.size&&o.room.enableLiveMode()),o.count+=1;return{broadcastData:o.room.broadcastData,addTrack:o.room.addTrack,removeTrack:o.room.removeTrack,unregister:function(){n&&o.networkStatusListeners.delete(n),r&&o.dataListeners.delete(r),a&&(o.trackListeners.delete(a),0===o.trackListeners.size&&o.room.disableLiveMode()),o.count-=1,o.count<=0&&(o.room.dispose(),S.delete(c))}}},T=function(e,t){var n=Object(r.useState)(),a=Object(d.a)(n,2),c=a[0],o=a[1];if(c&&"UNKNOWN_ERROR"===c.type)throw new Error("Network Error");return Object(r.useEffect)((function(){return x(e,t,o).unregister}),[e,t]),c},M=function(e,t){var n=Object(r.useRef)(),a=Object(r.useCallback)((function(){n.current&&n.current.apply(n,arguments)}),[]);return Object(r.useEffect)((function(){var r=x(e,t),a=r.broadcastData,c=r.unregister;return n.current=a,c}),[e,t]),a},N=function(e,t,n){var a=Object(r.useState)(),c=Object(d.a)(a,2),o=c[0],i=c[1];return Object(r.useEffect)((function(){return x(e,t,void 0,(function(e,t){return n(e)&&i({data:e,info:t}),!1})).unregister}),[e,t,n]),o},A=function(){var e=Object(p.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.enumerateDevices();case 3:return t=e.sent,n=t.filter((function(e){return"videoinput"===e.kind})).map((function(e){return{label:e.label,deviceId:e.deviceId}})),e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(p.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.enumerateDevices();case 3:return t=e.sent,n=t.filter((function(e){return"audioinput"===e.kind})).map((function(e){return{label:e.label,deviceId:e.deviceId}})),e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),D=(n(26),n(7)),R=function(e){return new Promise((function(t){return setTimeout(t,e)}))},P=function(){var e=Object(p.a)(v.a.mark((function e(t,n){var r,a,c,o,i,u,s,l,d,f,m;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof ImageCapture){e.next=21;break}return r=new ImageCapture(n),e.next=4,R(2e3);case 4:return e.prev=4,e.next=7,r.takePhoto();case 7:return c=e.sent,e.next=10,createImageBitmap(c);case 10:a=e.sent,e.next=18;break;case 13:return e.prev=13,e.t0=e.catch(4),e.next=17,r.grabFrame();case 17:a=e.sent;case 18:return o=a.width,i=a.height,e.abrupt("return",{srcImg:a,srcW:o,srcH:i});case 21:return(u=document.getElementById("internal-video")).style.display="block",s=u.srcObject,l=function(){u.srcObject=s},u.srcObject=t,e.next=28,R(2e3);case 28:return d=u,f=u.videoWidth,m=u.videoHeight,e.abrupt("return",{srcImg:d,srcW:f,srcH:m,revert:l});case 32:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t,n){return e.apply(this,arguments)}}(),U=function(){var e=Object(p.a)(v.a.mark((function e(t){var n,r,a,c,o,i,u,s,l,d,f,m,p,b,g,h,E;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t?{video:{deviceId:t}}:{video:!0},e.next=3,navigator.mediaDevices.getUserMedia(n);case 3:return r=e.sent,a=r.getVideoTracks()[0],c=document.getElementById("internal-canvas"),o=c.getContext("2d"),i=72,u=72,c.width=i,c.height=u,e.next=13,P(r,a);case 13:return s=e.sent,l=s.srcImg,d=s.srcW,f=s.srcH,m=s.revert,p=Math.max(i/d,u/f),b=Math.min(d,i/p),g=Math.min(f,u/p),h=(d-b)/2,E=(f-g)/2,o.drawImage(l,h,E,b,g,0,0,i,u),m&&m(),a.stop(),e.abrupt("return",c.toDataURL("image/png"));case 27:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(e){return e&&"object"===typeof e&&"string"===typeof e.image&&function(e){return e&&"object"===typeof e&&"string"===typeof e.nickname&&"string"===typeof e.message}(e.info)},_=n(5),F=function(){var e=Object(p.a)(v.a.mark((function e(t){var n,r,a,c,o,i,u,s,l,d,f,m,p,b,g,h;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t?{video:{deviceId:t}}:{video:!0},e.next=3,navigator.mediaDevices.getUserMedia(n);case 3:return r=e.sent,a=r.getVideoTracks()[0],(c=document.getElementById("internal-video")).style.display="block",c.srcObject=r,e.next=10,R(1e3);case 10:return o=c.videoWidth,i=c.videoHeight,u=document.getElementById("internal-canvas"),s=u.getContext("2d"),72,72,u.width=72,u.height=72,l=Math.max(72/o,72/i),d=Math.min(o,72/l),f=Math.min(i,72/l),m=(o-d)/2,p=(i-f)/2,b=setInterval((function(){s.drawImage(c,m,p,d,f,0,0,72,72)}),1e3/30),g=u.captureStream(),h=function(){c.style.display="none",clearInterval(b),a.stop(),g.getVideoTracks()[0].stop()},e.abrupt("return",{stream:g,dispose:h});case 27:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(p.a)(v.a.mark((function e(t){var n,r,a,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t?{audio:{deviceId:t}}:{audio:!0},e.next=3,navigator.mediaDevices.getUserMedia(n);case 3:return r=e.sent,a=r.getAudioTracks()[0],e.next=7,a.applyConstraints({echoCancellation:!0,echoCancellationType:{ideal:"system"},noiseSuppression:{ideal:!0}});case 7:return c=function(){a.stop()},e.abrupt("return",{stream:r,dispose:c});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(e,t){var n=t?t.clone():new MediaStream;return n.addTrack(e),n},B=function(e,t){var n=new MediaStream;return t&&t.getTracks().forEach((function(t){t!==e&&n.addTrack(t)})),n.getTracks().length>0?n:null},H=function(e,t,n,a,c,o){var i=Object(r.useState)(null),u=Object(d.a)(i,2),s=u[0],l=u[1],f=Object(r.useState)({}),m=Object(d.a)(f,2),b=m[0],g=m[1],h=function(e,t,n){var a=Object(r.useState)({}),c=Object(d.a)(a,2),o=c[0],i=c[1],u=Object(r.useState)(null),s=Object(d.a)(u,2),l=s[0],f=s[1];return Object(r.useEffect)((function(){if(n){var r=x(e,t,void 0,void 0,(function(e,t){f({track:e,info:t})}));return i({addTrack:r.addTrack,removeTrack:r.removeTrack}),function(){i({}),r.unregister()}}f(null)}),[e,t,n]),Object(E.a)({},o,{latestTrack:l})}(e,t,n||a),y=h.addTrack,k=h.removeTrack,O=h.latestTrack,I=Object(r.useRef)(!1);return Object(r.useEffect)((function(){return function(){I.current=!0}}),[]),Object(r.useEffect)((function(){if(O){var e,t=O.track,n=O.info;g((function(e){return Object(E.a)({},e,Object(_.a)({},n.userId,q(t,e[n.userId])))})),t.addEventListener("ended",(function(){I.current||g((function(e){return Object(E.a)({},e,Object(_.a)({},n.userId,B(t,e[n.userId])))}))})),t.addEventListener("mute",(function(){clearTimeout(e),e=setTimeout((function(){I.current||g((function(e){return Object(E.a)({},e,Object(_.a)({},n.userId,B(t,e[n.userId])))}))}),3e3)})),t.addEventListener("unmute",(function(){clearTimeout(e)}))}}),[O]),Object(r.useEffect)((function(){var e=null;return n&&y&&k&&Object(p.a)(v.a.mark((function t(){var n,r,a,o;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F(c);case 2:n=t.sent,r=n.stream,a=n.dispose,o=r.getVideoTracks()[0],y(o),l((function(e){return q(o,e)})),e=function(){l((function(e){return B(o,e)})),k(o),a()};case 9:case"end":return t.stop()}}),t)})))(),function(){e&&e()}}),[e,n,c,y,k]),Object(r.useEffect)((function(){var e=null;return a&&y&&k&&Object(p.a)(v.a.mark((function t(){var n,r,a,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W(o);case 2:n=t.sent,r=n.stream,a=n.dispose,c=r.getAudioTracks()[0],y(c),l((function(e){return q(c,e)})),e=function(){l((function(e){return B(c,e)})),k(c),a()};case 9:case"end":return t.stop()}}),t)})))(),function(){e&&e()}}),[e,a,o,y,k]),{faceStream:s,faceStreamMap:b}},z=a.a.memo((function(e){var t=e.image,n=e.nickname,c=e.statusMesg,o=e.obsoleted,i=e.liveMode,u=e.stream,s=e.unmuted,l=Object(r.useRef)(null);Object(r.useEffect)((function(){u&&l.current&&(l.current.srcObject=u)}),[u]);var d=!!u&&u.getVideoTracks().length>0,f=!!u&&u.getAudioTracks().length>0;return a.a.createElement("div",{className:"FaceImages-card",style:{opacity:o?.2:1}},i&&u?a.a.createElement("video",{className:"FaceImages-photo",ref:l,autoPlay:!0,muted:!s}):a.a.createElement("img",{src:t||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII=",className:"FaceImages-photo",alt:"myself"}),a.a.createElement("div",{className:"FaceImages-name"},n),a.a.createElement("div",{className:"FaceImages-mesg"},c),i&&d&&f&&a.a.createElement("div",{className:"FaceImages-live-indicator",title:"Video/Audio On"},"\u25c8"),i&&d&&!f&&a.a.createElement("div",{className:"FaceImages-live-indicator",title:"Video On"},"\u25c9"),!o&&i&&!u&&a.a.createElement("div",{className:"FaceImages-live-indicator",title:"Video On"},"\u25ce"))})),G=a.a.memo((function(e){var t=e.roomId,n=e.userId,c=e.nickname,o=e.statusMesg,i=e.liveType,u=e.videoDeviceId,s=e.audioDeviceId,l=function(e,t,n,a,c){var o=Object(r.useState)(),i=Object(d.a)(o,2),u=i[0],s=i[1],l=Object(r.useState)([]),f=Object(d.a)(l,2),m=f[0],b=f[1],g=Object(r.useState)(),h=Object(d.a)(g,2),y=h[0],k=h[1],O=Object(r.useRef)({nickname:n,message:a});if(O.current={nickname:n,message:a},y)throw y;var I=M(e,t),j=N(e,t,V);Object(r.useEffect)((function(){if(j){var e=Object(E.a)({},j.data,{userId:j.info.userId,received:Date.now(),obsoleted:!1,liveMode:j.info.liveMode,peerIndex:j.info.peerIndex});b((function(t){return t.find((function(t){return t.userId===e.userId}))?t.map((function(t){return t.userId===e.userId?e:t})):[].concat(Object(D.a)(t),[e])}))}}),[j]);var w=T(e,t);return Object(r.useEffect)((function(){if(w&&"CONNECTION_CLOSED"===w.type){var e=w.peerIndex;b((function(t){var n=!1,r=t.map((function(t){return t.peerIndex===e?(n=!0,Object(E.a)({},t,{obsoleted:!0})):t}));return n?r:t}))}}),[w]),Object(r.useEffect)((function(){var e=function(){var e=Date.now()-12e4,t=Date.now()-6e5;b((function(n){var r=!1,a=n.map((function(n){return n.received<e&&!n.obsoleted?(r=!0,Object(E.a)({},n,{obsoleted:!0})):n.received<t&&n.obsoleted?(r=!0,null):n})).filter((function(e){return e}));return r?a:n}))},n=function(){var n=Object(p.a)(v.a.mark((function n(){var r,a;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e(),n.next=4,U(c);case 4:r=n.sent,s(r),a={userId:t,image:r,info:O.current},I(a,!0),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0),k(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}();n();var r=setInterval(n,12e4);return function(){clearTimeout(r)}}),[e,t,c,I]),{myImage:u,roomImages:m}}(t,n,c,o,u),f=l.myImage,m=l.roomImages,b=H(t,n,"video"===i||"video+audio"===i,"video+audio"===i,u,s),g=b.faceStream,h=b.faceStreamMap;return a.a.createElement("div",{className:"FaceImage-container"},a.a.createElement(z,{image:f,nickname:c,statusMesg:o,liveMode:"off"!==i,stream:g||void 0}),m.map((function(e){return a.a.createElement(z,{key:e.userId,image:e.image,nickname:e.info.nickname,statusMesg:e.info.message,obsoleted:e.obsoleted,liveMode:e.liveMode,stream:h[e.userId]||void 0,unmuted:"video+audio"===i})})))})),K=(n(27),function(e){return e&&"object"===typeof e&&"string"===typeof e.userId&&"string"===typeof e.nickname&&"number"===typeof e.chatSeq&&"string"===typeof e.chatText&&("undefined"===typeof e.chatInReplyTo||"string"===typeof e.chatInReplyTo.userId||"number"===typeof e.chatInReplyTo.chatSeq)}),Y=function(e,t){var n=t[1]-e[1];return 0===n?e[0].length-t[0].length:n},J=["\ud83d\udc4d","\u2764\ufe0f","\ud83d\ude01","\ud83d\ude0e","\ud83e\udd23"],Q=function(e){var t=e.text,n=e.onClick;return a.a.createElement("button",{type:"button",onClick:function(){return n(t)}},a.a.createElement("span",{"aria-label":"Reaction"},t))},Z=a.a.memo((function(e){var t=e.chatList,n=e.replyChat;return a.a.createElement("ul",{className:"MomentaryChat-list"},t.map((function(e){var t=function(t){return n(t,e.replyTo)};return a.a.createElement("li",{key:e.key,className:"MomentaryChat-listPart"},a.a.createElement("div",{className:"MomentaryChat-listPart-header"},a.a.createElement("div",{className:"MomentaryChat-iconButton-container"},a.a.createElement("div",{className:"MomentaryChat-iconButton"},J.map((function(e){return a.a.createElement(Q,{key:e,text:e,onClick:t})})))),a.a.createElement("div",{className:"MomentaryChat-nickname"},e.nickname||"No Name")),a.a.createElement("div",null,e.text),e.replies.map((function(e){var t=Object(d.a)(e,2),n=t[0],r=t[1];return a.a.createElement("div",{className:"Momentary-icon"},n," ",r)})))})))})),$=a.a.memo((function(e){var t=function(e,t,n){var a=Object(r.useRef)(1),c=Object(r.useRef)(new Map),o=Object(r.useState)([]),i=Object(d.a)(o,2),u=i[0],s=i[1],l=Object(r.useCallback)((function(e){if((c.current.get(e.userId)||0)<e.chatSeq)if(c.current.set(e.userId,e.chatSeq),e.chatInReplyTo){var t=e.chatText,n=e.chatInReplyTo;s((function(e){return e.map((function(e){if(e.replyTo.userId===n.userId&&e.replyTo.chatSeq===n.chatSeq){var r=new Map(e.replies);r.set(t,(r.get(t)||0)+1);var a=Object(D.a)(r.entries());return a.sort(Y),Object(E.a)({},e,{replies:a})}return e}))}))}else{var r={key:"".concat(e.userId,"_").concat(e.chatSeq),replyTo:{userId:e.userId,chatSeq:e.chatSeq},nickname:e.nickname,text:e.chatText,replies:[]};s((function(e){return[r].concat(Object(D.a)(e)).slice(0,100)}))}}),[]),f=M(e,t),m=N(e,t,K);return Object(r.useEffect)((function(){m&&l(m.data)})),{chatList:u,sendChat:Object(r.useCallback)((function(e){var r={userId:t,nickname:n,chatSeq:a.current,chatText:e};a.current+=1,f(r),l(r)}),[f,t,n,l]),replyChat:Object(r.useCallback)((function(e,r){var c={userId:t,nickname:n,chatSeq:a.current,chatText:e,chatInReplyTo:r};a.current+=1,f(c),l(c)}),[f,t,n,l])}}(e.roomId,e.userId,e.nickname),n=t.chatList,c=t.sendChat,o=t.replyChat,i=Object(r.useState)(""),u=Object(d.a)(i,2),s=u[0],l=u[1];return a.a.createElement("div",{className:"MomentaryChat-container"},a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),s&&(c(s),l(""))}},a.a.createElement("input",{value:s,onChange:function(e){return l(e.target.value)},placeholder:"Enter chat message"}),a.a.createElement("button",{type:"submit",disabled:!s},"Send")),a.a.createElement(Z,{chatList:n,replyChat:o}))})),X=function(e){try{return window.localStorage.getItem(e)||""}catch(t){return""}}("nickname"),ee=function(e){var t=e.roomId,n=e.userId,c=Object(r.useState)(X),o=Object(d.a)(c,2),i=o[0],u=o[1],s=Object(r.useState)(""),l=Object(d.a)(s,2),f=l[0],m=l[1];Object(r.useEffect)((function(){!function(e){var t=window.location.hash.slice(1),n=new URLSearchParams(t);n.set("roomId",e),window.location.hash=n.toString()}(t)}),[t]);var b=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){Object(p.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))()}),[]),n}(),g=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){Object(p.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))()}),[]),n}(),h=Object(r.useState)(),E=Object(d.a)(h,2),y=E[0],k=E[1],O=Object(r.useState)(),I=Object(d.a)(O,2),j=I[0],w=I[1],C=Object(r.useState)("off"),S=Object(d.a)(C,2),x=S[0],M=S[1],N=Object(r.useState)(!0),D=Object(d.a)(N,2),R=D[0],P=D[1],U=T(t,n),V="remote-faces://".concat(window.location.href.replace(/^https:\/\//,""));return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"SingleRoom-status"},JSON.stringify(U)),a.a.createElement("div",{className:"SingleRoom-room-info"},R?a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{type:"button",onClick:function(){return P(!1)}},"Hide config"),a.a.createElement("div",null,"Link to this room:",a.a.createElement("input",{value:window.location.href,readOnly:!0}),"(Share this link with your colleagues)",a.a.createElement("a",{href:V},"Open App")),a.a.createElement("div",{className:"SingleRoom-nickname"},"Your Name:"," ",a.a.createElement("input",{defaultValue:X,onChange:function(e){u(e.target.value),function(t,n){try{window.localStorage.setItem(t,n)}catch(e){console.log("Failed to save string to localStorage",e)}}("nickname",e.target.value)}})),a.a.createElement("div",{className:"SingleRoom-statusmesg"},"Your Status:"," ",a.a.createElement("input",{onChange:function(e){m(e.target.value)},placeholder:"Enter status message"})),a.a.createElement("div",null,"Select Camera:"," ",a.a.createElement("select",{onChange:function(e){return k(e.target.value)}},b.map((function(e){return a.a.createElement("option",{key:e.deviceId,value:e.deviceId},e.label)})))),a.a.createElement("div",null,"Select Mic:"," ",a.a.createElement("select",{onChange:function(e){return w(e.target.value)}},g.map((function(e){return a.a.createElement("option",{key:e.deviceId,value:e.deviceId},e.label)})))),a.a.createElement("div",null,"Live Type:"," ",a.a.createElement("select",{onChange:function(e){return M(e.target.value)}},a.a.createElement("option",{value:"off"},"Off"),a.a.createElement("option",{value:"video"},"Video Only"),a.a.createElement("option",{value:"video+audio"},"Video and Audio")))):a.a.createElement("button",{type:"button",onClick:function(){return P(!0)}},"Show config")),a.a.createElement(G,{roomId:t,userId:n,videoDeviceId:y,audioDeviceId:j,nickname:i,statusMesg:f,liveType:x}),a.a.createElement($,{roomId:t,userId:n,nickname:i}))},te=function(){var e=window.location.hash.slice(1);return new URLSearchParams(e).get("roomId")}(),ne=b(),re=function(){var e=Object(r.useState)(te),t=Object(d.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(""),i=Object(d.a)(o,2),u=i[0],s=i[1];return n?a.a.createElement(ee,{roomId:n,userId:ne}):a.a.createElement("div",{className:"SingleRoomEntrance-init"},a.a.createElement("button",{type:"button",onClick:function(){c(b())}},"Create a new room"),"OR",a.a.createElement("input",{value:u,onChange:function(e){return s(e.target.value)},placeholder:"Enter room link..."}),a.a.createElement("button",{type:"button",onClick:function(){c(h(u))},disabled:!h(u)},"Enter room"))},ae=(n(28),function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={hasError:!1},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.children;return this.state.hasError?a.a.createElement(f,null):e}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),n}(a.a.Component)),ce=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(ae,null,a.a.createElement(re,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.f6b0e88b.chunk.js.map