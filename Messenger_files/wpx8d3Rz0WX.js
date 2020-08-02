if (self.CavalryLogger) { CavalryLogger.start_js(["izRko"]); }

__d("MessengerPhotoishXMA.react",["BootloadedComponent.react","JSResource","React","requireWeak"],(function(a,b,c,d,e,f){"use strict";var g=b("React"),h;b("requireWeak")("MessengerPhotosGroup.react",function(a){h=a});a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.shouldComponentUpdate=function(a,b){return this.props!==a};d.render=function(){return!h?g.jsx(b("BootloadedComponent.react"),babelHelpers["extends"]({bootloadPlaceholder:g.jsx("div",{}),bootloadLoader:b("JSResource")("MessengerPhotosGroup.react").__setRef("MessengerPhotoishXMA.react"),isXMA:!0},this.props)):g.jsx(h,babelHelpers["extends"]({isXMA:!0},this.props))};return c}(g.Component);e.exports=a}),null);
__d("MessengerAttachmentImageBlockUtils.bs",["isFacebookURI","isLinkshimURI"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d){var e=function(a){return a.getPath().toString().indexOf("/moments_app")===0},f=function(a,b){if(a<=300)return b<=300;else return!1};if(f(a,c))return!0;else if(b("isFacebookURI")(d)&&!b("isLinkshimURI")(d))return!e(d);else return!1}f.isIcon=a}),null);
__d("MessengerAttachmentImageBlockUtils.re",["bs_curry","MessengerAttachmentImageBlockUtils.bs"],(function(a,b,c,d,e,f){a=function(a,c,d){a=b("bs_curry")._3(b("MessengerAttachmentImageBlockUtils.bs").isIcon,a,c,d);return a};f.isIcon=a}),null);
__d("MessengerAttachmentImageBlock.react",["cx","MessengerAttachmentImageBlockUtils.re","prop-types","React","URI","WorkChatRedesignedMessageListCheck.re","cssURL","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";var h,i=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return i.jsxs("div",{className:b("joinClasses")(this.props.className,this.$1()),children:[this.$2(),i.jsx("div",{className:"_5swm",children:this.props.children})]})};d.$2=function(){if(!this.props.attachment.media||!this.props.attachment.media.image)return null;var a=this.$3(),c=a.height;a=a.width;var d=c>a,e=new(h||(h=b("URI")))(this.props.attachment.uri);e=b("MessengerAttachmentImageBlockUtils.re").isIcon(c,a,e);c=c&&a?c/a*100:100;a=d||e?.2:1;e=d||e?c:52;d={backgroundImage:b("cssURL")(this.props.attachment.media.image),minHeight:"0px",paddingBottom:d&&c>150?"136px":e*a+"%"};this.props.attachment.description&&this.props.attachment.source&&(d.minHeight="112px");b("WorkChatRedesignedMessageListCheck.re").enabled&&(d.paddingBottom="0px",d.minHeight="0px");return i.jsx("div",{className:"_3xn1",style:d})};d.$1=function(){if(!this.props.attachment.media||!this.props.attachment.media.image)return"_3xn3 _5swn";var a=this.$3(),c=a.height;a=a.width;var d=c>a,e=new(h||(h=b("URI")))(this.props.attachment.uri);e=b("MessengerAttachmentImageBlockUtils.re").isIcon(c,a,e);return"_3xn3"+(e&&!d?" _3xn5":"")+(d?" _3xn6":"")+(a>=c&&!e?" _3xn7":"")+(this.$4()?" _2e9e":"")};d.$4=function(){var a=this.props.attachment.style_list;return Array.isArray(a)&&a[0]=="lightweight_action"};d.$5=function(){var a=this.props.attachment.properties;return!a||!a.height||!a.width?null:{height:a.height,width:a.width}};d.$3=function(){var a=this.$5()||this.props.attachment.media.image_size||{},b=a.height;a=a.width;if(b&&a){b=parseInt(b,10);a=parseInt(a,10);return{height:b,width:a}}return{height:0,width:0}};return c}(i.Component);a.propTypes={attachment:b("prop-types").object.isRequired};e.exports=a}),null);
__d("MercuryFallbackShareAttachmentTextBlock.react",["cx","LineClamp.react","MercuryShareAttachmentReactShape","MercuryShareAttachmentRenderLocations","React","WorkChatRedesignedMessageListCheck.re","prop-types"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){if(!this.props||!this.props.attachment)return h.jsx("div",{className:"__6j"});return b("MercuryShareAttachmentRenderLocations").MESSENGER===this.props.location?h.jsxs("div",{className:"__6j",children:[this.renderMessengerTitle(),this.renderMessengerDescription(),this.renderMessengerSource()]}):h.jsxs("div",{className:"__6j",children:[this.renderTitle(),this.renderDescription(),this.renderSource(),this.props.extraComponent]})};d.renderMessengerTitle=function(){return!this.props.attachment.title?null:h.jsx("div",{className:"__6k",children:h.jsx(b("LineClamp.react"),{customEllipsis:" ",lines:2,lineHeight:18,fitHeightToShorterText:b("WorkChatRedesignedMessageListCheck.re").enabled,children:this.props.attachment.title})})};d.renderMessengerDescription=function(){return!this.props.attachment.description?null:h.jsx("div",{className:"__6l",children:h.jsx(b("LineClamp.react"),{customEllipsis:" ",lines:2,lineHeight:16,fitHeightToShorterText:b("WorkChatRedesignedMessageListCheck.re").enabled,children:this.props.attachment.description})})};d.renderMessengerSource=function(){return!this.props.attachment.source?null:h.jsx("div",{className:"__6m",children:this.props.attachment.source})};d.renderTitle=function(){return!this.props.attachment.title?null:h.jsx("div",{className:"__6k"+(!this.props.attachment.uri&&!this.props.attachment.description||this.props.attachment.target!=null&&this.props.attachment.target.lwa_type!=null&&this.props.attachment.target.lwa_state==="INITIATED"?" _2xsq":"")+(this.props.extraComponent?" _1dw9":""),children:this.props.attachment.title})};d.renderDescription=function(){return!this.props.attachment.description?null:h.jsx("div",{className:"__6l",children:this.props.attachment.description})};d.renderSource=function(){return!this.props.attachment.source?null:h.jsx("div",{className:"__6m",children:this.props.attachment.source})};return c}(h.Component);a.propTypes={attachment:b("MercuryShareAttachmentReactShape"),extraComponent:b("prop-types").object,location:b("prop-types").oneOf(b("MercuryShareAttachmentRenderLocations").getValues())};e.exports=a}),null);
__d("MercuryShareImage.react",["cx","ChatImageArrowDirection","ChatImageWithArrow.react","React","prop-types"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return h.jsx("div",{className:"_4hsl",children:h.jsx(b("ChatImageWithArrow.react"),{arrowDirection:b("ChatImageArrowDirection").BOTH,height:this.props.height,round:!!this.props.round,source:this.props.source,width:this.props.width})})};return c}(h.Component);a.propTypes={height:(c=b("prop-types")).number.isRequired,round:c.bool,source:c.string.isRequired,width:c.number.isRequired};e.exports=a}),null);
__d("MercuryFallbackShareAttachmentContent.react",["cx","Image.react","ImageBlock.react","MercuryFallbackShareAttachmentTextBlock.react","MercuryShareAttachmentReactShape","MercuryShareAttachmentRenderLocations","MercuryShareImage.react","MessengerAttachmentImageBlock.react","React","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React"),i=72;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.renderTextBlock=function(){return h.jsx(b("MercuryFallbackShareAttachmentTextBlock.react"),babelHelpers["extends"]({},this.props))};d.renderChatImage=function(a){return h.jsxs(b("ImageBlock.react"),{className:a,spacing:"medium",children:[h.jsx(b("MercuryShareImage.react"),{height:i,source:this.props.attachment.media.image,width:i}),h.jsx("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",height:i},children:this.renderTextBlock()})]})};d.renderMessengerImage=function(a){return h.jsxs(b("MessengerAttachmentImageBlock.react"),{className:a,attachment:this.props.attachment,children:[this.renderTextBlock(),this.props.children]})};d.renderDefaultImage=function(a){return h.jsxs(b("ImageBlock.react"),{className:b("joinClasses")(this.props.className,a),children:[h.jsx(b("Image.react"),{className:"__6n",src:this.props.attachment.media.image,width:i}),this.renderTextBlock(),this.props.children]})};d.getCSSClasses=function(){var a=this.props.attachment,c=this.props.location;return(b("MercuryShareAttachmentRenderLocations").CHAT===c?"_49or":"")+(b("MercuryShareAttachmentRenderLocations").CHAT_PREVIEW===c?" _324d":"")+(b("MercuryShareAttachmentRenderLocations").CHAT!==c?" _tih":"")+(a&&a.media.image?"":" _49ou")+" _310t"};d.render=function(){var a=this.props.attachment,c=this.props.location,d=this.getCSSClasses();if(a.media&&a.media.image){if(b("MercuryShareAttachmentRenderLocations").CHAT===c||b("MercuryShareAttachmentRenderLocations").CHAT_PREVIEW===c)return this.renderChatImage(d);else if(b("MercuryShareAttachmentRenderLocations").MESSENGER===c)return this.renderMessengerImage(d);return this.renderDefaultImage(d)}return h.jsxs("div",{className:b("joinClasses")(this.props.className,d),children:[this.renderTextBlock(),this.props.children]})};return c}(h.Component);a.propType={attachment:b("MercuryShareAttachmentReactShape"),location:b("prop-types").oneOf(b("MercuryShareAttachmentRenderLocations").getValues())};e.exports=a}),null);
__d("MessengerAdsLinkClickFalcoEvent",["FalcoLoggerInternal","getSamplingPolicyConfig_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getSamplingPolicyConfig_DO_NOT_USE")("falco","messenger_ads_link_click");c=b("FalcoLoggerInternal").create(a);e.exports=c}),null);
__d("MercuryFallbackShareAttachment.react",["cx","fbt","AsyncRequest","Link.react","MercuryFallbackShareAttachmentContent.react","MercuryShareAttachmentReactShape","MercuryShareAttachmentRenderLocations","MessengerAdsWebTypedLogger","MessengerDotComSaveModule","React","ReactFragment","SaveMessageUtils","ThisControllerNoLongerExists","XUIAmbientNUX.react","gkx","prop-types","MessengerAdsLinkClickFalcoEvent"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React"),j="focus",k="click",l="scroll",m=1e4,n=3e4;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b;b=a.call(this)||this;b.state={showNux:!1,nuxDisabled:!1};return b}var d=c.prototype;d.renderLink=function(a){return b("MercuryShareAttachmentRenderLocations").isPreview(this.props.location)||!this.props.attachment.uri?a:i.jsxs(b("Link.react"),{className:"_5rw4",href:this.props.attachment.uri,onClick:this.$1.bind(this),target:"_blank",children:[a,this.renderLayers()]})};d.render=function(){return this.renderLink(i.jsx(b("MercuryFallbackShareAttachmentContent.react"),babelHelpers["extends"]({ref:"mercury_fallback_share_attachment"},this.props)))};d.$1=function(a){var c=this;if(this.props.isSponsored){a=this.props.attachment&&this.props.attachment.subattachments;if(!a)return;var d=b("gkx")("1181700");for(var a=a,e=Array.isArray(a),f=0,a=e?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=a.length)break;g=a[f++]}else{f=a.next();if(f.done)break;g=f.value}g=g;d&&b("MessengerAdsLinkClickFalcoEvent").log(function(){return{message_id:c.props.messageID,page_id:c.props.pageID}});new(b("MessengerAdsWebTypedLogger"))().setEvent("messenger_ads_link_click").setIsSponsored(this.props.isSponsored).setItemID(g&&g.id).setMessageID(this.props.messageID).setPageID(this.props.pageID).log()}}if(this.state.nuxDisabled||!this.$2())return;this.$3();this.interactionTime=0;this.cancelMinConsumeTimeout=setTimeout(function(){c.$4()||c.setState({showNux:!0,nuxDisabled:!0})},m);this.cancelMaxConsumeTimeout=setTimeout(function(){c.$4()||(c.setState({showNux:!1,nuxDisabled:!1}),c.clearTimeouts())},n);var h=Date.now();this.cancelWindowInteractionTimeout=setTimeout(function(){c.$5(function(){this.interactionTime||(this.interactionTime=Date.now()-h)}.bind(c))},0)};d.clearTimeouts=function(){this.cancelWindowInteractionTimeout&&(clearTimeout(this.cancelWindowInteractionTimeout),this.cancelWindowInteractionTimeout=null),this.cancelMaxConsumeTimeout&&(clearTimeout(this.cancelMaxConsumeTimeout),this.cancelMaxConsumeTimeout=null),this.cancelMinConsumeTimeout&&(clearTimeout(this.cancelMinConsumeTimeout),this.cancelMinConsumeTimeout=null)};d.onNUXCloseButtonClick=function(){this.setState({showNux:!1}),this.$6(),this.$7(),this.clearTimeouts()};d.renderLayers=function(){var a=this;return this.$2()?b("ReactFragment").create(i.jsx(b("XUIAmbientNUX.react"),{contextRef:function(){return a.refs.mercury_fallback_share_attachment},shown:this.state.showNux,onCloseButtonClick:this.onNUXCloseButtonClick.bind(this),position:"below",width:"custom",customwidth:300,children:h._("You can now save links and videos to Facebook by right clicking on a message.")})):null};d.$3=function(){this.$8||(this.$9=[],this.$8=[Event.listen(window,"click",this.$10.bind(this,k)),Event.listen(window,"focus",this.$10.bind(this,j)),Event.listen(window,"scroll",this.$10.bind(this,l))])};d.$10=function(a){this.$9.forEach(function(b){b.call(this,a)},this)};d.$5=function(a){this.$9.push(a)};d.$4=function(){return this.interactionTime&&this.interactionTime>0};d.$7=function(){if(this.$8){while(this.$8.length)this.$8.pop().remove();this.$8=null;this.$9=null}};d.$2=function(){return b("MessengerDotComSaveModule").eligible_for_nux&&this.$11()};d.$11=function(){var a=this.props.attachment;if(!a)return!1;a=a.style_list;return b("SaveMessageUtils").isSavableMessageAttachment(a)};d.$6=function(){new(b("AsyncRequest"))().setURI(b("ThisControllerNoLongerExists").__DEADURI__("y38a6qi8e")).setData({action:"impression",surface:"messenger_dot_com_message",mechanism:"save_message_nux",object_id:this.props.message_id,collection_id:98}).send()};return c}(i.Component);a.propTypes={attachment:b("MercuryShareAttachmentReactShape"),isSponsored:(c=b("prop-types")).bool,location:c.oneOf(b("MercuryShareAttachmentRenderLocations").getValues()),messageID:c.string,pageID:c.string};e.exports=a}),null);
__d("MercuryShareSizeImageByWidthMixin",["Image.react","MercuryAttachment","MercuryShareAttachmentRenderLocations","MercuryShareImage.react","React"],(function(a,b,c,d,e,f){var g=b("React");a={_getImageSize:function(a){var c=this.props.attachment&&this.props.attachment.media;a=a&&c&&c.animated_image?c&&c.animated_image_size:c&&c.image_size;return this.props.maxWidth?b("MercuryAttachment").resizeContain({height:this.props.maxWidth,width:this.props.maxWidth},a):a},_renderImage:function(a){var c=this.props.attachment&&this.props.attachment.media,d=this._getImageSize(a);a=a&&c&&c.animated_image?c.animated_image:c&&c.image;if(this.props.location==b("MercuryShareAttachmentRenderLocations").CHAT)return g.jsx(b("MercuryShareImage.react"),{height:d&&d.height,source:a,width:d&&d.width});else return g.jsx(b("Image.react"),{height:d&&d.height,src:a,width:d&&d.width})}};e.exports=a}),null);
__d("MercuryVideoShareXMATextBlock.react",["cx","React","ShimButton.react","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React"),i=4;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=function(){c.props.url&&window.open(c.props.url)},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){if(!this.props)return h.jsx("div",{className:"__6j"});var a=this.props.width?{maxWidth:this.props.width-i}:{},c={textDecoration:"none"};return h.jsx("div",{className:b("joinClasses")(this.props.className,"__6j _43kk"),style:a,children:h.jsxs(b("ShimButton.react"),{form:"link",onClick:this.$1,style:c,children:[this.renderTitle(),this.renderDescription(),this.renderSource()]})})};d.renderTitle=function(){return!this.props.title?null:h.jsx("div",{className:"__6k"+(!this.props.uri&&!this.props.description?" _2xsq":""),children:this.props.title})};d.renderDescription=function(){return!this.props.description?null:h.jsx("div",{className:"__6l",children:this.props.description})};d.renderSource=function(){return!this.props.source?null:h.jsx("div",{className:"__6m",children:this.props.source})};return c}(h.Component);a.propTypes={className:(c=b("prop-types")).string,description:c.string,source:c.string,title:c.string,url:c.string,width:c.number,threadID:c.string,isFromViewer:c.bool,attachment:c.object};e.exports=a}),null);
__d("MercuryVideoShareXMA.react",["cx","MercuryVideoShareXMATextBlock.react","MessengerVideoPlayer.react","React","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React"),i=181,j=200;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.$1(this.props.attachment),b=this.$2(a);return h.jsxs("div",{className:"_3duc",children:[b,this.$3(a&&a.original_dimensions)]})};d.$2=function(a){return a?h.jsx(b("MessengerVideoPlayer.react"),{attachment:this.props.attachment,videoData:a,isInThread:!0,isVisible:this.props.isVisible,className:b("joinClasses")(this.props.className,"_n4o _3_om _1wno")}):null};d.$1=function(a){if(!a.media||!a.media.image_size||!a.target||!a.target.video_id)return null;var b=a.media.image_size;return{disableAutoplay:!0,legacy_attachment_id:a.target.video_id,original_dimensions:this.$4(b),start_muted:!0,no_fullscreen:!0,hide_controls_on_finish:!0,url:a.media.image,is_share:!0}};d.$4=function(a){if(a.width<=i&&a.height<=j)return{x:a.width,y:a.height};var b=Math.min(i/a.width,j/a.height),c=Math.ceil(a.width*b);a=Math.ceil(a.height*b);return{x:c,y:a}};d.$3=function(a){var c=this.props.attachment;return h.jsx(b("MercuryVideoShareXMATextBlock.react"),{description:c.description,source:c.source,title:c.video_title,url:c.uri,width:a&&a.x,threadID:this.props.threadID,isFromViewer:this.props.isFromViewer,attachment:c})};return c}(h.PureComponent);a.propTypes={attachment:(c=b("prop-types")).object.isRequired,isVisible:c.bool,onClick:c.func,threadID:c.string,isFromViewer:c.bool};e.exports=a}),null);
__d("MercuryVideoShareAttachment.react",["cx","ix","CenteredContainer.react","FBOverlayBase.react","FBOverlayContainer.react","FBOverlayElement.react","Image.react","Link.react","MercuryFallbackShareAttachment.react","MercuryShareAttachmentReactShape","MercuryShareAttachmentRenderLocations","MercuryShareSizeImageByWidthMixin","MercuryVideoShareXMA.react","MessengerPhotoishXMA.react","React","createReactClass_DEPRECATED","prop-types"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React");c=b("createReactClass_DEPRECATED")({displayName:"MercuryVideoShareAttachment",mixins:[b("MercuryShareSizeImageByWidthMixin")],propTypes:{attachment:b("MercuryShareAttachmentReactShape"),location:(a=b("prop-types")).oneOf(b("MercuryShareAttachmentRenderLocations").getValues()),maxWidth:a.number,threadID:a.string,isFromViewer:a.bool},render:function(){if(this.props.location===b("MercuryShareAttachmentRenderLocations").CHAT_PREVIEW)return i.jsx(b("MercuryFallbackShareAttachment.react"),babelHelpers["extends"]({},this.props));else if(this.props.location===b("MercuryShareAttachmentRenderLocations").MESSENGER)return i.jsx(b("MessengerPhotoishXMA.react"),{attachType:"video",attachments:[this.props.attachment],isVisible:!!this.props.isVisible,onSelect:this.props.onSelect,threadID:this.props.threadID,isFromViewer:this.props.isFromViewer});else if(this.props.location===b("MercuryShareAttachmentRenderLocations").CHAT)return i.jsx(b("MercuryVideoShareXMA.react"),babelHelpers["extends"]({},this.props));var a=this.props.attachment&&this.props.attachment.uri;return i.jsx(b("Link.react"),{rel:"theater",href:a,children:i.jsxs(b("FBOverlayContainer.react"),{className:"clearfix",style:this._getImageSize(),children:[i.jsx(b("FBOverlayBase.react"),{children:this._renderImage()}),i.jsx(b("FBOverlayElement.react"),{children:i.jsx(b("CenteredContainer.react"),{vertical:!0,children:i.jsx(b("Image.react"),{src:h("27983")})})})]})})}});e.exports=c}),null);
__d("XShareScrapeAttachmentAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/message_share_attachment/fromURI/",{})}),null);