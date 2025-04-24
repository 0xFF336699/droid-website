(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[587],{

/***/ 43932:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/project-editor",
      function () {
        return __webpack_require__(22147);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 50497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  j: () => (/* binding */ actionListGroups),
  v: () => (/* binding */ initActionListGroups)
});

// EXTERNAL MODULE: ../../libs/app/static/dist/src/utils/router-utils.js
var router_utils = __webpack_require__(22938);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/is-in-android.js
var is_in_android = __webpack_require__(39561);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/AutoWebViewJs.js
var AutoWebViewJs = __webpack_require__(77758);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/androidDispatchers.js
var androidDispatchers = __webpack_require__(18856);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/scripts/window/windowUtils.js
var windowUtils = __webpack_require__(95536);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/htmls/accessibility-info-buttons/accessibility-info-buttons.js
var accessibility_info_buttons = __webpack_require__(49365);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/actions/a11y/node-execute/node-execute.js + 122 modules
var node_execute = __webpack_require__(59840);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/index.js
var src = __webpack_require__(15751);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/events/projectEventUtils.js
var projectEventUtils = __webpack_require__(26841);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/core/project-member-type.js
var project_member_type = __webpack_require__(27458);
// EXTERNAL MODULE: ./src/components/trigger-list-action-list-common/ITriggerList-IActionList-common.intf.tsx
var ITriggerList_IActionList_common_intf = __webpack_require__(33914);
// EXTERNAL MODULE: __barrel_optimize__?names=ulid!=!../../node_modules/.pnpm/ulid@2.3.0/node_modules/ulid/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(45396);
;// ./src/components/page/action-list/groups/a11y/node-select/mockA11yNodeInfo.ts
const mockA11yNodeInfo1 = {
    "activeActivity": "com.fanfanlo.droid.MainActivity",
    "pn": "com.fanfanlo.droid.debug",
    "cn": "android.widget.FrameLayout",
    "node": {
        "availableExtraData": [
            "android.view.accessibility.extra.DATA_TEXT_CHARACTER_LOCATION_KEY"
        ],
        "boundsInScreen": {
            "bottom": 733,
            "left": 57,
            "right": 264,
            "top": 631
        },
        "children": [],
        "className": "android.widget.Button",
        "isAccessibilityDataSensitive": false,
        "isAccessibilityFocused": false,
        "isCheckable": false,
        "isChecked": false,
        "isClickable": true,
        "isContentInvalid": false,
        "isContextClickable": false,
        "isDismissable": false,
        "isEditable": false,
        "isEnabled": true,
        "isFocusable": true,
        "isFocused": true,
        "isHeading": false,
        "isImportantForAccessibility": false,
        "isLongClickable": false,
        "isMultiLine": false,
        "isPassword": false,
        "isScreenReaderFocusable": false,
        "isScrollable": false,
        "isSelected": false,
        "isShowingHintText": false,
        "isTextEntryKey": false,
        "isTextSelectable": false,
        "isVisibleToUser": true,
        "text": "选择节点",
        "viewIdResourceName": "a11y-node-select-action-item-df1c",
        "index": 0,
        "listIndex": 24
    }
};
const mockA11yNodeInfo2 = {
    "activeActivity": "com.fanfanlo.droid.MainActivity",
    "pn": "com.fanfanlo.droid.debug",
    "cn": "android.widget.FrameLayout",
    "node": {
        "availableExtraData": [
            "android.view.accessibility.extra.DATA_TEXT_CHARACTER_LOCATION_KEY"
        ],
        "boundsInScreen": {
            "bottom": 1258,
            "left": 60,
            "right": 467,
            "top": 1186
        },
        "children": [],
        "className": "android.widget.TextView",
        "isAccessibilityDataSensitive": false,
        "isAccessibilityFocused": false,
        "isCheckable": false,
        "isChecked": false,
        "isClickable": false,
        "isContentInvalid": false,
        "isContextClickable": false,
        "isDismissable": false,
        "isEditable": false,
        "isEnabled": true,
        "isFocusable": false,
        "isFocused": false,
        "isHeading": false,
        "isImportantForAccessibility": false,
        "isLongClickable": false,
        "isMultiLine": false,
        "isPassword": false,
        "isScreenReaderFocusable": false,
        "isScrollable": false,
        "isSelected": false,
        "isShowingHintText": false,
        "isTextEntryKey": false,
        "isTextSelectable": false,
        "isVisibleToUser": true,
        "text": "动作组",
        "index": 15,
        "listIndex": 40
    }
};
const mockA11yNodeInfoList = [
    mockA11yNodeInfo1,
    mockA11yNodeInfo2
];
function getRandomMockA11yNodeInfo() {
    return mockA11yNodeInfoList[parseInt((Math.random() * mockA11yNodeInfoList.length).toString())];
}

// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/proxyWatch.js
var proxyWatch = __webpack_require__(23026);
;// ./src/components/page/action-list/groups/a11y/node-select/node-execute-select.tsx







const a11yNodeSelectActionItem = {
    id: "a11y-node-select-action-item-df1c",
    i18nNs: "homepage/components/page/action-list/groups/a11y/node-select/content",
    nameKey: "content.name",
    group: "a11yNodeSelectActionItem.group",
    descriptionKey: "content.description",
    type: "action",
    LinkRender: (0,ITriggerList_IActionList_common_intf/* createActionOrTriggerButtonRender */.cI)(onAddSelect)
};
node_execute/* actionA11yNodeExecuteUtils */.p.onClickChange = onChangeSelect;
async function onSelect() {
    return new Promise((resolve)=>{
        if (!is_in_android/* isRealInAndroid */.nd) {
            return resolve(getRandomMockA11yNodeInfo());
        }
        const eventType = "a11yNodeSelectActionItem";
        const listenIndex = AutoWebViewJs/* autoWebViewJs */.yx.shellListen(androidDispatchers/* androidDispatchers */.m.WebViewJsDispatcher.name, eventType, eventType, false, onSelectNode);
        function onSelectNode(s) {
            const info = JSON.parse(s);
            console.log('fffffffffffffff', s);
            windowUtils/* windowUtils */.q.exitWindowById(windowId);
            AutoWebViewJs/* autoWebViewJs */.yx.shellRemoveListen(androidDispatchers/* androidDispatchers */.m.WebViewJsDispatcher.name, listenIndex);
            resolve(info);
        }
        const windowId = (0,index_esm/* ulid */.Z0)();
        (0,accessibility_info_buttons/* openHtmlShowA11yNodeInfoButton */.d)(eventType, windowId);
    });
}
async function onAddSelect(param) {
    let { query, router } = param;
    const nowPath = router.pathname;
    const info = await onSelect();
    const action = node_execute/* actionA11yNodeExecuteUtils */.p.mergeDataToDefultData({});
    action.javaData.info = info;
    const res = (0,src.getTriggerOrActionListPageParams)(query);
    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.add, {
        data: action,
        projectMemberType: project_member_type/* ProjectMemberType */.K.actionGroup,
        projectInfo: res.data
    });
    router_utils/* routerUtils */.V.checkToPath(router, nowPath, query.backPath || "", 1);
    AutoWebViewJs/* autoWebViewJs */.yx.openSelfByPackage();
}
async function onChangeSelect(param) {
    let { query, onDataSelectedEventType } = param;
    console.log('lllllllllllllllllllllllllll2223333');
    const info = await onSelect();
    // onJavaDataChangeDataSelect?.(info)
    const res = (0,src.getTriggerOrActionListPageParams)(query);
    if (onDataSelectedEventType && res.data.action) {
        console.log('fffffffffffrom event type ');
        (0,proxyWatch/* getProxyDispatcher */.Ax)(res.data.action).dispatch(onDataSelectedEventType, info);
        return;
    }
    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.updateJavaData, {
        data: {
            info
        },
        projectMemberType: project_member_type/* ProjectMemberType */.K.action,
        projectInfo: res.data
    });
    AutoWebViewJs/* autoWebViewJs */.yx.openSelfByPackage();
}

;// ./src/components/page/action-list/groups/a11y/a11y-group.ts

const a11yGroup = {
    i18nNs: "homepage/components/page/action-list/groups/a11y/content",
    nameKey: "content.name",
    descriptionKey: "content.description",
    items: [
        a11yNodeSelectActionItem
    ]
};

// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/actions/app/action-open-app/IActionOpenApp.inft.js + 2 modules
var IActionOpenApp_inft = __webpack_require__(21725);
;// ./src/components/page/action-list/groups/app/app-select/app-select.tsx


// http://192.168.177.180:3000/locales/homepage/components/page/action-list/groups/app/zh-CN/app-select.json?v=1.0.1
// apps\homepage\public\locales\homepage\components\page\action-list\groups\app\app-select\zh-CN\content.json
// 明天早上在这里注入actionType，继续设计，似乎openApp可以放到一个map里处理，将来更新字段多了，也可以有个分流
// 在选择app的页面里应该是通过actionType找到一个函数，给这个函数注入被选择的app就行，这样的话以后安卓手机接收消息转发等也可以用选择app的页面了
// 这个名字似乎叫openApp更合适
// id注入设计的不合理
const selectAppActionItem = {
    id: "selectAppActionItem-7537eb25-586d-4178-9d9b-b817706a4c6b",
    i18nNs: "homepage/components/page/action-list/groups/app/app-select/content",
    nameKey: "content.name",
    group: "selectAppActionItem.group",
    descriptionKey: "content.description",
    type: "page",
    LinkRender: (0,ITriggerList_IActionList_common_intf/* createActionOrTriggerListLinkRender */.IS)("/app-selector", "selectAppActionItem-7537eb25-586d-4178-9d9b-b817706a4c6b", {
        actionType: IActionOpenApp_inft/* actionOpenAppUtils */.F.type
    })
};

// EXTERNAL MODULE: ../../libs/droid/android/dist/src/htmls/PnAnInfoWindow.js + 1 modules
var PnAnInfoWindow = __webpack_require__(78725);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/actions/app/to-app-main-page/IToAppMainPage.intf.js + 1 modules
var IToAppMainPage_intf = __webpack_require__(77545);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/utils/stringUtils.js
var stringUtils = __webpack_require__(21858);
;// ./src/components/page/action-list/groups/app/to-app-main-page/to-app-main-page.tsx




const toAppMainPageActionItem = {
    id: "to-app-main-page-action-item-df1c",
    i18nNs: "homepage/components/page/action-list/groups/app/to-app-main-page/content",
    nameKey: "content.name",
    group: "toAppMainPageActionItem.group",
    descriptionKey: "content.description",
    type: "action",
    LinkRender: (0,ITriggerList_IActionList_common_intf/* createActionOrTriggerButtonRender */.cI)(to_app_main_page_onAddSelect)
};
IToAppMainPage_intf/* actionToAppMainPageUtils */.w.onClickChange = to_app_main_page_onChangeSelect;
async function to_app_main_page_onSelect() {
    let info;
    if (is_in_android/* isRealInAndroid */.nd) {
        info = await (0,PnAnInfoWindow/* openPnAnInfoWindow */.U)(true);
    } else {
        info = {
            pn: "".concat((0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5), ".").concat((0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5), ".").concat((0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5)),
            an: (0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5)
        };
    }
    // console.log('info1=', info)
    return info;
}
async function to_app_main_page_onAddSelect(param) {
    let { query } = param;
    const info = await to_app_main_page_onSelect();
    const res = (0,src.getTriggerOrActionListPageParams)(query);
    const action = IToAppMainPage_intf/* actionToAppMainPageUtils */.w.mergeDataToDefultData({
        javaData: {
            pn: info.pn,
            an: info.an
        }
    });
    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.add, {
        data: action,
        projectMemberType: project_member_type/* ProjectMemberType */.K.actionGroup,
        projectInfo: res.data
    });
    window.history.back();
    AutoWebViewJs/* autoWebViewJs */.yx.openSelfByPackage();
}
async function to_app_main_page_onChangeSelect(param) {
    let { query } = param;
    const info = await to_app_main_page_onSelect();
    const res = (0,src.getTriggerOrActionListPageParams)(query);
    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.updateJavaData, {
        data: info,
        projectMemberType: project_member_type/* ProjectMemberType */.K.action,
        projectInfo: res.data
    });
    AutoWebViewJs/* autoWebViewJs */.yx.openSelfByPackage();
}

