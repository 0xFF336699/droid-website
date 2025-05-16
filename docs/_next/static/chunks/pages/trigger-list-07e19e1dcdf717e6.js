(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9313],{

/***/ 12006:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ei: () => (/* binding */ isIP)
});

// UNUSED EXPORTS: ipVersion, isIPv4, isIPv6

;// ../../node_modules/.pnpm/ip-regex@5.0.0/node_modules/ip-regex/index.js
const word = '[a-fA-F\\d:]';

const boundry = options => options && options.includeBoundaries
	? `(?:(?<=\\s|^)(?=${word})|(?<=${word})(?=\\s|$))`
	: '';

const v4 = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';

const v6segment = '[a-fA-F\\d]{1,4}';

const v6 = `
(?:
(?:${v6segment}:){7}(?:${v6segment}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${v6segment}:){6}(?:${v4}|:${v6segment}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${v6segment}:){5}(?::${v4}|(?::${v6segment}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${v6segment}:){4}(?:(?::${v6segment}){0,1}:${v4}|(?::${v6segment}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${v6segment}:){3}(?:(?::${v6segment}){0,2}:${v4}|(?::${v6segment}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${v6segment}:){2}(?:(?::${v6segment}){0,3}:${v4}|(?::${v6segment}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${v6segment}:){1}(?:(?::${v6segment}){0,4}:${v4}|(?::${v6segment}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${v6segment}){0,5}:${v4}|(?::${v6segment}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`.replace(/\s*\/\/.*$/gm, '').replace(/\n/g, '').trim();

// Pre-compile only the exact regexes because adding a global flag make regexes stateful
const v46Exact = new RegExp(`(?:^${v4}$)|(?:^${v6}$)`);
const v4exact = new RegExp(`^${v4}$`);
const v6exact = new RegExp(`^${v6}$`);

const ip_regex_ipRegex = options => options && options.exact
	? v46Exact
	: new RegExp(`(?:${boundry(options)}${v4}${boundry(options)})|(?:${boundry(options)}${v6}${boundry(options)})`, 'g');

ip_regex_ipRegex.v4 = options => options && options.exact ? v4exact : new RegExp(`${boundry(options)}${v4}${boundry(options)}`, 'g');
ip_regex_ipRegex.v6 = options => options && options.exact ? v6exact : new RegExp(`${boundry(options)}${v6}${boundry(options)}`, 'g');

/* harmony default export */ const ip_regex = (ip_regex_ipRegex);

;// ../../node_modules/.pnpm/function-timeout@0.1.1/node_modules/function-timeout/browser.js
// Even though the browser version is a no-op, we wrap it to ensure consistent behavior.
function browser_functionTimeout(function_) {
	const wrappedFunction = (...arguments_) => function_(...arguments_);

	Object.defineProperty(wrappedFunction, 'name', {
		value: `functionTimeout(${function_.name || '<anonymous>'})`,
		configurable: true,
	});

	return wrappedFunction;
}

function browser_isTimeoutError() {
	return false;
}

;// ../../node_modules/.pnpm/is-regexp@3.1.0/node_modules/is-regexp/index.js
const {toString: is_regexp_toString} = Object.prototype;

function isRegexp(value) {
	return is_regexp_toString.call(value) === '[object RegExp]';
}

;// ../../node_modules/.pnpm/clone-regexp@3.0.0/node_modules/clone-regexp/index.js


const flagMap = {
	global: 'g',
	ignoreCase: 'i',
	multiline: 'm',
	dotAll: 's',
	sticky: 'y',
	unicode: 'u'
};

function clonedRegexp(regexp, options = {}) {
	if (!isRegexp(regexp)) {
		throw new TypeError('Expected a RegExp instance');
	}

	const flags = Object.keys(flagMap).map(flag => (
		(typeof options[flag] === 'boolean' ? options[flag] : regexp[flag]) ? flagMap[flag] : ''
	)).join('');

	const clonedRegexp = new RegExp(options.source || regexp.source, flags);

	clonedRegexp.lastIndex = typeof options.lastIndex === 'number' ?
		options.lastIndex :
		regexp.lastIndex;

	return clonedRegexp;
}

