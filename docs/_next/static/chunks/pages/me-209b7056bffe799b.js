(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[4578],{

/***/ 5782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ TabbarContainer)
/* harmony export */ });
/* unused harmony export NavBar */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33736);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31453);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45054);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2625);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46925);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23114);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(97721);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76654);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90228);
/* harmony import */ var _mui_icons_material_Storefront__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54497);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79764);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _barrel_optimize_names_useTranslation_react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61182);
/* harmony import */ var _page_AndroidPageContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55960);
/* harmony import */ var _mui_icons_material_Create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48249);
/* __next_internal_client_entry_do_not_use__ NavBar,TabbarContainer auto */ 









function BottomBar() {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        id: "bottom-navigation",
        sx: {
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0
        },
        elevation: 3,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NavBar, {})
    });
}
function NavBar() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { pathname } = router;
    const { t } = (0,_barrel_optimize_names_useTranslation_react_i18next__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .Bd)("app-ui/components/tabbar/content");
    const tabInfoList = [
        {
            label: t("content.home"),
            value: "/",
            icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {})
        },
        {
            label: t("content.create"),
            value: "/script-creator",
            icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Create__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {})
        },
        {
            label: t("content.market"),
            value: "/market",
            icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Storefront__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {})
        },
        {
            label: t("content.settings"),
            value: "/settings",
            icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {})
        }
    ];
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
        showLabels: true,
        value: pathname,
        children: tabInfoList.map((e)=>/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                label: e.label,
                icon: e.icon,
                "data-id": "tabbar-".concat(e.value),
                className: pathname === e.value ? "Mui-selected" : "",
                onClick: ()=>{
                    if (pathname === e.value) return;
                    router.push(e.value);
                }
            }, e.value))
    });
}
function TabbarContainer(param) {
    let { children, titleConf } = param;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
        sx: {
            display: "flex",
            flexDirection: "column",
            height: "100vh"
        },
        children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Ay, {}),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
                direction: "column",
                spacing: 3,
                children: [
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_page_AndroidPageContent__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
                        titleConf,
                        children
                    }),
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BottomBar, {})
                ]
            })
        ]
    });
} //# sourceMappingURL=Tabbar.js.map


/***/ }),

/***/ 7070:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/me",
      function () {
        return __webpack_require__(87864);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 42375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G: () => (/* binding */ AppShell)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/index.js
var src = __webpack_require__(15463);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/proxyWatch.js
var proxyWatch = __webpack_require__(99759);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/watchUpdates.js
var watchUpdates = __webpack_require__(28523);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.1_@babel+core@7.26.0_babel-plugin-macros@3.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.82.0/node_modules/next/router.js
var next_router = __webpack_require__(79764);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.1.4_i18next@24.1.0_typescript@5.8.2__react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(56750);
;// __barrel_optimize__?names=I18nextProvider!=!../../node_modules/.pnpm/react-i18next@15.1.4_i18next@24.1.0_typescript@5.8.2__react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-i18next/dist/es/index.js


;// ../../libs/app/ui/dist/src/components/app/AppShell.js
/* __next_internal_client_entry_do_not_use__ AppShell auto */ 





(0,src.i18nInit)();
function AppShell(param) {
    let { children } = param;
    const router = (0,next_router.useRouter)();
    const scrollKey = "scrollPositionInfo";
    const href = window.location.href.split("#")[0];
    const dynamicKey = "dynamic-".concat(href);
    const s = src.storeUtils.namespace(dynamicKey);
    let o = s.read(dynamicKey);
    if (!o) {
        o = {};
        s.write(dynamicKey, o);
    }
    o = (0,proxyWatch/* toProxy */.I$)(o);
    (0,react.useEffect)(()=>{
        router.beforePopState((state)=>{
            s.clearAll();
            return true;
        });
    });
    (0,react.useEffect)(()=>{
        s.write(dynamicKey, o);
        return (0,watchUpdates/* watchUpdates */.c)(o, ()=>{
            s.write(dynamicKey, o);
        });
    }, []);
    (0,react.useEffect)(()=>{
        const info = s.read(scrollKey) || {
            x: 0,
            y: 0
        };
        if (info.x == 0 && info.y == 0) {
            listenScroll();
        } else {
            window.requestAnimationFrame(()=>{
                window.scrollTo(info.x, info.y);
                listenScroll();
            });
        }
        function onScroll(e) {
            s.write(scrollKey, {
                x: window.scrollX,
                y: window.scrollY
            });
        }
        function listenScroll() {
            window.addEventListener("scroll", onScroll);
        }
        function unsub() {
            window.removeEventListener("scroll", onScroll);
        }
        return unsub;
    });
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(src.StorePageContext, {
        value: s,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(src.StorePageDynamicContext, {
            value: o,
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(es/* I18nextProvider */.xC, {
                i18n: src.i18n,
                children
            })
        })
    });
} //# sourceMappingURL=AppShell.js.map


/***/ }),

