if (self.CavalryLogger) { CavalryLogger.start_js(["XH7io"]); }

__d("RTWebPreCallProvider.react",["CometRelay","React","RTWebPreCallContext","RTWebPreCallContextSingleton","useStable"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){a=a.children;var c=b("CometRelay").useRelayEnvironment(),d=b("useStable")(function(){return b("RTWebPreCallContextSingleton").create({relayEnvironment:c})});g.useEffect(function(){d&&b("RTWebPreCallContextSingleton").init()},[d]);return g.jsx(b("RTWebPreCallContext").Provider,{value:d,children:a})}}),null);
__d("MessengerRTCCaptureAttachment.react",["cx","fbt","Image.react","React","XUIText.react","gkx"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React"),j=3;function a(a){a=a.attachments;var c=a.length;if(c===0||!b("gkx")("925832"))return null;var d=a.slice(0,j),e=a.length-d.length+1;return i.jsxs("div",{className:"_7_3c",children:[i.jsx("div",{className:"_7_3d",children:d.map(function(a,c){return i.jsxs("div",{className:"_7_3e",children:[i.jsx(b("Image.react"),{className:"_7_3f",src:a.preview_url}),c===d.length-1&&e>1?i.jsx("div",{className:"_7_3g",children:h._("+{Number of additional undisplayed items}",[h._param("Number of additional undisplayed items",e)])}):null]},a.name)})}),i.jsx(b("XUIText.react"),{color:"secondary",size:"meta1",children:h._({"*":"{number} photos taken","_1":"1 photo taken"},[h._plural(c,"number")])})]})}e.exports=a}),null);
__d("MercuryRTCShareAttachment.react",["cx","fbt","ix","requireCond","CenteredContainer.react","CurrentUser","FBLogger","FBRTCCore","FBRTCLogger","FBRTCSupport","Image.react","MercuryIDs","MercuryShareAttachmentRenderLocations","MercuryTimestamp","MercuryViewer","MessengerEnvironment","MessengerErrorBoundary.react","MessengerParticipants.re","MessengerRTCCaptureAttachment.react","MessengerRTCGroupCallParticipantsPickerDialogController","MessengerState.re","MessengerTextWithEmoticons.react","MNRTCCallabilityStore","React","cr:1333856","cr:1277460","RTWebUserActionLogger","ShimButton.react","SimpleXUIDialog","XUIButton.react","XUIText.react","cxMargin","gkx","immutable"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("React"),k=b("MercuryShareAttachmentRenderLocations").CHAT,l=b("MercuryShareAttachmentRenderLocations").MESSENGER;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={peerName:"",isPage:!1,isBlockedPeer:!1},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){var a=this,c=this.props.attachment.log_message_data,d=c.caller,e=c.callee;c=c.thread_id;var f=d===b("MercuryViewer").getID();f=f?e:d;e=this.props.attachment.log_message_type==="log:phone-call"||this.props.attachment.log_message_type==="log:generic-admin-text"&&this.props.attachment.log_message_data.log_message_type==="log:phone-call";b("RTWebUserActionLogger").logImpression({conferenceName:c?"GROUP:"+c:null,callType:b("RTWebUserActionLogger").getCallType(!!c),component:"start_call_button",surface:"admin_message",mediaType:b("RTWebUserActionLogger").getMediaType(e)});b("MessengerParticipants.re").get(f,function(b){a.setState({peerName:b.short_name?b.short_name:b.name,isPage:b.type==="page"||a.props.isPageMessage,isBlockedPeer:b.is_facebook_blocked||b.is_messenger_blocked})})};d.render=function(){var a=this.props.attachment,c=a.log_message_data;a=a.log_message_body;var d=c.caller,e=c.callee,f=c.event||(c.answered?"one_on_one_call_ended":"missed_call"),g=d===b("MercuryViewer").getID(),h=f==="missed_call";e=g?e:d;d=b("MercuryIDs").getUserIDFromParticipantID(e);e=this.state;var i=e.peerName,m=e.isPage;e=e.isBlockedPeer;var n=b("MercuryTimestamp").getPreciseTimestamp(this.props.attachment.timestamp),o=c.server_info_data,p=c.thread_id;a=j.jsx(b("MessengerTextWithEmoticons.react"),{text:a});n=this.$1(!h,g,n);m=!m&&!e;if(this.props.location===k){e=this.$2(d,i,f,g,o,p);return j.jsxs("div",{className:"_1k2i",children:[j.jsxs("div",{className:h&&!g?"_1k2j":"",children:[j.jsx(b("XUIText.react"),{weight:"bold",children:a}),j.jsx(b("XUIText.react"),{weight:"bold",children:n})]}),m?j.jsxs(j.Fragment,{children:[j.jsx("hr",{}),j.jsx(b("CenteredContainer.react"),{vertical:!0,className:"_3-8x",children:e})]}):null]})}else if(this.props.location===l){e=this.$2(d,i,f,g,o,p);c=c.call_capture_attachments;return j.jsxs("div",{className:"_55q _5i_d _52mr",children:[j.jsxs("div",{className:(h&&!g?"_1k2j":"")+(m?" _55r":""),children:[c==null?null:j.jsx(b("MessengerErrorBoundary.react"),{component:"attachment",children:j.jsx(b("MessengerRTCCaptureAttachment.react"),{attachments:c})}),j.jsx(b("XUIText.react"),{weight:"bold",children:a}),j.jsx(b("XUIText.react"),{weight:"bold",children:n})]}),m?j.jsx(b("CenteredContainer.react"),{vertical:!0,className:"_3-8w",children:e}):null]})}c=this.$3(d,i,f,g,o,p);return j.jsxs("div",{children:[j.jsx("div",{className:(h&&!g?"_1k2j":"")+" _55s",children:a}),m?j.jsx("div",{className:"_55t",children:c}):null]})};d.$1=function(a,c,d){var e=null;!a&&!c?e=i("86815"):c?e=i("86816"):e=i("86813");return j.jsxs("div",{className:"_2phz",children:[j.jsx(b("Image.react"),{src:e}),j.jsx("span",{className:(a||c?"_3ole":"")+" _2pir",children:d})]})};d.$2=function(a,c,d,e,f,g){var h=this.$4(d,e,g);if(b("FBRTCSupport").isMobileDevice())return j.jsx("span",{children:h});else{if(b("cr:1277460")!=null&&b("cr:1333856")!=null){var i=b("MessengerEnvironment").facebookdotcom&&!b("gkx")("708253"),k=this.$5(),l=g!=null,m=g==null?a:g;i=i?b("cr:1333856"):b("cr:1277460");if(m)return j.jsx(i,{event:d,isGroupCall:l,isOutgoingCall:e,label:h,mediaType:k,threadFBID:m});else b("FBLogger")("rtc_www").warn("Tried to generate XMA but both peer id and thread id were null")}return j.jsx(b("ShimButton.react"),{form:"link","data-testID":"RTCCallActionLink",label:h,onClick:this.$6.bind(this,a,c,d==="group_call_ended"?null:f,g,d),children:h})}};d.$3=function(a,c,d,e,f,g){e=this.$4(d,e,g);return j.jsx(b("XUIButton.react"),{onClick:this.$6.bind(this,a,c,f,g,d),label:e})};d.$4=function(a,b,c){if(c)if(a==="group_call_ended")return h._("Call Again");else return h._("Join");else if(a==="missed_call"&&!b)return h._("Call Back");else return h._("Call Again")};d.$6=function(a,c,d,e,f){if(!a&&!e)return;var g=this.props.attachment.log_message_type==="log:phone-call"||this.props.attachment.log_message_data.log_message_type==="log:phone-call";e?(b("RTWebUserActionLogger").logClick({conferenceName:e?"GROUP:"+e:null,callType:b("RTWebUserActionLogger").getCallType(!!e),component:"start_call_button",surface:"admin_message",mediaType:b("RTWebUserActionLogger").getMediaType(g)}),this.$7(d,e,g,f)):a&&(b("FBRTCCore").isAvailableForWebrtcCalling(a)||b("MNRTCCallabilityStore").isCallable(a))?b("FBRTCCore").startOutgoingCall(a,b("FBRTCLogger").Trigger.ADMIN_MESSAGE,g):b("SimpleXUIDialog").show(h._("{firstname} can't be reached right now.",[h._param("firstname",c)]),h._("Can't Connect Call"))};d.$7=function(a,c,d,e){var f=d?a?b("FBRTCLogger").Trigger.MULTIWAY_ADMIN_MESSAGE_JOIN_AUDIO_CALL_BUTTON:b("FBRTCLogger").Trigger.MULTIWAY_ADMIN_MESSAGE_START_AUDIO_CALL_BUTTON:a?b("FBRTCLogger").Trigger.MULTIWAY_ADMIN_MESSAGE_JOIN_VIDEO_CALL_BUTTON:b("FBRTCLogger").Trigger.MULTIWAY_ADMIN_MESSAGE_START_VIDEO_CALL_BUTTON,g=b("CurrentUser").getID();b("MessengerState.re").getThreadMeta(g,b("MercuryIDs").getThreadIDFromThreadFBID(c),function(h){var i=h.participants?h.participants.filter(function(a){return a!==b("MercuryIDs").getParticipantIDFromUserID(g)}):[];if(i.length>0&&e=="group_call_ended")b("MessengerParticipants.re").getMulti(i,function(a){b("MessengerRTCGroupCallParticipantsPickerDialogController").render({participants:b("immutable").Map(a),thread:h,viewerID:g,trigger:f,conferenceName:"GROUP:"+c,hasVideo:!d})});else{i={conferenceName:"GROUP:"+c,hasVideo:!d,trigger:f,usersToRing:[]};a&&(i.serverInfoData=a);b("FBRTCCore").startGroupCall(i)}})};d.$5=function(){var a=this.props.attachment,b=a.log_message_data;a=a.log_message_type;if(a==="log:phone-call"||b.log_message_type==="log:phone-call")return"audio";else if(a==="log:video-call"||b.log_message_type==="log:video-call")return"video";return null};return c}(j.PureComponent);e.exports=a}),null);
__d("RTWebMercuryShareAttachment.react",["CurrentUser","FBRTCLogger","MessengerState.re","React","ShimButton.react","ZenonCallWindowErrors","ZenonUserActionLogger","useEffectOnce","useRTWebMercuryStartCallCallback"],(function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");var h=c.useCallback,i=b("ZenonCallWindowErrors").UnsupportedThreadTypeError;function a(a){var c=a.event,d=a.isGroupCall,e=a.isOutgoingCall,f=a.label,l=a.mediaType,m=a.threadFBID,n=b("useRTWebMercuryStartCallCallback")();if(l==null)throw new i();var o=k(c,e,d);b("useEffectOnce")(function(){b("ZenonUserActionLogger").logImpression({surface:"admin_message",component:o})});a=h(function(){var a=d?2:1,c={existingCall:null,mediaType:l,thread:{id:m,type:a}};b("ZenonUserActionLogger").logClick({surface:"admin_message",component:o});if(d){b("MessengerState.re").getThreadMeta(b("CurrentUser").getID(),"thread:"+m,function(a){a=(a=a==null?void 0:a.rtc_call_data)!=null?a:null;var b=j(l,a!=null);n(babelHelpers["extends"]({},c,{existingCall:a,trigger:b}))});return}n(babelHelpers["extends"]({},c,{trigger:b("FBRTCLogger").Trigger.ADMIN_MESSAGE}))},[d,o,l,n,m]);return g.jsx(b("ShimButton.react"),{form:"link",label:f,onClick:a,"data-testID":"RTCCallActionLink",children:f})}function j(a,c){switch(a){case"audio":return c?b("FBRTCLogger").Trigger.MULTIWAY_ADMIN_MESSAGE_JOIN_AUDIO_CALL_BUTTON:b("FBRTCLogger").Trigger.MULTIWAY_ADMIN_MESSAGE_START_AUDIO_CALL_BUTTON;case"video":return c?b("FBRTCLogger").Trigger.MULTIWAY_ADMIN_MESSAGE_JOIN_VIDEO_CALL_BUTTON:b("FBRTCLogger").Trigger.MULTIWAY_ADMIN_MESSAGE_START_VIDEO_CALL_BUTTON;default:throw new i()}}function k(a,b,c){if(c)if(a==="group_call_ended")return"call_again";else return"join_call_button";else if(a==="missed_call"&&!b)return"call_back";else return"call_again"}e.exports=a}),null);
__d("RTWebBlueShareAttachment.react",["React","RelayFBEnvironment","RelayHooks","RTWebMercuryShareAttachment.react","RTWebPreCallProvider.react"],(function(a,b,c,d,e,f){"use strict";var g=b("React"),h=b("RelayHooks").RelayEnvironmentProvider;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return g.jsx(h,{environment:b("RelayFBEnvironment"),children:g.jsx(b("RTWebPreCallProvider.react"),{children:g.jsx(b("RTWebMercuryShareAttachment.react"),{event:this.props.event,isGroupCall:this.props.isGroupCall,isOutgoingCall:this.props.isOutgoingCall,label:this.props.label,mediaType:this.props.mediaType,threadFBID:this.props.threadFBID})})})};return c}(g.Component);e.exports=a}),null);