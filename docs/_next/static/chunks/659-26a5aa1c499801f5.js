"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[659],{

/***/ 15089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ isFocusVisible)
/* harmony export */ });
/**
 * Returns a boolean indicating if the event's target has :focus-visible
 */
function isFocusVisible(element) {
  try {
    return element.matches(':focus-visible');
  } catch (error) {
    // Do not warn on jsdom tests, otherwise all tests that rely on focus have to be skipped
    // Tests that rely on `:focus-visible` will still have to be skipped in jsdom
    if (false) {}
  }
  return false;
}

/***/ }),

/***/ 29474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10029);
/* __next_internal_client_entry_do_not_use__ default auto */ 
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mui_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A);


/***/ }),

/***/ 33659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ButtonBase_ButtonBase)
});

// UNUSED EXPORTS: ButtonBaseRoot

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(401);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/isFocusVisible/isFocusVisible.js
var isFocusVisible = __webpack_require__(15089);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(17122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(63375);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/utils/useForkRef.js
var useForkRef = __webpack_require__(91872);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/utils/useEventCallback.js
var useEventCallback = __webpack_require__(29474);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/useLazyRef/useLazyRef.js
var useLazyRef = __webpack_require__(66861);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/useLazyRipple/useLazyRipple.js
/* __next_internal_client_entry_do_not_use__ LazyRipple,default auto */ 

/**
 * Lazy initialization container for the Ripple instance. This improves
 * performance by delaying mounting the ripple until it's needed.
 */ class LazyRipple {
    /** React ref to the ripple instance */ /** If the ripple component should be mounted */ /** Promise that resolves when the ripple component is mounted */ /** If the ripple component has been mounted */ /** React state hook setter */ static create() {
        return new LazyRipple();
    }
    static use() {
        /* eslint-disable */ const ripple = (0,useLazyRef/* default */.A)(LazyRipple.create).current;
        const [shouldMount, setShouldMount] = react.useState(false);
        ripple.shouldMount = shouldMount;
        ripple.setShouldMount = setShouldMount;
        react.useEffect(ripple.mountEffect, [
            shouldMount
        ]);
        /* eslint-enable */ return ripple;
    }
    mount() {
        if (!this.mounted) {
            this.mounted = createControlledPromise();
            this.shouldMount = true;
            this.setShouldMount(this.shouldMount);
        }
        return this.mounted;
    }
    /* Ripple API */ start() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        this.mount().then(()=>{
            var _this_ref_current;
            return (_this_ref_current = this.ref.current) === null || _this_ref_current === void 0 ? void 0 : _this_ref_current.start(...args);
        });
    }
    stop() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        this.mount().then(()=>{
            var _this_ref_current;
            return (_this_ref_current = this.ref.current) === null || _this_ref_current === void 0 ? void 0 : _this_ref_current.stop(...args);
        });
    }
    pulsate() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        this.mount().then(()=>{
            var _this_ref_current;
            return (_this_ref_current = this.ref.current) === null || _this_ref_current === void 0 ? void 0 : _this_ref_current.pulsate(...args);
        });
    }
    constructor(){
        this.mountEffect = ()=>{
            if (this.shouldMount && !this.didMount) {
                if (this.ref.current !== null) {
                    this.didMount = true;
                    this.mounted.resolve();
                }
            }
        };
        this.ref = {
            current: null
        };
        this.mounted = null;
        this.didMount = false;
        this.shouldMount = false;
        this.setShouldMount = null;
    }
}
function useLazyRipple() {
    return LazyRipple.use();
}
function createControlledPromise() {
    let resolve;
    let reject;
    const p = new Promise((resolveFn, rejectFn)=>{
        resolve = resolveFn;
        reject = rejectFn;
    });
    p.resolve = resolve;
    p.reject = reject;
    return p;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js
var _tagged_template_literal = __webpack_require__(86739);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-transition-group/esm/TransitionGroup.js + 1 modules
var TransitionGroup = __webpack_require__(89191);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/useTimeout/useTimeout.js + 1 modules
var useTimeout = __webpack_require__(23104);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__(5241);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/ButtonBase/Ripple.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


/**
 * @ignore - internal component.
 */ 
function Ripple(props) {
    const { className, classes, pulsate = false, rippleX, rippleY, rippleSize, in: inProp, onExited, timeout } = props;
    const [leaving, setLeaving] = react.useState(false);
    const rippleClassName = (0,clsx/* default */.A)(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
    const rippleStyles = {
        width: rippleSize,
        height: rippleSize,
        top: -(rippleSize / 2) + rippleY,
        left: -(rippleSize / 2) + rippleX
    };
    const childClassName = (0,clsx/* default */.A)(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
    if (!inProp && !leaving) {
        setLeaving(true);
    }
    react.useEffect(()=>{
        if (!inProp && onExited != null) {
            // react-transition-group#onExited
            const timeoutId = setTimeout(onExited, timeout);
            return ()=>{
                clearTimeout(timeoutId);
            };
        }
        return undefined;
    }, [
        onExited,
        inProp,
        timeout
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: rippleClassName,
        style: rippleStyles,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            className: childClassName
        })
    });
}
 false ? 0 : void 0;
/* harmony default export */ const ButtonBase_Ripple = (Ripple);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(75719);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/ButtonBase/touchRippleClasses.js


function getTouchRippleUtilityClass(slot) {
    return generateUtilityClass('MuiTouchRipple', slot);
}
const touchRippleClasses = (0,generateUtilityClasses/* default */.A)('MuiTouchRipple', [
    'root',
    'ripple',
    'rippleVisible',
    'ripplePulsate',
    'child',
    'childLeaving',
    'childPulsate'
]);
/* harmony default export */ const ButtonBase_touchRippleClasses = (touchRippleClasses);

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/ButtonBase/TouchRipple.js
/* __next_internal_client_entry_do_not_use__ DELAY_RIPPLE,TouchRippleRoot,TouchRippleRipple,default auto */ 
function _templateObject() {
    const data = (0,_tagged_template_literal._)([
        "\n  0% {\n    transform: scale(0);\n    opacity: 0.1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0.3;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0,_tagged_template_literal._)([
        "\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0,_tagged_template_literal._)([
        "\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.92);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n"
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
function _templateObject3() {
    const data = (0,_tagged_template_literal._)([
        "\n  opacity: 0;\n  position: absolute;\n\n  &.",
        " {\n    opacity: 0.3;\n    transform: scale(1);\n    animation-name: ",
        ";\n    animation-duration: ",
        "ms;\n    animation-timing-function: ",
        ";\n  }\n\n  &.",
        " {\n    animation-duration: ",
        "ms;\n  }\n\n  & .",
        " {\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: currentColor;\n  }\n\n  & .",
        " {\n    opacity: 0;\n    animation-name: ",
        ";\n    animation-duration: ",
        "ms;\n    animation-timing-function: ",
        ";\n  }\n\n  & .",
        " {\n    position: absolute;\n    /* @noflip */\n    left: 0px;\n    top: 0;\n    animation-name: ",
        ";\n    animation-duration: 2500ms;\n    animation-timing-function: ",
        ";\n    animation-iteration-count: infinite;\n    animation-delay: 200ms;\n  }\n"
    ]);
    _templateObject3 = function() {
        return data;
    };
    return data;
}










const DURATION = 550;
const DELAY_RIPPLE = 80;
const enterKeyframe = (0,emotion_react_browser_esm/* keyframes */.i7)(_templateObject());
const exitKeyframe = (0,emotion_react_browser_esm/* keyframes */.i7)(_templateObject1());
const pulsateKeyframe = (0,emotion_react_browser_esm/* keyframes */.i7)(_templateObject2());
const TouchRippleRoot = (0,styled/* default */.Ay)('span', {
    name: 'MuiTouchRipple',
    slot: 'Root'
})({
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit'
});
// This `styled()` function invokes keyframes. `styled-components` only supports keyframes
// in string templates. Do not convert these styles in JS object as it will break.
const TouchRippleRipple = (0,styled/* default */.Ay)(ButtonBase_Ripple, {
    name: 'MuiTouchRipple',
    slot: 'Ripple'
})(_templateObject3(), ButtonBase_touchRippleClasses.rippleVisible, enterKeyframe, DURATION, (param)=>{
    let { theme } = param;
    return theme.transitions.easing.easeInOut;
}, ButtonBase_touchRippleClasses.ripplePulsate, (param)=>{
    let { theme } = param;
    return theme.transitions.duration.shorter;
}, ButtonBase_touchRippleClasses.child, ButtonBase_touchRippleClasses.childLeaving, exitKeyframe, DURATION, (param)=>{
    let { theme } = param;
    return theme.transitions.easing.easeInOut;
}, ButtonBase_touchRippleClasses.childPulsate, pulsateKeyframe, (param)=>{
    let { theme } = param;
    return theme.transitions.easing.easeInOut;
});
/**
 * @ignore - internal component.
 *
 * TODO v5: Make private
 */ const TouchRipple = /*#__PURE__*/ react.forwardRef(function TouchRipple(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiTouchRipple'
    });
    const { center: centerProp = false, classes = {}, className, ...other } = props;
    const [ripples, setRipples] = react.useState([]);
    const nextKey = react.useRef(0);
    const rippleCallback = react.useRef(null);
    react.useEffect(()=>{
        if (rippleCallback.current) {
            rippleCallback.current();
            rippleCallback.current = null;
        }
    }, [
        ripples
    ]);
    // Used to filter out mouse emulated events on mobile.
    const ignoringMouseDown = react.useRef(false);
    // We use a timer in order to only show the ripples for touch "click" like events.
    // We don't want to display the ripple for touch scroll events.
    const startTimer = (0,useTimeout/* default */.A)();
    // This is the hook called once the previous timeout is ready.
    const startTimerCommit = react.useRef(null);
    const container = react.useRef(null);
    const startCommit = react.useCallback((params)=>{
        const { pulsate, rippleX, rippleY, rippleSize, cb } = params;
        setRipples((oldRipples)=>[
                ...oldRipples,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TouchRippleRipple, {
                    classes: {
                        ripple: (0,clsx/* default */.A)(classes.ripple, ButtonBase_touchRippleClasses.ripple),
                        rippleVisible: (0,clsx/* default */.A)(classes.rippleVisible, ButtonBase_touchRippleClasses.rippleVisible),
                        ripplePulsate: (0,clsx/* default */.A)(classes.ripplePulsate, ButtonBase_touchRippleClasses.ripplePulsate),
                        child: (0,clsx/* default */.A)(classes.child, ButtonBase_touchRippleClasses.child),
                        childLeaving: (0,clsx/* default */.A)(classes.childLeaving, ButtonBase_touchRippleClasses.childLeaving),
                        childPulsate: (0,clsx/* default */.A)(classes.childPulsate, ButtonBase_touchRippleClasses.childPulsate)
                    },
                    timeout: DURATION,
                    pulsate: pulsate,
                    rippleX: rippleX,
                    rippleY: rippleY,
                    rippleSize: rippleSize
                }, nextKey.current)
            ]);
        nextKey.current += 1;
        rippleCallback.current = cb;
    }, [
        classes
    ]);
    const start = react.useCallback(function() {
        let event = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, cb = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ()=>{};
        const { pulsate = false, center = centerProp || options.pulsate, fakeElement = false // For test purposes
         } = options;
        if ((event === null || event === void 0 ? void 0 : event.type) === 'mousedown' && ignoringMouseDown.current) {
            ignoringMouseDown.current = false;
            return;
        }
        if ((event === null || event === void 0 ? void 0 : event.type) === 'touchstart') {
            ignoringMouseDown.current = true;
        }
        const element = fakeElement ? null : container.current;
        const rect = element ? element.getBoundingClientRect() : {
            width: 0,
            height: 0,
            left: 0,
            top: 0
        };
        // Get the size of the ripple
        let rippleX;
        let rippleY;
        let rippleSize;
        if (center || event === undefined || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
            rippleX = Math.round(rect.width / 2);
            rippleY = Math.round(rect.height / 2);
        } else {
            const { clientX, clientY } = event.touches && event.touches.length > 0 ? event.touches[0] : event;
            rippleX = Math.round(clientX - rect.left);
            rippleY = Math.round(clientY - rect.top);
        }
        if (center) {
            rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);
            // For some reason the animation is broken on Mobile Chrome if the size is even.
            if (rippleSize % 2 === 0) {
                rippleSize += 1;
            }
        } else {
            const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
            const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
            rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
        }
        // Touche devices
        if (event === null || event === void 0 ? void 0 : event.touches) {
            // check that this isn't another touchstart due to multitouch
            // otherwise we will only clear a single timer when unmounting while two
            // are running
            if (startTimerCommit.current === null) {
                // Prepare the ripple effect.
                startTimerCommit.current = ()=>{
                    startCommit({
                        pulsate,
                        rippleX,
                        rippleY,
                        rippleSize,
                        cb
                    });
                };
                // Delay the execution of the ripple effect.
                // We have to make a tradeoff with this delay value.
                startTimer.start(DELAY_RIPPLE, ()=>{
                    if (startTimerCommit.current) {
                        startTimerCommit.current();
                        startTimerCommit.current = null;
                    }
                });
            }
        } else {
            startCommit({
                pulsate,
                rippleX,
                rippleY,
                rippleSize,
                cb
            });
        }
    }, [
        centerProp,
        startCommit,
        startTimer
    ]);
    const pulsate = react.useCallback(()=>{
        start({}, {
            pulsate: true
        });
    }, [
        start
    ]);
    const stop = react.useCallback((event, cb)=>{
        startTimer.clear();
        // The touch interaction occurs too quickly.
        // We still want to show ripple effect.
        if ((event === null || event === void 0 ? void 0 : event.type) === 'touchend' && startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
            startTimer.start(0, ()=>{
                stop(event, cb);
            });
            return;
        }
        startTimerCommit.current = null;
        setRipples((oldRipples)=>{
            if (oldRipples.length > 0) {
                return oldRipples.slice(1);
            }
            return oldRipples;
        });
        rippleCallback.current = cb;
    }, [
        startTimer
    ]);
    react.useImperativeHandle(ref, ()=>({
            pulsate,
            start,
            stop
        }), [
        pulsate,
        start,
        stop
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TouchRippleRoot, {
        className: (0,clsx/* default */.A)(ButtonBase_touchRippleClasses.root, classes.root, className),
        ref: container,
        ...other,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TransitionGroup/* default */.A, {
            component: null,
            exit: true,
            children: ripples
        })
    });
});
 false ? 0 : void 0;
