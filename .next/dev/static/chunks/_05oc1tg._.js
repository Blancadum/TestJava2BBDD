(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/TestContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TestProvider",
    ()=>TestProvider,
    "useTestInfo",
    ()=>useTestInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const TestContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function TestProvider({ children }) {
    _s();
    const [testInfo, setTestInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TestContext.Provider, {
        value: {
            testInfo,
            setTestInfo
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/TestContext.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(TestProvider, "k+j8qlzql63mIm7Pf9u0igC5P+8=");
_c = TestProvider;
function useTestInfo() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(TestContext);
    if (!context) {
        throw new Error('useTestInfo debe usarse dentro de TestProvider');
    }
    return context;
}
_s1(useTestInfo, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "TestProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/TerminalWindow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TerminalWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TestContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/TestContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
'use client';
;
;
const borderColorMap = {
    green: 'border-green-300',
    white: 'border-white',
    yellow: 'border-yellow-300',
    cyan: 'border-cyan-300',
    red: 'border-red-300',
    purple: 'border-purple-300',
    fuchsia: 'border-fuchsia-300',
    gradient: 'border-pink-400'
};
const bgColorMap = {
    green: 'bg-green-300',
    white: 'bg-white',
    yellow: 'bg-yellow-300',
    cyan: 'bg-cyan-300',
    red: 'bg-red-300',
    purple: 'bg-purple-300',
    fuchsia: 'bg-fuchsia-300',
    gradient: 'bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400'
};
const hoverColorMap = {
    green: 'hover:bg-green-400',
    white: 'hover:bg-gray-200',
    yellow: 'hover:bg-yellow-400',
    cyan: 'hover:bg-cyan-400',
    red: 'hover:bg-red-400',
    purple: 'hover:bg-purple-400',
    fuchsia: 'hover:bg-fuchsia-400',
    gradient: 'hover:opacity-80'
};
const footerColorMap = {
    green: 'border-green-300 text-green-500',
    white: 'border-white text-gray-300',
    yellow: 'border-yellow-300 text-yellow-500',
    cyan: 'border-cyan-300 text-cyan-500',
    red: 'border-red-300 text-red-500',
    purple: 'border-purple-300 text-purple-500',
    fuchsia: 'border-fuchsia-300 text-fuchsia-500',
    gradient: 'border-pink-400 text-pink-400'
};
function TerminalWindow({ children }) {
    _s();
    const [fontColor, setFontColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('green');
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { testInfo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TestContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTestInfo"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TerminalWindow.useEffect": ()=>{
            const savedFont = localStorage.getItem('terminalFontColor') || 'green';
            setFontColor(savedFont);
            setMounted(true);
        }
    }["TerminalWindow.useEffect"], []);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-600 p-4 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-4 border-black bg-black",
            style: {
                fontFamily: 'monospace',
                width: '680px',
                height: '320px',
                display: 'flex',
                flexDirection: 'column'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${bgColorMap[fontColor]} text-black px-3 py-1 flex justify-between items-center text-xs font-bold flex-shrink-0`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "terminal - /dev/tty"
                        }, void 0, false, {
                            fileName: "[project]/components/TerminalWindow.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `cursor-pointer ${hoverColorMap[fontColor]} px-2`,
                                    children: "_"
                                }, void 0, false, {
                                    fileName: "[project]/components/TerminalWindow.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `cursor-pointer ${hoverColorMap[fontColor]} px-2`,
                                    children: "□"
                                }, void 0, false, {
                                    fileName: "[project]/components/TerminalWindow.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `cursor-pointer ${hoverColorMap[fontColor]} px-2`,
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/components/TerminalWindow.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TerminalWindow.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TerminalWindow.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 bg-black bg-opacity-80 overflow-hidden flex-1 text-sm",
                    style: {
                        minHeight: 0
                    },
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/TerminalWindow.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${footerColorMap[fontColor]} border-t px-3 py-1 text-xs flex-shrink-0`,
                    children: [
                        "$ ",
                        testInfo?.name && `${testInfo.name}`,
                        testInfo?.current && testInfo?.total && ` [Q${testInfo.current}/${testInfo.total}]`,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-lime-300 animate-pulse",
                            children: " _"
                        }, void 0, false, {
                            fileName: "[project]/components/TerminalWindow.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TerminalWindow.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/TerminalWindow.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/TerminalWindow.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(TerminalWindow, "VN2rgW7kGCXuwTLwDZySnBNq3Fg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TestContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTestInfo"]
    ];
});
_c = TerminalWindow;
var _c;
__turbopack_context__.k.register(_c, "TerminalWindow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/StyleModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StyleModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const colorMap = {
    green: 'text-green-300',
    white: 'text-white',
    yellow: 'text-yellow-300',
    cyan: 'text-cyan-300',
    red: 'text-red-300',
    purple: 'text-purple-300',
    fuchsia: 'text-fuchsia-300',
    gradient: 'text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400'
};
const bgColorMap = {
    green: 'bg-green-300',
    white: 'bg-white',
    yellow: 'bg-yellow-300',
    cyan: 'bg-cyan-300',
    red: 'bg-red-300',
    purple: 'bg-purple-300',
    fuchsia: 'bg-fuchsia-300',
    gradient: 'bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400'
};
const colorNames = [
    'green',
    'white',
    'yellow',
    'cyan',
    'red',
    'purple',
    'fuchsia',
    'gradient'
];
function StyleModal({ isOpen, onClose }) {
    _s();
    const [fontColor, setFontColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('green');
    const [emphasisColor, setEmphasisColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('green');
    const [selectedFontIndex, setSelectedFontIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedEmphasisIndex, setSelectedEmphasisIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StyleModal.useEffect": ()=>{
            const savedFont = localStorage.getItem('terminalFontColor') || 'green';
            const savedEmphasis = localStorage.getItem('terminalEmphasisColor') || 'green';
            setFontColor(savedFont);
            setEmphasisColor(savedEmphasis);
            setSelectedFontIndex(colorNames.indexOf(savedFont));
            setSelectedEmphasisIndex(colorNames.indexOf(savedEmphasis));
        }
    }["StyleModal.useEffect"], [
        isOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StyleModal.useEffect": ()=>{
            if (!isOpen) return;
            const handleKeyDown = {
                "StyleModal.useEffect.handleKeyDown": (e)=>{
                    const key = e.key.toLowerCase();
                    if (key === 'escape') {
                        onClose();
                    }
                }
            }["StyleModal.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "StyleModal.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["StyleModal.useEffect"];
        }
    }["StyleModal.useEffect"], [
        isOpen,
        onClose
    ]);
    const handleSaveFontColor = (color)=>{
        setFontColor(color);
        localStorage.setItem('terminalFontColor', color);
        setSelectedFontIndex(colorNames.indexOf(color));
    };
    const handleSaveEmphasisColor = (color)=>{
        setEmphasisColor(color);
        localStorage.setItem('terminalEmphasisColor', color);
        setSelectedEmphasisIndex(colorNames.indexOf(color));
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-black border-4 border-gray-700 p-6 font-mono text-sm text-green-300 max-w-md w-full",
            onClick: (e)=>e.stopPropagation(),
            style: {
                fontFamily: 'monospace'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 text-green-500 font-bold",
                    children: "⚙️ ESTILO"
                }, void 0, false, {
                    fileName: "[project]/components/StyleModal.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3 text-green-400",
                            children: "color de fuente:"
                        }, void 0, false, {
                            fileName: "[project]/components/StyleModal.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1 ml-2",
                            children: colorNames.map((color, idx)=>{
                                const label = color === 'gradient' ? 'GRADIENTE' : color.toUpperCase();
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleSaveFontColor(color),
                                    className: `w-full text-left px-2 py-1 transition ${selectedFontIndex === idx ? `${colorMap[color]} bg-opacity-30 bg-gray-700` : colorMap[color]}`,
                                    children: [
                                        selectedFontIndex === idx ? '> ' : '  ',
                                        label
                                    ]
                                }, color, true, {
                                    fileName: "[project]/components/StyleModal.tsx",
                                    lineNumber: 95,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/StyleModal.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/StyleModal.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3 text-green-400",
                            children: "color de énfasis:"
                        }, void 0, false, {
                            fileName: "[project]/components/StyleModal.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1 ml-2",
                            children: colorNames.map((color, idx)=>{
                                const label = color === 'gradient' ? 'GRADIENTE' : color.toUpperCase();
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleSaveEmphasisColor(color),
                                    className: `w-full text-left px-2 py-1 transition ${selectedEmphasisIndex === idx ? `${colorMap[color]} bg-opacity-30 bg-gray-700` : colorMap[color]}`,
                                    children: [
                                        selectedEmphasisIndex === idx ? '> ' : '  ',
                                        label
                                    ]
                                }, color, true, {
                                    fileName: "[project]/components/StyleModal.tsx",
                                    lineNumber: 114,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/StyleModal.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/StyleModal.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-green-600 border-t border-green-300 pt-3",
                    children: "ESC para cerrar"
                }, void 0, false, {
                    fileName: "[project]/components/StyleModal.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/StyleModal.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/StyleModal.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(StyleModal, "rwRUW1YFQLSBCEdqBV7ZCOwlJpk=");
_c = StyleModal;
var _c;
__turbopack_context__.k.register(_c, "StyleModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SidebarMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SidebarMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StyleModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/StyleModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function SidebarMenu() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [showMenu, setShowMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showStyleModal, setShowStyleModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isInTest = pathname.includes('/session/');
    const isSelectingDifficulty = pathname.includes('/tests/') && !isInTest;
    const handleChangeTest = ()=>{
        // Retroceder al menú anterior según el contexto
        if (isInTest) {
            // Si está en un test, volver al selector de dificultad
            const testId = pathname.split('/')[2];
            router.push(`/tests/${testId}`);
        } else if (isSelectingDifficulty) {
            // Si está seleccionando dificultad, volver al selector de tests
            router.push('/');
        } else {
            // Por defecto, volver al inicio
            router.push('/');
        }
    };
    const handleRestartTest = ()=>{
        // Recargar la página actual
        window.location.reload();
    };
    const handleBackQuestion = ()=>{
        // Simular presionar flecha izquierda
        const event = new KeyboardEvent('keydown', {
            key: 'ArrowLeft',
            code: 'ArrowLeft',
            keyCode: 37,
            bubbles: true
        });
        window.dispatchEvent(event);
    };
    const handleBackToTests = ()=>{
        router.push('/');
    };
    const handleOpenStyle = ()=>{
        setShowStyleModal(true);
    };
    if (!showMenu) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: ()=>setShowMenu(true),
            className: "fixed left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-1 py-2 text-xs font-mono rounded z-50 hover:bg-gray-600",
            children: "›"
        }, void 0, false, {
            fileName: "[project]/components/SidebarMenu.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed left-0 top-0 h-screen w-32 bg-gray-800 text-white p-3 font-mono text-xs z-50 flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setShowMenu(false),
                className: "text-right mb-4 hover:text-gray-400",
                children: "‹"
            }, void 0, false, {
                fileName: "[project]/components/SidebarMenu.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b border-gray-600 pb-2 text-gray-400",
                        children: "MENÚ"
                    }, void 0, false, {
                        fileName: "[project]/components/SidebarMenu.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    isInTest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleBackQuestion,
                                className: "w-full text-left px-2 py-2 hover:bg-gray-700 rounded transition text-gray-300 hover:text-white",
                                children: "← Atrás"
                            }, void 0, false, {
                                fileName: "[project]/components/SidebarMenu.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleRestartTest,
                                className: "w-full text-left px-2 py-2 hover:bg-gray-700 rounded transition text-gray-300 hover:text-white",
                                children: "↻ Reiniciar"
                            }, void 0, false, {
                                fileName: "[project]/components/SidebarMenu.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleChangeTest,
                                className: "w-full text-left px-2 py-2 hover:bg-gray-700 rounded transition text-gray-300 hover:text-white",
                                children: "⟲ Cambiar"
                            }, void 0, false, {
                                fileName: "[project]/components/SidebarMenu.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    !isInTest && isSelectingDifficulty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleChangeTest,
                        className: "w-full text-left px-2 py-2 hover:bg-gray-700 rounded transition text-gray-300 hover:text-white",
                        children: "⟲ Cambiar"
                    }, void 0, false, {
                        fileName: "[project]/components/SidebarMenu.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleBackToTests,
                        className: "w-full text-left px-2 py-2 hover:bg-gray-700 rounded transition text-gray-300 hover:text-white",
                        children: "⌂ Materia"
                    }, void 0, false, {
                        fileName: "[project]/components/SidebarMenu.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SidebarMenu.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleOpenStyle,
                className: "w-full text-left px-2 py-2 hover:bg-gray-700 rounded transition text-gray-300 hover:text-white border-t border-gray-600",
                children: "⚙️ Estilo"
            }, void 0, false, {
                fileName: "[project]/components/SidebarMenu.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-500 text-xs border-t border-gray-600 pt-2",
                children: "v1.0"
            }, void 0, false, {
                fileName: "[project]/components/SidebarMenu.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StyleModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showStyleModal,
                onClose: ()=>setShowStyleModal(false)
            }, void 0, false, {
                fileName: "[project]/components/SidebarMenu.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SidebarMenu.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(SidebarMenu, "5Q7x/vSvEKoBVG3/7/uAmlYUBFc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = SidebarMenu;
var _c;
__turbopack_context__.k.register(_c, "SidebarMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_05oc1tg._.js.map