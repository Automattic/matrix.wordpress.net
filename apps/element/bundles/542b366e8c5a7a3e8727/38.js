(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1415:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var o=n(13),r=n(8),a=n(14);function i(e){r.a.dispatch({action:a.a.EditEvent,event:null,timelineRenderingType:e.timelineRenderingType}),r.a.dispatch({action:a.a.FocusSendMessageComposer,context:e.timelineRenderingType})}function c(e,t){const n=t.getEvent().replacingEvent();!n||n.status!==o.EventStatus.QUEUED&&n.status!==o.EventStatus.NOT_SENT||e.cancelPendingEvent(n)}},1540:function(e,t,n){"use strict";n.r(t),n.d(t,"sendMessage",(function(){return R})),n.d(t,"editMessage",(function(){return W}));var o=n(27),r=n.n(o),a=n(33),i=n(107),c=n(5),s=n(357),l=n(216),d=n(423),m=n(641),u=n(8),p=n(351),g=n(1415),b=n(1),y=n.n(b),f=n(1437),v=n(13),O=n(47),h=n(161),j=n(271);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){y()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const T="/me ";const w=e=>e instanceof v.MatrixEvent;async function C(e,t,n){let{relation:o,replyToEvent:r,permalinkCreator:a,includeReplyLegacyFallback:i=!0,editedEvent:s}=n;const l=w(s),d=l?Boolean(s.replyEventId):w(r),m=l&&d,u=e.startsWith(T);u&&(e=e.slice(T.length)),e.startsWith("//")&&(e=e.slice(1));const p=t?await Object(f.richToPlain)(e):function(e){const t=(new DOMParser).parseFromString(e,"text/html");return Array.from(t.querySelectorAll("a[data-mention-type]")).forEach((e=>{switch(e.getAttribute("data-mention-type")){case"at-room":e.replaceWith("@room");break;case"user":{const t=e.innerHTML;e.replaceWith(t);break}case"room":{const t=e.getAttribute("href");if(null===t)break;const n=Object(O.h)(t);Object(j.a)(n)&&Object(j.a)(n.roomIdOrAlias)&&e.replaceWith(n.roomIdOrAlias);break}}})),t.body.innerHTML}(e),g=m&&function(e){const t=e.getContent().body;if("string"!=typeof t)return"";const n=t.split("\n").map((e=>e.trim()));return n.length>2&&n[0].startsWith("> ")&&0===n[1].length?`${n[0]}\n\n`:""}(s)||"",b=m&&function(e){const t=e.getContent().formatted_body;if(!t)return"";const n=(new DOMParser).parseFromString(t,"text/html").body.querySelector("mx-reply");return n&&n.outerHTML||""}(s)||"",y={msgtype:u?v.MsgType.Emote:v.MsgType.Text,body:l?`${g} * ${p}`:p},E=c.b.getValue("MessageComposerInput.useMarkdown"),C=t?e:E?await Object(f.plainToRich)(e):null;C&&(y.format="org.matrix.custom.html",y.formatted_body=l?`${b} * ${C}`:C),l&&(y["m.new_content"]={msgtype:y.msgtype,body:p},C&&(y["m.new_content"].format="org.matrix.custom.html",y["m.new_content"].formatted_body=C));return function(e,t){t&&(e["m.relates_to"]=_(_({},e["m.relates_to"]||{}),t))}(y,l?_(_({},o),{},{rel_type:"m.replace",event_id:s.getId()}):o),!l&&r&&a&&Object(h.a)(y,r,{permalinkCreator:a,includeLegacyFallback:i}),y}var M=n(126),k=n(246),x=n(14),S=n(348);const P=["roomContext","mxClient"];async function R(e,t,n){var o;let{roomContext:p,mxClient:g}=n,b=r()(n,P);const{relation:y,replyToEvent:f,permalinkCreator:v}=b,{room:O}=p,j=null==O?void 0:O.roomId;if(!j)return;const E={eventName:"Composer",isEditing:!1,isReply:Boolean(f),inThread:(null==y?void 0:y.rel_type)===a.d.name};i.a.instance.trackEvent(E);let _=null;if(e.startsWith("/")&&!e.startsWith("//")&&!e.startsWith(T)){const{cmd:t,args:n}=Object(M.d)(e);if(t){const e=(null==y?void 0:y.rel_type)===a.d.name?null==y?void 0:y.event_id:null;let o;if([_,o]=await Object(k.c)(g,t,n,j,null!=e?e:null),!o)return;if(!_||t.category!==M.a.messages&&t.category!==M.a.effects)return;var w,R;Object(S.b)(_,y),f&&Object(h.a)(_,f,{permalinkCreator:v,includeLegacyFallback:null===(w=null===(R=_.msgtype)||void 0===R?void 0:R.startsWith("m."))||void 0===w||w})}else{const t=await Object(k.d)(e);if(u.a.dispatch({action:x.a.FocusAComposer,context:p.timelineRenderingType}),!t)return}}if(null!==(o=_)&&void 0!==o||(_=await C(e,t,b)),!_.body.trim())return;c.b.getValue("Performance.addSendMessageTimingMetadata")&&Object(s.a)(_);const W=null!=y&&y.event_id&&(null==y?void 0:y.rel_type)===a.d.name?y.event_id:null,F=Object(l.a)(j,(e=>g.sendMessage(e,W,_)),g);return f&&u.a.dispatch({action:"reply_to_event",event:null,context:p.timelineRenderingType}),u.a.dispatch({action:"message_sent"}),d.CHAT_EFFECTS.forEach((e=>{if(_&&Object(m.containsEmoji)(_,e.emojis)){(null==y?void 0:y.rel_type)!==a.d.name&&u.a.dispatch({action:`effects.${e.command}`})}})),c.b.getValue("Performance.addSendMessageTimingMetadata")&&F.then((e=>{Object(s.b)(g,j,e.event_id)})),c.b.getValue("scrollToBottomOnMessageSent")&&u.a.dispatch({action:"scroll_to_bottom",timelineRenderingType:p.timelineRenderingType}),F}async function W(e,t){let{roomContext:n,mxClient:o,editorStateTransfer:r}=t;const a=r.getEvent();i.a.instance.trackEvent({eventName:"Composer",isEditing:!0,inThread:Boolean(null==a?void 0:a.getThread()),isReply:Boolean(a.replyEventId)});const c=await C(e,!0,{editedEvent:a}),s=c["m.new_content"];if(""===(null==s?void 0:s.body))return Object(g.a)(o,r),void Object(p.a)({mxEvent:a,onCloseDialog:()=>{Object(g.b)(n)}});let l;const d=a.getRoomId();if(function(e,t){const n=t.getEvent().getContent();return n.msgtype!==e.msgtype||n.body!==e.body||n.format!==e.format||n.formatted_body!==e.formatted_body}(s,r)&&d){Object(g.a)(o,r);const e=r.getEvent().threadRootId||null;l=o.sendMessage(d,e,c),u.a.dispatch({action:"message_sent"})}return Object(g.b)(n),l}}}]);
//# sourceMappingURL=38.js.map