"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[65],{

/***/ 5828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T: () => (/* binding */ IFrameReactContainer)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/axios@1.7.9/node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(54154);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@open-iframe-resizer+core@1.4.3/node_modules/@open-iframe-resizer/core/dist/index.js
var dist = __webpack_require__(20311);
;// ../../libs/fanfanlo/dist/src/iframe/IFrameContainer.js
/* __next_internal_client_entry_do_not_use__ IFrameContainer auto */ 
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


class IFrameContainer {
    // private initializeResultList?:InitializeResult[]
    fitIframe() {
        this.initializeResultList = (0,dist/* initialize */.n_)({
            // bodyMargin:"0px",
            // bodyPadding:"0px",
            offsetSize: 3
        }, "#".concat(this.iframeId));
    }
    loadContent(content) {
        this.currentLoadCallback = null;
        this.currentErrorCallback = null;
        const resizeScript = "\n            <script>\n                const IFRAME_ID = '".concat(this.iframeId, "';\n                window.IFRAME_ID = '").concat(this.iframeId, "';\n                function notifyResize() {\n                    const body = document.body;\n                    const html = document.documentElement;\n                    \n                    // 获取实际内容高度（取最大值）\n                    const height = Math.max(\n                        body.scrollHeight,\n                        body.offsetHeight,\n                        html.scrollHeight,\n                        html.offsetHeight\n                    );\n                    \n                    // 获取实际内容宽度\n                    const width = Math.max(\n                        body.scrollWidth,\n                        body.offsetWidth,\n                        html.scrollWidth,\n                        html.offsetWidth\n                    );\n                    \n                    // 发送消息给父窗口\n                    window.parent.postMessage({\n                        type: 'resize',\n                        iframeId: IFRAME_ID,\n                        height,\n                        width\n                    }, '*');\n                }\n                \n                // 监听窗口大小变化\n                window.addEventListener('resize', notifyResize);\n                \n                // 监听DOMContentLoaded，确保DOM加载完毕后调整大小\n                document.addEventListener('DOMContentLoaded', notifyResize);\n                \n                // 监听load事件，确保所有资源加载完毕后调整大小\n                window.addEventListener('load', notifyResize);\n                \n                // 创建MutationObserver监听DOM变化\n                const observer = new MutationObserver(notifyResize);\n                observer.observe(document.documentElement, {\n                    childList: true,\n                    subtree: true,\n                    attributes: true,\n                    characterData: true\n                });\n                \n                // 监听来自父窗口的消息，处理请求重新调整大小的消息\n                window.addEventListener('message', function(event) {\n                    if (event.data && event.data.type === 'requestResize') {\n                        // 主动触发一次尺寸计算和发送\n                        notifyResize();\n                    }\n                });\n                \n                // 初始化大小\n                notifyResize();\n            </script>\n        ");
        const topScript = "\n        <script>\n        var autoWebViewJs = window.autoWebViewJs = window.parent.window.autoWebViewJs;\n        autoWebViewJs = window.parent.window.autoWebViewJs;\n        var isRealInAndroid = window.isRealInAndroid;\n        var storeUtilsConf = window.storeUtilsConf = window.parent.window.storeUtilsConf;\n        </script>\n        ";
        const bodyStyle = "<style>html, body{margin-left:-4px;padding:0;\n        background-color: white;}</style>";
        let fullContent = content;
        fullContent = fullContent.includes("<head>") ? fullContent.replace("<head>", "<head>".concat(topScript)) : "".concat(fullContent).concat(topScript);
        fullContent = fullContent.includes("</head>") ? fullContent.replace("</head>", "".concat(bodyStyle, "</head>")) : "".concat(fullContent).concat(bodyStyle);
        fullContent = fullContent.includes("</body>") ? fullContent.replace("</body>", "".concat(resizeScript, "</body>")) : "".concat(fullContent).concat(resizeScript);
        this.iframe.srcdoc = fullContent;
    }
    /**
   * 设置最小宽度和高度
   * @param minWidth 最小宽度（像素）
   * @param minHeight 最小高度（像素）
   */ setMinSize(minWidth, minHeight) {
        this.minWidth = minWidth;
        this.minHeight = minHeight;
    }
    /**
   * 设置最大宽度和高度
   * @param maxWidth 最大宽度（像素）
   * @param maxHeight 最大高度（像素）
   */ setMaxSize(maxWidth, maxHeight) {
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
    }
    handleIframeMessage(event) {
        if (!this.resizeEnabled || this.originalState.isFullscreen) return;
        if (event.data.type === "resize" && event.data.iframeId === this.iframeId) {
            let { height, width } = event.data;
            const windowMaxWidth = window.innerWidth;
            if (this.minWidth !== null) {
                width = Math.max(width, this.minWidth);
            }
            if (this.minHeight !== null) {
                height = Math.max(height, this.minHeight);
            }
            if (this.maxWidth !== null) {
                width = Math.min(width, this.maxWidth);
            } else {
                width = Math.min(width, windowMaxWidth);
            }
            if (this.maxHeight !== null) {
                height = Math.min(height, this.maxHeight);
            }
            this.container.style.height = "".concat(height, "px");
            this.container.style.width = "".concat(width, "px");
        }
    }
    /**
   * 通过URL加载iframe
   * @param url 要加载的URL
   * @param onLoad 加载成功回调函数
   * @param onError 加载失败回调函数
   */ loadUrl(url, onLoad, onError) {
        return __async(this, null, function*() {
            this.currentLoadCallback = onLoad || null;
            this.currentErrorCallback = onError || null;
            if (this.iframe) {
                this.iframe.src = url;
            } else {
                console.error("IFrameContainer: iframe element is null in loadUrl!");
            }
        });
    }
    testUrl(url) {
        return __async(this, null, function*() {
            try {
                const res = yield axios/* default */.A.get(url);
                console.log("res=", res);
            } catch (e) {
                console.error("test load url error", e);
            }
        });
    }
    // 移除 createLoadingElement, showLoading, removeLoading 方法
    /**
   * 从URL加载内容并作为字符串显示
   * @param url 要加载的资源URL
   * @returns Promise<void>
   */ loadUrlAsContent(url) {
        return __async(this, null, function*() {
            console.log("laodUrlAsContent_fn", url);
            try {
                const response = yield fetch(url);
                if (!response.ok) {
                    throw new Error("HTTP error! status: ".concat(response.status));
                }
                const content = yield response.text();
                this.loadContent(content);
            } catch (error) {
                console.error("Failed to load URL content:", error);
                throw error;
            }
        });
    }
    /**
   * 获取容器元素
   * @returns HTMLDivElement 容器元素
   */ getContainer() {
        return this.container;
    }
    /**
   * 设置容器大小
   * @param width 宽度
   * @param height 高度
   */ setSize(width, height) {
        this.container.style.width = width;
        this.container.style.height = height;
    }
    /**
   * 进入全屏模式
   * 将iframe扩展到整个窗口大小，并暂停自动调整大小
   */ enterFullscreen() {
        if (this.originalState.isFullscreen) return;
        this.originalState = {
            position: this.container.style.position,
            top: this.container.style.top,
            left: this.container.style.left,
            width: this.container.style.width,
            height: this.container.style.height,
            zIndex: this.container.style.zIndex,
            overflow: this.container.style.overflow,
            border: this.container.style.border,
            margin: this.container.style.margin,
            padding: this.container.style.padding,
            boxSizing: this.container.style.boxSizing,
            minWidth: this.minWidth,
            minHeight: this.minHeight,
            maxWidth: this.maxWidth,
            maxHeight: this.maxHeight,
            isFullscreen: true
        };
        this.resizeEnabled = false;
        this.container.style.position = "fixed";
        this.container.style.top = "0";
        this.container.style.left = "0";
        this.container.style.width = "100vw";
        this.container.style.height = "100vh";
        this.container.style.zIndex = "2147483647";
        this.container.style.border = "none";
        this.container.style.margin = "0";
        this.container.style.padding = "0";
        this.container.style.boxSizing = "border-box";
        this.setMinSize(null, null);
        this.setMaxSize(null, null);
    }
    /**
   * 退出全屏模式
   * 恢复iframe到原始大小，并重新启用自动调整大小
   */ exitFullscreen() {
        var _a, _b, _c, _d;
        if (!this.originalState.isFullscreen) return;
        this.container.style.position = this.originalState.position || "";
        this.container.style.top = this.originalState.top || "";
        this.container.style.left = this.originalState.left || "";
        this.container.style.width = this.originalState.width || "";
        this.container.style.height = this.originalState.height || "";
        this.container.style.zIndex = this.originalState.zIndex || "";
        this.container.style.overflow = this.originalState.overflow || "";
        this.container.style.border = this.originalState.border || "";
        this.container.style.margin = this.originalState.margin || "";
        this.container.style.padding = this.originalState.padding || "";
        this.container.style.boxSizing = this.originalState.boxSizing || "";
        this.setMinSize((_a = this.originalState.minWidth) != null ? _a : null, (_b = this.originalState.minHeight) != null ? _b : null);
        this.setMaxSize((_c = this.originalState.maxWidth) != null ? _c : null, (_d = this.originalState.maxHeight) != null ? _d : null);
        this.resizeEnabled = true;
        this.originalState.isFullscreen = false;
        if (this.iframe.contentWindow) {
            this.iframe.contentWindow.postMessage({
                type: "requestResize"
            }, "*");
        }
    }
    /**
   * 切换全屏状态
   * 如果当前是全屏，则退出；否则进入全屏
   */ toggleFullscreen() {
        if (this.originalState.isFullscreen) {
            this.exitFullscreen();
        } else {
            this.enterFullscreen();
        }
    }
    /**
   * 判断是否是全屏状态
   * @returns boolean 是否处于全屏状态
   */ isFullscreen() {
        return this.originalState.isFullscreen;
    }
    /**
   * 启用或禁用resize功能
   * @param enabled 是否启用resize
   */ enableResize(enabled) {
        this.resizeEnabled = enabled;
        if (enabled && this.iframe.contentWindow && !this.originalState.isFullscreen) {
            this.iframe.contentWindow.postMessage({
                type: "requestResize"
            }, "*");
        }
    }
    constructor(){
        this.minWidth = null;
        this.minHeight = null;
        this.maxWidth = null;
        this.maxHeight = null;
        this.currentLoadCallback = null;
        this.currentErrorCallback = null;
        this.resizeEnabled = true;
        // 保存原始状态的对象
        this.originalState = {
            isFullscreen: false
        };
        this.iframeId = "iframe_" + Math.random().toString(36).substr(2, 9);
        this.container = document.createElement("div");
        this.iframe = document.createElement("iframe");
        this.iframe.controller = this;
        this.container.style.width = "100%";
        this.container.style.height = "100%";
        this.container.style.overflow = "hidden";
        this.container.style.position = "relative";
        this.container.style.maxWidth = "100%";
        this.container.style.margin = "0 auto";
        this.iframe.style.width = "100%";
        this.iframe.style.height = "100%";
        this.iframe.style.border = "none";
        this.iframe.style.overflow = "hidden";
        this.iframe.style.boxSizing = "border-box";
        this.iframe.setAttribute("scrolling", "no");
        this.iframe.setAttribute("seamless", "seamless");
        this.iframe.onload = ()=>{
            if (this.currentLoadCallback) {
                this.currentLoadCallback();
            }
            if (true) {
                this.fitIframe();
            }
        };
        this.iframe.onerror = (event, source, lineno, colno, error)=>{
            console.error('%cIFrameContainer: iframe "error" event triggered.', "color: red; font-weight: bold;", event);
            const err = error || new Error(typeof event === "string" ? event : "Failed to load iframe content");
            if (this.currentErrorCallback) {
                this.currentErrorCallback(err);
            }
        };
        this.container.appendChild(this.iframe);
        this.iframe.id = this.iframeId;
        window.addEventListener("message", this.handleIframeMessage.bind(this));
    }
} //# sourceMappingURL=IFrameContainer.js.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(20532);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(58932);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(2621);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Alert/Alert.js + 6 modules
var Alert = __webpack_require__(40743);
;// ../../libs/fanfanlo/dist/src/iframe/IFrameReactContainer.js