;// ./src/components/page/action-list/groups/app/app-group.ts


const appGroup = {
    i18nNs: "homepage/components/page/action-list/groups/app/content",
    nameKey: "content.name",
    descriptionKey: "content.description",
    items: [
        selectAppActionItem,
        toAppMainPageActionItem
    ]
};

;// ./src/components/page/action-list/action.data.ts


const actionListGroups = [
    appGroup,
    a11yGroup
];
async function initActionListGroups() {
    actionListGroups;
}


/***/ }),

/***/ 20017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ initTriggerListGroups),
  R: () => (/* binding */ triggerListGroups)
});

// EXTERNAL MODULE: ../../libs/app/static/dist/src/index.js
var src = __webpack_require__(83421);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/index.js
var dist_src = __webpack_require__(15751);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/triggers/time/timeout/ITriggerTimeout.inft.js + 2 modules
var ITriggerTimeout_inft = __webpack_require__(72028);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/core/project-member-type.js
var project_member_type = __webpack_require__(27458);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/events/projectEventUtils.js
var projectEventUtils = __webpack_require__(26841);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/utils/throw-trace-error.js
var throw_trace_error = __webpack_require__(91239);
// EXTERNAL MODULE: ./src/components/trigger-list-action-list-common/ITriggerList-IActionList-common.intf.tsx
var ITriggerList_IActionList_common_intf = __webpack_require__(33914);
;// ./src/components/page/trigger-list/groups/time/timeout/timeout.tsx





const timeoutTriggerItem = {
    id: "timeout-trigger-item-ce8c",
    i18nNs: "homepage/components/page/trigger-list/groups/time/timeout/content",
    nameKey: "content.name",
    group: "timeoutTriggerItem.group",
    descriptionKey: "content.description",
    type: "trigger",
    LinkRender: (0,ITriggerList_IActionList_common_intf/* createActionOrTriggerButtonRender */.cI)(onSelect)
};
function onSelect(param) {
    let { query, item } = param;
    const res = (0,dist_src.getTriggerOrActionListPageParams)(query);
    switch(query.type){
        case src.ActionOrTriggerListTypeEnum.addAction:
            const trigger = ITriggerTimeout_inft/* triggerTimeoutUtils */.V.createDefultData();
            if (!res.data.triggerGroup) {
                return (0,throw_trace_error/* throwTraceError */.w)('triggerGroup is not found', query);
            }
            projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.add, {
                projectMemberType: project_member_type/* ProjectMemberType */.K.triggerGroup,
                data: trigger,
                projectInfo: res.data
            });
            // res.data.triggerGroup.list.push(trigger)
            // router.back()
            window.history.back();
            break;
        case src.ActionOrTriggerListTypeEnum.updateAction:
            break;
    }
}

;// ./src/components/page/trigger-list/groups/time/time-group.ts

const timeGroup = {
    i18nNs: "homepage/components/page/trigger-list/groups/time/content",
    nameKey: "content.name",
    descriptionKey: "content.description",
    items: [
        timeoutTriggerItem
    ]
};

// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/is-in-android.js
var is_in_android = __webpack_require__(39561);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/htmls/PnAnInfoWindow.js + 1 modules
var PnAnInfoWindow = __webpack_require__(78725);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/AutoWebViewJs.js
var AutoWebViewJs = __webpack_require__(77758);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/triggers/app/when-activity-in/ITriggerWhenActivityIn.js + 2 modules
var ITriggerWhenActivityIn = __webpack_require__(88474);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/utils/stringUtils.js
var stringUtils = __webpack_require__(21858);
;// ./src/components/page/trigger-list/groups/app/activity/activity-in.tsx






const activityInItem = {
    id: "activity-in-item-ce8c",
    i18nNs: "homepage/components/page/trigger-list/groups/app/activity/content",
    nameKey: "content.name",
    group: "activityInItem.group",
    descriptionKey: "content.description",
    type: "trigger",
    LinkRender: (0,ITriggerList_IActionList_common_intf/* createActionOrTriggerButtonRender */.cI)(onAddSelect)
};
ITriggerWhenActivityIn/* triggerWhenActivityInUtils */.S.onClickChange = onChangeSelect;
// async function onSelect({query, item}:{query:IActionOrTriggerListPageParams, item:IActionOrTriggerItem}){
//     const res = getTriggerOrActionListPageParams(query)
//     let info:PnAnResultData ;
//     if(isRealInAndroid){
//         info = await openPnAnInfoWindow()
//     }else{
//         info = {
//             pn:`${createRandomEnglishCharacters(Math.floor(Math.random() * 5) + 5)}.${createRandomEnglishCharacters(Math.floor(Math.random() * 5) + 5)}.${createRandomEnglishCharacters(Math.floor(Math.random() * 5) + 5)}`,
//             an:createRandomEnglishCharacters(Math.floor(Math.random() * 5) + 5)
//         }
//     }
//     console.log('info=', info)
//     const trigger = triggerWhenActivityInUtils.mergeDataToDefultData({javaData:{pn:info.pn, an:info.an, cn:info.cn}})
//     projectEventUtils.dispatchEditEvent(projectEventUtils.EditType.add,{
//         data:trigger,
//         projectMemberType:ProjectMemberType.triggerGroup,
//         projectInfo:res.data
//     })
//     window.history.back()
// }
async function activity_in_onSelect() {
    let info;
    if (is_in_android/* isRealInAndroid */.nd) {
        info = await (0,PnAnInfoWindow/* openPnAnInfoWindow */.U)(true);
    } else {
        info = {
            pn: "".concat((0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5), ".").concat((0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5), ".").concat((0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5)),
            an: (0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5),
            cn: (0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5)
        };
    }
    // console.log('info1=', info)
    return info;
}
async function onAddSelect(param) {
    let { query } = param;
    const info = await activity_in_onSelect();
    const res = (0,dist_src.getTriggerOrActionListPageParams)(query);
    const action = ITriggerWhenActivityIn/* triggerWhenActivityInUtils */.S.mergeDataToDefultData({
        javaData: {
            pn: info.pn,
            an: info.an,
            cn: info.cn
        }
    });
    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.add, {
        data: action,
        projectMemberType: project_member_type/* ProjectMemberType */.K.triggerGroup,
        projectInfo: res.data
    });
    console.log('ccccccccccccccall open self');
    AutoWebViewJs/* autoWebViewJs */.yx.openSelfByPackage();
    window.history.back();
}
async function onChangeSelect(param) {
    let { query } = param;
    const info = await activity_in_onSelect();
    const res = (0,dist_src.getTriggerOrActionListPageParams)(query);
    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.updateJavaData, {
        data: info,
        projectMemberType: project_member_type/* ProjectMemberType */.K.trigger,
        projectInfo: res.data
    });
    AutoWebViewJs/* autoWebViewJs */.yx.openSelfByPackage();
}

;// ./src/components/page/trigger-list/groups/app/app-group.ts

const appGroup = {
    i18nNs: "homepage/components/page/trigger-list/groups/app/content",
    nameKey: "content.name",
    descriptionKey: "content.description",
    items: [
        activityInItem
    ]
};

;// ./src/components/page/trigger-list/trigger.data.ts


const triggerListGroups = [
    timeGroup,
    appGroup
];
async function initTriggerListGroups() {
    triggerListGroups;
}


/***/ }),

/***/ 33914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IS: () => (/* binding */ createActionOrTriggerListLinkRender),
/* harmony export */   cI: () => (/* binding */ createActionOrTriggerButtonRender)
/* harmony export */ });
/* unused harmony export ActionOrTriggerListLinkRender */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50612);
/* harmony import */ var _barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94011);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88816);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53757);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);




function ActionOrTriggerListLinkRender(param) {
    let { query, children, pathname, id } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: {
            pathname,
            query
        },
        "data-id": id,
        children: children
    });
}
function createActionOrTriggerListLinkRender(subPath, id, extraQuery) {
    return (param)=>{
        let { query, children, item } = param;
        const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
        const pathname = "".concat(router.pathname).concat(subPath);
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActionOrTriggerListLinkRender, {
            query: {
                ...query,
                ...extraQuery
            },
            pathname: pathname,
            id: id,
            children: children
        });
    };
}
function createActionOrTriggerButtonRender(onSelect) {
    return (param)=>{
        let { query, children, item } = param;
        const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
        function onClick() {
            onSelect({
                query,
                item,
                router
            });
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
            id: item.id,
            "data-id": item.id,
            onClick: onClick,
            children: children
        });
    };
}


/***/ }),

/***/ 22147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProjectEditor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(50612);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/dispatcher/Dispatcher.js
var Dispatcher = __webpack_require__(25065);
;// ../../libs/droid/android/dist/src/android/jsbridge.js


const hasWindow = "object" !== "undefined";
let androidJsGlobalName = "android";
let android = hasWindow ? window[androidJsGlobalName] : "";
const global = hasWindow ? window.global || (window.global = window) : {};
const jsBridgeDispatcher = new Dispatcher/* Dispatcher */.m();
function getWebViewJsId() {
    return android ? android.webViewJsId() : "-1";
}
const listeningMap = {};
let initJsBridgeCalled = false;
function initJsBridge() {
    if (!android) return;
    if (initJsBridgeCalled) return;
    initJsBridgeCalled = true;
    global.onCallJsEvent = function(event) {
        console.log("js bridge global event", JSON.stringify(event));
        if (!event) return;
        try {
            for (const [index, value] of Object.entries(listeningMap)){
                if (value.callbackEventType !== event.type) continue;
                value.fun(event.data);
                if (value.once) {
                    delete listeningMap[index];
                }
            }
            const e = createDispatchEvent(event.data, void 0, void 0, event.type);
            jsBridgeDispatcher.dispatch(event.type, e);
            if (e.result !== void 0) return e.result;
            return "__okkey__";
        } catch (e) {
            console.log("global on call js event error", e);
        }
        return;
    };
}
function webViewJsListen(target, type, callbackEventType, once, fun) {
    if (!android) return -1;
    const index = android == null ? void 0 : android.listen(target, type, callbackEventType, once);
    if (!index) return -1;
    let key = index.toString();
    try {
        key = "".concat(typeof target === "string" ? target : "target", "-").concat(typeof type === "string" ? type : "type", "-").concat(typeof callbackEventType === "string" ? callbackEventType : "callbackEventType", "-").concat(typeof index === "string" ? index : index.toString());
    } catch (e) {
        console.log("listen_fn 2 error", e);
    }
    listeningMap[key] = {
        once,
        fun,
        target,
        type,
        callbackEventType
    };
    return key;
}
function webViewJsRemoveListen(target, index) {
    if (!android) return;
    return android.removeListen(target, index);
} //# sourceMappingURL=jsbridge.js.map

// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/index.js
var src = __webpack_require__(15751);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/storage/storage.js
var storage = __webpack_require__(87696);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/project/IProject.data.js
var IProject_data = __webpack_require__(67835);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/log/Log.js + 37 modules
var Log = __webpack_require__(87825);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/useProxyWatch.js
var useProxyWatch = __webpack_require__(81681);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/utils/debug/object-count-utils.js
var object_count_utils = __webpack_require__(2599);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/proxyWatch.js
var proxyWatch = __webpack_require__(23026);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/parentProxy.js
var parentProxy = __webpack_require__(96421);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/watchUpdates.js
var watchUpdates = __webpack_require__(42590);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(36734);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(38212);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(80740);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(88171);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(22066);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(94011);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(94344);
// EXTERNAL MODULE: __barrel_optimize__?names=useTranslation!=!../../node_modules/.pnpm/react-i18next@15.1.4_i18next@24.1.0_typescript@5.8.2__react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-i18next/dist/es/index.js
var es = __webpack_require__(7843);
;// ../../libs/fanfanlo/dist/src/mui/dialog/EditableText.js





function EditableText(param) {
    let { setText, title, cancelText, saveText, contentText, helperText, minHeight, children } = param;
    const { t } = (0,es/* useTranslation */.Bd)("fanfanlo/mui/dialog/content");
    const [editText, setEditText] = (0,react.useState)("");
    const [isEditing, setIsEditing] = (0,react.useState)(false);
    function handleEdit(s) {
        setEditText(s);
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)("span", {
                style: {
                    cursor: "pointer",
                    width: "100%",
                    textAlign: "center",
                    display: "inline-block",
                    backgroundColor: "",
                    minHeight: minHeight || "1rem"
                },
                onClick: ()=>setIsEditing(true),
                children: /* @__PURE__ */ (0,jsx_runtime.jsx)("span", {
                    children: children || ""
                })
            }),
            isEditing && /* @__PURE__ */ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
                open: isEditing,
                onClose: ()=>setIsEditing(false),
                children: [
                    /* @__PURE__ */ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                        children: title || t("EditableText.title")
                    }),
                    contentText && /* @__PURE__ */ (0,jsx_runtime.jsx)(DialogContent/* default */.A, {
                        children: contentText
                    }),
                    /* @__PURE__ */ (0,jsx_runtime.jsx)(DialogContent/* default */.A, {
                        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                            id: "editable-text",
                            "aria-label": "editable-text",
                            autoFocus: true,
                            required: true,
                            fullWidth: true,
                            helperText,
                            variant: "standard",
                            value: editText,
                            onChange: (e)=>handleEdit(e.target.value)
                        })
                    }),
                    /* @__PURE__ */ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                        children: [
                            /* @__PURE__ */ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                id: "editable-text-cancel",
                                "data-id": "editable-text-cancel",
                                onClick: ()=>setIsEditing(false),
                                children: cancelText || t("EditableText.cancel")
                            }),
                            /* @__PURE__ */ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                id: "editable-text-save",
                                "data-id": "editable-text-save",
                                onClick: ()=>{
                                    setIsEditing(false);
                                    setText(editText);
                                },
                                children: saveText || t("EditableText.save")
                            })
                        ]
                    })
                ]
            })
        ]
    });
} //# sourceMappingURL=EditableText.js.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_rea_jkkhqeqxcwlodflnlfamiwj6gq/node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(60789);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_react@19.0.0__@emotion+styled_cx72376a2dh43jydbaoc57zvxi/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(40614);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_react@19.0.0__@emotion+styled_cx72376a2dh43jydbaoc57zvxi/node_modules/@mui/material/Dialog/Dialog.js + 12 modules
var Dialog_Dialog = __webpack_require__(6048);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_react@19.0.0__@emotion+styled_cx72376a2dh43jydbaoc57zvxi/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(67779);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_react@19.0.0__@emotion+styled_cx72376a2dh43jydbaoc57zvxi/node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(64565);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_react@19.0.0__@emotion+styled_cx72376a2dh43jydbaoc57zvxi/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle_DialogTitle = __webpack_require__(17777);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_react@19.0.0__@emotion+styled_cx72376a2dh43jydbaoc57zvxi/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(96142);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_react@19.0.0__@emotion+styled_cx72376a2dh43jydbaoc57zvxi/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent_DialogContent = __webpack_require__(21239);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_react@19.0.0__@emotion+styled_cx72376a2dh43jydbaoc57zvxi/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions_DialogActions = __webpack_require__(38149);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_react@19.0.0__@emotion+styled_cx72376a2dh43jydbaoc57zvxi/node_modules/@mui/material/Button/Button.js + 3 modules
var Button_Button = __webpack_require__(85364);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.1.7_@babel+core@7.26.0_babel-plugin-macros@3.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.82.0/node_modules/next/router.js
var next_router = __webpack_require__(53757);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/proxyUtils.js
var proxyUtils = __webpack_require__(84116);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/parentWatchProxy.js
var parentWatchProxy = __webpack_require__(38712);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(32537);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
;// ../../libs/droid/project/dist/src/history/projectsHistoryMap.js



const projectsHistoryMap = /* @__PURE__ */ new Map();
function addProjectHistory(history) {
    proxyUtils/* proxyUtils */.o.runPauseProxyFn(()=>{
        history.project = lodash_default().cloneDeep((0,parentWatchProxy/* getProxyTarget */.EL)(history.project));
    });
    const p = history;
    const list = projectsHistoryMap.get(history.project.id);
    if (!list) {
        projectsHistoryMap.set(history.project.id, [
            p
        ]);
        return;
    }
    list.push(p);
}
function getProjectHistory(projectId) {
    return projectsHistoryMap.get(projectId) || [];
}
function removeProjectHistory(projectId) {
    projectsHistoryMap.delete(projectId);
}
function getProjectLastHistory(projectId) {
    const list = getProjectHistory(projectId);
    return list[list.length - 1];
}
function takeProjectSnapshoot(project) {
    const last = getProjectLastHistory(project.id);
    if (last && lodash_default().isEqual(last.project, project)) {
        return false;
    }
    addProjectHistory({
        index: last ? last.index + 1 : 0,
        project,
        date: /* @__PURE__ */ new Date().toISOString()
    });
    return true;
}
function projectHistoryIsChanged(project) {
    const last = getProjectLastHistory(project.id);
    return !last || !_.isEqual(last.project, project);
}
function isSameProjectHistoryId(id, projectId) {
    const last = getProjectLastHistory(projectId);
    return (last == null ? void 0 : last.index) === id;
} //# sourceMappingURL=projectsHistoryMap.js.map

// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/index.js
var dist_src = __webpack_require__(40242);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hot-toast@2.5.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(52591);
;// ../../libs/droid/project/dist/src/project/manager/edit-project-info-utils.js

var __async = (__this, __arguments, generator)=>{
    return new Promise((resolve, reject)=>{
        var fulfilled = (value)=>{
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        };
        var rejected = (value)=>{
            try {
                step(generator.throw(value));
            } catch (e) {
                reject(e);
            }
        };
        var step = (x)=>x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
        step((generator = generator.apply(__this, __arguments)).next());
    });
};



const map = (0,proxyWatch/* toProxy */.I$)({});
const dispatcher = new Dispatcher/* Dispatcher */.m();
const projectSavedEvent = "project-saved";
const editProjectInfoUtils = {
    edit: (project)=>{
        const info = map[project.id] = createProjectEditInfo(project);
        return info;
    },
    getEditInfoById: (id)=>{
        if (map[id]) return map[id];
        const project = storage/* projectStore */.D.findProject(id);
        if (project) return map[id] = createProjectEditInfo(project);
        return null;
    },
    listenProjectSaved: (fn)=>{
        return dispatcher.addListener(projectSavedEvent, fn);
    }
};
function createProjectEditInfo(project) {
    const info = (0,proxyWatch/* toProxy */.I$)({
        project,
        askStay: false,
        giveup: false,
        updated: false,
        historyId: 0,
        testTime: /* @__PURE__ */ new Date().toLocaleString(),
        save: ()=>__async(this, null, function*() {
                info.updated = false;
                info.askStay = false;
                info.giveup = false;
                storage/* projectStore */.D.saveProject(project);
                dispatcher.dispatch(projectSavedEvent, project);
                const s = yield (0,dist_src.loadI18nValue)("droid-project/project/manager/content", "edit-project-info-utils.projectSaved");
                dist/* default */.Ay.success(s);
            })
    });
    return info;
} //# sourceMappingURL=edit-project-info-utils.js.map

;// ../../libs/droid/project/dist/src/project/ui/project/edit-project/contexts.js


const ProjectEditInfoContext = /*#__PURE__*/ (0,react.createContext)({}); //# sourceMappingURL=contexts.js.map

// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/trigger-action/ITriggerAction.intf.js + 2 modules
var ITriggerAction_intf = __webpack_require__(52229);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/utils/IChildToProject.intf.js
var IChildToProject_intf = __webpack_require__(82987);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/dispatcher/throttle.js
var throttle = __webpack_require__(7892);
;// ../../libs/fanfanlo/dist/src/watcher/useWatchListOperation.js




function useWatchListOperation(target) {
    const [list, setList] = (0,react.useState)([
        ...target
    ]);
    const unsub = (0,proxyWatch/* getProxyDispatcher */.Ax)(target).addListener(throttle/* listenAnyWildcard */._l, ()=>{
        setList([
            ...target
        ]);
    });
    (0,react.useEffect)(()=>{
        return ()=>{
            unsub();
        };
    }, []);
    return [
        list,
        unsub
    ];
} //# sourceMappingURL=useWatchListOperation.js.map

;// ../../libs/fanfanlo/dist/src/watcher/updateVersion.js



let count = 0;
const updateVersion_map = /* @__PURE__ */ new WeakMap();
function getUpdateVersion(data) {
    let version = updateVersion_map.get(data) || (0,proxyWatch/* toProxy */.I$)({
        version: ++count,
        count: 0,
        key: "".concat(count, "-0")
    });
    if (!updateVersion_map.has(data)) {
        updateVersion_map.set(data, version);
        const dispatcher = (0,proxyWatch/* getProxyDispatcher */.Ax)(data);
        dispatcher.addListener(throttle/* listenAnyWildcard */._l, (now, old)=>{
            version.count++;
            version.version = ++count;
            version.key = "".concat(version.version, "-").concat(version.count);
        });
    }
    return version;
}
function getUpdateVersionKey(data) {
    return getUpdateVersion(data).key;
} //# sourceMappingURL=updateVersion.js.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_rea_jkkhqeqxcwlodflnlfamiwj6gq/node_modules/@mui/icons-material/esm/Add.js
var Add = __webpack_require__(96062);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_rea_jkkhqeqxcwlodflnlfamiwj6gq/node_modules/@mui/icons-material/esm/Handyman.js
var Handyman = __webpack_require__(63437);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_rea_jkkhqeqxcwlodflnlfamiwj6gq/node_modules/@mui/icons-material/esm/NotificationsNone.js
var NotificationsNone = __webpack_require__(4079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_rea_jkkhqeqxcwlodflnlfamiwj6gq/node_modules/@mui/icons-material/esm/TableRows.js
var TableRows = __webpack_require__(49820);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_react@19.0.0__@emotion+styled_cx72376a2dh43jydbaoc57zvxi/node_modules/@mui/material/Grid2/Grid2.js + 3 modules
var Grid2 = __webpack_require__(17387);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_rea_jkkhqeqxcwlodflnlfamiwj6gq/node_modules/@mui/icons-material/esm/DeleteOutline.js
var DeleteOutline = __webpack_require__(48658);
// EXTERNAL MODULE: ../../libs/app/static/dist/src/index.js
var static_dist_src = __webpack_require__(83421);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_react@19.0.0__@emotion+styled_cx72376a2dh43jydbaoc57zvxi/node_modules/@mui/material/FormGroup/FormGroup.js + 1 modules
var FormGroup = __webpack_require__(91884);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_react@19.0.0__@emotion+styled_cx72376a2dh43jydbaoc57zvxi/node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 1 modules
var FormControlLabel = __webpack_require__(25355);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_react@19.0.0__@emotion+styled_cx72376a2dh43jydbaoc57zvxi/node_modules/@mui/material/Switch/Switch.js + 1 modules
var Switch = __webpack_require__(18668);
;// ../../libs/fanfanlo/dist/src/watcher/useWatchUpdates.js

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __spreadValues = (a, b)=>{
    for(var prop in b || (b = {}))if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)){
        if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
    return a;
};