;// ../../node_modules/.pnpm/super-regex@0.2.0/node_modules/super-regex/index.js


 // TODO: Use `structuredClone` instead when targeting Node.js 18.

const resultToMatch = result => ({
	match: result[0],
	index: result.index,
	groups: result.slice(1),
	namedGroups: result.groups ?? {},
	input: result.input,
});

function super_regex_isMatch(regex, string, {timeout} = {}) {
	try {
		return browser_functionTimeout(() => clonedRegexp(regex).test(string), {timeout})();
	} catch (error) {
		if (browser_isTimeoutError(error)) {
			return false;
		}

		throw error;
	}
}

function firstMatch(regex, string, {timeout} = {}) {
	try {
		const result = functionTimeout(() => cloneRegexp(regex).exec(string), {timeout})();

		if (result === null) {
			return;
		}

		return resultToMatch(result);
	} catch (error) {
		if (isTimeoutError(error)) {
			return;
		}

		throw error;
	}
}

function matches(regex, string, {timeout = Number.POSITIVE_INFINITY, matchTimeout = Number.POSITIVE_INFINITY} = {}) {
	if (!regex.global) {
		throw new Error('The regex must have the global flag, otherwise, use `firstMatch()` instead');
	}

	return {
		* [Symbol.iterator]() {
			try {
				const matches = string.matchAll(regex); // The regex is only executed when iterated over.

				while (true) {
					const nextMatch = functionTimeout(() => matches.next(), {timeout: (timeout !== Number.POSITIVE_INFINITY || matchTimeout !== Number.POSITIVE_INFINITY) ? Math.min(timeout, matchTimeout) : undefined}); // `matches.next` must be called within an arrow function so that it doesn't loose its context.

					const end = timeSpan();
					const {value, done} = nextMatch();
					timeout -= Math.ceil(end());

					if (done) {
						break;
					}

					yield resultToMatch(value);
				}
			} catch (error) {
				if (!isTimeoutError(error)) {
					throw error;
				}
			}
		},
	};
}

;// ../../node_modules/.pnpm/is-ip@5.0.1/node_modules/is-ip/index.js



const maxIPv4Length = 15;
const maxIPv6Length = 45;

const options = {
	timeout: 400,
};

function isIP(string) {
	if (string.length > maxIPv6Length) {
		return false;
	}

	return super_regex_isMatch(ip_regex({exact: true}), string, options);
}

function isIPv6(string) {
	if (string.length > maxIPv6Length) {
		return false;
	}

	return isMatch(ipRegex.v6({exact: true}), string, options);
}

function isIPv4(string) {
	if (string.length > maxIPv4Length) {
		return false;
	}

	return isMatch(ipRegex.v4({exact: true}), string, options);
}

function ipVersion(string) {
	if (isIPv6(string)) {
		return 6;
	}

	if (isIPv4(string)) {
		return 4;
	}
}


/***/ }),

/***/ 16424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ initTriggerListGroups),
  R: () => (/* binding */ triggerListGroups)
});

// EXTERNAL MODULE: ../../libs/app/static/dist/src/index.js
var src = __webpack_require__(6368);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/index.js
var dist_src = __webpack_require__(46382);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/triggers/time/timeout/ITriggerTimeout.inft.js + 2 modules
var ITriggerTimeout_inft = __webpack_require__(79931);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/core/project-member-type.js
var project_member_type = __webpack_require__(9751);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/events/projectEventUtils.js
var projectEventUtils = __webpack_require__(56964);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/utils/throw-trace-error.js
var throw_trace_error = __webpack_require__(7886);
// EXTERNAL MODULE: ./src/components/trigger-list-action-list-common/ITriggerList-IActionList-common.intf.tsx
var ITriggerList_IActionList_common_intf = __webpack_require__(65639);
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
var is_in_android = __webpack_require__(40044);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/htmls/PnAnInfoWindow.js + 1 modules
var PnAnInfoWindow = __webpack_require__(92059);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/AutoWebViewJs.js
var AutoWebViewJs = __webpack_require__(22595);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/triggers/app/when-activity-in/ITriggerWhenActivityIn.js + 2 modules
var ITriggerWhenActivityIn = __webpack_require__(28404);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/utils/stringUtils.js
var stringUtils = __webpack_require__(35103);
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

