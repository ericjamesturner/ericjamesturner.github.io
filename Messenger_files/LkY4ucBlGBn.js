if (self.CavalryLogger) { CavalryLogger.start_js(["GCokh"]); }

__d("FantaTypeFileUploaderFile",["immutable"],(function(a,b,c,d,e,f){"use strict";a={file:{},id:"",startTime:0,type:null,uploadedID:null};c=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(b("immutable").Record(a));e.exports=c}),null);
__d("FantaReducersFileUploader",["fbt","Bootloader","ChatFileUploadLoggingUtils","Dialog","FantaMessageActions","FantaTypeFileUploaderFile","FBLogger","MercuryConstants","MercuryExperimentUtils","PhotosUploadID","gkx"],(function(a,b,c,d,e,f,g){"use strict";var h=b("FantaMessageActions").Types;function i(a){if(!a)return;b("Bootloader").loadModules(["MessengerShareFilePreviewFunnelLogger","MessengerShareFilePreviewFunnelLoggerConstants"],function(b,c){b.startFunnelIfNotStarted(a),b.appendAction(!0,c.PREPARE_FILES_FOR_SEND,a)},"FantaReducersFileUploader")}function j(a,c){if(!a)return;b("Bootloader").loadModules(["MessengerShareFilePreviewFunnelLogger"],function(b,d){b.appendAction(!0,c.toLowerCase(),a)},"FantaReducersFileUploader")}function a(a,b){switch(b.type){case h.PREPARE_FILES_FOR_SEND:var c=b.files,d=b.tabID;b=b.composer;var e=a.mercury.tabContents.get(d);if(!e||e&&e.composer.version!==b.version)return a;i(d);return k(a,d,c)}return a}function k(a,c,d){for(var e=0;e<d.length;e++){var f=d[e];b("ChatFileUploadLoggingUtils").log(f,"CHAT_TAB");if(f.size>b("MercuryConstants").AttachmentMaxSize){f=b("MercuryExperimentUtils").getMaxAttachmentSizeExceededDialog();new(b("Dialog"))().setTitle(g._("The file you have selected is too large")).setBody(b("gkx")("1147754")?g._("The file you have selected is too large. The maximum size is 75MB"):f).setButtons(b("Dialog").OK).setSemiModal(!0).show();b("FBLogger")("messenger_upload_file").warn("Uploading file is too large");return a}}for(var f=0;f<d.length;f++){e=d[f];var h=m();a=l(a,c,h,e)}return a}function l(a,c,d,e){if(!a.mercury.tabContents.get(c))return a;a=a.setIn(["mercury","tabContents",c,"composer","fileUploader","uploadedFiles",d],new(b("FantaTypeFileUploaderFile"))({file:e,id:d,startTime:Date.now()}));return a}function c(a,b){switch(b.type){case h.CANCEL_FILE_UPLOAD:var c=b.uploadID,d=b.tabID,e=a.mercury.tabContents.get(d);if(!e)return a;var f=e.composer.fileUploader.uploadingFiles.get(c);j(d,b.type);if(f)a=a.deleteIn(["mercury","tabContents",d,"composer","fileUploader","uploadingFiles",c]);else{b=e.composer.fileUploader.uploadedFiles.get(c);b&&(a=a.deleteIn(["mercury","tabContents",d,"composer","fileUploader","uploadedFiles",c]))}}return a}function m(){return"upload_"+b("PhotosUploadID").getNewID()}e.exports={cancelFileUpload:c,prepareFilesForSend:a}}),null);
__d("MessengerDragAndDrop.react",["Bootloader","JSResource","MercuryShareAttachmentRenderLocations","MessengerEnvironment","React","URI","lazyLoadComponent","prop-types","emptyFunction","ifRequired","setImmediate"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i=144,j=b("lazyLoadComponent")(b("JSResource")("MercurySharePreview.react").__setRef("MessengerDragAndDrop.react"));a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=function(a){c.$4(function(b){b.removeSharePreview(a)})},c.$2=function(a,b){c.$4(function(c){c.loadedShareData(a,b)})},c.$3=function(a){c.$4(function(b){b.loadingShareData(a)})},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){b("MessengerEnvironment").messengerui?b("Bootloader").loadModules(["MessengerActions"],b("emptyFunction"),"MessengerDragAndDrop.react"):b("Bootloader").loadModules(["FantaMessageActions"],b("emptyFunction"),"MessengerDragAndDrop.react")};d.shouldComponentUpdate=function(a){var b=this.props;return b.threadID!==a.threadID||!!(!b.sharePreview&&a.sharePreview)||!!(b.sharePreview&&a.sharePreview&&!b.sharePreview.equals(a.sharePreview))};d.render=function(){var a=this.props,c=a.sharePreview;a=a.threadID;c=c||{};var d=c.share;c=c.uri;return d||c&&(g||(g=b("URI"))).isValidURI(c)?h.jsx("div",{className:"fbNubFlyoutAttachments",children:h.jsx("div",{className:"chatAttachmentShelf",children:h.jsx(h.Suspense,{fallback:h.jsx("div",{}),children:h.jsx(j,{onClose:this.$1,onLoaded:this.$2,onLoading:this.$3,threadID:a,imageSize:{width:i,height:i},location:b("MercuryShareAttachmentRenderLocations").CHAT_PREVIEW,share:d,uri:c})})})}):null};d.$4=function(a){var c=this;b("setImmediate")(function(){typeof c.props.onResize==="function"&&c.props.onResize()});b("MessengerEnvironment").messengerui?b("ifRequired")("MessengerActions",function(b){a(b)},function(){b("Bootloader").loadModules(["MessengerActions"],function(b){a(b)},"MessengerDragAndDrop.react")}):b("ifRequired")("FantaMessageActions",function(b){a(b)},function(){b("Bootloader").loadModules(["FantaMessageActions"],function(b){a(b)},"MessengerDragAndDrop.react")})};return c}(h.Component);a.propTypes={threadID:b("prop-types").string.isRequired};e.exports=a}),null);
__d("MessengerRevokeGroupLinkDialogReact.bs",["cx","fbt","bs_block","bs_curry","React","ReasonReact.bs","MercuryThreadActions","MessengerDialogReact.bs","MessengerDialogHeaderReact.bs"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React");function j(a,c){switch(a){case 0:return b("bs_block").__(0,[{canClickRevokeLink:!1,shown:c.shown}]);case 1:return b("bs_block").__(0,[{canClickRevokeLink:!0,shown:c.shown}]);case 2:return b("bs_block").__(0,[{canClickRevokeLink:c.canClickRevokeLink,shown:!1}])}}var k=b("ReasonReact.bs").reducerComponent("MessengerRevokeGroupLinkDialogReact");function a(a,c,d,e){return{debugName:k.debugName,reactClassInternal:k.reactClassInternal,handedOffState:k.handedOffState,getDerivedStateFromProps:k.getDerivedStateFromProps,didMount:k.didMount,didUpdate:k.didUpdate,willUnmount:k.willUnmount,shouldUpdate:k.shouldUpdate,render:function(e){var f,g,j=function(a){b("bs_curry")._1(e.send,2);return b("bs_curry")._1(d,0)};return(f=b("ReasonReact.bs")).element(void 0,void 0,(g=b("MessengerDialogReact.bs")).Dialog.make(void 0,void 0,void 0,void 0,e.state.shown,void 0,void 0,448,void 0,void 0,[i.createElement(b("MessengerDialogHeaderReact.bs").make,{children:h._("Revoke Group Link?")}),i.jsx("div",{children:h._("Revoking this link will delete any pending requests to join this group and automatically create a new link."),className:"_6b7t"}),f.element(void 0,void 0,g.Footer.make(void 0,void 0,[f.element(void 0,void 0,g.Button.make(void 0,h._("Cancel"),void 0,void 0,function(a){return b("bs_curry")._1(e.send,2)},0,void 0,void 0,void 0,[])),f.element(void 0,void 0,g.Button.make(void 0,h._("Revoke"),!e.state.canClickRevokeLink,void 0,function(d){var f=a,g=c;d=d;if(e.state.canClickRevokeLink){b("bs_curry")._1(e.send,0);b("MercuryThreadActions").getForFBID(f).revokeAndRegenerateJoinableLink(g,j);return 0}else{d.preventDefault();return 0}},0,"_6b7u",void 0,void 0,[]))]))]))},initialState:function(a){return{canClickRevokeLink:!0,shown:!0}},retainedProps:k.retainedProps,reducer:j,jsElementWrapped:k.jsElementWrapped}}f.reducer=j;f.component=k;f.make=a}),null);
__d("MessengerManageGroupLinkDialogReact.bs",["cx","fbt","bs_block","bs_curry","React","ReasonReact.bs","MessengerDialogs.bs","FBClipboardLinkReact.bs","MessengerDialogReact.bs","MessengerDialogTitleReact.bs","MessengerDialogHeaderReact.bs","MessengerRevokeGroupLinkDialogReact.bs"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React"),j=b("ReasonReact.bs").reducerComponent("MessengerManageGroupLinkDialogReact");function k(a,c,d,e){return{debugName:j.debugName,reactClassInternal:j.reactClassInternal,handedOffState:j.handedOffState,getDerivedStateFromProps:j.getDerivedStateFromProps,didMount:j.didMount,didUpdate:j.didUpdate,willUnmount:j.willUnmount,shouldUpdate:j.shouldUpdate,render:function(e){var f,g=function(a){return b("bs_curry")._1(e.send,0)},j=i.jsxs("div",{children:[h._("Copy Group Link"),(f=b("ReasonReact.bs")).element(void 0,void 0,b("FBClipboardLinkReact.bs").make("_6b8a",d.replace("https://",""),d.replace("https://",""),void 0,void 0,void 0,void 0,"below","center",void 0,void 0,[]))],className:"_6b88 _6b89"}),k=i.jsxs(i.Fragment,{children:[f.element(void 0,void 0,b("MessengerDialogReact.bs").CancelButton.make(void 0,[])),i.jsx(b("MessengerDialogTitleReact.bs").make,{children:h._("Manage Group Link")}),f.element(void 0,void 0,b("MessengerDialogReact.bs").Button.make(void 0,h._("Done"),void 0,void 0,function(a){return b("bs_curry")._1(e.send,0)},0,void 0,void 0,void 0,[]))]});return f.element(void 0,void 0,b("MessengerDialogReact.bs").Dialog.make(void 0,void 0,void 0,void 0,e.state.shown,void 0,"default",544,void 0,void 0,[i.createElement(b("MessengerDialogHeaderReact.bs").make,{children:k}),j,i.jsx("div",{children:h._("Anyone with this link can join the group, see all previous messages and see your name and the group name. You can revoke it at any time. Only share it with people you trust."),className:"_6b8b _6b89"}),i.jsx("div",{children:h._("Revoke Group Link"),className:"_6b8c _6b89",onClick:function(d){var e=a,f=c;return b("MessengerDialogs.bs").showDialog(function(a){return b("ReasonReact.bs").element(void 0,void 0,b("MessengerRevokeGroupLinkDialogReact.bs").make(e,f,g,[]))})}}),i.jsx("div",{children:h._("Revoking this link will delete any pending requests to join this group and automatically create a new link."),className:"_6b8b _6b89"})]))},initialState:function(a){return{shown:!0}},retainedProps:j.retainedProps,reducer:function(a,c){return b("bs_block").__(0,[{shown:!1}])},jsElementWrapped:j.jsElementWrapped}}a=b("ReasonReact.bs").wrapReasonForJs(j,function(a){return k(a.viewer,a.threadID,a.joinableLink,a.children)});f.component=j;f.make=k;f.jsComponent=a}),null);
__d("MessengerGroupLinkSectionReact.bs",["cx","fbt","React","Link.react","bs_caml_option","ReasonReact.bs","MessengerDialogs.bs","MessengerMenu.react","FBClipboardLinkReact.bs","FBClipboardLink.react","AbstractPopoverButtonReact.bs","MessengerPopoverMenu.react","MessengerManageGroupLinkDialogReact.bs"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React");function j(a,c,d,e){e.preventDefault();return b("MessengerDialogs.bs").showDialog(function(e){return b("ReasonReact.bs").element(void 0,void 0,b("MessengerManageGroupLinkDialogReact.bs").make(a,c,d,[]))})}function a(a){var c=a.joinableLink,d=a.viewer,e=a.threadID;a=i.jsx(b("MessengerMenu.react"),{children:i.jsx(b("MessengerMenu.react").Item,{label:h._("Manage Group Link"),onclick:function(a){return j(d,e,c,a)}})});var f=h._("More group link options");f={button:i.jsx(b("Link.react"),{"aria-label":f,className:"_30yy _6dlm",role:"button",title:f}),defaultMaxWidth:200};return i.jsxs("div",{children:[i.jsx(b("FBClipboardLink.react"),b("FBClipboardLinkReact.bs").componentProps("_6dlo",c.replace("https://",""),c.replace("https://",""),void 0,void 0,void 0,void 0,"right",void 0,void 0,void 0)(0)),i.jsx(b("MessengerPopoverMenu.react"),{className:"_6dlp",menu:a,children:b("ReasonReact.bs").element(void 0,void 0,b("AbstractPopoverButtonReact.bs").make(b("bs_caml_option").some(f),!1,void 0,void 0,200,[]))})],className:"_6dln"})}c=a;f.handleManageGroupLinkClick=j;f.make=c}),null);
__d("MessengerInfoPanelGroupLinkContainerReact.bs",["fbt","React","bs_caml_option","MessengerGroupLinkSectionReact.bs","MessengerInfoPanelSectionReact.bs"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");function a(a){a.preventDefault();return 0}function c(a){var c=a.isCollapsed,d=a.onToggle,e=a.thread;a=a.viewer;var f=e.joinable_link;if(f==null||f==="")return null;else{c={isCollapsible:!0,isCollapsed:c,onToggle:d,title:g._("Group Link"),children:h.createElement(b("MessengerGroupLinkSectionReact.bs").make,{joinableLink:f,viewer:a,threadID:e.thread_id})};d=b("bs_caml_option").nullable_to_opt(e.solid_color);d!==void 0&&(c.customColor=b("bs_caml_option").valFromOption(d));return h.createElement(b("MessengerInfoPanelSectionReact.bs").make,c)}}d=c;e=c;f.preventDefault=a;f.make=d;f.jsComponent=e}),null);
__d("messengerInfoPanelGroupLinkContainerReactComponent",["MessengerInfoPanelGroupLinkContainerReact.bs"],(function(a,b,c,d,e,f){"use strict";a=b("MessengerInfoPanelGroupLinkContainerReact.bs").jsComponent;e.exports=a}),null);
__d("MessengerSharePreviewStore",["FantaTypeSharePreview","MessengerActions","MessengerStore","immutable"],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c;c=a.call(this)||this;c.$MessengerSharePreviewStore1=b("immutable").Map({});return c}var d=c.prototype;d.getState=function(){return this.$MessengerSharePreviewStore1};d.__onDispatch=function(a){var c=a.threadID;switch(a.type){case b("MessengerActions").Types.LINK_PREVIEW:var d=a.match;this.$MessengerSharePreviewStore1=this.$MessengerSharePreviewStore1.withMutations(function(a){a.get(c)||a.set(c,new(b("FantaTypeSharePreview"))());var e=a.get(c);a.set(c,e.merge({params:null,type:null,uri:d}))});this.emitChange();break;case b("MessengerActions").Types.LOADING_SHARE_DATA:this.$MessengerSharePreviewStore1=this.$MessengerSharePreviewStore1.withMutations(function(a){var b=a.get(c);if(!b)return;a.set(c,b.merge({isLoading:!0,params:null,type:null}))});this.emitChange();break;case b("MessengerActions").Types.LOADED_SHARE_DATA:a=a.attachmentData;var e=a.share_data;this.$MessengerSharePreviewStore1=this.$MessengerSharePreviewStore1.withMutations(function(a){var d=a.get(c);if(!d)return;a.set(c,d.merge({isLoading:!1,params:b("immutable").Map({data:e.share_params}),type:e.share_type}))});this.emitChange();break;case b("MessengerActions").Types.REMOVE_SHARE_PREVIEW:this.$MessengerSharePreviewStore1=this.$MessengerSharePreviewStore1.withMutations(function(a){a.get(c)&&a.set(c,new(b("FantaTypeSharePreview"))())});this.emitChange();break}};return c}(b("MessengerStore"));e.exports=new a()}),null);
__d("MessengerUploadFilesStore",["fbt","ChatFileUploadLoggingUtils","Dialog","FantaTypeFileUploader","FantaTypeFileUploaderFile","FBLogger","LogHistory","MercuryConstants","MercuryExperimentUtils","MessengerActions","MessengerStore","PhotosUploadID","gkx","immutable"],(function(a,b,c,d,e,f,g){"use strict";var h=b("LogHistory").getInstance("messenger_share_file_preview");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c;c=a.call(this)||this;c.$MessengerUploadFilesStore1=b("immutable").Map({});return c}var d=c.prototype;d.getState=function(){return this.$MessengerUploadFilesStore1};d.__onDispatch=function(a){var c,d=a.threadID,e=a.uploadID;switch(a.type){case b("MessengerActions").Types.PREPARE_FILES_FOR_SEND:h.log("Add files "+d,JSON.stringify(a));var f=a.files;this.$MessengerUploadFilesStore1=j(this.$MessengerUploadFilesStore1,d,f);this.emitChange();break;case b("MessengerActions").Types.CANCEL_FILE_UPLOAD:h.debug("Remove file "+d,JSON.stringify(a));f=this.$MessengerUploadFilesStore1.get(d);c=f.get("uploadingFiles").get(e);c?this.$MessengerUploadFilesStore1=this.$MessengerUploadFilesStore1.deleteIn([d,"uploadingFiles",e]):(c=f.get("uploadedFiles").get(e),c&&(this.$MessengerUploadFilesStore1=this.$MessengerUploadFilesStore1.deleteIn([d,"uploadedFiles",e])));this.emitChange();break;case b("MessengerActions").Types.EMPTY_FILES:h.debug("Empty files "+d,JSON.stringify(a));this.$MessengerUploadFilesStore1=this.$MessengerUploadFilesStore1.withMutations(function(a){a.get(d)&&a.set(d,new(b("FantaTypeFileUploader"))())});this.emitChange();break}};return c}(b("MessengerStore"));function i(a,c){new(b("Dialog"))().setTitle(a).setBody(c).setButtons(b("Dialog").OK).setSemiModal(!0).show()}function j(a,c,d){if(d.length>b("MercuryConstants").attachmentMaxLimit){i(g._("The number of files you have selected is too large.").toString(),g._("You can send maximum {max number of files} files.",[g._param("max number of files",b("MercuryConstants").AttachmentMaxLimit)]).toString());b("FBLogger")("messenger_upload_file").warn("Attachment limit reached");return a}for(var e=0;e<d.length;e++){var f=d[e];b("ChatFileUploadLoggingUtils").log(f);if(f.size>b("MercuryConstants").AttachmentMaxSize){f=b("MercuryExperimentUtils").getMaxAttachmentSizeExceededDialog();i(g._("The file you have selected is too large").toString(),b("gkx")("1147754")?g._("The file you have selected is too large. The maximum size is 75MB").toString():f);b("FBLogger")("messenger_upload_file").warn("Uploading file is too large");return a}}for(var f=0;f<d.length;f++){e=d[f];var h=l();a=k(a,c,h,e)}return a}function k(a,c,d,e){return a.withMutations(function(a){a.get(c)||a.set(c,new(b("FantaTypeFileUploader"))());var f=a.get(c);a.set(c,f.setIn(["uploadedFiles",d],new(b("FantaTypeFileUploaderFile"))({file:e,id:d,startTime:Date.now()})))})}function l(){return"upload_"+b("PhotosUploadID").getNewID()}e.exports=new a()}),null);