function useWatchUpdates(target, conf) {
    const [value, setValue] = (0,react.useState)(target);
    (0,react.useEffect)(()=>{
        (0,watchUpdates/* watchUpdates */.c)(target, (info)=>{
            const now = lodash_default().isArray(info.target) ? [
                ...info.target
            ] : info.target;
            setValue(lodash_default().isArray(target) ? [
                ...target
            ] : __spreadValues({}, target));
        }, conf);
    }, []);
    return [
        value
    ];
} //# sourceMappingURL=useWatchUpdates.js.map

// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/mui/dialog/ButtonConfirm.js
var ButtonConfirm = __webpack_require__(58553);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_react@19.0.0__@emotion+styled_cx72376a2dh43jydbaoc57zvxi/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(42623);
;// ../../libs/droid/project/dist/src/project/ui/project/edit-project/components/group/GroupCheck.js







function getProjectDataByGroup(group) {
    let projectData = {};
    switch(group.type){
        case actionGroupType:
            getActionGroupElement(group, "", "", projectData);
            break;
        case triggerGroupType:
            childToProjectDataUtils.triggerGroup.getTriggerGroupElement(group, "", "", projectData);
            break;
        case triggerActionGroupType:
            childToProjectDataUtils.triggerActionGroup.getTriggerActionGroupElement(group, "", "", projectData);
            break;
    }
    return projectData;
}
function Check2(param) {
    let { list, index } = param;
    const logger = new Log/* Log */.tG(false, "Check2_fn");
    logger.isPaused = true;
    logger.log("list=", list);
    const [l] = useWatchUpdates(list);
    const groupCheckList1Context = (0,react.useContext)(src.GroupCheckList1Context);
    function onRemoveClick() {
        groupCheckList1Context.splice(index, 1);
    }
    logger.log("l=", l);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
            container: true,
            children: [
                /* @__PURE__ */ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                    container: true,
                    size: "grow",
                    children: l.map((check, index2)=>/* @__PURE__ */ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(FormGroup/* default */.A, {
                                children: /* @__PURE__ */ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                                    label: index2.toString(),
                                    control: /* @__PURE__ */ (0,jsx_runtime.jsx)(Checkbox/* default */.A, {
                                        "data-id": "group-check-checkbox",
                                        "data-checked": check,
                                        "data-value": check,
                                        checked: check,
                                        onChange: (e)=>{
                                            list[index2] = e.target.checked;
                                        }
                                    })
                                })
                            })
                        }, object_count_utils/* objectCountUtils */._.getNewCountId().toString()))
                }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                    children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ButtonConfirm/* ButtonConfirm */.b, {
                        title: "\u63D0\u9192",
                        onConfirm: onRemoveClick,
                        content: "\u60A8\u8981\u5220\u9664\u6B64\u6761\u6821\u9A8C\u5417\uFF1F",
                        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                            "data-id": "group-check-remove",
                            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(DeleteOutline/* default */.A, {})
                        })
                    })
                })
            ]
        })
    });
}
function Check1(param) {
    let { list } = param;
    const logger = new Log/* Log */.tG(false, "Check1_fn");
    logger.isPaused = true;
    logger.log("Check1 list=", list);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(src.GroupCheckList1Context.Provider, {
        value: list,
        children: list.map((checks2, index)=>/* @__PURE__ */ (0,jsx_runtime.jsx)(Check2, {
                list: list[index],
                index
            }, getUpdateVersionKey(checks2)))
    });
}
function GroupCheck(param) {
    let { group } = param;
    const logger = new Log/* Log */.tG(false, "GroupCheck_fn");
    logger.isPaused = true;
    const [isSequential] = (0,useProxyWatch/* useProxyWatch */.x)(group, "isSequential", group.isSequential);
    const [l] = (0,useProxyWatch/* useProxyWatch */.x)(group, "list", group.list);
    const [list] = useWatchUpdates(l);
    const [listSize] = (0,useProxyWatch/* useProxyWatch */.x)(list, "length", list.length);
    const [c] = (0,useProxyWatch/* useProxyWatch */.x)(group, "checks", group.checks);
    const [checks1] = useWatchUpdates(c);
    function updateChecks2() {
        logger.log("updateChecks2_fn", "listSize=", listSize, group.checks);
        group.checks.forEach((checks2)=>{
            logger.log("updateChecks2_fn", "checks2=", checks2);
            for(let i = checks2.length; i < listSize; i++){
                checks2.push(true);
            }
            checks2.length = listSize;
        });
    }
    (0,react.useEffect)(()=>{
        updateChecks2();
    }, [
        listSize
    ]);
    logger.log("list.length=", list.length);
    if (list.length <= 1 || isSequential) return /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                container: true,
                children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                    children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                        "data-id": "group-add-check-list.875aec4f-5049-426a-a395-0ac0c6666a35",
                        onClick: ()=>{
                            group.checks.push(new Array(listSize).fill(true));
                        },
                        children: "\u6DFB\u52A0\u6821\u9A8C\u7EC4"
                    })
                })
            }),
            /* @__PURE__ */ (0,jsx_runtime.jsx)(Check1, {
                list: group.checks
            })
        ]
    });
} //# sourceMappingURL=GroupCheck.js.map

;// ../../libs/droid/project/dist/src/project/ui/project/edit-project/components/list-page-link/ActionListOrTriggerListPageLink.js

var ActionListOrTriggerListPageLink_defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var ActionListOrTriggerListPageLink_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ActionListOrTriggerListPageLink_hasOwnProp = Object.prototype.hasOwnProperty;
var ActionListOrTriggerListPageLink_propIsEnum = Object.prototype.propertyIsEnumerable;
var ActionListOrTriggerListPageLink_defNormalProp = (obj, key, value)=>key in obj ? ActionListOrTriggerListPageLink_defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var ActionListOrTriggerListPageLink_spreadValues = (a, b)=>{
    for(var prop in b || (b = {}))if (ActionListOrTriggerListPageLink_hasOwnProp.call(b, prop)) ActionListOrTriggerListPageLink_defNormalProp(a, prop, b[prop]);
    if (ActionListOrTriggerListPageLink_getOwnPropSymbols) for (var prop of ActionListOrTriggerListPageLink_getOwnPropSymbols(b)){
        if (ActionListOrTriggerListPageLink_propIsEnum.call(b, prop)) ActionListOrTriggerListPageLink_defNormalProp(a, prop, b[prop]);
    }
    return a;
};
var __spreadProps = (a, b)=>__defProps(a, __getOwnPropDescs(b));



function ActionListOrTriggerListPageLink(param) {
    let { query, attrs, path, btnId, children } = param;
    const router = (0,next_router.useRouter)();
    query.backPath = router.pathname;
    function handleClick() {
        const list = Object.keys(query).map((key)=>[
                key,
                query[key].toString()
            ]);
        const q = new URLSearchParams(list);
        const href = "".concat(path, "?").concat(q.toString());
        router.push(href);
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(Button_Button/* default */.A, __spreadProps(ActionListOrTriggerListPageLink_spreadValues({
        onClick: handleClick
    }, attrs), {
        id: btnId,
        "data-id": btnId,
        children
    }));
} //# sourceMappingURL=ActionListOrTriggerListPageLink.js.map

// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/action/IAction.intf.js
var IAction_intf = __webpack_require__(24048);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Box/Box.js + 2 modules
var Box_Box = __webpack_require__(12066);
;// ../../libs/droid/project/dist/src/project/ui/project/edit-project/trigger-action-group/trigger-action/action-group/action-list/action/Action.js







function Action(param) {
    let { actionData } = param;
    const list = (0,react.useContext)(src.ActionListContext);
    const utils = IAction_intf/* ActionUtilsMap */.Gh[actionData.type];
    function onDeleteComfirmed() {
        const index = list.indexOf(actionData);
        if (index === -1) return;
        list.splice(index, 1);
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        sx: {
            position: "relative",
            padding: "2px",
            marginTop: "2px",
            marginBottom: "2px",
            "&::after": {
                content: '""',
                position: "absolute",
                right: 0,
                top: "5px",
                bottom: "5px",
                borderRight: "1px solid red"
            },
            "&::before": {
                content: '""',
                position: "absolute",
                left: 0,
                top: "5px",
                bottom: "5px",
                borderLeft: "1px solid red"
            }
        },
        children: [
            utils.UI(actionData),
            /* @__PURE__ */ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                sx: {
                    textAlign: "center"
                },
                children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ButtonConfirm/* ButtonConfirm */.b, {
                    title: "\u5220\u9664\u52A8\u4F5C",
                    content: "\u786E\u5B9A\u5220\u9664\u672C\u52A8\u4F5C\u5417\uFF1F",
                    onConfirm: onDeleteComfirmed,
                    children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        id: "del-action-btn",
                        "data-id": "del-action-btn",
                        children: "\u5220\u9664"
                    })
                })
            })
        ]
    });
} //# sourceMappingURL=Action.js.map

;// ../../libs/droid/project/dist/src/project/ui/project/edit-project/trigger-action-group/trigger-action/action-group/action-list/ActionList.js







function ActionList() {
    const actionGroup = (0,react.useContext)(src.ActionGroupContext);
    const [list] = useWatchUpdates(actionGroup.list);
    if (!list || !lodash_default().isArray(list)) {
        console.log("lllllllllllllist is null", actionGroup);
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
        children: actionGroup.list.map((action)=>{
            return /* @__PURE__ */ (0,jsx_runtime.jsx)(Action, {
                actionData: action
            }, getUpdateVersionKey(action));
        })
    });
} //# sourceMappingURL=ActionList.js.map

;// ../../libs/droid/project/dist/src/project/ui/project/edit-project/trigger-action-group/trigger-action/action-group/ActionGroup.js












function ActionGroup(param) {
    let { actionGroup } = param;
    const { t } = (0,dist_src.useTranslation)("droid-project/project/ui/project/edit-project/trigger-action-group/trigger-action/action-group/content");
    const editInfo = (0,react.useContext)(ProjectEditInfoContext);
    const triggerActionGroup = (0,react.useContext)(src.TriggerActionGroupContext);
    const triggerAction = (0,react.useContext)(src.TriggerActionContext);
    const query = {
        projectId: editInfo.project.id,
        triggerActionGroupId: triggerActionGroup.id,
        triggerActionId: triggerAction.id,
        actionGroupId: actionGroup.id,
        type: static_dist_src.ActionOrTriggerListTypeEnum.addAction,
        actionType: ""
    };
    const [isSequential] = (0,useProxyWatch/* useProxyWatch */.x)(actionGroup, "isSequential", actionGroup.isSequential);
    const [listSize] = (0,useProxyWatch/* useProxyWatch */.x)(actionGroup.list, "length", actionGroup.list.length);
    function setIsSequential(value) {
        (0,proxyWatch/* toProxy */.I$)(actionGroup).isSequential = value;
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(src.ActionGroupContext.Provider, {
        value: actionGroup,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(src.ActionListContext.Provider, {
            value: actionGroup.list,
            children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                sx: {
                    border: "2px solid #ccc",
                    padding: "4px"
                },
                children: [
                    /* @__PURE__ */ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                        container: true,
                        sx: {
                            alignItems: "center"
                        },
                        children: [
                            /* @__PURE__ */ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                                size: "grow",
                                children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                    children: t("content.title")
                                })
                            }),
                            /* @__PURE__ */ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                                children: listSize > 1 && /* @__PURE__ */ (0,jsx_runtime.jsx)(FormGroup/* default */.A, {
                                    children: /* @__PURE__ */ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                                        control: /* @__PURE__ */ (0,jsx_runtime.jsx)(Switch/* default */.A, {
                                            checked: isSequential,
                                            "data-id": "action-group-checkbox-is-sequential.122f",
                                            "aria-checked": isSequential,
                                            "data-checked": isSequential,
                                            onChange: (e)=>{
                                                setIsSequential(e.target.checked);
                                            }
                                        }),
                                        label: t("content.sequential")
                                    })
                                })
                            }),
                            /* @__PURE__ */ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                                children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                    children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ActionListOrTriggerListPageLink, {
                                        query,
                                        attrs: (0,IChildToProject_intf/* getActionGroupElement */.q_)(actionGroup),
                                        path: "/action-list",
                                        btnId: "link-router-to-action-list",
                                        children: t("content.list")
                                    })
                                })
                            })
                        ]
                    }),
                    /* @__PURE__ */ (0,jsx_runtime.jsx)(GroupCheck, {
                        group: actionGroup
                    }),
                    /* @__PURE__ */ (0,jsx_runtime.jsx)(ActionList, {})
                ]
            })
        })
    });
} //# sourceMappingURL=ActionGroup.js.map

// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/trigger/ITrigger.intf.js
var ITrigger_intf = __webpack_require__(56700);
;// ../../libs/droid/project/dist/src/project/ui/project/edit-project/trigger-action-group/trigger-action/trigger-group/trigger-list/trigger/Trigger.js








function Trigger(param) {
    let { triggerData } = param;
    const list = (0,react.useContext)(src.TriggerListContext);
    const utils = (0,ITrigger_intf/* getTriggerUtils */.gq)(triggerData.type);
    const onDeleteComfirmed = ()=>{
        const index = list.indexOf((0,proxyWatch/* toProxy */.I$)(triggerData));
        if (index === -1) return;
        (0,proxyWatch/* toProxy */.I$)(list).splice(index, 1);
    };
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(src.TriggerContext.Provider, {
        value: triggerData,
        children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            children: [
                utils.UI(triggerData),
                /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    sx: {
                        textAlign: "center"
                    },
                    children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ButtonConfirm/* ButtonConfirm */.b, {
                        title: "\u5220\u9664\u89E6\u53D1",
                        content: "\u786E\u5B9A\u5220\u9664\u672C\u89E6\u53D1\u5417\uFF1F",
                        onConfirm: onDeleteComfirmed,
                        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                            id: "del-trigger-btn",
                            "data-id": "del-trigger-btn",
                            children: "\u5220\u9664"
                        })
                    })
                })
            ]
        })
    });
} //# sourceMappingURL=Trigger.js.map

;// ../../libs/droid/project/dist/src/project/ui/project/edit-project/trigger-action-group/trigger-action/trigger-group/trigger-list/TriggerList.js







function TriggerList() {
    const triggerGroup = (0,react.useContext)(src.TriggerGroupContext);
    const [l] = useWatchUpdates(triggerGroup.list);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(src.TriggerListContext.Provider, {
        value: triggerGroup.list,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* default */.A, {
            children: triggerGroup.list.map((trigger)=>/* @__PURE__ */ (0,jsx_runtime.jsx)(Trigger, {
                    triggerData: trigger
                }, getUpdateVersion(trigger).version))
        })
    });
} //# sourceMappingURL=TriggerList.js.map

;// ../../libs/droid/project/dist/src/project/ui/project/edit-project/trigger-action-group/trigger-action/trigger-group/TriggerGroup.js












function TriggerGroup(param) {
    let { triggerGroup } = param;
    const { t } = (0,dist_src.useTranslation)("droid-project/project/ui/project/edit-project/trigger-action-group/trigger-action/trigger-group/content");
    const editInfo = (0,react.useContext)(ProjectEditInfoContext);
    const triggerActionGroup = (0,react.useContext)(src.TriggerActionGroupContext);
    const triggerAction = (0,react.useContext)(src.TriggerActionContext);
    const query = {
        projectId: editInfo.project.id,
        triggerActionGroupId: triggerActionGroup.id,
        triggerActionId: triggerAction.id,
        triggerGroupId: triggerGroup.id,
        type: static_dist_src.ActionOrTriggerListTypeEnum.addAction,
        actionType: ""
    };
    const [isSequential] = (0,useProxyWatch/* useProxyWatch */.x)(triggerGroup, "isSequential", triggerGroup.isSequential);
    const [listSize] = (0,useProxyWatch/* useProxyWatch */.x)(triggerGroup.list, "length", triggerGroup.list.length);
    function setIsSequential(value) {
        (0,proxyWatch/* toProxy */.I$)(triggerGroup).isSequential = value;
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(src.TriggerGroupContext.Provider, {
        value: triggerGroup,
        children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                border: "2px solid #a4a737",
                padding: "4px",
                marginBottom: "2px",
                marginTop: "2px"
            },
            children: [
                /* @__PURE__ */ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                    container: true,
                    sx: {
                        alignItems: "center"
                    },
                    children: [
                        /* @__PURE__ */ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            size: "grow",
                            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                children: t("content.title")
                            })
                        }),
                        /* @__PURE__ */ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            children: listSize > 1 && /* @__PURE__ */ (0,jsx_runtime.jsx)(FormGroup/* default */.A, {
                                children: /* @__PURE__ */ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                                    control: /* @__PURE__ */ (0,jsx_runtime.jsx)(Switch/* default */.A, {
                                        checked: isSequential,
                                        "data-id": "trigger-group-checkbox-is-sequential.122f",
                                        "aria-checked": isSequential,
                                        "data-checked": isSequential,
                                        onChange: (e)=>{
                                            setIsSequential(e.target.checked);
                                        }
                                    }),
                                    label: t("content.sequential")
                                })
                            })
                        }),
                        /* @__PURE__ */ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ActionListOrTriggerListPageLink, {
                                    query,
                                    attrs: IChildToProject_intf/* childToProjectDataUtils */.mR.triggerGroup.getTriggerGroupElement(triggerGroup),
                                    path: "/trigger-list",
                                    btnId: "link-router-to-trigger-list",
                                    children: t("content.list")
                                })
                            })
                        })
                    ]
                }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)(GroupCheck, {
                    group: triggerGroup
                }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)(TriggerList, {})
            ]
        })
    });
} //# sourceMappingURL=TriggerGroup.js.map

;// ../../libs/droid/project/dist/src/project/ui/project/edit-project/trigger-action-group/trigger-action/TriggerAction.js












function TriggerAction(param) {
    let { triggerAction } = param;
    const [name, setName] = (0,react.useState)(triggerAction.name || "\u672A\u547D\u540D");
    function handleNameChange(name2) {
        triggerAction.name = name2;
        setName(name2);
    }
    function handleDelete() {
        const parent = (0,parentProxy/* getParentWatchProxy */.SZ)(triggerAction);
        if (!parent) return;
        parent.splice(parent.indexOf(triggerAction), 1);
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(src.TriggerActionContext.Provider, {
        value: triggerAction,
        children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                border: "2px solid #02450e",
                padding: "4px"
            },
            "data-id-trigger-action": triggerAction.id,
            children: [
                /* @__PURE__ */ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                    sx: {
                        alignItems: "center"
                    },
                    container: true,
                    children: [
                        /* @__PURE__ */ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                            children: [
                                /* @__PURE__ */ (0,jsx_runtime.jsx)(NotificationsNone/* default */.A, {}),
                                /* @__PURE__ */ (0,jsx_runtime.jsx)(Handyman/* default */.A, {})
                            ]
                        }),
                        /* @__PURE__ */ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            size: "grow",
                            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(EditableText, {
                                setText: handleNameChange,
                                children: /* @__PURE__ */ (0,jsx_runtime.jsx)("span", {
                                    "data-id": "rename-trigger-action-btn.a4c6",
                                    children: name
                                })
                            })
                        }),
                        /* @__PURE__ */ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ButtonConfirm/* ButtonConfirm */.b, {
                                title: "\u63D0\u793A",
                                content: "\u786E\u8BA4\u8981\u5220\u9664\u8FD9\u6761\u89E6\u53D1\u5668\u548C\u52A8\u4F5C\u5417",
                                onConfirm: handleDelete,
                                children: /* @__PURE__ */ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                    "data-id": "del-trigger-action-btn",
                                    children: /* @__PURE__ */ (0,jsx_runtime.jsx)(DeleteOutline/* default */.A, {})
                                })
                            })
                        })
                    ]
                }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)(TriggerGroup, {
                    triggerGroup: triggerAction.triggerGroup
                }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)(ActionGroup, {
                    actionGroup: triggerAction.actionGroup
                })
            ]
        })
    });
} //# sourceMappingURL=TriggerAction.js.map

;// ../../libs/droid/project/dist/src/project/ui/project/edit-project/trigger-action-group/TriggerActionGroup.js

var TriggerActionGroup_defProp = Object.defineProperty;
var TriggerActionGroup_defProps = Object.defineProperties;
var TriggerActionGroup_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var TriggerActionGroup_getOwnPropSymbols = Object.getOwnPropertySymbols;
var TriggerActionGroup_hasOwnProp = Object.prototype.hasOwnProperty;
var TriggerActionGroup_propIsEnum = Object.prototype.propertyIsEnumerable;
var TriggerActionGroup_defNormalProp = (obj, key, value)=>key in obj ? TriggerActionGroup_defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var TriggerActionGroup_spreadValues = (a, b)=>{
    for(var prop in b || (b = {}))if (TriggerActionGroup_hasOwnProp.call(b, prop)) TriggerActionGroup_defNormalProp(a, prop, b[prop]);
    if (TriggerActionGroup_getOwnPropSymbols) for (var prop of TriggerActionGroup_getOwnPropSymbols(b)){
        if (TriggerActionGroup_propIsEnum.call(b, prop)) TriggerActionGroup_defNormalProp(a, prop, b[prop]);
    }
    return a;
};
var TriggerActionGroup_spreadProps = (a, b)=>TriggerActionGroup_defProps(a, TriggerActionGroup_getOwnPropDescs(b));