/***/ 55960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AndroidPageContent)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(46925);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(29800);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Container/Container.js + 1 modules
var Container = __webpack_require__(87239);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/nextjs/env/env.js
var env = __webpack_require__(91839);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/index.js
var src = __webpack_require__(15463);
;// ../../libs/app/ui/dist/src/components/page/PageContent.js

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





function Reload() {
    if (!env/* isDev */.Cu) return /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: "  "
    });
    const { t } = (0,src.useTranslation)("app-ui/components/page/content");
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)(Button/* default */.A, {
                onClick: ()=>{
                    window.location.reload();
                },
                children: t("PageContent.refresh")
            }),
            /* @__PURE__ */ new Date().toLocaleString()
        ]
    });
}
const ScrollP = /*#__PURE__*/ (0,react.createContext)({
    x: 0,
    y: 0
});
let index = 0;
function PageContent(param) {
    let { children, titleConf, reload } = param;
    index++;
    const scroll = (0,react.useContext)(ScrollP);
    const clazz = "".concat(Date.now() + Math.random() * Date.now());
    (0,react.useEffect)(()=>{
        function loadTitle() {
            return __async(this, null, function*() {
                if (!titleConf) return;
                let title = titleConf.title;
                if (titleConf.ns) {
                    title = yield (0,src.loadI18nValue)(titleConf.ns, titleConf.key || "content.title");
                }
                if (!title) return;
                document.title = title;
            });
        }
        loadTitle();
    }, []);
    (0,react.useEffect)(()=>{
        const container = document.getElementsByClassName(clazz)[0];
        if (!container) return;
        container.scrollTop = scroll.y;
        const onScroll = ()=>{
            var scrollTop = container.scrollTop;
            scroll.y = scrollTop;
        };
        container.removeEventListener("scroll", onScroll);
        container.addEventListener("scroll", onScroll, {
            passive: true
        });
        return ()=>container.removeEventListener("scroll", onScroll);
    }, [
        clazz,
        scroll
    ]);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(Container/* default */.A, {
        className: clazz,
        sx: {
            flexGrow: 1,
            overflow: "auto",
            padding: "0px"
        },
        children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            children: [
                (reload || reload == void 0) && /* @__PURE__ */ (0,jsx_runtime.jsx)(Reload, {}),
                children
            ]
        })
    });
} //# sourceMappingURL=PageContent.js.map

;// ../../libs/app/ui/dist/src/components/page/AndroidPageContent.js



function AndroidPageContent(param) {
    let { children, titleConf, reload } = param;
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(PageContent, {
        titleConf,
        reload,
        children
    });
} //# sourceMappingURL=AndroidPageContent.js.map


/***/ }),

/***/ 61182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bd: () => (/* reexport safe */ C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_1_4_i18next_24_1_0_typescript_5_8_2_react_dom_19_0_0_react_19_0_0_react_19_0_0_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__.Bd)
/* harmony export */ });
/* harmony import */ var C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_1_4_i18next_24_1_0_typescript_5_8_2_react_dom_19_0_0_react_19_0_0_react_19_0_0_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56750);



/***/ }),

