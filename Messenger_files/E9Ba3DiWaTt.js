if (self.CavalryLogger) { CavalryLogger.start_js(["aPh7d"]); }

__d("DOMP2PTrigger",["cx","JSXDOM","MessengerEnvironment","P2PAmountUtils","P2PTriggersUtils","TransformTextToDOMMixin"],(function(a,b,c,d,e,f,g){a={MAX_ITEMS:40,match:function(a){a=b("P2PTriggersUtils").getMatches(a);if(!a||!a.length)return!1;var c=a[0];if(!b("P2PAmountUtils").isValidSendAmount(c))return!1;a=a.index;return{startIndex:a,endIndex:a+c.length,element:this._element(c)}},_element:function(a){return b("JSXDOM").a({href:"#",className:"_35i0"+(b("MessengerEnvironment").messengerui?"":" _4g4e"),"data-p2p-trigger":a},a)}};e.exports=Object.assign(a,b("TransformTextToDOMMixin"))}),null);
__d("p2pTriggerJSXDOMToString",["DOMEmoji","DOMEmote","DOMP2PTrigger","EmojiImageURL","JSXDOM","transformTextToDOM"],(function(a,b,c,d,e,f){a=function(a,c,d,e,f,g){var h=[];e&&h.push(b("DOMP2PTrigger"));c&&h.push(b("DOMEmoji").params({isSupportedEmoji:f,emojiUrlGenerator:b("EmojiImageURL").getEmoji3URL}));d&&(g?h.push(b("DOMEmote").params({getMessengerEmote:g})):h.push(b("DOMEmote")));return b("JSXDOM").span(null,b("transformTextToDOM")(a,h)).innerHTML};e.exports=a}),null);
__d("P2PTriggers.react",["DOM","Event","MercuryIDs","P2PActions","P2PLogger","P2PUserEligibilityStore","React","ReactDOM","StoreAndPropBasedStateMixin","createReactClass_DEPRECATED","nullthrows","p2pTriggerJSXDOMToString","prop-types"],(function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("createReactClass_DEPRECATED")({displayName:"P2PTriggers",mixins:[b("StoreAndPropBasedStateMixin")(b("P2PUserEligibilityStore"))],propTypes:{getMessengerEmote:(a=b("prop-types")).func,isSupportedEmoji:a.func,renderEmoji:a.bool,renderEmoticons:a.bool,text:a.string.isRequired,threadID:a.string.isRequired},getInitialState:function(){return{amount:""}},statics:{calculateState:function(a){var c=b("MercuryIDs").isGroupChat(a.threadID)||b("P2PUserEligibilityStore").getEligibilityByThreadID(a.threadID);return{isThreadEligible:c,otherUserID:b("MercuryIDs").getUserIDFromThreadID(a.threadID)}}},_clickListeners:null,componentDidMount:function(){this._clickListeners=[],this.bindClickListeners()},componentWillUnmount:function(){this.unbindClickListeners()},log:function(a,c){b("P2PLogger").log(a,babelHelpers["extends"]({www_event_flow:"UI_Flow_P2P_Send",object_id:this.state.otherUserID},c))},bindClickListeners:function(){var a=b("nullthrows")(this._clickListeners);if(!a.length){var c=b("DOM").scry(b("ReactDOM").findDOMNode(this),"[data-p2p-trigger]");for(var d=0,e=c.length;d<e;d++)a.push(b("Event").listen(c[d],"click",this.handleTriggerClick))}},unbindClickListeners:function(){var a;if(this._clickListeners){for(var b=0,c=this._clickListeners.length;b<c;b++)a=this._clickListeners[b],a&&a.remove();this._clickListeners=[]}},componentDidUpdate:function(a,b){!b.isThreadEligible&&this.state.isThreadEligible&&this.bindClickListeners()},getAmountFromTriggerClickEvent:function(a){a=a.target.getAttribute("data-p2p-trigger")||"";return a.replace(/[^0-9\.]+/g,"")},handleTriggerClick:function(a){a.preventDefault();a=this.getAmountFromTriggerClickEvent(a);this.setState({amount:a});this.openSendView();this.log("UI_Actn_Initiate_Send_Trigger",{raw_amount:this.state.amount,currency:"USD"})},openSendView:function(){b("P2PActions").chatSendViewOpened({threadID:this.props.threadID,amount:this.state.amount})},render:function(){var a=b("p2pTriggerJSXDOMToString")(this.props.text,this.props.renderEmoji,this.props.renderEmoticons,this.state.isThreadEligible,this.props.isSupportedEmoji,this.props.getMessengerEmote);return g.jsx("span",{dangerouslySetInnerHTML:{__html:a}})}});e.exports=c}),null);
__d("TextWithEntitiesAndP2P.react",["BaseTextWithEntities.react","Link.react","P2PTriggers.react","React","createReactClass_DEPRECATED"],(function(a,b,c,d,e,f){"use strict";var g=b("React");a=b("createReactClass_DEPRECATED")({displayName:"TextWithEntitiesAndP2P",_renderText:function(a){return g.jsx(b("P2PTriggers.react"),{getMessengerEmote:this.props.getMessengerEmote,isSupportedEmoji:this.props.isSupportedEmoji,renderEmoticons:this.props.renderEmoticons,renderEmoji:this.props.renderEmoji,text:a,threadID:this.props.threadID})},_renderRange:function(a,c){if(this.props.interpolator)return this.props.interpolator(a,c);else return g.jsx(b("Link.react"),{href:c.entity,children:a})},render:function(){return g.jsx(b("BaseTextWithEntities.react"),babelHelpers["extends"]({},this.props,{textRenderer:this._renderText,rangeRenderer:this._renderRange,ranges:this.props.ranges,imageRanges:this.props.imageRanges,aggregatedRanges:this.props.aggregatedRanges,text:this.props.text}))}});e.exports=a}),null);