function TriggerActionGroup() {
    const { t } = (0,es/* useTranslation */.Bd)("droid-project/project/ui/project/edit-project/trigger-action-group/content");
    const editInfo = (0,react.useContext)(ProjectEditInfoContext);
    const [groupName, setGroupName] = (0,react.useState)(editInfo.project.triggerActionGroup.name || t("TriggerActionGroup.unamed"));
    const [list] = useWatchListOperation(editInfo.project.triggerActionGroup.list);
    function handleGroupNameChange(name) {
        editInfo.project.triggerActionGroup.name = name;
        setGroupName(name || t("TriggerActionGroup.unamed"));
    }
    const triggerActionGroup = editInfo.project.triggerActionGroup;
    function addTriggerAction() {
        const newTriggerAction = (0,ITriggerAction_intf/* createDefultTriggerAction */.n)();
        (0,parentProxy/* toParent */.sd)(triggerActionGroup).list.push(newTriggerAction);
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(src.TriggerActionGroupContext.Provider, {
        value: triggerActionGroup,
        children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* default */.A, TriggerActionGroup_spreadProps(TriggerActionGroup_spreadValues({
            sx: {
                border: "2px solid rgb(217, 217, 217)",
                padding: "4px"
            }
        }, IChildToProject_intf/* childToProjectDataUtils */.mR.triggerActionGroup.getTriggerActionGroupElementByProp(triggerActionGroup.list)), {
            "data-id-trigger-action-group": triggerActionGroup.id,
            children: [
                /* @__PURE__ */ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                    container: true,
                    sx: {
                        alignItems: "center"
                    },
                    children: [
                        /* @__PURE__ */ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                            container: true,
                            sx: {
                                alignItems: "center"
                            },
                            children: [
                                /* @__PURE__ */ (0,jsx_runtime.jsx)(NotificationsNone/* default */.A, {}),
                                /* @__PURE__ */ (0,jsx_runtime.jsx)(Handyman/* default */.A, {}),
                                /* @__PURE__ */ (0,jsx_runtime.jsx)(TableRows/* default */.A, {})
                            ]
                        }),
                        /* @__PURE__ */ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            size: "grow",
                            sx: {
                                alignItems: "center",
                                width: "100%"
                            },
                            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                sx: {
                                    width: "100%"
                                },
                                children: /* @__PURE__ */ (0,jsx_runtime.jsx)(EditableText, {
                                    setText: handleGroupNameChange,
                                    children: /* @__PURE__ */ (0,jsx_runtime.jsx)("span", {
                                        "data-id": "rename-groupname-btn-a322",
                                        style: {
                                            backgroundColor: "red"
                                        },
                                        children: groupName
                                    })
                                })
                            })
                        }),
                        /* @__PURE__ */ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                children: /* @__PURE__ */ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                    "data-id": "add-trigger-action-btn.22fab779-75e2-4e34-82f4-64667e7fc017",
                                    onClick: addTriggerAction,
                                    children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Add/* default */.A, {})
                                })
                            })
                        })
                    ]
                }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    children: list.map((ta, index)=>{
                        const triggerAction = triggerActionGroup.list[index];
                        return /* @__PURE__ */ (0,jsx_runtime.jsx)(TriggerAction, {
                            triggerAction
                        }, getUpdateVersion(triggerAction).version);
                    })
                })
            ]
        }))
    });
} //# sourceMappingURL=TriggerActionGroup.js.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_rea_jkkhqeqxcwlodflnlfamiwj6gq/node_modules/@mui/icons-material/esm/Save.js
var Save = __webpack_require__(34552);
;// ../../libs/droid/project/dist/src/project/ui/project/edit-project/EditProject.js
















const BootstrapDialog = (0,styled/* default */.Ay)(Dialog_Dialog/* default */.A)((param)=>{
    let { theme } = param;
    return {
        "& .MuiDialogContent-root": {
            padding: theme.spacing(2)
        },
        "& .MuiDialogActions-root": {
            padding: theme.spacing(1)
        }
    };
});
function ProjectContent() {
    const project = (0,react.useContext)(src.ProjectContext);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* default */.A, {
        "data-id-project": project.id,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Paper/* default */.A, {
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(TriggerActionGroup, {})
        })
    });
}
function StayAlert() {
    const editInfo = (0,react.useContext)(ProjectEditInfoContext);
    const logger = Log/* Log */.tG.createCountedLogger(false, "project-editor-effect");
    const [askStay] = (0,useProxyWatch/* useProxyWatch */.x)(editInfo, "askStay", editInfo.askStay);
    const router = (0,next_router.useRouter)();
    function toLeave() {
        editInfo.askStay = false;
        editInfo.giveup = true;
        router.back();
        editInfo.giveup = false;
        editInfo.updated = false;
    }
    function handleClose() {
        editInfo.askStay = false;
    }
    function handleLeaveWithoutSave() {
        toLeave();
        storage/* projectStore */.D.deleteDraft(editInfo.project.id);
    }
    function handleSaveAndLeave() {
        editInfo.save();
        toLeave();
        storage/* projectStore */.D.deleteDraft(editInfo.project.id);
    }
    function handleStayAndEdit() {
        editInfo.askStay = false;
        editInfo.giveup = false;
        logger.log("handleStayAndEdit fn called ", "objectCount=", object_count_utils/* objectCountUtils */._.getObjectCount(editInfo), "editInfo=", editInfo);
    }
    function handleSaveToDraftAndLeave() {
        storage/* projectStore */.D.addDraft(editInfo.project);
        toLeave();
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(BootstrapDialog, {
            onClose: handleClose,
            "aria-labelledby": "customized-dialog-title",
            open: askStay,
            children: [
                /* @__PURE__ */ (0,jsx_runtime.jsx)(DialogTitle_DialogTitle/* default */.A, {
                    sx: {
                        m: 0,
                        p: 2
                    },
                    id: "customized-dialog-title",
                    children: "\u63D0\u793A:\u60A8\u6709\u66F4\u6539\u6CA1\u6709\u4FDD\u5B58\uFF0C\u786E\u5B9A\u8981\u79BB\u5F00\u5417\uFF1F"
                }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                    "aria-label": "close",
                    onClick: handleClose,
                    sx: (theme)=>({
                            position: "absolute",
                            right: 8,
                            top: 8,
                            color: theme.palette.grey[500]
                        }),
                    children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Close/* default */.A, {})
                }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)(DialogContent_DialogContent/* default */.A, {
                    dividers: true
                }),
                /* @__PURE__ */ (0,jsx_runtime.jsxs)(DialogActions_DialogActions/* default */.A, {
                    children: [
                        /* @__PURE__ */ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                            onClick: handleLeaveWithoutSave,
                            children: "\u653E\u5F03\u4FDD\u5B58\u5E76\u79BB\u5F00"
                        }),
                        /* @__PURE__ */ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                            onClick: handleSaveToDraftAndLeave,
                            children: "\u4FDD\u5B58\u53D8\u66F4\u5230\u8349\u7A3F\u5E76\u79BB\u5F00"
                        }),
                        /* @__PURE__ */ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                            onClick: handleSaveAndLeave,
                            children: "\u4FDD\u5B58\u5E76\u79BB\u5F00"
                        }),
                        /* @__PURE__ */ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                            onClick: handleStayAndEdit,
                            children: "\u7559\u4E0B\u7F16\u8F91"
                        })
                    ]
                })
            ]
        })
    });
}
function ProjectTools() {
    const { t } = (0,es/* useTranslation */.Bd)("droid-project/project/ui/project/edit-project/content");
    function onRunClick() {}
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* default */.A, {
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                onClick: onRunClick,
                children: t("content.projectTools.run")
            })
        })
    });
}
function EditProjectBuilder() {
    const dispatcher = new Dispatcher/* Dispatcher */.m();
    const router = (0,next_router.useRouter)();
    const { id } = router.query;
    let project = storage/* projectStore */.D.findDraftOrSavedProject(id || "-1") || (0,IProject_data/* mergeProjectDataToDefultData */.D)({
        id: id || "-1"
    });
    const createProject = project;
    const draftPorjct = project = storage/* projectStore */.D.addDraft(createProject);
    const proxyProject = project = (0,proxyWatch/* toProxy */.I$)(draftPorjct);
    const parentProject = project = (0,parentProxy/* toParent */.sd)(proxyProject);
    const editInfo = editProjectInfoUtils.edit(parentProject);
    function checkUpdated() {
        const logger = new Log/* Log */.tG(false, "checkUpdated_fn");
        logger.isPaused = true;
        const c = storage/* projectStore */.D.findSavedProject(project.id);
        logger.log("checkUpdated fn called", "c=", c);
        editInfo.updated = !c || !lodash_default().isEqual(c, project);
        logger.log("editInfo.updated=", editInfo.updated);
        if (editInfo.updated && !editInfo.giveup) {
            editInfo.askStay = true;
            logger.log("checkUpdated fn called", "editInfo.askStay=", editInfo.askStay);
            return true;
        }
        logger.log("checkUpdated fn called2", "editInfo.askStay=", editInfo.askStay);
        return false;
    }
    function Content() {
        (0,react.useEffect)(()=>{
            takeProjectSnapshoot(project);
            if (!project) return;
            const unsub = (0,watchUpdates/* watchUpdates */.c)((0,parentProxy/* getParentProxyTarget */.Al)(project), ()=>{
                takeProjectSnapshoot(project);
                editInfo.updated = true;
            });
            return ()=>{
                unsub();
            };
        }, []);
        (0,react.useEffect)(()=>{
            const unsub = jsBridgeDispatcher.addListener("checkBrowserCanBack", (event)=>{
                const canBack = event.result = checkUpdated();
                console.log("ooooooooooooooooooooooooo checkBrowserCanBack_fn", event, "canback=", canBack);
                if (canBack) storage/* projectStore */.D.deleteDraft(project.id);
            });
            return ()=>{
                unsub();
            };
        }, []);
        (0,react.useEffect)(()=>{
            return dispatcher.addListener("back", (e)=>{
                const canBack = e.defaultPrevented = checkUpdated();
                if (canBack) storage/* projectStore */.D.deleteDraft(project.id);
            });
        }, []);
        const p = (0,proxyWatch/* toProxy */.I$)(editInfo.project);
        return /* @__PURE__ */ (0,jsx_runtime.jsx)(ProjectEditInfoContext.Provider, {
            value: editInfo,
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(src.ProjectContext.Provider, {
                value: p,
                children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                    sx: {
                        width: "100%"
                    },
                    children: [
                        /* @__PURE__ */ (0,jsx_runtime.jsx)(ProjectTools, {}),
                        /* @__PURE__ */ (0,jsx_runtime.jsx)(ProjectContent, {}),
                        /* @__PURE__ */ (0,jsx_runtime.jsx)(StayAlert, {})
                    ]
                })
            })
        });
    }
    function Title() {
        const { t } = (0,es/* useTranslation */.Bd)("droid-project/project/ui/project/edit-project/content");
        const clickToSetProjectName = t("content.clickToSetProjectName");
        const [name] = (0,useProxyWatch/* useProxyWatch */.x)(project, "name", clickToSetProjectName);
        function setName(name2) {
            project.name = name2;
        }
        return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", {
            style: {
                display: "flex",
                flexDirection: "row",
                gap: 16,
                width: "100%",
                alignItems: "center"
            },
            children: [
                /* @__PURE__ */ (0,jsx_runtime.jsx)("span", {
                    style: {
                        flexGrow: 1,
                        paddingLeft: "2rem"
                    },
                    children: /* @__PURE__ */ (0,jsx_runtime.jsx)(EditableText, {
                        setText: setName,
                        children: /* @__PURE__ */ (0,jsx_runtime.jsx)("h2", {
                            children: /* @__PURE__ */ (0,jsx_runtime.jsx)("span", {
                                id: "project-name-editor",
                                "data-id": "project-name-editor",
                                children: name || clickToSetProjectName
                            })
                        })
                    })
                }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                    onClick: ()=>{
                        editInfo.save();
                    },
                    children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Save/* default */.A, {})
                })
            ]
        });
    }
    return {
        Content,
        Title,
        dispatcher
    };
} //# sourceMappingURL=EditProject.js.map

// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/app/AppShell.js + 1 modules
var AppShell = __webpack_require__(75936);
// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/appbar/AppBar.js + 3 modules
var AppBar = __webpack_require__(73256);
// EXTERNAL MODULE: ./src/components/page/action-list/action.data.ts + 6 modules
var action_data = __webpack_require__(50497);
// EXTERNAL MODULE: ./src/components/page/trigger-list/trigger.data.ts + 4 modules
var trigger_data = __webpack_require__(20017);
;// ./src/pages/project-editor/index.tsx





function ProjectEditor() {
    const { Content, Title, dispatcher } = EditProjectBuilder();
    (0,action_data/* initActionListGroups */.v)();
    (0,trigger_data/* initTriggerListGroups */.J)();
    const appBarProps = {
        title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Title, {}),
        back: true,
        backDispatcher: dispatcher
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
            appbarProps: appBarProps,
            titleConf: {
                ns: "homepage/pages/project-editor/content",
                key: "editor.title"
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Content, {})
        })
    });
}


