if (self.CavalryLogger) { CavalryLogger.start_js(["b1Ga1"]); }

__d("CometListSection_DEPRECATED.react",["BaseHeading.react","BaseList_DEPRECATED.react","CometText_DEPRECATED.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.heading,d=a.isSemanticList;a=babelHelpers.objectWithoutPropertiesLoose(a,["heading","isSemanticList"]);return g.jsx(b("BaseList_DEPRECATED.react"),babelHelpers["extends"]({},a,{heading:c!==void 0?g.jsx("div",{className:"aahdfvyu arzshmzb",children:g.jsx(b("BaseHeading.react"),{children:g.jsx(b("CometText_DEPRECATED.react"),{size:17,use:"secondary-dark",weight:"bold",children:c})})}):null,isSemanticList:d}))}}),null);
__d("useStoriesCardNoopLogging",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(){return function(a){}}}),null);
__d("XUICarouselLinks.react",["csx","cx","fbt","DOM","DOMClone","DOMContainer.react","React","ReactDOM","createReactClass_DEPRECATED","isNode","joinClasses","prop-types"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("React");a=b("createReactClass_DEPRECATED")({displayName:"XUICarouselLinks",propTypes:{carousel:b("prop-types").object.isRequired,template:function(a){a=a.template;if(a&&!j.isValidElement(a)&&!b("isNode")(a))return new Error("Expected a DOM node or ReactElement for template")},width:b("prop-types").number,centered:b("prop-types").bool},getDefaultProps:function(){return{template:j.jsx("div",{className:"_3jav"}),centered:!0}},getInitialState:function(){return{disabled:!1,itemCount:this.props.carousel.getItemCount(),index:this.props.carousel.state.index}},UNSAFE_componentWillMount:function(){this._registerToCarousel(this.props.carousel)},componentWillUnmount:function(){this._unregisterCarousel()},_isAutoplayEnabled:!1,_unregisterCarousel:function(){this.props.carousel.unsubscribe(this.arbiterToken)},_registerToCarousel:function(a){var b=this;this.arbiterToken=a.subscribe(["animation_start","item_count_updated"],function(a,c){a==="animation_start"?b.setState({index:c}):b.setState({itemCount:c})})},UNSAFE_componentWillUpdate:function(a){this.props.carousel!==a.carousel&&(this._unregisterCarousel(),this._registerToCarousel(a.carousel))},_onKeyDown:function(a,b){a.key==="ArrowLeft"?(this.props.carousel.prev(),a.preventDefault()):a.key==="ArrowRight"&&(this.props.carousel.next(),a.preventDefault())},_onBlur:function(){this._isAutoplayEnabled&&this.props.carousel.setAutoplayEnabled(!0)},_onFocus:function(){this._isAutoplayEnabled=this.props.carousel.state.autoplay,this._isAutoplayEnabled&&this.props.carousel.setAutoplayEnabled(!1)},onLinkClick:function(a){this.props.carousel.setIndex(a)},renderLinks:function(){var a=this,c=[],d=this.props.template,e=j.isValidElement(d),f=function(f){var g=f===a.state.index,h="_3jaw"+(g?" _3el7":""),k=i._("Item {item index}",[i._param("item index",f+1)]);e?c.push(j.cloneElement(d,{className:b("joinClasses")(d.props.className,h),key:f,index:f,onBlur:function(){return a._onBlur()},onFocus:function(){return a._onFocus()},onClick:function(){return a.onLinkClick(f)},onKeyDown:function(b){return a._onKeyDown(b,f)},tabIndex:g?"0":"-1","aria-label":k,role:"button"})):c.push(j.jsx("div",{className:h,onBlur:function(){return a._onBlur()},onFocus:function(){return a._onFocus()},onKeyDown:function(b){return a._onKeyDown(b,f)},onClick:function(){return a.onLinkClick(f)},"aria-label":k,"aria-selected":g?"true":"false",role:"button",tabIndex:g?"0":"-1",children:j.jsx(b("DOMContainer.react"),{children:b("DOMClone").deepClone(d)})},f))};for(var g=0;g<this.state.itemCount;g++)f(g);return c},render:function(){var a=this,c=b("joinClasses")(this.props.className,"_3jay"+(this.props.centered?" _3jaz":"")),d;this.props.width&&(d={width:this.props.width});setTimeout(function(){if(a.isMounted()){var c=b("DOM").scry(b("ReactDOM").findDOMNode(a),"._3jaw");c.forEach(function(a){var b=a.style.display;a.style.display="none";a.offsetHeight;a.style.display=b})}});return j.jsx("div",{style:d,children:j.jsx("div",{className:c,role:"toolbar",children:this.renderLinks()})})}});e.exports=a}),null);
__d("FBStoriesActionTypes",[],(function(a,b,c,d,e,f){a=Object.freeze({LOAD:"FB_STORIES.LOAD",LOADING:"FB_STORIES.LOADING",LOADED:"FB_STORIES.LOADED",LOADED_ERROR:"FB_STORIES.LOADED_ERROR",VIEWER_LIST_LOADED_FOR_THREAD:"FB_STORIES.VIEWER_LIST_LOADED_FOR_THREAD",RESET_LOCAL_SEEN_HISTORY:"FB_STORIES.RESET_LOCAL_SEEN_HISTORY",SELECTED_BUCKET_IDX_CHANGED:"FB_STORIES.SELECTED_BUCKET_IDX_CHANGED",SET_ALL_BUCKETS_VIEWED:"FB_STORIES.SET_ALL_BUCKETS_VIEWED",SET_UNSEEN_MODE:"FB_STORIES.SET_UNSEEN_MODE",SELECTED_THREAD_IDX_CHANGED:"FB_STORIES.SELECTED_THREAD_IDX_CHANGED",SELECTED_THREAD_PERCENT_DONE:"FB_STORIES.SELECTED_THREAD_PERCENT_DONE",SUBSCRIPTION_BUCKET_UPDATE:"FB_STORIES.SUBSCRIPTION_BUCKET_UPDATE",UPDATE_THREAD_SEEN_OPTIMISTIC:"FB_STORIES.UPDATE_THREAD_SEEN_OPTIMISTIC",UPDATE_THREAD_VIEWERS_SEEN_OPTIMISTIC:"FB_STORIES.UPDATE_THREAD_VIEWERS_SEEN_OPTIMISTIC",DELETE_THREAD_FROM_BUCKET:"FB_STORIES.DELETE_THREAD_FROM_BUCKET",REMOVE_BUCKET:"FB_STORIES.REMOVE_BUCKET",REMOVE_ENDED_LIVE_VIDEO_FROM_BUCKET:"FB_STORIES.REMOVE_ENDED_LIVE_VIDEO_FROM_BUCKET",SET_IS_COMMERCIAL_BREAK_RUNNING:"FB_STORIES.SET_IS_COMMERCIAL_BREAK_RUNNING",UNSELECT_BUCKET:"FBSTORIES.UNSELECT_BUCKET",SET_VIEWER_OPEN:"FB_STORIES.SET_VIEWER_OPEN",OPTIMISTIC_CREATE_PHOTO_STORY:"FB_STORIES.OPTIMISTIC_CREATE_PHOTO_STORY",SET_USER_BUCKET_UPLOAD_STATUS:"FB_STORIES.SET_USER_BUCKET_UPLOAD_STATUS",RESET_STATE:"FB_STORIES.RESET_STATE",SET_SUBSCRIPTION_TOKEN:"FB_STORIES.SET_SUBSCRIPTION_TOKEN",OPTIMISTIC_POLL_VOTE:"FB_STORIES.OPTIMISTIC_POLL_VOTE",TAP_ON_REACTION_STICKER:"FB_STORIES.TAP_ON_REACTION_STICKER",SET_IS_PRODUCTION_DIALOG_LOADING:"FB_STORIES.SET_IS_PRODUCTION_DIALOG_LOADING",APPROVE_PENDING_THREAD:"FB_STORIES.APPROVE_PENDING_THREAD"});e.exports=a}),null);
__d("FBStoriesDispatcher",["ExplicitRegistrationReactDispatcher"],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(b){b=a.call(this,b)||this;babelHelpers.assertThisInitialized(b).dispatch=b.dispatch.bind(babelHelpers.assertThisInitialized(b));return b}return b}(b("ExplicitRegistrationReactDispatcher"));e.exports=new a({strict:!0})}),null);
__d("ShowCreationFlowTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:ShowCreationFlowLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:ShowCreationFlowLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:ShowCreationFlowLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setConnectedPageID=function(a){this.$1.connected_page_id=a;return this};c.setError=function(a){this.$1.error=a;return this};c.setFlowSource=function(a){this.$1.flow_source=a;return this};c.setPageID=function(a){this.$1.page_id=a;return this};c.setStep=function(a){this.$1.step=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={connected_page_id:!0,error:!0,flow_source:!0,page_id:!0,step:!0};e.exports=a}),null);
__d("SnoozedProfileTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:SnoozedProfileLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:SnoozedProfileLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:SnoozedProfileLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setClienttime=function(a){this.$1.clienttime=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setItemObjID=function(a){this.$1.item_obj_id=a;return this};c.setSessionID=function(a){this.$1.session_id=a;return this};return a}();c={clienttime:!0,event:!0,item_obj_id:!0,session_id:!0};e.exports=a}),null);
__d("XControllerWithPageTokenURIUpdater",[],(function(a,b,c,d,e,f){a={updateURI:function(a){window.history&&window.history.replaceState(window.history.state,null,a)}};e.exports=a}),null);
__d("persistentQueryParams",[],(function(a,b,c,d,e,f){"use strict";e.exports=["__DEV__","__pc","__xtrace__","_country_override_","artillery_sample","big_pipe","break_on_name","break_on_pass","browserlab_logging","browserlab_test","cacheobs_sample","cavalry_cohort","demo_ad","detectreflows","dpr","ego_services","egodebug","fbtrace","feed_demo_ad","flog","force_logging","force_megaphone_reload","forced_qp_id","gk_debug","gk_disable","gk_enable","gomez_sample","hide_dev_console","js_debug","js_nocatch","killabyte","locale","mh_function_visitor_off","mh_function_visitor_on","mh_p_content_refs","mh_p_function_visitor","mh_p_inline_require","mh_p_min","nobatch","nocache","no_dev_console","pagelet_ts","pagelet_whitelist","profiling_mode","prod_graphql","public_mode","qe","qrt_version","react_log_top_level_renders","react_perf","ro_group","ro_name","rollout","se_default","se_gs","sk","sr_sourcemaps","sri","story_type","teak_sample","test_id_inspector","__tier","tlog","tti","vid","webdriver","wirehog_sample","showlog"]}),null);
__d("sortReactionTypes",["UFIReactionTypes","objectKeys"],(function(a,b,c,d,e,f){var g={};b("UFIReactionTypes").ordering.forEach(function(a,b){g[a]=b});function a(a){return b("objectKeys")(a).sort(function(b,c){return a[b]["default"]===a[c]["default"]?g[b]-g[c]:a[c]["default"]-a[b]["default"]})}e.exports=a}),null);
__d("UFIReactionsBlingTokens.react",["cx","fbt","Bootloader","Event","React","ReactDOM","RTLKeys","UFIReactionIconImpl.react","UFIReactionsProfileBrowserUtils","UFIReactionTypes","joinClasses","sortReactionTypes"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React"),j=null;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={active:null,prevFeedback:d.props.feedback,selectedIndex:-1,reactionTypes:k(d.props.feedback.reactioncountmap,d.props.max)},d.onFocusIn=function(a){d.refs.tokens.contains(a.target)||(d.setState({selectedIndex:-1}),d.focusInListener&&(d.focusInListener.remove(),d.focusInListener=null))},d.onFocus=function(a){a.target===d.refs.tokens&&(d.setState({selectedIndex:0}),d.focusInListener||(d.focusInListener=b("Event").listen(document.documentElement,"focusin",d.onFocusIn)))},d.onKeyDown=function(a){switch(a.keyCode){case b("RTLKeys").RETURN:d.focusInListener&&(d.focusInListener.remove(),d.focusInListener=null);break;case b("RTLKeys").TAB:d.setState({selectedIndex:0});break;case b("RTLKeys").getLeft():case b("RTLKeys").getRight():a.preventDefault();d.setState({selectedIndex:Math.max(0,Math.min(d.state.selectedIndex+(a.keyCode===b("RTLKeys").getLeft()?-1:1),d.state.reactionTypes.length-1))});break}},d.renderToken=function(a,c){var e=d.props.feedback,f=h._("{reduced_count} {reaction_type}",[h._param("reduced_count",e.reactioncountmap[a].reduced),h._param("reaction_type",b("UFIReactionTypes").reactions[a].display_name)]),g=i.jsx(b("UFIReactionIconImpl.react"),{size:d.props.size,className:"_4-op",reaction:a}),k=i.jsx("span",{className:"_3chu",children:e.reactioncountmap[a].reduced});f={"aria-label":f,"data-testid":"ufi_bling_token_"+a,className:"_3emk"+(d.props.size==="14"?" _26lk":"")+(d.props.size==="16"?" _401_":""),key:"reactionType-"+a,ref:c};if(d.props.noLinks)return i.jsxs("span",babelHelpers["extends"]({},f,{children:[g,k]}));f=babelHelpers["extends"]({},f,b("UFIReactionsProfileBrowserUtils").getPrimerProps({actorID:e.actorforpost,feedbackTargetID:e.entidentifier,reactionKey:a}),{role:"button",tabIndex:d.state.selectedIndex===c?0:-1});return j?i.jsxs(j,babelHelpers["extends"]({active:d.state.active===a,feedback:e,reaction:a},f,{children:[g,k]})):i.jsxs("a",babelHelpers["extends"]({onMouseEnter:d.onMouseEnter.bind(babelHelpers.assertThisInitialized(d),a)},f,{children:[g,k]}))},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidUpdate=function(){if(this.state.selectedIndex>-1){var a=b("ReactDOM").findDOMNode(this.refs[this.state.selectedIndex]);a&&a.focus()}};c.getDerivedStateFromProps=function(a,b){return{active:a.feedback.reactioncount===b.prevFeedback.reactioncount?b.active:null,prevFeedback:a.feedback,reactionTypes:k(a.feedback.reactioncountmap,a.max)}};d.onMouseEnter=function(a){var c=this;j||b("Bootloader").loadModules(["UFIReactionsTooltipImpl.react"],function(a){j=a,c.forceUpdate()},"UFIReactionsBlingTokens.react");this.setState({active:a})};d.render=function(){var a=this.props.noLinks?{}:{onFocus:this.onFocus,onKeyDown:this.onKeyDown,role:"toolbar",tabIndex:this.state.selectedIndex>-1?-1:0};return i.jsxs("div",{className:b("joinClasses")("_3t53",this.props.className),children:[i.jsx("span",babelHelpers["extends"]({"aria-label":h._("See who reacted to this"),className:"_3t54",ref:"tokens"},a,{children:this.state.reactionTypes.map(this.renderToken,this)})),this.props.children]})};return c}(i.Component);a.defaultProps={className:null,size:"16"};function k(a,c){if(a==null)return[];var d=b("sortReactionTypes")(a).filter(function(c){return b("UFIReactionTypes").reactions[c]&&a[c]["default"]});c&&(d=d.slice(0,c));return d}e.exports=a}),null);
__d("SphericalVideoFallback",["cx","CSS"],(function(a,b,c,d,e,f,g){a={setup:function(a,c){var d=c.fallbackUriList,e=c.fallbackType,f=function(){a.emit("VideoPlayerFallbackEvents/enter");var c=a.getLastError();if(c&&c.error!=="SPHERICAL_SETUP_FAILED"&&c.error!=="SPHERICAL_RENDER_ERROR")return;var f=a.addListener("stateChange",function(){a.isState("playing")&&(a.logEvent("spherical_fallback_entered",{spherical_fallback_type:e}),f.remove())});a.setFallbackSources(d);b("CSS").removeClass(a.getRootNode(),"_3-n5");a.reset();a.emit("VideoPlayerFallbackEvents/recover")};if(a.isState("fallback"))f();else var g=a.addListener("stateChange",function(){a.isState("fallback")&&(f(),g.remove())})}};e.exports=a}),null);
__d("VideoErrorOverlay",["SphericalVideoFallback"],(function(a,b,c,d,e,f){function g(a,b){"textContent"in a&&(a.textContent=b),a.innerText=b}function h(a){if("textContent"in a)return a.textContent;return!a.innerText?"":a.innerText}a=function(){"use strict";function a(a,c,d,e,f){var g=this;this.$1=c;this.$2=d;this.$3=e;a.registerOption("VideoErrorOverlay","title",function(){return g.getTitle()},function(a){return g.setTitle(a)});a.registerOption("VideoErrorOverlay","message",function(){return g.getMessage()},function(a){return g.setMessage(a)});a.registerOption("VideoErrorOverlay","linkURL",function(){return g.getLinkURL()},function(a){return g.setLinkURL(a)});a.registerOption("VideoErrorOverlay","linkTitle",function(){return g.getLinkTitle()},function(a){return g.setLinkTitle(a)});a.registerOption("VideoErrorOverlay","available",function(){return!0});f&&b("SphericalVideoFallback").setup(a,f)}var c=a.prototype;c.getTitle=function(){return this.$1?h(this.$1):""};c.setTitle=function(a){this.$1&&g(this.$1,a)};c.getMessage=function(){return h(this.$2)};c.setMessage=function(a){g(this.$2,a)};c.getLinkURL=function(){return this.$3.href};c.setLinkURL=function(a){this.$3.href=a};c.getLinkTitle=function(){return h(this.$3)};c.setLinkTitle=function(a){g(this.$3,a)};return a}();e.exports=a}),null);
__d("ShowsCreationLoggerUtils",["ShowCreationFlowTypedLogger"],(function(a,b,c,d,e,f){"use strict";a={log:function(a,c,d,e){d=new(b("ShowCreationFlowTypedLogger"))().setFlowSource(d).setStep(a).setPageID(c);e&&(d=d.updateExtraData(e));d.log()},logError:function(a,c,d,e,f){e=new(b("ShowCreationFlowTypedLogger"))().setFlowSource(e).setStep(a).setPageID(c).setError(d);f&&(e=e.updateExtraData(f));e.log()}};e.exports=a}),null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("reselect-3.0.1",[],(function(a,b,c,d,e,f){"use strict";var g={},h={exports:g};function i(){g.__esModule=!0;g.defaultMemoize=c;g.createSelectorCreator=e;g.createStructuredSelector=h;function a(a,b){return a===b}function b(a,b,c){if(b===null||c===null||b.length!==c.length)return!1;var d=b.length;for(var e=0;e<d;e++)if(!a(b[e],c[e]))return!1;return!0}function c(c){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:a,e=null,f=null;return function(){b(d,e,arguments)||(f=c.apply(null,arguments));e=arguments;return f}}function d(a){a=Array.isArray(a[0])?a[0]:a;if(!a.every(function(a){return typeof a==="function"})){var b=a.map(function(a){return typeof a}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, "+("instead received the following types: ["+b+"]"))}return a}function e(a){for(var b=arguments.length,e=Array(b>1?b-1:0),f=1;f<b;f++)e[f-1]=arguments[f];return function(){for(var b=arguments.length,f=Array(b),g=0;g<b;g++)f[g]=arguments[g];var h=0,i=f.pop(),j=d(f),k=a.apply(void 0,[function(){h++;return i.apply(null,arguments)}].concat(e)),l=c(function(){var a=[],b=j.length;for(var c=0;c<b;c++)a.push(j[c].apply(null,arguments));return k.apply(null,a)});l.resultFunc=i;l.recomputations=function(){return h};l.resetRecomputations=function(){return h=0};return l}}var f=g.createSelector=e(c);function h(a){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:f;if(typeof a!=="object")throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof a);var c=Object.keys(a);return b(c.map(function(b){return a[b]}),function(){for(var a=arguments.length,b=Array(a),d=0;d<a;d++)b[d]=arguments[d];return b.reduce(function(a,b,d){a[c[d]]=b;return a},{})})}}var j=!1;function k(){j||(j=!0,i());return h.exports}function a(a){switch(a){case void 0:return k()}}e.exports=a}),null);
__d("reselect",["reselect-3.0.1"],(function(a,b,c,d,e,f){e.exports=b("reselect-3.0.1")()}),null);
__d("XEventsTourPermalinkController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/tours/{tour_id}/",{tour_id:{type:"FBID",required:!0},acontext:{type:"String"},afterload:{type:"Enum",enumType:0}})}),null);
__d("XPagesCoverPhotoUploadAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/profile/cover_photo_upload/",{page_id:{type:"FBID",required:!0},ref:{type:"String"},index:{type:"Int"},previous_key:{type:"String"}})}),null);
__d("XPagesProfilePictureUploadAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/profile/profile_picture_upload/",{page_id:{type:"FBID",required:!0},ref:{type:"String"}})}),null);
__d("XPagesProfileReviewsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/{page_token}/reviews/",{page_token:{type:"String",required:!0},business_id:{type:"Int"},selected_snippet:{type:"String"},post_id:{type:"FBID"},referrer:{type:"String"},__nodl:{type:"Exists",defaultValue:!1},qr:{type:"String"},qr_code_id:{type:"FBID"},scan_session_id:{type:"String"},ref:{type:"String"},mt_nav:{type:"Bool",defaultValue:!1},msite_tab_async:{type:"Bool",defaultValue:!1},_sref_:{type:"Int"},_vref_:{type:"Int"}})}),null);
__d("XProfilePictureOverlayLandingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/profilepicframes/",{overlay_source_object_id:{type:"FBID"},photo_id:{type:"Int"},profile_id:{type:"Int"},query:{type:"String"},selected_overlay_id:{type:"Int"}})}),null);
__d("XRecommendPageComposerDialogAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/async/recommendation/composer/",{page_id:{type:"FBID",required:!0},recommendation_type:{type:"Enum",enumType:1},surface:{type:"Enum",required:!0,enumType:1},ref_type:{type:"Enum",required:!0,enumType:1},__asyncDialog:{type:"Int"}})}),null);
__d("XUFIReactionTooltipController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ufi/reaction/tooltip/",{ft_ent_identifier:{type:"String",required:!0},seen_user_fbids:{type:"IntVector",defaultValue:[]},reaction_type:{type:"Enum",enumType:0},user_count:{type:"Int"}})}),null);
__d("XUFIReactionsSocialSentenceTooltipController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ufi/reaction/sentence/tooltip/",{ft_ent_identifier:{type:"String",required:!0},user_count:{type:"Int"},client_id:{type:"String"}})}),null);