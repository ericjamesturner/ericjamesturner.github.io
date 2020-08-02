if (self.CavalryLogger) { CavalryLogger.start_js(["j6KwK"]); }

__d("BusinessURI.brands",["BizSiteIdentifier.brands","URI","isFacebookURI"],(function(a,b,c,d,e,f){var g,h=function(c){"use strict";babelHelpers.inheritsLoose(a,c);function a(a,d,e){a=c.call(this,a)||this;if(b("BizSiteIdentifier.brands").isBizSite()){d=d!==null&&d!==void 0&&d!==""?d:b("BizSiteIdentifier.brands").getBusinessID();e=e!==null&&e!==void 0&&e!==""?e:b("BizSiteIdentifier.brands").getGlobalScopeID();d!==null&&d!==void 0&&d!==""&&a.addQueryData("business_id",d);e!=null&&e!==""&&a.addQueryData("global_scope_id",e);a.$BusinessURI1(a.getSubdomain())||a.setSubdomain("business")}if(!b("isFacebookURI")(babelHelpers.assertThisInitialized(a)))throw new Error("Business URI must be FB URI");return babelHelpers.assertThisInitialized(a)||babelHelpers.assertThisInitialized(a)}var d=a.prototype;d.$BusinessURI1=function(a){return a==="developers"};return a}(g||b("URI"));a=function(a,b,c){return new h(a,b,c)};a.BusinessURI=h;e.exports=a}),null);
__d("FBProfilePhotoShadow.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){var h=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.className,d=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["className","children"]);d=h.Children.only(d);return h.jsx("div",babelHelpers["extends"]({},a,{className:b("joinClasses")(c,"_38vo"),children:h.cloneElement(d,{className:b("joinClasses")(d.props.className,"_44ma")})}))};return c}(h.Component);e.exports=a}),null);
__d("ProfileTabUtils",["ProfileTabConst"],(function(a,b,c,d,e,f){function g(a){return a===null||a===void 0||a===b("ProfileTabConst").TIMELINE||a===b("ProfileTabConst").WALL}var h={isActivityLogTab:function(a){return a===b("ProfileTabConst").ALL_ACTIVITY||a===b("ProfileTabConst").APPROVAL},isTimelineOverviewTab:function(a){return a===b("ProfileTabConst").TIMELINE_OVERVIEW},isOverviewTab:function(a){return a===b("ProfileTabConst").INFO||a===b("ProfileTabConst").OVERVIEW},isTimelineTab:g,isMapTab:function(a){return a===b("ProfileTabConst").MAP},tabHasFixedAds:function(a){return!0},tabHasScrubber:function(a){return h.isActivityLogTab(a)},tabHasStickyHeader:function(a){return g(a)||h.isTimelineOverviewTab(a)},getIDForCollectionToken:function(a){return"pagelet_timeline_app_collection_"+a},getIDForSectionKey:function(a){return"pagelet_timeline_medley_"+a},isMedleyTab:function(a){return!h.isTimelineTab(a)&&!h.isTimelineOverviewTab(a)},normalizeTabKey:function(a){return h.isTimelineTab(a)?b("ProfileTabConst").TIMELINE:a},getIDForTabKey:function(a){if(h.isTimelineTab(a))return"timeline_tab_content";return h.isTimelineOverviewTab(a)?"timeline_overview":"timeline-medley"},getPageletForTabKey:function(a){if(h.isTimelineTab(a))return"TimelineJumperColumn";return h.isTimelineOverviewTab(a)?"TimelineOverviewColumn":"TimelineMedleyView"}};e.exports=h}),null);
__d("TimelineComponentKeys",[],(function(a,b,c,d,e,f){a={CONTENT:"content",ESCAPE_HATCH:"escape_hatch",OVERVIEW_CONTAINER:"overview_container",NAV:"nav",SCRUBBER:"scrubber",STICKY_HEADER:"sticky_header",STICKY_HEADER_NAV:"sticky_header_nav",STICKY_HEADER_VIEW_SWITCHER:"sticky_header_view_switcher"};e.exports=a}),null);
__d("TimelineConstants",[],(function(a,b,c,d,e,f){a=Object.freeze({DS_LOADED:"timeline-capsule-loaded",DS_COLUMN_HEIGHT_DIFFERENTIAL:"timeline-column-diff-height",SCROLL_TO_OFFSET:100,SCRUBBER_DEFAULT_OFFSET:38,SECTION_EXPAND:"TimelineConstants/sectionExpand",SECTION_LOADING:"TimelineConstants/sectionLoading",SECTION_FULLY_LOADED:"TimelineConstants/sectionFullyLoaded",SECTION_REGISTERED:"TimelineConstants/sectionRegistered",UNIT_SEGMENT_LOADED:"TimelineConstants/unitSegmentLoaded"});e.exports=a}),null);
__d("findTag",["TAALOpcodes","$","err"],(function(a,b,c,d,e,f){a=function(a,c){var d=b("$")(a);if(!c){if(d instanceof HTMLElement)return d;var e=b("err")('Element with ID "%s" is not an HTMLElement',a);e.taalOpcodes=[b("TAALOpcodes").PREVIOUS_FILE];throw e}e=d.tagName.toLowerCase();if(e!==c){a=b("err")('Expected $("%s") to be of type "%s" but got "%s" instead.',a,c,e);a.taalOpcodes=a.taalOpcodes||[];a.taalOpcodes=[b("TAALOpcodes").PREVIOUS_FILE];throw a}return d};e.exports=a}),null);
__d("TimelineController",["Arbiter","BlueBar","CSS","DataStore","Event","ProfileTabConst","ProfileTabUtils","Run","TidyArbiter","TimelineComponentKeys","TimelineConstants","UITinyViewportAction","URI","Vector","findTag","forEachObject","ge","queryThenMutateDOM","tidyEvent"],(function(a,b,c,d,e,f){var g,h=740,i="top",j="paddingTop",k="paddingTop",l=null,m=!1,n=null,o=null,p={},q={},r=null,s=[],t=null,u=null;b("Vector").getViewportDimensions();var v=!1,w=!1,x=!1;function y(a,b,c){c===void 0&&(c=[]);if(p[a])return p[a][b].apply(p[a],c);q[a]=q[a]||{};q[a][b]=c;return!1}function z(){v&&(v=D(b("ge")("rightCol"),k,J.getCurrentScrubber()));if(w){var a=b("ge")("pagelet_above_header_timeline");a&&(w=D(a,i))}x&&(x=D(b("BlueBar").getBar(),j))}function A(){u=b("Vector").getScrollPosition()}function B(){z(),u&&b("ProfileTabUtils").tabHasStickyHeader(l)&&y(b("TimelineComponentKeys").STICKY_HEADER,"check",[u.y]),y(b("TimelineComponentKeys").CONTENT,"checkCurrentSectionChange")}function C(){b("queryThenMutateDOM")(A,B,"TimelineController/scrollListener")}function D(a,c,d){if(!a||!u)return!1;if(u.y<=0){E(a,c);return!1}if(d&&b("CSS").hasClass(d.getRoot(),"fixed_elem")){E(a,c);return!1}d=parseInt(a.style[c],10)||0;u.y<d?(b("CSS").addClass(a,"timeline_fixed"),a.style[c]=u.y+"px"):b("CSS").removeClass(a,"timeline_fixed");return!0}function E(a,c){a.style[c]="0px",b("CSS").removeClass(a,"timeline_fixed")}function F(){b("Vector").getViewportDimensions()}function G(){b("queryThenMutateDOM")(F,function(){y(b("TimelineComponentKeys").STICKY_HEADER_NAV,"adjustMenuHeights"),u&&y(b("TimelineComponentKeys").STICKY_HEADER,"check",[u.y])},"TimelineController/resize")}function H(a,c){a=b("Vector").getScrollPosition();c=Math.min(c,a.y);a=b("ge")("rightCol");a&&(a.style[k]=c+"px",v=!0);J.showAboveHeaderContent(c);x=b("UITinyViewportAction").isTinyHeight();if(x){a=b("BlueBar").getBar();a&&(a.style[j]=c+"px")}b("Arbiter").inform("reflow")}function I(){while(s.length)s.pop().remove();b("forEachObject")(p,function(a,b){a.reset&&a.reset()});l=null;n=null;p={};q={};t=null;m=!1;w=!1;if(v){var a=b("ge")("rightCol");a&&E(a,k)}v=!1;if(x){a=b("BlueBar").getBar();a&&E(a,j);x=!1}b("DataStore").purge(b("TimelineConstants").DS_LOADED)}var J={init:function(a,c,d){if(m)return;b("ProfileTabUtils").isTimelineTab(c)&&(c=b("ProfileTabConst").TIMELINE);m=!0;n=a;o=d.relationship_type;r=d.session_token;s.push(b("Event").listen(window,"scroll",C),b("Event").listen(window,"resize",G));b("tidyEvent")(b("TidyArbiter").subscribe("TimelineCover/coverCollapsed",H));b("Run").onLeave(I);a=new(g||(g=b("URI")))(window.location).getQueryData();J.registerCurrentKey(c,a.subkey)},showAboveHeaderContent:function(a){var c=b("Vector").getScrollPosition();a=Math.min(a,c.y);c=b("findTag")("pagelet_above_header_timeline");if(c.firstChild){var d=b("findTag")("above_header_timeline_placeholder");d.style.height=c.offsetHeight+"px";c.style.top=a+"px";w=!0}},registerCurrentKey:function(a,c){l=a;t=a!==b("ProfileTabConst").MAP&&b("Vector").getViewportDimensions().y<h&&b("ProfileTabUtils").tabHasScrubber(a);if(!t){var d=b("BlueBar").getBar();t=d&&d.offsetTop}b("Arbiter").inform("TimelineController/sectionKeyChange",[a,c],"state");y(b("TimelineComponentKeys").STICKY_HEADER,"handleTabChange",[a,c]);y(b("TimelineComponentKeys").STICKY_HEADER_NAV,"handleTabChange",[a,c]);y(b("TimelineComponentKeys").OVERVIEW_CONTAINER,"handleTabChange",[a,c]);y(b("TimelineComponentKeys").STICKY_HEADER_VIEW_SWITCHER,"handleTabChange",[a,c]);C()},getProfileID:function(){return n},getRelationshipType:function(){return o},getSessionToken:function(){return r},getCurrentKey:function(){return l},getCurrentScrubber:function(){return p[b("TimelineComponentKeys").SCRUBBER]},getCurrentStickyHeaderNav:function(){return p[b("TimelineComponentKeys").STICKY_HEADER_NAV]},scrubberHasLoaded:function(a){b("CSS").conditionClass(a.getRoot(),"fixed_elem",!t)},sectionHasChanged:function(a,c){a=[a,c];y(b("TimelineComponentKeys").STICKY_HEADER_NAV,"updateSection",a);y(b("TimelineComponentKeys").SCRUBBER,"updateSection",a)},navigateToSection:function(a){y(b("TimelineComponentKeys").CONTENT,"navigateToSection",[a])},adjustStickyHeaderWidth:function(){y(b("TimelineComponentKeys").STICKY_HEADER,"adjustWidth")},dismissStickyHeaderConfirmationBar:function(){y(b("TimelineComponentKeys").STICKY_HEADER,"dismissConfirmationBar")},hideStickyHeaderNavSectionMenu:function(){y(b("TimelineComponentKeys").STICKY_HEADER_NAV,"hideSectionMenu")},register:function(a,c){p[a]=c,q[a]&&(b("forEachObject")(q[a],function(b,c){y(a,c,b)}),delete q[a])}};e.exports=J}),null);
__d("XFRXHandleChevronClickController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/frx/handle_chevron_click/",{})}),null);
__d("FRXHandleChevronClick",["AsyncRequest","Event","XFRXHandleChevronClickController"],(function(a,b,c,d,e,f){"use strict";a={init:function(a,c,d,e){b("Event").listen(a,"click",function(){new(b("AsyncRequest"))().setURI(b("XFRXHandleChevronClickController").getURIBuilder().getURI()).setMethod("POST").setData({reportable_ent_id:c,frx_entry_point:d,nfx_story_location:e}).send()})}};e.exports=a}),null);
__d("ads-lib-formatters",["fbt","Currency","NumberFormatConfig","intlNumUtils"],(function(a,b,c,d,e,f,g){var h="USD";function i(a,b,c){a=(a=a)!=null?a:"";c=(c=c)!=null?c:"";b=b===0||b==null?a.length:b;if(a.length<=b)return a;b=b-c.length;b&&(/[\uD800-\uDFFF]/.test(a[b-1])&&(b+=1));return a.substr(0,b)+c}function a(a,b){b===void 0&&(b="");return function(c){return c==null?b:i(c,a,"...")}}function j(a,c,d,e,f){return a==="N/A"?a:b("intlNumUtils").formatNumberRaw((a=a)!=null?a:0,c,d,e,f)}function k(a){return function(b){return j(b,(b=a)!=null?b:0,",",".")}}function l(a){return function(c){return j(c,(c=a)!=null?c:0,b("NumberFormatConfig").numberDelimiter,b("NumberFormatConfig").decimalSeparator,b("NumberFormatConfig").minDigitsForThousandsSeparator)}}function c(a){return function(c){return b("intlNumUtils").formatNumberRaw((c=c)!=null?c:"0",(c=a)!=null?c:0,b("NumberFormatConfig").numberDelimiter,b("NumberFormatConfig").decimalSeparator,b("NumberFormatConfig").minDigitsForThousandsSeparator)}}function d(a,c){return function(d){return b("intlNumUtils").formatNumberWithLimitedSigFig(d,a,c)}}function e(a,c){return c?l(a):function(c){return j(c,a||0,"",b("NumberFormatConfig").decimalSeparator,b("NumberFormatConfig").minDigitsForThousandsSeparator)}}function m(a,b){var c=b===!1?1:100;return function(b){return j(b*c,a||0,",",".")+"%"}}function n(a,c){var d=c===!1?1:100;return function(c){return j(((c=c)!=null?c:0)*d,a||0,b("NumberFormatConfig").numberDelimiter,b("NumberFormatConfig").decimalSeparator)+"%"}}function o(a,c,d,e,f){a===void 0&&(a=2);c===void 0&&(c=h);d===void 0&&(d=!1);var g=e(a);e=c+"-"+a+"-"+d.toString();if(!f[e]){var i=b("Currency").getFormat(c)||b("Currency").getFormat(h);a=b("Currency").getSymbol(c)||b("Currency").getSymbol(h);var j=b("Currency").getOffset(c)||b("Currency").getOffset(h);i=i.replace("{symbol}",a);f[e]=function(a){a=(a=a)!=null?a:0;d&&(a/=j);return!(a+"").match(/^\-?[\d\.,]*$/)?"N/A":i.replace("{amount}",g(a))}}return f[e]}var p={};function q(a,b,c){return o((a=a)!=null?a:0,b,c,k,p)}var r={};function s(a,b,c){return o(a,b,c,l,r)}function t(a,b,c,d){return s(a,b,c)(d)}function u(a,c){return c!=null?b("intlNumUtils").parseNumberRaw(a!=null?a+"":"",c,b("NumberFormatConfig").numberDelimiter):a!=null?b("intlNumUtils").parseNumber(a+""):null}function v(a){var b=[];a.countries&&a.countries.length&&b.push(a.countries);a.cities&&a.cities.length&&b.push(a.cities.map(function(a){return a.name}));a.zips&&a.zips.length&&b.push(a.zips.map(function(a){return a.name}));a.regions&&a.regions.length&&b.push(a.regions.map(function(a){return a.name}));return b.join("; ").replace(/,/g,", ")}function w(a,b){if(a||b){a=a||g._("All");b=b||g._("All");return a+"&ndash;"+b}return"Any"}function x(a){a=a+"";if(a==="0")return g._("All");else if(a==="1")return g._("Men");return g._("Women")}f.geoLocation=v;f.age=w;f.sex=x;f.createTextTruncator=a;f.chopString=i;f.parseNumber=u;f.formatNumber=j;f.createIntlNumberFormatter=l;f.createIntlLongNumberFormatter=c;f.createLimitedSigFigNumberFormatter=d;f.createMaybeDelimitedNumberFormatter=e;f.createIntlPercentFormatter=n;f.createIntlMoneyFormatter=s;f.formatIntlMoney=t;f.createNumberFormatter=k;f.createPercentFormatter=m;f.createMoneyFormatter=q}),null);
__d("differenceSets",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b=new Set();for(var c=arguments.length,d=new Array(c>1?c-1:0),e=1;e<c;e++)d[e-1]=arguments[e];FIRST:for(var f=a,g=Array.isArray(f),h=0,f=g?f:f[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var i;if(g){if(h>=f.length)break;i=f[h++]}else{h=f.next();if(h.done)break;i=h.value}var j=i;for(var k=0;k<d.length;k++){var l=d[k];if(l.has(j))continue FIRST}b.add(j)}return b}e.exports=a}),null);