/***/ }),

/***/ 22938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ routerUtils)
/* harmony export */ });

var __async = (__this, __arguments, generator)=>{
    return new Promise((resolve, reject)=>{
        var fulfilled = (value)=>{
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        };
        var rejected = (value)=>{
            try {
                step(generator.throw(value));
            } catch (e) {
                reject(e);
            }
        };
        var step = (x)=>x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
        step((generator = generator.apply(__this, __arguments)).next());
    });
};
function checkToPath(router, expectNowPath, pointPath, backCount) {
    return __async(this, null, function*() {
        const nowPath = router.pathname;
        console.log("nowpath=", nowPath);
        console.log("expectNowPath=", expectNowPath);
        console.log("pointPath=", pointPath);
        if (nowPath === pointPath) {
            return;
        }
        if (expectNowPath !== nowPath) {
            router.replace(pointPath);
        }
        while(backCount > 0){
            router.back();
            backCount--;
        }
        if (router.pathname !== pointPath && pointPath) {
            router.push(pointPath);
        }
    });
}
const routerUtils = {
    checkToPath
}; //# sourceMappingURL=router-utils.js.map


/***/ }),

/***/ 73256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W: () => (/* binding */ AppbarContainer)
});

// UNUSED EXPORTS: Appbar

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(50612);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_react@19.0.0__@emotion+styled_cx72376a2dh43jydbaoc57zvxi/node_modules/@mui/material/useScrollTrigger/useScrollTrigger.js
var useScrollTrigger = __webpack_require__(35011);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_react@19.0.0__@emotion+styled_cx72376a2dh43jydbaoc57zvxi/node_modules/@mui/material/Slide/Slide.js + 3 modules
var Slide = __webpack_require__(80686);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_react@19.0.0__@emotion+styled_cx72376a2dh43jydbaoc57zvxi/node_modules/@mui/material/Fade/Fade.js
var Fade = __webpack_require__(9655);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_react@19.0.0__@emotion+styled_cx72376a2dh43jydbaoc57zvxi/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(67779);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_react@19.0.0__@emotion+styled_cx72376a2dh43jydbaoc57zvxi/node_modules/@mui/material/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(16425);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_react@19.0.0__@emotion+styled_cx72376a2dh43jydbaoc57zvxi/node_modules/@mui/material/AppBar/AppBar.js + 1 modules
var AppBar_AppBar = __webpack_require__(23235);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_react@19.0.0__@emotion+styled_cx72376a2dh43jydbaoc57zvxi/node_modules/@mui/material/Toolbar/Toolbar.js + 1 modules
var Toolbar_Toolbar = __webpack_require__(92776);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_react@19.0.0__@emotion+styled_cx72376a2dh43jydbaoc57zvxi/node_modules/@mui/material/Container/Container.js + 1 modules
var Container = __webpack_require__(64909);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_react@19.0.0__@emotion+styled_cx72376a2dh43jydbaoc57zvxi/node_modules/@mui/material/Fab/Fab.js + 1 modules
var Fab = __webpack_require__(61150);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/utils/browser/window-history-utils.js
var window_history_utils = __webpack_require__(88778);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_rea_jkkhqeqxcwlodflnlfamiwj6gq/node_modules/@mui/icons-material/esm/KeyboardArrowLeft.js
var KeyboardArrowLeft = __webpack_require__(62754);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.12_rea_jkkhqeqxcwlodflnlfamiwj6gq/node_modules/@mui/icons-material/esm/KeyboardArrowUp.js
var KeyboardArrowUp = __webpack_require__(28542);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(94344);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.1.7_@babel+core@7.26.0_babel-plugin-macros@3.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.82.0/node_modules/next/router.js
var next_router = __webpack_require__(53757);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/dispatcher/Dispatcher.js
var Dispatcher = __webpack_require__(25065);
;// ../../libs/app/static/dist/src/mc/static-model.js

var __async = (__this, __arguments, generator)=>{
    return new Promise((resolve, reject)=>{
        var fulfilled = (value)=>{
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        };
        var rejected = (value)=>{
            try {
                step(generator.throw(value));
            } catch (e) {
                reject(e);
            }
        };
        var step = (x)=>x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
        step((generator = generator.apply(__this, __arguments)).next());
    });
};

const dipsatcher = new Dispatcher/* Dispatcher */.m();
const staticModel = {
    dipsatcher,
    screenLockCount: 0,
    switchPage: ()=>__async(void 0, null, function*() {
            dipsatcher.dispatch("switchPage");
            staticModel.screenLockCount = 0;
        }),
    listenSwitchPage: (callback)=>{
        return dipsatcher.addListener("switchPage", callback);
    }
}; //# sourceMappingURL=static-model.js.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/framer-motion@11.14.0_@emotion+is-prop-valid@1.3.1_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs + 3 modules
var AnimatePresence = __webpack_require__(76838);
// EXTERNAL MODULE: ../../node_modules/.pnpm/framer-motion@11.14.0_@emotion+is-prop-valid@1.3.1_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 233 modules
var proxy = __webpack_require__(2196);
;// ../../libs/app/ui/dist/src/components/motion/page-transition.js




function PageTransition(param) {
    let { children } = param;
    const router = (0,next_router.useRouter)();
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(AnimatePresence/* AnimatePresence */.N, {
        mode: "wait",
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(proxy/* motion */.P.div, {
            initial: {
                opacity: 0,
                y: 10
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: -10
            },
            transition: {
                duration: 0.3
            },
            children
        }, router.route)
    });
} //# sourceMappingURL=page-transition.js.map

;// ../../libs/app/ui/dist/src/components/app/PageShell.js






let idCount = 0;
function PageShell(param) {
    let { children } = param;
    const id = "app-shell-".concat(idCount++);
    (0,react.useEffect)(()=>{
        const box = document.querySelector("#".concat(id));
        const unlisten = staticModel.listenSwitchPage(()=>{
            if (!box) return;
        });
        if (!box) return;
        box.addEventListener("click", (e)=>{
            if (staticModel.screenLockCount == 0) return;
            e.stopPropagation();
            e.preventDefault();
        });
        return ()=>{
            unlisten();
        };
    }, []);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* default */.A, {
        id,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(PageTransition, {
            children
        })
    });
} //# sourceMappingURL=PageShell.js.map

// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/page/AndroidPageContent.js + 1 modules
var AndroidPageContent = __webpack_require__(22726);
;// ../../libs/app/ui/dist/src/components/appbar/AppBar.js

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __spreadValues = (a, b)=>{
    for(var prop in b || (b = {}))if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)){
        if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
    return a;
};
var __spreadProps = (a, b)=>__defProps(a, __getOwnPropDescs(b));









function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = (0,useScrollTrigger/* default */.A)({
        target: window ? window() : void 0
    });
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(Slide/* default */.A, {
        appear: false,
        direction: "down",
        in: !trigger,
        children: children != null ? children : /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {})
    });
}
function Appbar(param) {
    let { title } = param;
    return /* @__PURE__ */ jsx(AppBar, {
        color: "inherit",
        children: /* @__PURE__ */ jsx(Toolbar, {
            children: /* @__PURE__ */ jsx(Typography, {
                variant: "h6",
                component: "div",
                children: title
            })
        })
    });
}
function ScrollTop(props) {
    const { children, window } = props;
    const trigger = (0,useScrollTrigger/* default */.A)({
        target: window ? window() : void 0,
        disableHysteresis: true,
        threshold: 100
    });
    const handleClick = (event)=>{
        const anchor = (event.target.ownerDocument || document).querySelector("#back-to-top-anchor");
        if (anchor) {
            anchor.scrollIntoView({
                block: "center"
            });
        }
    };
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(Fade/* default */.A, {
        in: trigger,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* default */.A, {
            "data-id": "content-scroll-top-button",
            onClick: handleClick,
            role: "presentation",
            sx: {
                position: "fixed",
                bottom: 16,
                right: 16
            },
            children
        })
    });
}
function AppbarContainer(props) {
    const { children, appbarProps, titleConf } = props;
    const router = (0,next_router.useRouter)();
    function handleBack() {
        const event = window_history_utils/* browserHistoryUtils */.W.askHistoryBack();
        if (event.defaultPrevented) return;
        if (appbarProps.backDispatcher) {
            const e = {
                defaultPrevented: false
            };
            appbarProps.backDispatcher.dispatch("back", e);
            if (e.defaultPrevented) return;
        }
        router.back();
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(PageShell, {
        children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(react.Fragment, {
            children: [
                /* @__PURE__ */ (0,jsx_runtime.jsx)(CssBaseline/* default */.Ay, {}),
                /* @__PURE__ */ (0,jsx_runtime.jsx)(HideOnScroll, __spreadProps(__spreadValues({}, props), {
                    children: /* @__PURE__ */ (0,jsx_runtime.jsx)(AppBar_AppBar/* default */.A, {
                        color: "inherit",
                        children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Toolbar_Toolbar/* default */.A, {
                            children: [
                                /* @__PURE__ */ (0,jsx_runtime.jsx)(KeyboardArrowLeft/* default */.A, {
                                    onClick: handleBack
                                }),
                                appbarProps.title
                            ]
                        })
                    })
                })),
                /* @__PURE__ */ (0,jsx_runtime.jsx)(Toolbar_Toolbar/* default */.A, {
                    id: "back-to-top-anchor"
                }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)(Container/* default */.A, {
                    sx: {
                        padding: "0",
                        marginTop: "17px"
                    },
                    children: /* @__PURE__ */ (0,jsx_runtime.jsx)(AndroidPageContent/* default */.A, {
                        titleConf,
                        children
                    })
                }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)(ScrollTop, __spreadProps(__spreadValues({}, props), {
                    children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Fab/* default */.A, {
                        size: "small",
                        "aria-label": "scroll back to top",
                        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(KeyboardArrowUp/* default */.A, {})
                    })
                }))
            ]
        })
    });
} //# sourceMappingURL=AppBar.js.map


/***/ }),

/***/ 95536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ windowUtils)
/* harmony export */ });
/* harmony import */ var _AutoWebViewJs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77758);

var __async = (__this, __arguments, generator)=>{
    return new Promise((resolve, reject)=>{
        var fulfilled = (value)=>{
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        };
        var rejected = (value)=>{
            try {
                step(generator.throw(value));
            } catch (e) {
                reject(e);
            }
        };
        var step = (x)=>x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
        step((generator = generator.apply(__this, __arguments)).next());
    });
};

function exitWindowById(id) {
    return __async(this, null, function*() {
        const script = 'var bl = com.fanfanlo.lib.components.floatview.floatwindow.WindowUtils.exitById("'.concat(id, '", "");\n bl;');
        console.log("exitWindowById_fn called", id, script);
        return _AutoWebViewJs__WEBPACK_IMPORTED_MODULE_0__/* .autoWebViewJs */ .yx.callScript(script);
    });
}
const windowUtils = {
    exitWindowById
}; //# sourceMappingURL=windowUtils.js.map


/***/ }),

/***/ 78725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ openPnAnInfoWindow)
});

// EXTERNAL MODULE: ../../libs/droid/android/dist/src/confs/env.js
var env = __webpack_require__(68872);
// EXTERNAL MODULE: __barrel_optimize__?names=ulid!=!../../node_modules/.pnpm/ulid@2.3.0/node_modules/ulid/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(45396);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/win/WindowConf.js
var WindowConf = __webpack_require__(54634);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/components/permissionGroupCreator.js + 4 modules
var permissionGroupCreator = __webpack_require__(62169);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/components/PermissionGroup.js
var PermissionGroup = __webpack_require__(31678);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/events/EventDispatcher.js
var EventDispatcher = __webpack_require__(83451);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/log/Log.js + 37 modules
var Log = __webpack_require__(87825);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/events/DataEvent.js + 1 modules
var DataEvent = __webpack_require__(79786);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/WebViewJs.js + 3 modules
var WebViewJs = __webpack_require__(75421);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/androidDispatchers.js
var androidDispatchers = __webpack_require__(18856);
;// ../../libs/droid/android/dist/src/android/win/Window.js




