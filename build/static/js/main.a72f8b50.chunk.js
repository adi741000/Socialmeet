(this["webpackJsonpdiscord-frontend"]=this["webpackJsonpdiscord-frontend"]||[]).push([[0],{179:function(e,t,n){},207:function(e,t){},231:function(e,t){},233:function(e,t){},241:function(e,t,n){},242:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(47),c=n.n(i),o=(n(179),n(61)),s=n(19),l=n(4),u=n(9),d=n(302),j=n(7),b=n(1),h=Object(j.a)("div")({width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#0a9396"}),f=function(e){return Object(b.jsx)(h,{children:Object(b.jsx)(d.a,{sx:{width:700,height:400,bgcolor:"#edf2f4",borderRadius:"5px",boxShadow:"0 2px 10px 0 rgb(0 0 0 / 20%)",display:"flex",flexDirection:"column",padding:"25px"},children:e.children})})},O=n(301),p=function(e){var t=e.label,n=e.additionalStyles,r=e.disabled,a=e.onClick;return Object(b.jsx)(O.a,{variant:"contained",sx:{bgcolor:"#0a9396",color:"white",textTransform:"none",fontSize:"16px",fontWeight:500,width:"100%",height:"40px"},style:n||{},disabled:r,onClick:a,children:t})},x=n(250),m=Object(j.a)("span")({color:"#00AFF4",fontWeight:500,cursor:"pointer"}),v=function(e){var t=e.text,n=e.redirectText,r=e.additionalStyles,a=e.redirectHandler;return Object(b.jsxs)(x.a,{sx:{color:"#72767d"},style:r||{},variant:"subtitle2",children:[t,Object(b.jsx)(m,{onClick:a,children:n})]})},g=n(294),S=function(e){var t=e.handleLogin,n=e.isFormValid,r=Object(s.g)();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g.a,{title:n?"Press to log in!":"Enter correct e-mail address and password should contains between 6 and 12 characters",children:Object(b.jsx)("div",{children:Object(b.jsx)(p,{label:"Log in",additionalStyles:{marginTop:"30px"},disabled:!n,onClick:t})})}),Object(b.jsx)(v,{text:"Need an account? ",redirectText:"Create an account",additionalStyles:{marginTop:"5px"},redirectHandler:function(){r.push("/register")}})]})},y=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(x.a,{variant:"h5",sx:{color:"black"},children:"Welcome Back!"}),Object(b.jsx)(x.a,{sx:{color:"#0a9396"},children:"We are happy to have you back!"})]})},w=Object(j.a)("div")({display:"flex",justifyContent:"center",flexDirection:"column",width:"100%"}),E=Object(j.a)("p")({color:"black",textTransform:"uppercase",fontWeight:"600",fontSize:"16px"}),k=Object(j.a)("input")({flexGrow:1,height:"40px",border:"1px solid black",borderRadius:"5px",color:"black",background:"#ffffff",margin:0,fontSize:"16px",padding:"0 5px"}),I=function(e){var t=e.value,n=e.setValue,r=e.label,a=e.type,i=e.placeholder;return Object(b.jsxs)(w,{children:[Object(b.jsx)(E,{children:r}),Object(b.jsx)(k,{value:t,onChange:function(e){n(e.target.value)},type:a,placeholder:i})]})},C=function(e){var t=e.mail,n=e.setMail,r=e.password,a=e.setPassword;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(I,{value:t,setValue:n,label:"E-mail",type:"text",placeholder:"Enter e-mail address"}),Object(b.jsx)(I,{value:r,setValue:a,label:"Password",type:"password",placeholder:"Enter password"})]})},R=function(e){return e.length>5&&e.length<13},T=function(e){return/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e)},D=function(e){return e.length>2&&e.length<13},A=n(15),U=n(30),_=n(16),M=n.n(_),L=n(135),F=function(){localStorage.clear(),window.location.pathname="/login"},N=n.n(L).a.create({baseURL:"https://socialmeet-project.herokuapp.com/api",timeout:1e3});N.interceptors.request.use((function(e){var t=localStorage.getItem("user");if(t){var n=JSON.parse(t).token;e.headers.Authorization="Bearer ".concat(n)}return e}),(function(e){return Promise.reject(e)}));var W=function(){var e=Object(U.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.post("/auth/login",t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{error:!0,exception:e.t0});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(U.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.post("/auth/register",t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{error:!0,exception:e.t0});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(U.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.post("/friend-invitation/invite",t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),V(e.t0),e.abrupt("return",{error:!0,exception:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(U.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.post("/friend-invitation/accept",t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),V(e.t0),e.abrupt("return",{error:!0,exception:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(U.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.post("/friend-invitation/reject",t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),V(e.t0),e.abrupt("return",{error:!0,exception:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),V=function(e){var t,n=null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.status;n&&(401===n||403===n)&&F()},J={OPEN_ALERT_MESSAGE:"ALERT.OPEN_ALERT_MESSAGE",CLOSE_ALERT_MESSAGE:"ALERT.CLOSE_ALERT_MESSAGE"},B=function(e){return{type:J.OPEN_ALERT_MESSAGE,content:e}},Y=function(){return{type:J.CLOSE_ALERT_MESSAGE}},Z=J,$="AUTH.SET_USER_DETAILS",q=function(e){return{login:function(t,n){return e(Q(t,n))},register:function(t,n){return e(X(t,n))},setUserDetails:function(t){return e(K(t))}}},K=function(e){return{type:$,userDetails:e}},Q=function(e,t){return function(){var n=Object(U.a)(M.a.mark((function n(r){var a,i,c,o,s;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,W(e);case 2:a=n.sent,console.log(a),a.error?r(B(null===a||void 0===a||null===(i=a.exception)||void 0===i||null===(c=i.response)||void 0===c?void 0:c.data)):(o=null===a||void 0===a?void 0:a.data,s=o.userDetails,localStorage.setItem("user",JSON.stringify(s)),r(K(s)),t.push("/dashboard"));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},X=function(e,t){return function(){var n=Object(U.a)(M.a.mark((function n(r){var a,i,c,o,s;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P(e);case 2:a=n.sent,console.log(a),a.error?r(B(null===a||void 0===a||null===(i=a.exception)||void 0===i||null===(c=i.response)||void 0===c?void 0:c.data)):(o=null===a||void 0===a?void 0:a.data,s=o.userDetails,localStorage.setItem("user",JSON.stringify(s)),r(K(s)),t.push("/dashboard"));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},ee=Object(A.b)(null,(function(e){return Object(l.a)({},q(e))}))((function(e){var t=e.login,n=Object(s.g)(),a=Object(r.useState)(""),i=Object(u.a)(a,2),c=i[0],o=i[1],l=Object(r.useState)(""),d=Object(u.a)(l,2),j=d[0],h=d[1],O=Object(r.useState)(!1),p=Object(u.a)(O,2),x=p[0],m=p[1];Object(r.useEffect)((function(){m(function(e){var t=e.mail,n=e.password,r=T(t),a=R(n);return r&&a}({mail:c,password:j}))}),[c,j,m]);return Object(b.jsxs)(f,{children:[Object(b.jsx)(y,{}),Object(b.jsx)(C,{mail:c,setMail:o,password:j,setPassword:h}),Object(b.jsx)(S,{isFormValid:x,handleLogin:function(){t({mail:c,password:j},n)}})]})})),te=function(e){var t=e.mail,n=e.setMail,r=e.username,a=e.setUsername,i=e.password,c=e.setPassword;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(I,{value:t,setValue:n,label:"E-mail address",type:"text",placeholder:"Enter e-mail address"}),Object(b.jsx)(I,{value:r,setValue:a,label:"Username",type:"text",placeholder:"Enter a username"}),Object(b.jsx)(I,{value:i,setValue:c,label:"Password",type:"password",placeholder:"Enter password"})]})},ne=function(e){var t=e.handleRegister,n=e.isFormValid,r=Object(s.g)();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g.a,{title:n?"Press to register!":"Username should contains between 3 and 12 characters and password should contains between 6 and 12 character. Also correct e-mail address should provided",children:Object(b.jsx)("div",{children:Object(b.jsx)(p,{label:"Register",additionalStyles:{marginTop:"30px"},disabled:!n,onClick:t})})}),Object(b.jsx)(v,{text:"Already have an account?",redirectText:" Log in",additionalStyles:{marginTop:"5px"},redirectHandler:function(){r.push("/login")}})]})},re=Object(A.b)(null,(function(e){return Object(l.a)({},q(e))}))((function(e){var t=e.register,n=Object(s.g)(),a=Object(r.useState)(""),i=Object(u.a)(a,2),c=i[0],o=i[1],l=Object(r.useState)(""),d=Object(u.a)(l,2),j=d[0],h=d[1],O=Object(r.useState)(""),p=Object(u.a)(O,2),m=p[0],v=p[1],g=Object(r.useState)(!1),S=Object(u.a)(g,2),y=S[0],w=S[1];return Object(r.useEffect)((function(){w(function(e){var t=e.mail,n=e.password,r=e.username;return T(t)&&R(n)&&D(r)}({mail:c,username:j,password:m}))}),[c,j,m,w]),Object(b.jsxs)(f,{children:[Object(b.jsx)(x.a,{variant:"h5",sx:{color:"black "},children:"Create an Account"}),Object(b.jsx)(te,{mail:c,setMail:o,username:j,setUsername:h,password:m,setPassword:v}),Object(b.jsx)(ne,{handleRegister:function(){t({mail:c,password:m,username:j},n)},isFormValid:y})]})})),ae=(n(207),n(142)),ie=n.n(ae),ce=n(136),oe=n(78),se=n(137),le={userDetails:null},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;return t.type===$?Object(l.a)(Object(l.a)({},e),{},{userDetails:t.userDetails}):e},de={showAlertMessage:!1,alertMessageContent:null},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z.OPEN_ALERT_MESSAGE:return Object(l.a)(Object(l.a)({},e),{},{showAlertMessage:!0,alertMessageContent:t.content});case Z.CLOSE_ALERT_MESSAGE:return Object(l.a)(Object(l.a)({},e),{},{showAlertMessage:!1,alertMessageContent:null});default:return e}},be="FRIENDS.SET_FRIENDS",he="FRIENDS.SET_PENDING_FRIENDS_INVITATIONS",fe="FRIENDS.SET_ONLINE_USERS",Oe=function(e){return{sendFriendInvitation:function(t,n){return e(pe(t,n))},acceptFriendInvitation:function(t){return e(xe(t))},rejectFriendInvitation:function(t){return e(me(t))}}},pe=function(e,t){return function(){var n=Object(U.a)(M.a.mark((function n(r){var a,i,c;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,z(e);case 2:(a=n.sent).error?r(B(null===(i=a.exception)||void 0===i||null===(c=i.response)||void 0===c?void 0:c.data)):(r(B("Invitation has been sent!")),t());case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},xe=function(e){return function(){var t=Object(U.a)(M.a.mark((function t(n){var r,a,i;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H(e);case 2:(r=t.sent).error?n(B(null===(a=r.exception)||void 0===a||null===(i=a.response)||void 0===i?void 0:i.data)):n(B("Invitation accepted!"));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},me=function(e){return function(){var t=Object(U.a)(M.a.mark((function t(n){var r,a,i;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G(e);case 2:(r=t.sent).error?n(B(null===(a=r.exception)||void 0===a||null===(i=a.response)||void 0===i?void 0:i.data)):n(B("Invitation rejected!"));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},ve={friends:[],pendingFriendsInvitations:[],onlineUsers:[]},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he:return Object(l.a)(Object(l.a)({},e),{},{pendingFriendsInvitations:t.pendingFriendsInvitations});case be:return Object(l.a)(Object(l.a)({},e),{},{friends:t.friends});case fe:return Object(l.a)(Object(l.a)({},e),{},{onlineUsers:t.onlineUsers});default:return e}},Se="DIRECT",ye="CHAT.SET_CHOSEN_CHAT_DETAILS",we="CHAT.SET_MESSAGES",Ee=function(e,t){return{type:ye,chatType:t,chatDetails:e}},ke={chosenChatDetails:null,chatType:null,messages:[]},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ye:return Object(l.a)(Object(l.a)({},e),{},{chosenChatDetails:t.chatDetails,chatType:t.chatType,messages:[]});case we:return Object(l.a)(Object(l.a)({},e),{},{messages:t.messages});default:return e}},Ce="ROOM.OPEN_ROOM",Re="ROOM.SET_ROOM_DETAILS",Te="ROOM.SET_ACTIVE_ROOMS",De="ROOM.SET_LOCAL_STREAM",Ae="ROOM.SET_REMOTE_STREAMS",Ue="ROOM.SET_AUDIO_ONLY",_e="ROOM.SET_SCREEN_SHARE_STREAM",Me="ROOM.SET_IS_USER_JOINED_WITH_ONLY_AUDIO",Le=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{type:Ce,isUserRoomCreator:e,isUserInRoom:t}},Fe=function(e){return{setAudioOnly:function(t){return e(Pe(t))},setScreenSharingStream:function(t){e(He(t))}}},Ne=function(e){return{type:Re,roomDetails:e}},We=function(e){return{type:De,localStream:e}},Pe=function(e){return{type:Ue,audioOnly:e}},ze=function(e){return{type:Ae,remoteStreams:e}},He=function(e){return{type:_e,isScreenSharingActive:!!e,screenSharingStream:e||null}},Ge=function(e){return{type:Me,isUserJoinedWithOnlyAudio:e}},Ve={isUserInRoom:!1,isUserRoomCreator:!1,roomDetails:null,activeRooms:[],localStream:null,remoteStreams:[],audioOnly:!1,screenSharingStream:null,isScreenSharingActive:!1,isUserJoinedWithOnlyAudio:!1},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ce:return Object(l.a)(Object(l.a)({},e),{},{isUserInRoom:t.isUserInRoom,isUserRoomCreator:t.isUserRoomCreator});case Re:return Object(l.a)(Object(l.a)({},e),{},{roomDetails:t.roomDetails});case Te:return Object(l.a)(Object(l.a)({},e),{},{activeRooms:t.activeRooms});case De:return Object(l.a)(Object(l.a)({},e),{},{localStream:t.localStream});case Ue:return Object(l.a)(Object(l.a)({},e),{},{audioOnly:t.audioOnly});case Ae:return Object(l.a)(Object(l.a)({},e),{},{remoteStreams:t.remoteStreams});case _e:return Object(l.a)(Object(l.a)({},e),{},{screenSharingStream:t.screenSharingStream,isScreenSharingActive:t.isScreenSharingActive});case Me:return Object(l.a)(Object(l.a)({},e),{},{isUserJoinedWithOnlyAudio:t.isUserJoinedWithOnlyAudio});default:return e}},Be=Object(oe.combineReducers)({auth:ue,alert:je,friends:ge,chat:Ie,room:Je}),Ye=Object(oe.createStore)(Be,Object(ce.composeWithDevTools)(Object(oe.applyMiddleware)(se.a))),Ze=n(158),$e=function(e){var t=e.participants,n=e.usersInCoversation,r=e.messages;t.every((function(e){return n.includes(e)}))&&Ye.dispatch(function(e){return{type:we,messages:e}}(r))},qe=n(27),Ke=n(141),Qe=n.n(Ke),Xe={audio:!0,video:!1},et={video:!0,audio:!0},tt=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=e?Xe:et;navigator.mediaDevices.getUserMedia(n).then((function(e){Ye.dispatch(We(e)),t()})).catch((function(e){console.log(e),console.log("Cannot get an access to local stream")}))},nt={},rt=function(e,t){var n=Ye.getState().room.localStream;t?console.log("preparing new peer connection as initiator"):console.log("preparing new peer connection as not initiator"),nt[e]=new Qe.a({initiator:t,config:(console.warn("Using only STUN server"),{iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),stream:n}),nt[e].on("signal",(function(t){st({signal:t,connUserSocketId:e})})),nt[e].on("stream",(function(t){console.log("remote stream came from other user"),console.log("direct connection has been established"),t.connUserSocketId=e,at(t)}))},at=function(e){var t=Ye.getState().room.remoteStreams,n=[].concat(Object(qe.a)(t),[e]);Ye.dispatch(ze(n))},it=function(e){for(var t in nt)for(var n in nt[t].streams[0].getTracks())for(var r in e.getTracks())if(nt[t].streams[0].getTracks()[n].kind===e.getTracks()[r].kind){nt[t].replaceTrack(nt[t].streams[0].getTracks()[n],e.getTracks()[r],nt[t].streams[0]);break}},ct=null,ot=function(e){var t=e.token;(ct=Object(Ze.a)("https://socialmeet-project.herokuapp.com",{auth:{token:t}})).on("connect",(function(){console.log("succesfully connected with socket.io server"),console.log(ct.id)})),ct.on("friends-invitations",(function(e){var t=e.pendingInvitations;Ye.dispatch({type:he,pendingFriendsInvitations:t})})),ct.on("friends-list",(function(e){var t=e.friends;Ye.dispatch(function(e){return{type:be,friends:e}}(t))})),ct.on("online-users",(function(e){var t=e.onlineUsers;Ye.dispatch(function(e){return{type:fe,onlineUsers:e}}(t))})),ct.on("direct-chat-history",(function(e){console.log(e),function(e){var t,n=e.participants,r=e.messages,a=null===(t=Ye.getState().chat.chosenChatDetails)||void 0===t?void 0:t.id,i=Ye.getState().auth.userDetails._id;a&&i&&$e({participants:n,usersInCoversation:[a,i],messages:r})}(e)})),ct.on("room-create",(function(e){ut(e)})),ct.on("active-rooms",(function(e){dt(e)})),ct.on("conn-prepare",(function(e){var t=e.connUserSocketId;rt(t,!1),ct.emit("conn-init",{connUserSocketId:t})})),ct.on("conn-init",(function(e){var t=e.connUserSocketId;rt(t,!0)})),ct.on("conn-signal",(function(e){!function(e){var t=e.connUserSocketId,n=e.signal;nt[t]&&nt[t].signal(n)}(e)})),ct.on("room-participant-left",(function(e){console.log("user left room"),function(e){var t=e.connUserSocketId;nt[t]&&(nt[t].destroy(),delete nt[t]);var n=Ye.getState().room.remoteStreams.filter((function(e){return e.connUserSocketId!==t}));Ye.dispatch(ze(n))}(e)}))},st=function(e){ct.emit("conn-signal",e)},lt=function(){var e=Ye.getState().room.audioOnly;tt(e,(function(){Ye.dispatch(Le(!0,!0));var e=Ye.getState().room.audioOnly;Ye.dispatch(Ge(e)),ct.emit("room-create")}))},ut=function(e){var t=e.roomDetails;Ye.dispatch(Ne(t))},dt=function(e){var t,n=e.activeRooms,r=Ye.getState().friends.friends,a=[],i=null===(t=Ye.getState().auth.userDetails)||void 0===t?void 0:t._id;n.forEach((function(e){e.roomCreator.userId===i?a.push(Object(l.a)(Object(l.a)({},e),{},{creatorUsername:"Me"})):r.forEach((function(t){t.id===e.roomCreator.userId&&a.push(Object(l.a)(Object(l.a)({},e),{},{creatorUsername:t.username}))}))})),Ye.dispatch(function(e){return{type:Te,activeRooms:e}}(a))},jt=function(e){var t=Ye.getState().room.audioOnly;tt(t,(function(){Ye.dispatch(Ne({roomId:e})),Ye.dispatch(Le(!1,!0));var t,n=Ye.getState().room.audioOnly;Ye.dispatch(Ge(n)),t={roomId:e},ct.emit("room-join",t)}))},bt=function(){var e=Ye.getState().room.roomDetails.roomId,t=Ye.getState().room.localStream;t&&(t.getTracks().forEach((function(e){return e.stop()})),Ye.dispatch(We(null)));var n,r=Ye.getState().room.screenSharingStream;r&&(r.getTracks().forEach((function(e){return e.stop()})),Ye.dispatch(He(null))),Ye.dispatch(ze([])),Object.entries(nt).forEach((function(e){var t=e[0];nt[t]&&(nt[t].destroy(),delete nt[t])})),n={roomId:e},ct.emit("room-leave",n),Ye.dispatch(Ne(null)),Ye.dispatch(Le(!1,!1))},ht=function(e){var t=e.isUserInRoom;return Object(b.jsx)(O.a,{disabled:t,onClick:function(){lt()},style:{width:"48px",height:"48px",borderRadius:"16px",margin:0,padding:0,minWidth:0,marginTop:"10px",color:"white",backgroundColor:"#0a9396"},children:Object(b.jsx)(ie.a,{})})},ft=Object(j.a)("div")({height:"42px",width:"42px",backgroundColor:"#0a9396",borderRadius:"42px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",fontWeight:"700",color:"white"}),Ot=function(e){var t=e.username,n=e.large;return Object(b.jsx)(ft,{style:n?{height:"80px",width:"80px"}:{},children:t.substring(0,2)})},pt=function(e){var t=e.creatorUsername,n=e.roomId,r=e.amountOfParticipants,a=e.isUserInRoom,i=r>3,c="Cretor: ".concat(t,". Connected: ").concat(r);return Object(b.jsx)(g.a,{title:c,children:Object(b.jsx)("div",{children:Object(b.jsx)(O.a,{style:{width:"48px",height:"48px",borderRadius:"16px",margin:0,padding:0,minWidth:0,marginTop:"10px",color:"white",backgroundColor:"#0a9396"},disabled:i||a,onClick:function(){r<4&&jt(n)},children:Object(b.jsx)(Ot,{username:t})})})})},xt=Object(j.a)("div")({width:"72px",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#36393f"}),mt=Object(A.b)((function(e){var t=e.room;return Object(l.a)({},t)}))((function(e){var t=e.activeRooms,n=e.isUserInRoom;return Object(b.jsxs)(xt,{children:[Object(b.jsx)(ht,{isUserInRoom:n}),t.map((function(e){return Object(b.jsx)(pt,{roomId:e.roomId,creatorUsername:e.creatorUsername,amountOfParticipants:e.participants.length,isUserInRoom:n},e.roomId)}))]})})),vt=n(303),gt=n(293),St=n(308),yt=n(306),wt=n(307),Et=Object(A.b)(null,(function(e){return Object(l.a)({},Oe(e))}))((function(e){var t=e.isDialogOpen,n=e.closeDialogHandler,a=e.sendFriendInvitation,i=void 0===a?function(){}:a,c=Object(r.useState)(""),o=Object(u.a)(c,2),s=o[0],l=o[1],d=Object(r.useState)(""),j=Object(u.a)(d,2),h=j[0],f=j[1],O=function(){n(),l("")};return Object(r.useEffect)((function(){f(T(s))}),[s,f]),Object(b.jsx)("div",{children:Object(b.jsxs)(vt.a,{open:t,onClose:O,children:[Object(b.jsx)(gt.a,{children:Object(b.jsx)(x.a,{children:"Invite a Friend"})}),Object(b.jsxs)(yt.a,{children:[Object(b.jsx)(wt.a,{children:Object(b.jsx)(x.a,{children:"Enter e-mail address of friend which you would like to invite"})}),Object(b.jsx)(I,{label:"Mail",type:"text",value:s,setValue:l,placeholder:"Enter mail address"})]}),Object(b.jsx)(St.a,{children:Object(b.jsx)(p,{onClick:function(){i({targetMailAddress:s},O)},disabled:!h,label:"Send",additionalStyles:{marginLeft:"15px",marginRight:"15px",marginBottom:"10px"}})})]})})})),kt={marginTop:"10px",marginLeft:"5px",width:"80%",height:"30px",background:"#3ba55d"},It=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p,{additionalStyles:kt,label:"Add Friend",onClick:function(){a(!0)}}),Object(b.jsx)(Et,{isDialogOpen:n,closeDialogHandler:function(){a(!1)}})]})},Ct=function(e){var t=e.title;return Object(b.jsx)(x.a,{sx:{textTransform:"uppercase",color:"#13505B",fontSize:"14px",marginTop:"10px"},children:t})},Rt=n(143),Tt=n.n(Rt),Dt=function(){return Object(b.jsx)(d.a,{sx:{color:"#3ba55d",display:"flex",alignItems:"center",position:"absolute",right:"0.5px"},children:Object(b.jsx)(Tt.a,{})})},At=Object(A.b)(null,(function(e){return Object(l.a)({},function(e){return{setChosenChatDetails:function(t,n){return e(Ee(t,n))}}}(e))}))((function(e){var t=e.id,n=e.username,r=e.isOnline,a=e.setChosenChatDetails;return Object(b.jsxs)(O.a,{onClick:function(){a({id:t,name:n},Se)},style:{width:"100%",height:"42px",marginTop:"10px",display:"flex",alignItems:"center",justifyContent:"flex-start",textTransform:"none",color:"black",position:"relative"},children:[Object(b.jsx)(Ot,{username:n}),Object(b.jsx)(x.a,{style:{marginLeft:"7px",fontWeight:700,color:"#8e9297"},variant:"subtitle1",align:"left",children:n}),r&&Object(b.jsx)(Dt,{})]})})),Ut=Object(j.a)("div")({flexGrow:1,width:"100%"}),_t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.forEach((function(e){var n=t.find((function(t){return t.userId===e.id}));e.isOnline=!!n})),e},Mt=Object(A.b)((function(e){var t=e.friends;return Object(l.a)({},t)}))((function(e){var t=e.friends,n=e.onlineUsers;return Object(b.jsx)(Ut,{children:_t(t,n).map((function(e){return Object(b.jsx)(At,{username:e.username,id:e.id,isOnline:e.isOnline},e.id)}))})})),Lt=n(144),Ft=n.n(Lt),Nt=n(145),Wt=n.n(Nt),Pt=n(309),zt=function(e){var t=e.disabled,n=e.acceptInvitationHandler,r=e.rejectInvitationHandler;return Object(b.jsxs)(d.a,{sx:{display:"flex"},children:[Object(b.jsx)(Pt.a,{style:{color:"#4DD637"},disabled:t,onClick:n,children:Object(b.jsx)(Ft.a,{})}),Object(b.jsx)(Pt.a,{style:{color:"#E21717"},disabled:t,onClick:r,children:Object(b.jsx)(Wt.a,{})})]})},Ht=Object(A.b)(null,(function(e){return Object(l.a)({},Oe(e))}))((function(e){var t=e.id,n=e.username,a=e.mail,i=e.acceptFriendInvitation,c=void 0===i?function(){}:i,o=e.rejectFriendInvitation,s=void 0===o?function(){}:o,l=Object(r.useState)(!1),j=Object(u.a)(l,2),h=j[0],f=j[1];return Object(b.jsx)(g.a,{title:a,children:Object(b.jsx)("div",{style:{width:"100%"},children:Object(b.jsxs)(d.a,{sx:{width:"100%",height:"42px",marginTop:"10px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(b.jsx)(Ot,{username:n}),Object(b.jsx)(x.a,{sx:{marginLeft:"7px",fontWeight:700,color:"#8e9297",flexGrow:1},variant:"subtitle1",children:n}),Object(b.jsx)(zt,{disabled:h,acceptInvitationHandler:function(){console.log(t),c({id:t}),f(!0)},rejectInvitationHandler:function(){console.log(t),s({id:t}),f(!0)}})]})})})})),Gt=Object(j.a)("div")({width:"100%",height:"22%",display:"flex",flexDirection:"column",alignItems:"center",overflow:"auto"}),Vt=Object(A.b)((function(e){var t=e.friends;return Object(l.a)({},t)}))((function(e){var t=e.pendingFriendsInvitations;return Object(b.jsx)(Gt,{children:t.map((function(e){return Object(b.jsx)(Ht,{id:e._id,username:e.senderId.username,mail:e.senderId.mail},e._id)}))})})),Jt=Object(j.a)("div")({width:"224px",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#edf2f4"}),Bt=function(){return Object(b.jsxs)(Jt,{children:[Object(b.jsx)(It,{}),Object(b.jsx)(Ct,{title:"Private Messages"}),Object(b.jsx)(Mt,{}),Object(b.jsx)(Ct,{title:"Invitations"}),Object(b.jsx)(Vt,{})]})},Yt=n(146),Zt=Object(j.a)("div")({flexGrow:1,height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}),$t=function(){return Object(b.jsx)(Zt,{children:Object(b.jsx)(Yt.a,{url:"https://onecompiler.com/",height:"100%",width:"100%"})})},qt=Object(j.a)("div")({width:"98%",display:"column",marginTop:"10px"}),Kt=function(e){var t=e.name,n=void 0===t?"":t;return Object(b.jsxs)(qt,{children:[Object(b.jsx)(Ot,{large:!0,username:n}),Object(b.jsx)(x.a,{variant:"h4",sx:{fontWeight:"bold",color:"white",marginLeft:"5px",marginRight:"5px"},children:n}),Object(b.jsxs)(x.a,{sx:{color:"#b9bbbe",marginLeft:"5px",marginRight:"5px"},children:["This is the beginning of your conversation with ",n]})]})},Qt=Object(j.a)("div")({width:"97%",display:"flex",marginTop:"10px"}),Xt=Object(j.a)("div")({width:"70px"}),en=Object(j.a)("div")({display:"flex",flexDirection:"column"}),tn=Object(j.a)("div")({color:"#DCDDDE"}),nn=Object(j.a)("div")({color:"#DCDDDE",width:"97%"}),rn=Object(j.a)("span")({marginLeft:"70px"}),an=function(e){var t=e.content,n=e.sameAuthor,r=e.username,a=e.date,i=e.sameDay;return n&&i?Object(b.jsx)(nn,{children:Object(b.jsx)(rn,{children:t})}):Object(b.jsxs)(Qt,{children:[Object(b.jsx)(Xt,{children:Object(b.jsx)(Ot,{username:r})}),Object(b.jsxs)(en,{children:[Object(b.jsxs)(x.a,{style:{fontSize:"16px",color:"white"},children:[r," ",Object(b.jsx)("span",{style:{fontSize:"12px",color:"#72767d"},children:a})]}),Object(b.jsx)(tn,{children:t})]})]})},cn=Object(j.a)("div")({width:"95%",backgroundColor:"#b9bbbe",height:"1px",position:"relative",marginTop:"20px",marginBottom:"10px"}),on=Object(j.a)("span")({backgroundColor:"#36393f",position:"absolute",left:"45%",top:"-10px",color:"#b9bbbe",padding:"0 5px",fontSize:"14px"}),sn=function(e){var t=e.date;return Object(b.jsx)(cn,{children:Object(b.jsx)(on,{children:t})})},ln=Object(j.a)("div")({height:"calc(100% - 60px)",overflow:"auto",display:"flex",flexDirection:"column",alignItems:"center"}),un=function(e,t){var n={mm:e.getMonth()+1,dd:e.getDate(),yy:e.getFullYear().toString().slice(-2),yyyy:e.getFullYear()};return t.replace(/mm|dd|yy|yyy/gi,(function(e){return n[e]}))},dn=Object(A.b)((function(e){var t=e.chat;return Object(l.a)({},t)}))((function(e){var t=e.chosenChatDetails,n=e.messages;return Object(b.jsxs)(ln,{children:[Object(b.jsx)(Kt,{name:null===t||void 0===t?void 0:t.name}),n.map((function(e,t){var r=t>0&&n[t].author._id===n[t-1].author._id,a=t>0&&un(new Date(e.date),"dd/mm/yy")===un(new Date(n[t-1].date),"dd/mm/yy");return Object(b.jsxs)("div",{style:{width:"97%"},children:[(!a||0===t)&&Object(b.jsx)(sn,{date:un(new Date(e.date),"dd/mm/yy")}),Object(b.jsx)(an,{content:e.content,username:e.author.username,sameAuthor:r,date:un(new Date(e.date),"dd/mm/yy"),sameDay:a})]},e._id)}))]})})),jn=Object(j.a)("div")({height:"60px",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}),bn=Object(j.a)("input")({backgroundColor:"#edf2f4",width:"98%",height:"44px",color:"black",border:"none",borderRadius:"8px",fontSize:"14px",padding:"0 10px"}),hn=Object(A.b)((function(e){var t=e.chat;return Object(l.a)({},t)}))((function(e){var t=e.chosenChatDetails,n=Object(r.useState)(""),a=Object(u.a)(n,2),i=a[0],c=a[1],o=function(){var e;i.length>0&&(e={receiverUserId:t.id,content:i},console.log(e),ct.emit("direct-message",e),c(""))};return Object(b.jsx)(jn,{children:Object(b.jsx)(bn,{placeholder:"Write message to ".concat(t.name),value:i,onChange:function(e){c(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&o()}})})})),fn=Object(j.a)("div")({flexGrow:1}),On=function(e){var t=e.chosenChatDetails;return Object(r.useEffect)((function(){var e;e={receiverUserId:t.id},ct.emit("direct-chat-history",e)}),[t]),Object(b.jsxs)(fn,{children:[Object(b.jsx)(dn,{}),Object(b.jsx)(hn,{})]})},pn=Object(j.a)("div")({flexGrow:1,backgroundColor:"#36393f",marginTop:"48px",display:"flex"}),xn=Object(A.b)((function(e){var t=e.chat;return Object(l.a)({},t)}))((function(e){var t=e.chosenChatDetails;return Object(b.jsx)(pn,{children:t?Object(b.jsx)(On,{chosenChatDetails:t}):Object(b.jsx)($t,{})})})),mn=n(296),vn=n(300),gn=n(147),Sn=n.n(gn),yn=Object(A.b)((function(e){var t=e.room;return Object(l.a)({},t)}),(function(e){return Object(l.a)({},Fe(e))}))((function(e){var t=e.audioOnly,n=e.setAudioOnly,a=r.useState(null),i=Object(u.a)(a,2),c=i[0],o=i[1],s=Boolean(c);return Object(b.jsxs)("div",{children:[Object(b.jsx)(Pt.a,{onClick:function(e){o(e.currentTarget)},style:{color:"white"},children:Object(b.jsx)(Sn.a,{})}),Object(b.jsxs)(mn.a,{id:"basic-menu",anchorEl:c,open:s,onClose:function(){o(null)},MenuListProps:{"aria-labelledby":"basic-button"},children:[Object(b.jsx)(vn.a,{onClick:F,children:"Logout"}),Object(b.jsx)(vn.a,{onClick:function(){n(!t)},children:t?"Audio Only Enabled":"Audio Only Disabled"})]})]})})),wn=Object(A.b)((function(e){var t;return{name:null===(t=e.chat.chosenChatDetails)||void 0===t?void 0:t.name}}))((function(e){var t=e.name;return Object(b.jsx)(x.a,{sx:{fontSize:"16px",color:"white",fontWeight:"bold"},children:"".concat(t?"Chosen conversation: ".concat(t):"")})})),En=Object(j.a)("div")({position:"absolute",right:"0",top:"0",height:"48px",borderBottom:"1px solid black",backgroundColor:"#1f2023",width:"calc(100% - 326px)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 15px"}),kn=function(){return Object(b.jsxs)(En,{children:[Object(b.jsx)(wn,{}),Object(b.jsx)(yn,{})]})},In=n(149),Cn=n.n(In),Rn=n(148),Tn=n.n(Rn),Dn=Object(j.a)("div")({position:"absolute",bottom:"10px",right:"10px"}),An=function(e){var t=e.isRoomMinimized,n=e.handleRoomResize;return Object(b.jsx)(Dn,{children:Object(b.jsx)(Pt.a,{style:{color:"white"},onClick:n,children:t?Object(b.jsx)(Tn.a,{}):Object(b.jsx)(Cn.a,{})})})},Un=Object(j.a)("div")({height:"50%",width:"50%",backgroundColor:"black",borderRadius:"8px"}),_n=Object(j.a)("video")({width:"100%",height:"100%"}),Mn=function(e){var t=e.stream,n=e.isLocalStream,a=Object(r.useRef)();return Object(r.useEffect)((function(){var e=a.current;e.srcObject=t,e.onloadedmetadata=function(){e.play()}}),[t]),Object(b.jsx)(Un,{children:Object(b.jsx)(_n,{ref:a,autoPlay:!0,muted:!!n})})},Ln=Object(j.a)("div")({height:"85%",width:"100%",display:"flex",flexWrap:"wrap"}),Fn=Object(A.b)((function(e){var t=e.room;return Object(l.a)({},t)}))((function(e){var t=e.localStream,n=e.remoteStreams,r=e.screenSharingStream;return Object(b.jsxs)(Ln,{children:[Object(b.jsx)(Mn,{stream:r||t,isLocalStream:!0}),n.map((function(e){return Object(b.jsx)(Mn,{stream:e},e.id)}))]})})),Nn=n(150),Wn=n.n(Nn),Pn=n(151),zn=n.n(Pn),Hn=function(e){var t=e.localStream,n=Object(r.useState)(!0),a=Object(u.a)(n,2),i=a[0],c=a[1];return Object(b.jsx)(Pt.a,{onClick:function(){t.getVideoTracks()[0].enabled=!i,c(!i)},style:{color:"white"},children:i?Object(b.jsx)(Wn.a,{}):Object(b.jsx)(zn.a,{})})},Gn=n(152),Vn=n.n(Gn),Jn=n(153),Bn=n.n(Jn),Yn=function(e){var t=e.localStream,n=Object(r.useState)(!0),a=Object(u.a)(n,2),i=a[0],c=a[1];return Object(b.jsx)(Pt.a,{onClick:function(){t.getAudioTracks()[0].enabled=!i,c(!i)},style:{color:"white"},children:i?Object(b.jsx)(Vn.a,{}):Object(b.jsx)(Bn.a,{})})},Zn=n(154),$n=n.n(Zn),qn=function(){return Object(b.jsx)(Pt.a,{onClick:function(){bt()},style:{color:"white"},children:Object(b.jsx)($n.a,{})})},Kn=n(156),Qn=n.n(Kn),Xn=n(155),er=n.n(Xn),tr={audio:!1,video:!0},nr=function(e){var t=e.localStream,n=e.screenSharingStream,r=e.setScreenSharingStream,a=e.isScreenSharingActive,i=function(){var e=Object(U.a)(M.a.mark((function e(){var i;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=14;break}return i=null,e.prev=2,e.next=5,navigator.mediaDevices.getDisplayMedia(tr);case 5:i=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log("error occured when trying to get an access to screen share stream");case 11:i&&(r(i),it(i)),e.next=17;break;case 14:it(t),n.getTracks().forEach((function(e){return e.stop()})),r(null);case 17:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)(Pt.a,{onClick:i,style:{color:"white"},children:a?Object(b.jsx)(er.a,{}):Object(b.jsx)(Qn.a,{})})},rr=Object(j.a)("div")({height:"15%",width:"100%",backgroundColor:"#0a9396",borderTopLeftRadius:"8px",borderTopRightRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"}),ar=Object(A.b)((function(e){var t=e.room;return Object(l.a)({},t)}),(function(e){return Object(l.a)({},Fe(e))}))((function(e){var t=e.localStream,n=e.isUserJoinedWithOnlyAudio;return Object(b.jsxs)(rr,{children:[!n&&Object(b.jsx)(nr,Object(l.a)({},e)),Object(b.jsx)(Yn,{localStream:t}),Object(b.jsx)(qn,{}),!n&&Object(b.jsx)(Hn,{localStream:t})]})})),ir=Object(j.a)("div")({position:"absolute",borderRadius:"8px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#202225"}),cr={width:"100%",height:"100vh"},or={bottom:"0px",right:"0px",width:"30%",height:"40vh"},sr=function(){var e=Object(r.useState)(!0),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)(ir,{style:n?or:cr,children:[Object(b.jsx)(Fn,{}),Object(b.jsx)(ar,{}),Object(b.jsx)(An,{isRoomMinimized:n,handleRoomResize:function(){a(!n)}})]})},lr=Object(j.a)("div")({width:"100%",height:"100vh",display:"flex"}),ur=Object(A.b)((function(e){var t=e.room;return Object(l.a)({},t)}),(function(e){return Object(l.a)({},q(e))}))((function(e){var t=e.setUserDetails,n=e.isUserInRoom;return Object(r.useEffect)((function(){var e=localStorage.getItem("user");e?(t(JSON.parse(e)),ot(JSON.parse(e))):F()}),[]),Object(b.jsxs)(lr,{children:[Object(b.jsx)(mt,{}),Object(b.jsx)(Bt,{}),Object(b.jsx)(xn,{}),Object(b.jsx)(kn,{}),n&&Object(b.jsx)(sr,{})]})})),dr=n(297),jr=n(298),br=Object(A.b)((function(e){var t=e.alert;return Object(l.a)({},t)}),(function(e){return Object(l.a)({},function(e){return{openAlertMessage:function(t){return e(B(t))},closeAlertMessage:function(){return e(Y())}}}(e))}))((function(e){var t=e.showAlertMessage,n=e.closeAlertMessage,r=e.alertMessageContent;return Object(b.jsx)(jr.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:t,onClose:n,autoHideDuration:6e3,children:Object(b.jsx)(dr.a,{severity:"info",children:r})})}));n(241);var hr=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(o.a,{children:Object(b.jsxs)(s.d,{children:[Object(b.jsx)(s.b,{exact:!0,path:"/login",children:Object(b.jsx)(ee,{})}),Object(b.jsx)(s.b,{exact:!0,path:"/register",children:Object(b.jsx)(re,{})}),Object(b.jsx)(s.b,{exact:!0,path:"/dashboard",children:Object(b.jsx)(ur,{})}),Object(b.jsx)(s.b,{path:"/",children:Object(b.jsx)(s.a,{to:"/dashboard"})})]})}),Object(b.jsx)(br,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(A.a,{store:Ye,children:Object(b.jsx)(hr,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[242,1,2]]]);
//# sourceMappingURL=main.a72f8b50.chunk.js.map