var IFrameReactContainer_async = (__this, __arguments, generator)=>{
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







const IFrameReactContainer = (param)=>{
    let { style, className, url, content, minWidth, minHeight, maxWidth, maxHeight, onError, onLoad } = param;
    const containerRef = (0,react.useRef)(null);
    const iframeContainerRef = (0,react.useRef)(null);
    const [iframeLoading, setIframeLoading] = (0,react.useState)(false);
    const [iframeError, setIframeError] = (0,react.useState)(null);
    (0,react.useEffect)(()=>{
        if (!iframeContainerRef.current && containerRef.current) {
            iframeContainerRef.current = new IFrameContainer();
            const container = iframeContainerRef.current;
            container.setMinSize(minWidth != null ? minWidth : null, minHeight != null ? minHeight : null);
            container.setMaxSize(maxWidth != null ? maxWidth : null, maxHeight != null ? maxHeight : null);
            containerRef.current.appendChild(container.getContainer());
        }
        return ()=>{
            if (containerRef.current && iframeContainerRef.current) {
                containerRef.current.removeChild(iframeContainerRef.current.getContainer());
                iframeContainerRef.current = null;
            }
        };
    }, [
        minWidth,
        minHeight,
        maxWidth,
        maxHeight
    ]);
    (0,react.useEffect)(()=>{
        const iframeContainer = iframeContainerRef.current;
        if (!iframeContainer) return;
        const loadContentOrUrl = ()=>IFrameReactContainer_async(void 0, null, function*() {
                setIframeLoading(true);
                setIframeError(null);
                try {
                    if (content) {
                        iframeContainer.loadContent(content);
                        setIframeLoading(false);
                        onLoad == null ? void 0 : onLoad();
                    } else if (url) {
                        const handleLoad = ()=>{
                            setIframeLoading(false);
                            setIframeError(null);
                            onLoad == null ? void 0 : onLoad();
                        };
                        const handleError = (error)=>{
                            console.error("%cIFrameReactContainer: handleError (callback from IFrameContainer) triggered.", "color: red;", error);
                            setIframeLoading(false);
                            setIframeError(error);
                            onError == null ? void 0 : onError(error);
                        };
                        iframeContainer.loadUrl(url, handleLoad, handleError);
                    } else {
                        setIframeLoading(false);
                    }
                } catch (error) {
                    console.error(">>> Sync Error during loadContentOrUrl setup:", error);
                    if (error instanceof Error) {
                        setIframeLoading(false);
                        setIframeError(error);
                        onError == null ? void 0 : onError(error);
                    } else {
                        const unknownError = new Error("An unknown error occurred during setup");
                        setIframeLoading(false);
                        setIframeError(unknownError);
                        onError == null ? void 0 : onError(unknownError);
                    }
                }
            });
        loadContentOrUrl();
    }, [
        url,
        content,
        onError,
        onLoad,
        iframeContainerRef.current
    ]);
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", {
        ref: containerRef,
        style,
        className,
        children: [
            iframeLoading && /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                sx: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 2
                },
                children: [
                    /* @__PURE__ */ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
                        size: 24
                    }),
                    /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body2",
                        sx: {
                            ml: 1
                        },
                        children: "Loading preview..."
                    })
                ]
            }),
            iframeError && !iframeLoading && /* @__PURE__ */ (0,jsx_runtime.jsxs)(Alert/* default */.A, {
                severity: "error",
                sx: {
                    m: 1
                },
                children: [
                    "Preview Error: ",
                    iframeError.message
                ]
            })
        ]
    });
}; //# sourceMappingURL=IFrameReactContainer.js.map


/***/ }),

/***/ 42375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)(Button/* default */.A, {
                onClick: ()=>{
                    window.location.reload();
                },
                children: "\u91CD\u65B0\u52A0\u8F7D\u5168\u90E8\u529F\u80FD"
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

/***/ 77190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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


/***/ })

}]);
//# sourceMappingURL=65-98b121d80c59370c.js.map