const _Window = class _Window extends EventDispatcher/* EventDispatcher */.Q {
    static getDismissEventType(ulid) {
        return "window-".concat(ulid, "-dismiss");
    }
    static create(conf) {
        let w = new _Window(conf);
        return w;
    }
    constructor(conf){
        super();
        this.logger = new Log/* Log */.tG(false, this.constructor.name);
        this.dismissListenIndex = "";
        this.init = ()=>{
            let { print, error, warn, logger } = this.logger.sub(false, "fn_init");
            let type = _Window.getDismissEventType(this.conf.windowId);
            print("type is", type);
            this.dismissListenIndex = WebViewJs/* WebViewJs */.L.instance.shellListen(androidDispatchers/* androidDispatchers */.m.Window.name, type, type, true, this.onDismiss);
            print("dismissListenIndex is", this.dismissListenIndex);
            return this;
        };
        this.open = ()=>{
            if (!this.conf) {
                throw Error("no window conf");
            }
            const res = WebViewJs/* WebViewJs */.L.instance.createWindow(JSON.stringify(this.conf));
            console.log("crate window res=", res);
            return this;
        };
        this.onDismiss = ()=>{
            let { print, error, warn, logger } = this.logger.sub(false, "fn_onDismiss");
            print("dismiss", _Window.getDismissEventType(this.conf.windowId));
            this.dispatchEvent(new DataEvent/* DataEvent */.P(_Window.eventTypeDismiss));
        };
        this.conf = conf;
    }
};
_Window.eventTypeDismiss = "dismiss";
let Window = _Window; //# sourceMappingURL=Window.js.map

// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/index.js
var src = __webpack_require__(40242);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/scripts/window/windowUtils.js
var windowUtils = __webpack_require__(95536);
;// ../../libs/droid/android/dist/src/htmls/PnAnInfoWindow.js

var __async = (__this, __arguments, generator)=>{
    return new Promise((resolve, reject)=>{
        var fulfilled = (value)=>{
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        };
        var rejected = (value)=>{
            try {
                step(generator.throw(value));
            } catch (e) {
                reject(e);
            }
        };
        var step = (x)=>x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
        step((generator = generator.apply(__this, __arguments)).next());
    });
};










const { htmlOrigin } = env/* env */._;
function getHtmlPnAnInfoWindowConf(windowId, selectEventType) {
    let conf = {
        htmlConf: {
            url: "".concat(htmlOrigin, "pages/accessibility-pn-an-info/"),
            webViewJsParams: {
                javaToJsDataString: JSON.stringify({
                    eventType: selectEventType
                })
            }
        },
        floatWindowConf: {
            floatConf: {
                positionSaveName: "a11y-pn-a-an-info-panel"
            }
        },
        windowId
    };
    return (0,WindowConf/* createWindowConfCopy */.Sb)(conf);
}
function openPnAnInfoWindow(autoCloseWhenSelected) {
    return __async(this, null, function*() {
        console.log("openPnAnInfoWindow_fn");
        let opened = false;
        const t = yield (0,src.getI18nT)("droid-android/htmls/content");
        return new Promise(function(resolve, reject) {
            let isSuccess = false;
            let group = (0,permissionGroupCreator/* createFloatA11yPermissionGroup */.ps)();
            group.addEventListener(PermissionGroup/* PermissionGroup */.v.eventComplete, ()=>{
                console.log("group.isSuccess=", group.isSuccess, "opened", opened);
                if (opened) return;
                if (group.isSuccess) {
                    openWindow();
                } else {
                    reject(t("PnAnInfoWindow.noPermission"));
                }
            });
            group.run();
            function openWindow() {
                opened = true;
                let windowId = (0,index_esm/* ulid */.Z0)();
                let eventType = "openAppBackToMainActivitySelected-".concat(windowId);
                const eventBackType = "".concat(eventType, "back");
                let listenIndex = WebViewJs/* WebViewJs */.L.instance.shellListen(androidDispatchers/* androidDispatchers */.m.WebViewJsDispatcher.name, eventType, eventBackType, true, onSelectApp);
                console.log("openWindow_fn eventType=", eventType, eventBackType);
                let conf = getHtmlPnAnInfoWindowConf(windowId, eventType);
                let win = Window.create(conf);
                win.init().open().addEventListener(Window.eventTypeDismiss, onDismiss);
                function onSelectApp(s) {
                    console.log("openWindow_fn onSelectApp", s);
                    let o = JSON.parse(s);
                    isSuccess = true;
                    resolve(o);
                    if (autoCloseWhenSelected) {
                        opened = false;
                        WebViewJs/* WebViewJs */.L.instance.shellRemoveListen(androidDispatchers/* androidDispatchers */.m.WebViewJsDispatcher.name, listenIndex);
                        windowUtils/* windowUtils */.q.exitWindowById(windowId);
                    }
                }
                function onDismiss() {
                    opened = false;
                    WebViewJs/* WebViewJs */.L.instance.shellRemoveListen(androidDispatchers/* androidDispatchers */.m.WebViewJsDispatcher.name, listenIndex);
                    console.log("openWindow_fnonDismiss_fn", androidDispatchers/* androidDispatchers */.m.WebViewJsDispatcher.name, listenIndex);
                    if (!isSuccess) {
                        reject(t("PnAnInfoWindow.noPnSelected"));
                    }
                }
            }
        });
    });
} //# sourceMappingURL=PnAnInfoWindow.js.map


/***/ }),

/***/ 49365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ openHtmlShowA11yNodeInfoButton)
/* harmony export */ });
/* harmony import */ var await_to_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32788);
/* harmony import */ var _android_components_Manifest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89243);
/* harmony import */ var _android_components_permissionGroupCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62169);
/* harmony import */ var _android_win_WindowConf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54634);
/* harmony import */ var _android_WebViewJs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75421);
/* harmony import */ var _confs_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68872);

var __async = (__this, __arguments, generator)=>{
    return new Promise((resolve, reject)=>{
        var fulfilled = (value)=>{
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        };
        var rejected = (value)=>{
            try {
                step(generator.throw(value));
            } catch (e) {
                reject(e);
            }
        };
        var step = (x)=>x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
        step((generator = generator.apply(__this, __arguments)).next());
    });
};






function createCopy(callbackEventType, windowId) {
    let windowConf = {
        htmlConf: {
            url: "".concat(_confs_env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.htmlOrigin, "pages/accessibility-info-buttons/#/"),
            webViewJsParams: {
                javaToJsDataString: JSON.stringify({
                    event: callbackEventType
                })
            }
        },
        windowId
    };
    return (0,_android_win_WindowConf__WEBPACK_IMPORTED_MODULE_1__/* .createWindowConfCopy */ .Sb)(windowConf);
}
function openWindow(callbackEventType, windowId) {
    let conf = createCopy(callbackEventType, windowId);
    return _android_WebViewJs__WEBPACK_IMPORTED_MODULE_2__/* .WebViewJs */ .L.instance.createWindow(JSON.stringify(conf));
}
function openHtmlShowA11yNodeInfoButton(callbackEventType, windowId) {
    return __async(this, null, function*() {
        let [err, group] = yield (0,await_to_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)((0,_android_components_permissionGroupCreator__WEBPACK_IMPORTED_MODULE_4__/* .runPermissionGroup */ .uu)(_android_components_Manifest__WEBPACK_IMPORTED_MODULE_5__/* .Manifest */ ._.Permission.SYSTEM_ALERT_WINDOW, _android_components_Manifest__WEBPACK_IMPORTED_MODULE_5__/* .Manifest */ ._.Permission.BIND_ACCESSIBILITY_SERVICE));
        if (err) {
            alert(err.toString());
            _android_WebViewJs__WEBPACK_IMPORTED_MODULE_2__/* .WebViewJs */ .L.instance.toast(err.toString());
            return;
        }
        return openWindow(callbackEventType, windowId);
    });
} //# sourceMappingURL=accessibility-info-buttons.js.map


/***/ }),

/***/ 58553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ ButtonConfirm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50612);
/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36734);
/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38212);
/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80740);
/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22066);
/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94011);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94344);
/* harmony import */ var _barrel_optimize_names_useTranslation_react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7843);





function ButtonConfirm(param) {
    let { title, content, confirmText, cancelText, onConfirm, onCancel, onClose, cancelId, confirmId, children } = param;
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { t } = (0,_barrel_optimize_names_useTranslation_react_i18next__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .Bd)("fanfanlo/mui/dialog/content");
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                onClick: ()=>setIsOpen(true),
                children
            }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                open: isOpen,
                onClose: ()=>setIsOpen(false),
                children: [
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                        children: title || t("ButtonConfirm.title")
                    }),
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                        children: content || t("ButtonConfirm.content")
                    }),
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                        children: [
                            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                                id: cancelId || "btn-dialog-button-confirm-cancel",
                                "data-id": cancelId || "btn-dialog-button-confirm-cancel",
                                onClick: ()=>{
                                    setIsOpen(false);
                                    onCancel == null ? void 0 : onCancel();
                                    onClose == null ? void 0 : onClose(false);
                                },
                                children: cancelText || t("ButtonConfirm.cancel")
                            }),
                            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                                id: confirmId || "btn-dialog-button-confirm-confirm",
                                "data-id": confirmId || "btn-dialog-button-confirm-confirm",
                                onClick: ()=>{
                                    setIsOpen(false);
                                    onConfirm == null ? void 0 : onConfirm();
                                    onClose == null ? void 0 : onClose(true);
                                },
                                children: confirmText || t("ButtonConfirm.confirm")
                            })
                        ]
                    })
                ]
            })
        ]
    });
} //# sourceMappingURL=ButtonConfirm.js.map


/***/ }),

/***/ 21858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g0: () => (/* binding */ createRandomEnglishCharacters)
/* harmony export */ });
/* unused harmony exports wordFirstToUpperCase, createRandomEnglishCharacter, randomLetters */

function wordFirstToUpperCase(s) {
    return s.replace(/( |^)[a-z]/, (L)=>L.toUpperCase());
}
function createRandomEnglishCharacter() {
    let s = String.fromCharCode(65 + Math.ceil(Math.random() * 25));
    if (Math.random() * 2 > 1) {
        s = s.toLocaleLowerCase();
    }
    return s;
}
function createRandomEnglishCharacters(length) {
    var result = [];
    for(var i = 0; i < length; i++){
        result.push(createRandomEnglishCharacter());
    }
    return result.join("");
}
function randomLetters(len) {
    var str = "", arr = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
    ];
    for(var i = 0; i < len; i++){
        const pos = Math.round(Math.random() * (arr.length - 1));
        str += arr[pos];
    }
    return str;
} //# sourceMappingURL=stringUtils.js.map


/***/ }),

/***/ 7843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bd: () => (/* reexport safe */ C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_1_4_i18next_24_1_0_typescript_5_8_2_react_dom_19_0_0_react_19_0_0_react_19_0_0_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__.Bd)
/* harmony export */ });
/* harmony import */ var C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_1_4_i18next_24_1_0_typescript_5_8_2_react_dom_19_0_0_react_19_0_0_react_19_0_0_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4216);



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [781,602,852,506,11,162,426,140,889,108,816,171,185,293,636,593,792], () => (__webpack_exec__(43932)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=project-editor-2a7175bec341d2ef.js.map