(window.webpackJsonp=window.webpackJsonp||[]).push([[431],{3079:function(module,exports,__webpack_require__){"use strict";var _asyncToGenerator=__webpack_require__(55);__webpack_require__(39),__webpack_require__(30),__webpack_require__(159),Object.defineProperty(exports,"__esModule",{value:!0}),exports.updateRoles=exports.loadUser=exports.listUsers=void 0;var API_1=__webpack_require__(158);function _listUsers(){return(_listUsers=_asyncToGenerator(regeneratorRuntime.mark((function _callee(_ref){var _ref$page,page,_ref$search,search,_yield$API_1$API$get,data;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _ref$page=_ref.page,page=void 0===_ref$page?1:_ref$page,_ref$search=_ref.search,search=void 0===_ref$search?void 0:_ref$search,_context.next=3,API_1.API.get("admin/users",{params:{page:page,search:search}});case 3:return _yield$API_1$API$get=_context.sent,data=_yield$API_1$API$get.data,_context.abrupt("return",data);case 6:case"end":return _context.stop()}}),_callee)})))).apply(this,arguments)}function _loadUser(){return(_loadUser=_asyncToGenerator(regeneratorRuntime.mark((function _callee2(id){var _yield$API_1$API$get2,data;return regeneratorRuntime.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.next=2,API_1.API.get("admin/users/".concat(id));case 2:return _yield$API_1$API$get2=_context2.sent,data=_yield$API_1$API$get2.data,_context2.abrupt("return",data);case 5:case"end":return _context2.stop()}}),_callee2)})))).apply(this,arguments)}function _updateRoles(){return(_updateRoles=_asyncToGenerator(regeneratorRuntime.mark((function _callee3(id,roles){return regeneratorRuntime.wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return _context3.next=2,API_1.API.put("admin/users/".concat(id),{user:{roles:roles}});case 2:case"end":return _context3.stop()}}),_callee3)})))).apply(this,arguments)}exports.listUsers=function listUsers(_x){return _listUsers.apply(this,arguments)},exports.loadUser=function loadUser(_x2){return _loadUser.apply(this,arguments)},exports.updateRoles=function updateRoles(_x3,_x4){return _updateRoles.apply(this,arguments)}},3410:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_vue_docgen_loader_lib_index_js_ref_9_node_modules_storybook_vue_node_modules_ts_loader_index_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_22_0_node_modules_ts_loader_index_js_ref_22_1_node_modules_nuxt_components_dist_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3411),_node_modules_vue_docgen_loader_lib_index_js_ref_9_node_modules_storybook_vue_node_modules_ts_loader_index_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_22_0_node_modules_ts_loader_index_js_ref_22_1_node_modules_nuxt_components_dist_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_vue_docgen_loader_lib_index_js_ref_9_node_modules_storybook_vue_node_modules_ts_loader_index_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_22_0_node_modules_ts_loader_index_js_ref_22_1_node_modules_nuxt_components_dist_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_docgen_loader_lib_index_js_ref_9_node_modules_storybook_vue_node_modules_ts_loader_index_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_22_0_node_modules_ts_loader_index_js_ref_22_1_node_modules_nuxt_components_dist_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__)["default"].indexOf(__WEBPACK_IMPORT_KEY__)<0&&function(key){__webpack_require__.d(__webpack_exports__,key,(function(){return _node_modules_vue_docgen_loader_lib_index_js_ref_9_node_modules_storybook_vue_node_modules_ts_loader_index_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_22_0_node_modules_ts_loader_index_js_ref_22_1_node_modules_nuxt_components_dist_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]}))}(__WEBPACK_IMPORT_KEY__);__webpack_exports__.default=_node_modules_vue_docgen_loader_lib_index_js_ref_9_node_modules_storybook_vue_node_modules_ts_loader_index_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_22_0_node_modules_ts_loader_index_js_ref_22_1_node_modules_nuxt_components_dist_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a},3411:function(module,exports,__webpack_require__){"use strict";var _asyncToGenerator=__webpack_require__(55);__webpack_require__(42),__webpack_require__(44),__webpack_require__(136),__webpack_require__(39);var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k),Object.defineProperty(o,k2,{enumerable:!0,get:function get(){return m[k]}})}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.prototype.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var vue_1=__importDefault(__webpack_require__(7)),User_1=__webpack_require__(696),CButton_vue_1=__importDefault(__webpack_require__(81)),CFormGroup_vue_1=__importDefault(__webpack_require__(516)),CSpinner_vue_1=__importDefault(__webpack_require__(521)),UsersService=__importStar(__webpack_require__(3079));exports.default=vue_1.default.extend({components:{CButton:CButton_vue_1.default,CFormGroup:CFormGroup_vue_1.default,CSpinner:CSpinner_vue_1.default},layout:"admin",data:function data(){return{user:void 0,isSubmitting:!1}},fetch:function fetch(){var _this=this;return _asyncToGenerator(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,UsersService.loadUser(_this.userId);case 2:_this.user=_context.sent;case 3:case"end":return _context.stop()}}),_callee)})))()},computed:{userId:function userId(){return String(this.$route.params.id)},isAdmin:function isAdmin(){var _a,_b;return null===(_b=null===(_a=this.user)||void 0===_a?void 0:_a.roles)||void 0===_b?void 0:_b.includes(User_1.UserRoles.Admin)}},methods:{saveRoles:function saveRoles(){var _this2=this;return _asyncToGenerator(regeneratorRuntime.mark((function _callee2(){return regeneratorRuntime.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _this2.isSubmitting=!0,_context2.prev=1,_context2.next=4,UsersService.updateRoles(_this2.userId,_this2.isAdmin?[User_1.UserRoles.Admin]:[]);case 4:_context2.next=10;break;case 6:_context2.prev=6,_context2.t0=_context2.catch(1),console.error("saveRoles",_context2.t0),_this2.isSubmitting=!1;case 10:setTimeout((function(){_this2.$router.push({name:"admin-users"})}),1e3);case 11:case"end":return _context2.stop()}}),_callee2,null,[[1,6]])})))()}}})},3823:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return render})),__webpack_require__.d(__webpack_exports__,"b",(function(){return staticRenderFns}));var render=function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"max-w-2xl"},[_c("portal",{attrs:{to:"title"}},[_c("nuxt-link",{staticClass:"font-normal",attrs:{to:{name:"admin-users"}}},[_vm._v("\n            Zoznam užívateľov\n        ")]),_vm._v("\n        » "),_vm.user?_c("span",[_vm._v(_vm._s(_vm.user.contactEmail))]):_vm._e()],1),_vm._v(" "),_vm.$fetchState.pending?_c("div",[_c("CSpinner")],1):_vm.user?_c("div",[_c("CFormGroup",{attrs:{label:"Užívateľské role"}},[_c("label",{staticClass:"flex items-center"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.isAdmin,expression:"isAdmin"}],staticClass:"input mr-3",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.isAdmin)?_vm._i(_vm.isAdmin,null)>-1:_vm.isAdmin},on:{change:function($event){var $$a=_vm.isAdmin,$$el=$event.target,$$c=!!$$el.checked;if(Array.isArray($$a)){var $$i=_vm._i($$a,null);$$el.checked?$$i<0&&(_vm.isAdmin=$$a.concat([null])):$$i>-1&&(_vm.isAdmin=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}else _vm.isAdmin=$$c}}}),_vm._v("\n                Admin\n            ")])]),_vm._v(" "),_c("div",{staticClass:"mt-12"},[_c("CButton",{attrs:{disabled:_vm.isSubmitting,size:"large",variant:"primary"},on:{click:function($event){return _vm.saveRoles()}}},[_vm._v("\n                Uložiť role\n            ")])],1)],1):_vm._e()],1)},staticRenderFns=[]},3923:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _edit_vue_vue_type_template_id_61fe35b6___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3823),_edit_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3410);for(var __WEBPACK_IMPORT_KEY__ in _edit_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__)["default"].indexOf(__WEBPACK_IMPORT_KEY__)<0&&function(key){__webpack_require__.d(__webpack_exports__,key,(function(){return _edit_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]}))}(__WEBPACK_IMPORT_KEY__);var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(11);const __vuedocgen_export_0=Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.a)(_edit_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,_edit_vue_vue_type_template_id_61fe35b6___WEBPACK_IMPORTED_MODULE_0__.a,_edit_vue_vue_type_template_id_61fe35b6___WEBPACK_IMPORTED_MODULE_0__.b,!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0,__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"edit",description:"",tags:{}}}}]);