/***/ 29481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ windowUtils)
/* harmony export */ });
/* harmony import */ var _AutoWebViewJs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22595);

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

/***/ 35103:
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

/***/ 65639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IS: () => (/* binding */ createActionOrTriggerListLinkRender),
/* harmony export */   cI: () => (/* binding */ createActionOrTriggerButtonRender)
/* harmony export */ });
/* unused harmony export ActionOrTriggerListLinkRender */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33736);
/* harmony import */ var _barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53853);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39557);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79764);
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

/***/ 71583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TriggerList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33736);
/* harmony import */ var _app_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42375);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15463);
/* harmony import */ var _src_components_page_trigger_list_trigger_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16424);
/* harmony import */ var _src_components_trigger_list_action_list_common_TriggerListOrActionListUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85576);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79764);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);






// import { useTranslation } from 'react-i18next';
function TriggerList() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { t } = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_4__.useTranslation)("homepage/pages/trigger-list/content");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_ui__WEBPACK_IMPORTED_MODULE_5__/* .AppShell */ .G, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_trigger_list_action_list_common_TriggerListOrActionListUI__WEBPACK_IMPORTED_MODULE_2__/* .TriggerListOrActionListUI */ .M, {
            groups: _src_components_page_trigger_list_trigger_data__WEBPACK_IMPORTED_MODULE_1__/* .triggerListGroups */ .R,
            titleConf: {
                title: t("content.title")
            },
            title: t("content.title"),
            actionListParams: router.query
        })
    });
}


/***/ }),

/***/ 77190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W: () => (/* binding */ AppbarContainer)
});

// UNUSED EXPORTS: Appbar

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/useScrollTrigger/useScrollTrigger.js
var useScrollTrigger = __webpack_require__(39088);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Slide/Slide.js + 3 modules
var Slide = __webpack_require__(63892);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Fade/Fade.js
var Fade = __webpack_require__(1940);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(46925);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(23114);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/AppBar/AppBar.js + 1 modules
var AppBar_AppBar = __webpack_require__(45975);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Toolbar/Toolbar.js + 1 modules
var Toolbar_Toolbar = __webpack_require__(21495);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Container/Container.js + 1 modules
var Container = __webpack_require__(87239);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Fab/Fab.js + 1 modules
var Fab = __webpack_require__(24970);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/utils/browser/window-history-utils.js
var window_history_utils = __webpack_require__(6767);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_reac_nks3j66iny4ryjua4rgzqurrcq/node_modules/@mui/icons-material/esm/KeyboardArrowLeft.js
var KeyboardArrowLeft = __webpack_require__(14964);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_reac_nks3j66iny4ryjua4rgzqurrcq/node_modules/@mui/icons-material/esm/KeyboardArrowUp.js
var KeyboardArrowUp = __webpack_require__(93944);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.1_@babel+core@7.26.0_babel-plugin-macros@3.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.82.0/node_modules/next/router.js
var next_router = __webpack_require__(79764);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/dispatcher/Dispatcher.js
var Dispatcher = __webpack_require__(93276);
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
var AnimatePresence = __webpack_require__(73041);
// EXTERNAL MODULE: ../../node_modules/.pnpm/framer-motion@11.14.0_@emotion+is-prop-valid@1.3.1_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 233 modules
var proxy = __webpack_require__(78912);
;// ../../libs/app/ui/dist/src/components/motion/page-transition.js




