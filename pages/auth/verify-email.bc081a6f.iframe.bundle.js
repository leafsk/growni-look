(window.webpackJsonp=window.webpackJsonp||[]).push([[438],{3364:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_vue_docgen_loader_lib_index_js_ref_9_node_modules_storybook_vue_node_modules_ts_loader_index_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_22_0_node_modules_ts_loader_index_js_ref_22_1_node_modules_nuxt_components_dist_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_email_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3365),_node_modules_vue_docgen_loader_lib_index_js_ref_9_node_modules_storybook_vue_node_modules_ts_loader_index_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_22_0_node_modules_ts_loader_index_js_ref_22_1_node_modules_nuxt_components_dist_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_email_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_vue_docgen_loader_lib_index_js_ref_9_node_modules_storybook_vue_node_modules_ts_loader_index_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_22_0_node_modules_ts_loader_index_js_ref_22_1_node_modules_nuxt_components_dist_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_email_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_docgen_loader_lib_index_js_ref_9_node_modules_storybook_vue_node_modules_ts_loader_index_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_22_0_node_modules_ts_loader_index_js_ref_22_1_node_modules_nuxt_components_dist_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_email_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__)["default"].indexOf(__WEBPACK_IMPORT_KEY__)<0&&function(key){__webpack_require__.d(__webpack_exports__,key,(function(){return _node_modules_vue_docgen_loader_lib_index_js_ref_9_node_modules_storybook_vue_node_modules_ts_loader_index_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_22_0_node_modules_ts_loader_index_js_ref_22_1_node_modules_nuxt_components_dist_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_email_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]}))}(__WEBPACK_IMPORT_KEY__);__webpack_exports__.default=_node_modules_vue_docgen_loader_lib_index_js_ref_9_node_modules_storybook_vue_node_modules_ts_loader_index_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_22_0_node_modules_ts_loader_index_js_ref_22_1_node_modules_nuxt_components_dist_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_email_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a},3365:function(module,exports,__webpack_require__){"use strict";__webpack_require__(10),__webpack_require__(4),__webpack_require__(13),__webpack_require__(5),__webpack_require__(16),__webpack_require__(14),__webpack_require__(17);var _asyncToGenerator=__webpack_require__(55),_defineProperty=__webpack_require__(77);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_require__(39);var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var auth_1=__webpack_require__(195),vue_1=__importDefault(__webpack_require__(7)),vuex_1=__webpack_require__(135),CButton_vue_1=__importDefault(__webpack_require__(81)),CHeading_vue_1=__importDefault(__webpack_require__(132)),firebase_1=__webpack_require__(72),getter_types_1=__webpack_require__(122);exports.default=vue_1.default.extend({components:{CButton:CButton_vue_1.default,CHeading:CHeading_vue_1.default},data:function data(){return{state:"idle"}},computed:_objectSpread(_objectSpread({},(0,vuex_1.mapGetters)([getter_types_1.APPLICATION_USER_PROFILE])),{},{authenticationEmail:function authenticationEmail(){var _a;return(null===(_a=firebase_1.auth.currentUser)||void 0===_a?void 0:_a.email)||"-"},isLoading:function isLoading(){return"loading"===this.state},isDone:function isDone(){return"done"===this.state}}),methods:{resendVerificationMail:function resendVerificationMail(){var _this=this;return _asyncToGenerator(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.prev=0,_this.state="loading",_context.next=4,(0,auth_1.sendEmailVerification)(firebase_1.auth.currentUser);case 4:_this.state="done",_context.next=10;break;case 7:_context.prev=7,_context.t0=_context.catch(0),_this.state="error";case 10:case"end":return _context.stop()}}),_callee,null,[[0,7]])})))()}}})},3805:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return render})),__webpack_require__.d(__webpack_exports__,"b",(function(){return staticRenderFns}));var render=function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",[_c("div",{staticClass:"lg:w-1/2 navbar:text-center mx-auto"},[_c("CHeading",{attrs:{variant:"2"}},[_vm._v("Čakáme na overenie emailu")]),_vm._v(" "),_c("p",[_vm._v("\n            Na emailovú adresu\n            "),_c("strong",[_vm._v(_vm._s(_vm.authenticationEmail))]),_vm._v(" bol odoslaný\n            overovací link. Pre pokračovanie je potrebné na neho kliknúť.\n        ")]),_vm._v(" "),_c("p",[_vm._v("\n            Ak email nie je správny,\n            "),_c("nuxt-link",{staticClass:"link",attrs:{to:{name:"auth-create-account"}}},[_c("strong",[_vm._v("zaregistruj sa")])]),_vm._v("\n            ešte raz.\n        ")],1),_vm._v(" "),_c("CButton",{attrs:{disabled:_vm.isDone||_vm.isLoading,loading:_vm.isLoading},on:{click:_vm.resendVerificationMail}},[_vm.isLoading?[_vm._v(" Odosiela sa ")]:_vm.isDone?[_vm._v(" Odoslané ")]:[_vm._v(" Znovu odoslať overovací link ")]],2)],1)])},staticRenderFns=[]},3905:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _verify_email_vue_vue_type_template_id_3574941a___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3805),_verify_email_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3364);for(var __WEBPACK_IMPORT_KEY__ in _verify_email_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__)["default"].indexOf(__WEBPACK_IMPORT_KEY__)<0&&function(key){__webpack_require__.d(__webpack_exports__,key,(function(){return _verify_email_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]}))}(__WEBPACK_IMPORT_KEY__);var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(11);const __vuedocgen_export_0=Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.a)(_verify_email_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,_verify_email_vue_vue_type_template_id_3574941a___WEBPACK_IMPORTED_MODULE_0__.a,_verify_email_vue_vue_type_template_id_3574941a___WEBPACK_IMPORTED_MODULE_0__.b,!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0,__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"verify-email",description:"",tags:{}}}}]);