/* harmony default export */ const ButtonBase_TouchRipple = (TouchRipple);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass_generateUtilityClass = __webpack_require__(42159);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/ButtonBase/buttonBaseClasses.js


function getButtonBaseUtilityClass(slot) {
    return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiButtonBase', slot);
}
const buttonBaseClasses = (0,generateUtilityClasses/* default */.A)('MuiButtonBase', [
    'root',
    'disabled',
    'focusVisible'
]);
/* harmony default export */ const ButtonBase_buttonBaseClasses = (buttonBaseClasses);

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/ButtonBase/ButtonBase.js
/* __next_internal_client_entry_do_not_use__ ButtonBaseRoot,default auto */ 














const useUtilityClasses = (ownerState)=>{
    const { disabled, focusVisible, focusVisibleClassName, classes } = ownerState;
    const slots = {
        root: [
            'root',
            disabled && 'disabled',
            focusVisible && 'focusVisible'
        ]
    };
    const composedClasses = (0,composeClasses/* default */.A)(slots, getButtonBaseUtilityClass, classes);
    if (focusVisible && focusVisibleClassName) {
        composedClasses.root += " ".concat(focusVisibleClassName);
    }
    return composedClasses;
};
const ButtonBaseRoot = (0,styled/* default */.Ay)('button', {
    name: 'MuiButtonBase',
    slot: 'Root',
    overridesResolver: (props, styles)=>styles.root
})({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    // Reset
    WebkitAppearance: 'none',
    // Reset
    textDecoration: 'none',
    // So we take precedent over the style of a native <a /> element.
    color: 'inherit',
    '&::-moz-focus-inner': {
        borderStyle: 'none' // Remove Firefox dotted outline.
    },
    ["&.".concat(ButtonBase_buttonBaseClasses.disabled)]: {
        pointerEvents: 'none',
        // Disable link interactions
        cursor: 'default'
    },
    '@media print': {
        colorAdjust: 'exact'
    }
});
/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains a load of style reset and some focus/ripple logic.
 */ const ButtonBase = /*#__PURE__*/ react.forwardRef(function ButtonBase(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiButtonBase'
    });
    const { action, centerRipple = false, children, className, component = 'button', disabled = false, disableRipple = false, disableTouchRipple = false, focusRipple = false, focusVisibleClassName, LinkComponent = 'a', onBlur, onClick, onContextMenu, onDragLeave, onFocus, onFocusVisible, onKeyDown, onKeyUp, onMouseDown, onMouseLeave, onMouseUp, onTouchEnd, onTouchMove, onTouchStart, tabIndex = 0, TouchRippleProps, touchRippleRef, type, ...other } = props;
    const buttonRef = react.useRef(null);
    const ripple = useLazyRipple();
    const handleRippleRef = (0,useForkRef/* default */.A)(ripple.ref, touchRippleRef);
    const [focusVisible, setFocusVisible] = react.useState(false);
    if (disabled && focusVisible) {
        setFocusVisible(false);
    }
    react.useImperativeHandle(action, ()=>({
            focusVisible: ()=>{
                setFocusVisible(true);
                buttonRef.current.focus();
            }
        }), []);
    const enableTouchRipple = ripple.shouldMount && !disableRipple && !disabled;
    react.useEffect(()=>{
        if (focusVisible && focusRipple && !disableRipple) {
            ripple.pulsate();
        }
    }, [
        disableRipple,
        focusRipple,
        focusVisible,
        ripple
    ]);
    const handleMouseDown = useRippleHandler(ripple, 'start', onMouseDown, disableTouchRipple);
    const handleContextMenu = useRippleHandler(ripple, 'stop', onContextMenu, disableTouchRipple);
    const handleDragLeave = useRippleHandler(ripple, 'stop', onDragLeave, disableTouchRipple);
    const handleMouseUp = useRippleHandler(ripple, 'stop', onMouseUp, disableTouchRipple);
    const handleMouseLeave = useRippleHandler(ripple, 'stop', (event)=>{
        if (focusVisible) {
            event.preventDefault();
        }
        if (onMouseLeave) {
            onMouseLeave(event);
        }
    }, disableTouchRipple);
    const handleTouchStart = useRippleHandler(ripple, 'start', onTouchStart, disableTouchRipple);
    const handleTouchEnd = useRippleHandler(ripple, 'stop', onTouchEnd, disableTouchRipple);
    const handleTouchMove = useRippleHandler(ripple, 'stop', onTouchMove, disableTouchRipple);
    const handleBlur = useRippleHandler(ripple, 'stop', (event)=>{
        if (!(0,isFocusVisible/* default */.A)(event.target)) {
            setFocusVisible(false);
        }
        if (onBlur) {
            onBlur(event);
        }
    }, false);
    const handleFocus = (0,useEventCallback/* default */.A)((event)=>{
        // Fix for https://github.com/facebook/react/issues/7769
        if (!buttonRef.current) {
            buttonRef.current = event.currentTarget;
        }
        if ((0,isFocusVisible/* default */.A)(event.target)) {
            setFocusVisible(true);
            if (onFocusVisible) {
                onFocusVisible(event);
            }
        }
        if (onFocus) {
            onFocus(event);
        }
    });
    const isNonNativeButton = ()=>{
        const button = buttonRef.current;
        return component && component !== 'button' && !(button.tagName === 'A' && button.href);
    };
    const handleKeyDown = (0,useEventCallback/* default */.A)((event)=>{
        // Check if key is already down to avoid repeats being counted as multiple activations
        if (focusRipple && !event.repeat && focusVisible && event.key === ' ') {
            ripple.stop(event, ()=>{
                ripple.start(event);
            });
        }
        if (event.target === event.currentTarget && isNonNativeButton() && event.key === ' ') {
            event.preventDefault();
        }
        if (onKeyDown) {
            onKeyDown(event);
        }
        // Keyboard accessibility for non interactive elements
        if (event.target === event.currentTarget && isNonNativeButton() && event.key === 'Enter' && !disabled) {
            event.preventDefault();
            if (onClick) {
                onClick(event);
            }
        }
    });
    const handleKeyUp = (0,useEventCallback/* default */.A)((event)=>{
        // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
        // https://codesandbox.io/p/sandbox/button-keyup-preventdefault-dn7f0
        if (focusRipple && event.key === ' ' && focusVisible && !event.defaultPrevented) {
            ripple.stop(event, ()=>{
                ripple.pulsate(event);
            });
        }
        if (onKeyUp) {
            onKeyUp(event);
        }
        // Keyboard accessibility for non interactive elements
        if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === ' ' && !event.defaultPrevented) {
            onClick(event);
        }
    });
    let ComponentProp = component;
    if (ComponentProp === 'button' && (other.href || other.to)) {
        ComponentProp = LinkComponent;
    }
    const buttonProps = {};
    if (ComponentProp === 'button') {
        buttonProps.type = type === undefined ? 'button' : type;
        buttonProps.disabled = disabled;
    } else {
        if (!other.href && !other.to) {
            buttonProps.role = 'button';
        }
        if (disabled) {
            buttonProps['aria-disabled'] = disabled;
        }
    }
    const handleRef = (0,useForkRef/* default */.A)(ref, buttonRef);
    const ownerState = {
        ...props,
        centerRipple,
        component,
        disabled,
        disableRipple,
        disableTouchRipple,
        focusRipple,
        tabIndex,
        focusVisible
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ButtonBaseRoot, {
        as: ComponentProp,
        className: (0,clsx/* default */.A)(classes.root, className),
        ownerState: ownerState,
        onBlur: handleBlur,
        onClick: onClick,
        onContextMenu: handleContextMenu,
        onFocus: handleFocus,
        onKeyDown: handleKeyDown,
        onKeyUp: handleKeyUp,
        onMouseDown: handleMouseDown,
        onMouseLeave: handleMouseLeave,
        onMouseUp: handleMouseUp,
        onDragLeave: handleDragLeave,
        onTouchEnd: handleTouchEnd,
        onTouchMove: handleTouchMove,
        onTouchStart: handleTouchStart,
        ref: handleRef,
        tabIndex: disabled ? -1 : tabIndex,
        type: type,
        ...buttonProps,
        ...other,
        children: [
            children,
            enableTouchRipple ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonBase_TouchRipple, {
                ref: handleRippleRef,
                center: centerRipple,
                ...TouchRippleProps
            }) : null
        ]
    });
});
function useRippleHandler(ripple, rippleAction, eventCallback) {
    let skipRippleAction = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    return (0,useEventCallback/* default */.A)((event)=>{
        if (eventCallback) {
            eventCallback(event);
        }
        if (!skipRippleAction) {
            ripple[rippleAction](event);
        }
        return true;
    });
}
 false ? 0 : void 0;
/* harmony default export */ const ButtonBase_ButtonBase = (ButtonBase);


/***/ })

}]);
//# sourceMappingURL=659-26a5aa1c499801f5.js.map