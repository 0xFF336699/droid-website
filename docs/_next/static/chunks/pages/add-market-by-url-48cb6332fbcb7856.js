(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[436],{

/***/ 7452:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/add-market-by-url",
      function () {
        return __webpack_require__(72205);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 72205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AddMarketByUrlPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/app/AppShell.js + 1 modules
var AppShell = __webpack_require__(42375);
// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/appbar/AppBar.js + 3 modules
var AppBar = __webpack_require__(77190);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/dispatcher/Dispatcher.js
var Dispatcher = __webpack_require__(93276);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/index.js
var src = __webpack_require__(15463);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(13915);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(79489);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(2621);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(20532);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(13461);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(58448);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/iframe/IFrameReactContainer.js + 1 modules
var IFrameReactContainer = __webpack_require__(5828);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Checkbox/Checkbox.js + 6 modules
var Checkbox = __webpack_require__(22673);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 1 modules
var FormControlLabel = __webpack_require__(8771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ahooks@3.8.4_react@19.0.0/node_modules/ahooks/es/useDebounceFn/index.js + 5 modules
var useDebounceFn = __webpack_require__(28661);
// EXTERNAL MODULE: ../../node_modules/.pnpm/axios@1.7.9/node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(54154);
;// ./src/components/page/add-market-by-url/ui/market-input-form/MarketInputForm.tsx









async function loadHtmlFromUrl(value) {
    const url = "https://autumn-mouse-8da2.mailregios.workers.dev/?url=".concat(encodeURIComponent(value));
    const res = await axios/* default */.A.get(url);
    if (!res.data || !res.data.html) {
        throw new Error('Failed to fetch HTML content.');
    }
    // 这个html就是html的内容。
    // 获取url的origin
    const { origin } = new URL(value);
    // 替换所有script和link标签的src/href为绝对路径
    let html = res.data.html;
    // 拼接时去除重复斜杠，保证只有一个/
    function joinOriginPath(origin, path) {
        let url;
        if (origin.endsWith('/') && path.startsWith('/')) {
            url = origin + path.slice(1);
        } else if (!origin.endsWith('/') && !path.startsWith('/')) {
            url = origin + '/' + path;
        } else {
            url = origin + path;
        }
        // 追加__time__参数
        const timeParam = "__time__=".concat(Date.now());
        if (url.includes('?')) {
            // 已有参数，判断是否已带__time__，避免重复
            if (/([&?])__time__=/.test(url)) return url;
            return url + (url.endsWith('?') || url.endsWith('&') ? '' : '&') + timeParam;
        } else {
            return url + '?' + timeParam;
        }
    }
    // 替换<script src="...">
    html = html.replace(/(<script[^>]*src=["'])(?!https?:|\/\/)([^"'>]+)/gi, (match, p1, p2)=>"".concat(p1).concat(joinOriginPath(origin, p2)));
    // 替换<link href="...">，常用于css
    html = html.replace(/(<link[^>]*href=["'])(?!https?:|\/\/)([^"'>]+)/gi, (match, p1, p2)=>"".concat(p1).concat(joinOriginPath(origin, p2)));
    // 替换<style>@import '...'</style> 里的路径（简单处理）
    html = html.replace(/(@import\s+["'])(?!https?:|\/\/)([^"']+)/gi, (match, p1, p2)=>"".concat(p1).concat(joinOriginPath(origin, p2)));
    console.log('parsed html=', html);
    return html;
}
const MarketInputForm = (param)=>{
    let { isFullMarketPage, onMarketConfigReady, initialValue = '', initialIsUrl = true } = param;
    const [inputValue, setInputValue] = (0,react.useState)(initialValue);
    const [isUrl, setIsUrl] = (0,react.useState)(initialIsUrl);
    const [error, setError] = (0,react.useState)('');
    const { t } = (0,src.useTranslation)("homepage/components/page/add-market-by-url/ui/market-input-form/content");
    // Basic URL validation (can be improved)
    const isValidUrl = (url)=>{
        try {
            new URL(url);
            return true;
        } catch (_) {
            return false;
        }
    };
    // The core logic for processing input
    const processInput = (0,react.useCallback)(async (value, isUrlChecked)=>{
        console.log('Processing input:', value, 'Is URL:', isUrlChecked);
        if (!value) {
            setError('');
            onMarketConfigReady({
                str: '',
                isUrl
            });
            console.log('cleared');
            return;
        }
        if (isUrlChecked) {
            if (value && isValidUrl(value)) {
                const html = await loadHtmlFromUrl(value);
                if (html) {
                    setError('');
                    onMarketConfigReady({
                        str: html,
                        isUrl: false
                    });
                } else {
                    setError('Failed to fetch HTML content.');
                }
            } else if (value) {
                setError('Please enter a valid URL.');
            } else {
                setError(''); // Clear error if input is empty
            }
        } else {
            // For HTML content, maybe trigger on button click or explicit action?
            // For now, let's assume direct content is always 'ready'
            setError('');
            onMarketConfigReady({
                str: value,
                isUrl: false
            });
        }
    }, [
        onMarketConfigReady
    ]);
    // Create the debounced version of the processing function
    const { run: debouncedProcessInput } = (0,useDebounceFn/* default */.A)(processInput, {
        wait: 500
    });
    const handleInputChange = (event)=>{
        const newValue = event.target.value;
        setInputValue(newValue);
        // Call the debounced function when typing
        debouncedProcessInput(newValue, isUrl);
    };
    const handleCheckboxChange = (event)=>{
        const newIsUrl = event.target.checked;
        setIsUrl(newIsUrl);
        // Call the original function immediately when checkbox changes
        processInput(inputValue, newIsUrl);
    };
    let isUrlLabel = "";
    if (isUrl) {
        isUrlLabel = isFullMarketPage ? t('content.full.url') : t('content.item.url');
    } else {
        isUrlLabel = isFullMarketPage ? t('content.full.html') : t('content.item.html');
    }
    let placeholder = "";
    if (!isUrl) {
        placeholder = isFullMarketPage ? "<html><body><div>script list<div></body></html>" : "<html><body><div>".concat(t('content.item.come'), '<a href="https://github.com/your-name/your-repo/docs/index.html">').concat(t('content.item.myMarketName'), "</a>").concat(t('content.item.stroll'), "</div></body></html>");
    } else {
        placeholder = isFullMarketPage ? "https://github.com/your-name/your-repo/docs/market.html" : "https://github.com/your-name/your-repo/docs/summary.html";
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            display: 'flex',
            flexDirection: 'column',
            gap: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                label: isUrlLabel,
                variant: "outlined",
                fullWidth: true,
                value: inputValue,
                onChange: handleInputChange,
                error: !!error,
                helperText: error,
                placeholder: placeholder,
                multiline: !isUrl,
                rows: isUrl ? 1 : 4
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.A, {
                    checked: isUrl,
                    onChange: handleCheckboxChange
                }),
                label: t("content.isUrl")
            })
        ]
    });
};
/* harmony default export */ const market_input_form_MarketInputForm = (MarketInputForm);

;// ./src/components/page/add-market-by-url/ui/AddMarketByUrl.tsx










const AddMarketByUrl = ()=>{
    const [name, setName] = (0,react.useState)('');
    const [summary, setSummary] = (0,react.useState)('');
    const [description, setDescription] = (0,react.useState)('');
    const [urlOrHtmlConf, setUrlOrHtmlConf] = (0,react.useState)(null);
    const [fullMarketConf, setFullMarketConf] = (0,react.useState)(null);
    const { t } = (0,src.useTranslation)("homepage/components/page/add-market-by-url/ui/content");
    const iframeStyle = {
        minWidth: '300px',
        minHeight: '200px',
        border: '1px solid #ccc',
        display: 'block'
    };
    const handleMarketConfigReady = (0,react.useCallback)((config)=>{
        setUrlOrHtmlConf(config);
    }, []);
    const handleFullMarketConfigReady = (0,react.useCallback)((config)=>{
        setFullMarketConf(config);
    }, []);
    const itemMarket = urlOrHtmlConf;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.A, {
        sx: {
            maxWidth: 800,
            margin: 'auto',
            mt: 2
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.A, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    sx: {
                        mb: 2,
                        color: 'error.main'
                    },
                    children: t("content.warning")
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "h5",
                    component: "h2",
                    gutterBottom: true,
                    children: t("content.setNewMarket")
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                    sx: {
                        mb: 2
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                            fullWidth: true,
                            label: t("content.marketName"),
                            variant: "outlined",
                            value: name,
                            onChange: (e)=>setName(e.target.value),
                            sx: {
                                mb: 1
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                            fullWidth: true,
                            label: t("content.marketSummary"),
                            variant: "outlined",
                            value: summary,
                            onChange: (e)=>setSummary(e.target.value),
                            multiline: true,
                            rows: 2,
                            sx: {
                                mb: 1
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                            fullWidth: true,
                            label: t("content.marketDescription"),
                            variant: "outlined",
                            value: description,
                            onChange: (e)=>setDescription(e.target.value),
                            multiline: true,
                            rows: 4,
                            sx: {
                                mb: 2
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "h6",
                    gutterBottom: true,
                    sx: {
                        mt: 2
                    },
                    children: t("content.itemMarket")
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(market_input_form_MarketInputForm, {
                    onMarketConfigReady: handleMarketConfigReady,
                    isFullMarketPage: false
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "h6",
                    gutterBottom: true,
                    sx: {
                        mt: 2
                    },
                    children: t("content.fullMarket")
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(market_input_form_MarketInputForm, {
                    onMarketConfigReady: handleFullMarketConfigReady,
                    isFullMarketPage: true
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.A, {
                    sx: {
                        my: 2
                    }
                }),
                (name || summary || description || itemMarket || fullMarketConf) && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("hr", {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            sx: {
                                textAlign: 'center'
                            },
                            variant: "h6",
                            component: "h3",
                            gutterBottom: true,
                            children: t("content.settingPreview")
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                            variant: "body1",
                            component: "p",
                            paragraph: true,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("strong", {
                                    children: [
                                        t("content.marketName"),
                                        ":"
                                    ]
                                }),
                                " ",
                                name || t("content.isNotSet")
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                            variant: "body1",
                            component: "p",
                            paragraph: true,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("strong", {
                                    children: [
                                        t("content.marketSummary"),
                                        ":"
                                    ]
                                }),
                                " ",
                                summary || t("content.isNotSet")
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                            variant: "body1",
                            component: "p",
                            paragraph: true,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("strong", {
                                    children: [
                                        t("content.marketDescription"),
                                        ":"
                                    ]
                                }),
                                " ",
                                description || t("content.isNotSet")
                            ]
                        }),
                        itemMarket && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            sx: {
                                mb: 2
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                    variant: "subtitle1",
                                    gutterBottom: true,
                                    children: t("content.marketCardPreview")
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(IFrameReactContainer/* IFrameReactContainer */.T, {
                                    url: itemMarket.isUrl ? itemMarket.str : undefined,
                                    content: !itemMarket.isUrl ? itemMarket.str : undefined,
                                    style: iframeStyle
                                }, "item-market-".concat(itemMarket.str))
                            ]
                        }),
                        fullMarketConf && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                    variant: "subtitle1",
                                    gutterBottom: true,
                                    children: t("content.marketFullPreview")
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(IFrameReactContainer/* IFrameReactContainer */.T, {
                                    url: fullMarketConf.isUrl ? fullMarketConf.str : undefined,
                                    content: !fullMarketConf.isUrl ? fullMarketConf.str : undefined,
                                    style: iframeStyle
                                }, "full-market-".concat(fullMarketConf.str))
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const ui_AddMarketByUrl = (AddMarketByUrl);

;// ./src/pages/add-market-by-url/index.tsx




function AddMarketByUrlPage() {
    const marketConf = {
        name: 'Test Market URL',
        summary: 'Test Summary',
        description: 'Test Description',
        itemMarket: {
            str: '',
            isUrl: true
        },
        fullMarket: {
            str: '',
            isUrl: true
        }
    };
    const dispatcher = new Dispatcher/* Dispatcher */.m();
    const { t } = (0,src.useTranslation)('homepage/pages/add-market-by-url/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(AppShell/* AppShell */.G, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
                appbarProps: {
                    title: t("content.title"),
                    back: true,
                    backDispatcher: dispatcher
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_AddMarketByUrl, {})
        ]
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [505,668,80,117,798,236,774,74,69,415,65,636,593,792], () => (__webpack_exec__(7452)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=add-market-by-url-48cb6332fbcb7856.js.map