function PageTransition(param) {
    let { children } = param;
    const router = (0,next_router.useRouter)();
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(AnimatePresence/* AnimatePresence */.N, {
        mode: "sync",
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
                y: -110
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
var AndroidPageContent = __webpack_require__(55960);
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
    const { children, appbarProps, titleConf, reload } = props;
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
                        reload,
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

/***/ 85576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  M: () => (/* binding */ TriggerListOrActionListUI)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(20532);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(2621);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/index.js
var src = __webpack_require__(15463);
;// ./src/components/trigger-list-action-list-common/context.tsx

const ActionListOrTriggerListPageParamsContext = /*#__PURE__*/ (0,react.createContext)({});
const ActionOrTriggerGroupListContext = /*#__PURE__*/ (0,react.createContext)({});

// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/appbar/AppBar.js + 3 modules
var AppBar = __webpack_require__(77190);
;// ./src/components/trigger-list-action-list-common/TriggerListOrActionListUI.tsx






function Item(param) {
    let { item } = param;
    const { t } = (0,src.useTranslation)(item.i18nNs);
    const params = (0,react.useContext)(ActionListOrTriggerListPageParamsContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        sx: {
            width: "100%",
            textIndent: "1rem",
            padding: "1px",
            backgroundColor: "#f6f2e9"
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(item.LinkRender, {
                query: params,
                id: item.id,
                item: item,
                children: t(item.nameKey)
            })
        })
    });
}
function Group(param) {
    let { group } = param;
    const { t } = (0,src.useTranslation)(group.i18nNs);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            width: "100%"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                sx: {
                    width: "100%",
                    backgroundColor: "#f6f9f6",
                    padding: "2px"
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t(group.nameKey)
                })
            }),
            group.items.map((action)=>{
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(Item, {
                    item: action
                }, action.i18nNs);
            })
        ]
    });
}
function GroupList() {
    const groups = (0,react.useContext)(ActionOrTriggerGroupListContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        sx: {
            width: "100%"
        },
        children: groups.map((group)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Group, {
                group: group
            }, group.i18nNs))
    });
}
function ActionListContent() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GroupList, {})
    });
}
function TriggerListOrActionListUI(param) {
    let { groups, title, actionListParams, titleConf } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionListOrTriggerListPageParamsContext, {
        value: actionListParams,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionOrTriggerGroupListContext, {
            value: groups,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
                appbarProps: {
                    title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        children: title
                    }),
                    back: true
                },
                titleConf: titleConf,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionListContent, {})
            })
        })
    });
}


/***/ }),

/***/ 92059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ openPnAnInfoWindow)
});

// EXTERNAL MODULE: ../../libs/droid/android/dist/src/confs/env.js
var env = __webpack_require__(39897);
// EXTERNAL MODULE: __barrel_optimize__?names=ulid!=!../../node_modules/.pnpm/ulid@2.3.0/node_modules/ulid/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(82131);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/win/WindowConf.js
var WindowConf = __webpack_require__(33463);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/components/permissionGroupCreator.js + 4 modules
var permissionGroupCreator = __webpack_require__(87487);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/components/PermissionGroup.js
var PermissionGroup = __webpack_require__(17763);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/events/EventDispatcher.js
var EventDispatcher = __webpack_require__(25146);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/log/Log.js + 37 modules
var Log = __webpack_require__(42307);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/events/DataEvent.js + 1 modules
var DataEvent = __webpack_require__(61503);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/WebViewJs.js + 3 modules
var WebViewJs = __webpack_require__(71836);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/androidDispatchers.js
var androidDispatchers = __webpack_require__(17385);
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
var src = __webpack_require__(15463);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/scripts/window/windowUtils.js
var windowUtils = __webpack_require__(29481);
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

/***/ 97016:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/trigger-list",
      function () {
        return __webpack_require__(71583);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [485,668,5389,9080,3853,8905,2109,636,6593,8792], () => (__webpack_exec__(97016)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=trigger-list-07e19e1dcdf717e6.js.map