/***/ 61346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ LanguageSelect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33736);
/* harmony import */ var _barrel_optimize_names_googleGeminiIntersectionLocale_0xff336699_js_i18n_lngs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7961);
/* harmony import */ var _barrel_optimize_names_Box_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20532);
/* harmony import */ var _barrel_optimize_names_Box_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67063);
/* harmony import */ var _barrel_optimize_names_Box_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77177);
/* harmony import */ var _barrel_optimize_names_Box_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6774);
/* harmony import */ var _barrel_optimize_names_Box_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66533);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15463);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91844);





// import { useTranslation } from 'react-i18next';

const ii = _fanfanlo__WEBPACK_IMPORTED_MODULE_2__.i18n;
function LanguageSelect() {
    const lm = _barrel_optimize_names_googleGeminiIntersectionLocale_0xff336699_js_i18n_lngs__WEBPACK_IMPORTED_MODULE_3__/* .googleGeminiIntersectionLocale */ .i;
    const { t, i18n } = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('homepage/components/language-selector/content');
    let lng = i18n.language || "";
    console.log('lng', lng);
    if (!(lng in lm)) {
        lng = lng.split('-')[0];
    }
    if (!(lng in lm)) {
        lng = 'en';
    }
    const [language, setLanguage] = react__WEBPACK_IMPORTED_MODULE_1__.useState(lng);
    const handleChange = (event)=>{
        const cl = event.target.value;
        setLanguage(event.target.value);
        // i18n.changeLanguage(cl);
        ii.changeLanguage(cl);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const setHtmlLang = function setHtmlLang(l) {
            document.documentElement.lang = l; //navigator.language
            const dir = i18n.dir(l);
            document.documentElement.dir = dir; // l.split('-')[0].toLowerCase() == 'ar' ? 'rtl' : 'ltr'
            console.log('setHtmlLang=', i18n, 'dir=', dir);
        };
        setHtmlLang(language);
    }, [
        language,
        i18n
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
            sx: {
                pt: "1rem",
                pb: "1rem"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                sx: {
                    minWidth: '150px'
                },
                size: "small",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                        id: "demo-simple-select-label",
                        children: t('content.title')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                        labelId: "demo-simple-select-label",
                        id: "demo-simple-select",
                        value: language,
                        label: "language2",
                        onChange: handleChange,
                        children: Object.keys(lm).map((key)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
                                value: key,
                                children: lm[key]
                            }, key);
                        })
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 87864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33736);
/* harmony import */ var _barrel_optimize_names_Box_List_ListItem_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20532);
/* harmony import */ var _barrel_optimize_names_Box_List_ListItem_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55665);
/* harmony import */ var _barrel_optimize_names_Box_List_ListItem_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70754);
/* harmony import */ var _src_components_language_selector_LanguageSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61346);
/* harmony import */ var _app_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42375);
/* harmony import */ var _app_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5782);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91844);
/* __next_internal_client_entry_do_not_use__ default auto */ 


// import { TabbarContainer } from '@src/components/tabbar/Tabbar';




function VisitInfo() {
    const [visitInfo] = useProxyWatch(appProxyModel, 'visitInfo', undefined);
    return /*#__PURE__*/ _jsx("div", {
        children: JSON.stringify(visitInfo)
    });
}
const C = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(new Date());
function Me() {
    const U = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(C);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_ui__WEBPACK_IMPORTED_MODULE_3__/* .AppShell */ .G, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_ui__WEBPACK_IMPORTED_MODULE_4__/* .TabbarContainer */ .y, {
            titleConf: {
                ns: "homepage/pages/me/content",
                key: "me.title"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_List_ListItem_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                "data-id": "page-me-content",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_language_selector_LanguageSelect__WEBPACK_IMPORTED_MODULE_1__/* .LanguageSelect */ .p, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_List_ListItem_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_List_ListItem_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_List_ListItem_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                                children: new Array(130).fill(0).map((_, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        children: i
                                    }, i))
                            })
                        }, "a")
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Me);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [485,668,5389,8454,1835,1236,6774,9300,9850,3213,636,6593,8792], () => (__webpack_exec__(7070)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=me-209b7056bffe799b.js.map