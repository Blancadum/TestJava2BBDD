(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/AnswerButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnswerButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const getLabelColor = (label)=>{
    switch(label){
        case 'a':
            return 'text-red-400';
        case 's':
            return 'text-green-400';
        case 'd':
            return 'text-cyan-400';
        case 'f':
            return 'text-yellow-400';
    }
};
const getCircle = (label)=>{
    const map = {
        a: '◯',
        s: '●',
        d: '◉',
        f: '◎'
    };
    return map[label];
};
function AnswerButton({ label, text, onClick, disabled = false, color = 'text-green-300', isSelected = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        disabled: disabled,
        className: `w-full px-3 py-1 text-left transition font-mono bg-black ${isSelected ? 'bg-gray-700 bg-opacity-40' : 'hover:bg-gray-700 hover:bg-opacity-20'} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `inline-block w-3 font-bold ${getLabelColor(label)}`,
                children: getCircle(label)
            }, void 0, false, {
                fileName: "[project]/components/AnswerButton.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `${color} ml-2 font-bold`,
                children: label.toUpperCase()
            }, void 0, false, {
                fileName: "[project]/components/AnswerButton.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `${color} ml-3`,
                children: text
            }, void 0, false, {
                fileName: "[project]/components/AnswerButton.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `ml-auto float-right ${color}`,
                children: "✓"
            }, void 0, false, {
                fileName: "[project]/components/AnswerButton.tsx",
                lineNumber: 45,
                columnNumber: 22
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AnswerButton.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = AnswerButton;
var _c;
__turbopack_context__.k.register(_c, "AnswerButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/QuestionDisplay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuestionDisplay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Componente: QuestionDisplay
 * Muestra una pregunta con sus 4 opciones (a, s, d, f)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnswerButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AnswerButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TestContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/TestContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
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
const getBorderClass = (color)=>{
    const map = {
        green: 'border-green-300',
        white: 'border-white',
        yellow: 'border-yellow-300',
        cyan: 'border-cyan-300',
        red: 'border-red-300',
        purple: 'border-purple-300',
        fuchsia: 'border-fuchsia-300',
        gradient: 'border-pink-400'
    };
    return map[color];
};
const getFooterColorClass = (color)=>{
    const map = {
        green: 'text-green-300',
        white: 'text-white',
        yellow: 'text-yellow-300',
        cyan: 'text-cyan-300',
        red: 'text-red-300',
        purple: 'text-purple-300',
        fuchsia: 'text-fuchsia-300',
        gradient: 'text-pink-300'
    };
    return map[color];
};
function QuestionDisplay({ question, progress, onAnswer, isLoading, currentAnswer, hasAnswered, selectedOption }) {
    _s();
    const [fontColor, setFontColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('green');
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { setTestInfo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TestContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTestInfo"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuestionDisplay.useEffect": ()=>{
            const savedColor = localStorage.getItem('terminalFontColor') || 'green';
            setFontColor(savedColor);
            setMounted(true);
        }
    }["QuestionDisplay.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuestionDisplay.useEffect": ()=>{
            setTestInfo({
                current: progress.current,
                total: progress.total
            });
        }
    }["QuestionDisplay.useEffect"], [
        progress,
        setTestInfo
    ]);
    const getDifficultyColor = (difficulty)=>{
        switch(difficulty){
            case 1:
                return 'bg-green-100 text-green-800';
            case 2:
                return 'bg-yellow-100 text-yellow-800';
            case 3:
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };
    const getDifficultyLabel = (difficulty)=>{
        switch(difficulty){
            case 1:
                return 'BAJA';
            case 2:
                return 'MEDIA';
            case 3:
                return 'ALTA';
            default:
                return 'DESCONOCIDA';
        }
    };
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen bg-black p-4 font-mono text-sm ${colorMap[fontColor]}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex justify-between items-center mb-3 pb-1 border-b ${getBorderClass(fontColor)} font-bold`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        "Q",
                                        progress.current.toString().padStart(2, '0'),
                                        "/",
                                        progress.total
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/QuestionDisplay.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-yellow-600",
                                    children: getDifficultyLabel(question.difficulty)
                                }, void 0, false, {
                                    fileName: "[project]/components/QuestionDisplay.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                hasAnswered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-green-400",
                                    children: "✓ respondida"
                                }, void 0, false, {
                                    fileName: "[project]/components/QuestionDisplay.tsx",
                                    lineNumber: 128,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/QuestionDisplay.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                Math.round(progress.current / progress.total * 100),
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/QuestionDisplay.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/QuestionDisplay.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 bg-gray-700 rounded h-2 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `h-full ${fontColor === 'white' ? 'bg-white' : fontColor === 'yellow' ? 'bg-yellow-300' : fontColor === 'cyan' ? 'bg-cyan-300' : fontColor === 'red' ? 'bg-red-300' : fontColor === 'purple' ? 'bg-purple-300' : fontColor === 'fuchsia' ? 'bg-fuchsia-300' : fontColor === 'gradient' ? 'bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400' : 'bg-green-300'} transition-all`,
                                    style: {
                                        width: `${progress.current / progress.total * 100}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/QuestionDisplay.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/QuestionDisplay.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-400 min-w-[3rem]",
                                children: [
                                    Math.round(progress.current / progress.total * 100),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/QuestionDisplay.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/QuestionDisplay.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/QuestionDisplay.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 leading-relaxed whitespace-pre-wrap text-white",
                            children: question.text
                        }, void 0, false, {
                            fileName: "[project]/components/QuestionDisplay.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnswerButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    label: "a",
                                    text: question.options.a,
                                    onClick: ()=>onAnswer('a'),
                                    disabled: isLoading,
                                    color: colorMap[fontColor],
                                    isSelected: currentAnswer === 'a'
                                }, void 0, false, {
                                    fileName: "[project]/components/QuestionDisplay.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnswerButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    label: "s",
                                    text: question.options.s,
                                    onClick: ()=>onAnswer('s'),
                                    disabled: isLoading,
                                    color: colorMap[fontColor],
                                    isSelected: currentAnswer === 's'
                                }, void 0, false, {
                                    fileName: "[project]/components/QuestionDisplay.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnswerButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    label: "d",
                                    text: question.options.d,
                                    onClick: ()=>onAnswer('d'),
                                    disabled: isLoading,
                                    color: colorMap[fontColor],
                                    isSelected: currentAnswer === 'd'
                                }, void 0, false, {
                                    fileName: "[project]/components/QuestionDisplay.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnswerButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    label: "f",
                                    text: question.options.f,
                                    onClick: ()=>onAnswer('f'),
                                    disabled: isLoading,
                                    color: colorMap[fontColor],
                                    isSelected: currentAnswer === 'f'
                                }, void 0, false, {
                                    fileName: "[project]/components/QuestionDisplay.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/QuestionDisplay.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this),
                        isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-yellow-600",
                            children: "$ verificando respuesta..."
                        }, void 0, false, {
                            fileName: "[project]/components/QuestionDisplay.tsx",
                            lineNumber: 189,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/QuestionDisplay.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `text-xs border-t ${getBorderClass(fontColor)} pt-2 ${getFooterColorClass(fontColor)}`,
                    children: !selectedOption ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "A | S | D | F (seleccionar)"
                            }, void 0, false, {
                                fileName: "[project]/components/QuestionDisplay.tsx",
                                lineNumber: 197,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1",
                                children: "← ATRÁS | ADELANTE → | ESC (salir)"
                            }, void 0, false, {
                                fileName: "[project]/components/QuestionDisplay.tsx",
                                lineNumber: 198,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "↑ ↓ (cambiar) | ENTER (confirmar) | ESC (cancelar)"
                            }, void 0, false, {
                                fileName: "[project]/components/QuestionDisplay.tsx",
                                lineNumber: 202,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1",
                                children: "← ATRÁS | ADELANTE → | ESC (salir)"
                            }, void 0, false, {
                                fileName: "[project]/components/QuestionDisplay.tsx",
                                lineNumber: 203,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/components/QuestionDisplay.tsx",
                    lineNumber: 194,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/QuestionDisplay.tsx",
            lineNumber: 122,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/QuestionDisplay.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_s(QuestionDisplay, "v6L/k81EXac2sw1faYqXxwQm5go=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TestContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTestInfo"]
    ];
});
_c = QuestionDisplay;
var _c;
__turbopack_context__.k.register(_c, "QuestionDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/tests/[testId]/session/[sessionId]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TestSessionPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Página: tests/[testId]/session/[sessionId]/page.tsx
 * Muestra el test activo con preguntas
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$QuestionDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/QuestionDisplay.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function TestSessionPage({ params }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [testIdState, setTestIdState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sessionIdState, setSessionIdState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sessionData, setSessionData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [answering, setAnswering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [selectedOption, setSelectedOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Resolver params
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TestSessionPage.useEffect": ()=>{
            params.then({
                "TestSessionPage.useEffect": (p)=>{
                    setTestIdState(p.testId);
                    setSessionIdState(p.sessionId);
                }
            }["TestSessionPage.useEffect"]);
        }
    }["TestSessionPage.useEffect"], [
        params
    ]);
    // Cargar datos de la sesión
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TestSessionPage.useEffect": ()=>{
            if (!testIdState || !sessionIdState) return;
            // Preguntas de ejemplo
            const sampleQuestions = [
                {
                    questionId: 1,
                    text: '¿Cuál es el nombre de la interfaz principal en Hibernate?',
                    difficulty: 2,
                    options: {
                        a: 'Session',
                        s: 'Connection',
                        d: 'EntityManager',
                        f: 'JdbcTemplate'
                    },
                    correctAnswer: 'a'
                },
                {
                    questionId: 2,
                    text: '¿Qué anotación se usa para mapear una clase a una tabla?',
                    difficulty: 1,
                    options: {
                        a: '@Table',
                        s: '@Entity',
                        d: '@Mapping',
                        f: '@Column'
                    },
                    correctAnswer: 's'
                },
                {
                    questionId: 3,
                    text: '¿Cuál es la ventaja principal del patrón DAO?',
                    difficulty: 2,
                    options: {
                        a: 'Aumenta la velocidad de la BD',
                        s: 'Separa la lógica de acceso a datos del negocio',
                        d: 'Reduce el tamaño del código',
                        f: 'Permite usar múltiples BDs'
                    },
                    correctAnswer: 's'
                },
                {
                    questionId: 4,
                    text: '¿Qué es una relación One-to-Many?',
                    difficulty: 3,
                    options: {
                        a: 'Cuando una fila se relaciona con múltiples filas',
                        s: 'Cuando una tabla tiene múltiples claves primarias',
                        d: 'Cuando un objeto contiene una lista de objetos',
                        f: 'Cuando múltiples tablas comparten la misma clave'
                    },
                    correctAnswer: 'a'
                },
                {
                    questionId: 5,
                    text: '¿Cuál es el propósito del método flush()?',
                    difficulty: 3,
                    options: {
                        a: 'Limpiar la caché de la sesión',
                        s: 'Sincronizar cambios con la BD',
                        d: 'Cerrar la conexión',
                        f: 'Eliminar todos los datos'
                    },
                    correctAnswer: 's'
                }
            ];
            const initialData = {
                sessionId: sessionIdState,
                testId: parseInt(testIdState),
                userName: 'Usuario',
                difficulty: 'MEDIA',
                startTime: Date.now(),
                totalQuestions: sampleQuestions.length,
                currentQuestion: 1,
                answers: [],
                questions: sampleQuestions,
                completed: false
            };
            setSessionData(initialData);
            setLoading(false);
        }
    }["TestSessionPage.useEffect"], [
        testIdState,
        sessionIdState
    ]);
    const handleAnswer = async (answer, isConfirmed = false)=>{
        if (!sessionData || !testIdState || !sessionIdState) return;
        const currentQuestion = sessionData.questions[currentQuestionIndex];
        if (!currentQuestion) return;
        // Si no está confirmada, solo preseleccionar
        if (!isConfirmed) {
            setSelectedOption(answer);
            return;
        }
        // Guardar respuesta localmente
        setAnswers((prev)=>({
                ...prev,
                [currentQuestionIndex]: answer
            }));
        setSelectedOption(null);
        setAnswering(true);
        try {
            const response = await fetch(`/api/tests/${testIdState}/${sessionIdState}/answer`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    questionId: currentQuestion.questionId,
                    answer
                })
            });
            const result = await response.json();
            if (result.success) {
                // Mostrar feedback por 1.5 segundos, pero permitir navegación
                setTimeout(()=>{
                    if (currentQuestionIndex < sessionData.questions.length - 1) {
                        setCurrentQuestionIndex(currentQuestionIndex + 1);
                    }
                }, 1500);
            } else {
                setError('Error al responder: ' + result.error);
            }
        } catch (err) {
            console.error('Error:', err);
            setError('Error al conectar con el servidor');
        } finally{
            setAnswering(false);
        }
    };
    // Teclado (asdf + navegación)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TestSessionPage.useEffect": ()=>{
            const optionOrder = [
                'a',
                's',
                'd',
                'f'
            ];
            const getNextOption = {
                "TestSessionPage.useEffect.getNextOption": (current, direction)=>{
                    if (!current) return 'a';
                    const currentIndex = optionOrder.indexOf(current);
                    if (direction === 'up') {
                        return optionOrder[(currentIndex - 1 + optionOrder.length) % optionOrder.length];
                    } else {
                        return optionOrder[(currentIndex + 1) % optionOrder.length];
                    }
                }
            }["TestSessionPage.useEffect.getNextOption"];
            const handleKeyPress = {
                "TestSessionPage.useEffect.handleKeyPress": (e)=>{
                    const key = e.key.toLowerCase();
                    if ([
                        'a',
                        's',
                        'd',
                        'f'
                    ].includes(key) && !answering) {
                        // Preseleccionar opción
                        handleAnswer(key, false);
                    } else if (key === 'enter' && selectedOption && !answering) {
                        // Confirmar selección con ENTER
                        handleAnswer(selectedOption, true);
                    } else if (key === 'arrowup' && !answering) {
                        // Navegar arriba entre opciones
                        e.preventDefault();
                        setSelectedOption(getNextOption(selectedOption, 'up'));
                    } else if (key === 'arrowdown' && !answering) {
                        // Navegar abajo entre opciones
                        e.preventDefault();
                        setSelectedOption(getNextOption(selectedOption, 'down'));
                    } else if (key === 'arrowleft') {
                        e.preventDefault();
                        // Siempre permitir ir atrás
                        setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1));
                    } else if (key === 'arrowright') {
                        e.preventDefault();
                        // Solo permitir ir adelante si ya respondió la pregunta actual
                        if (currentQuestionIndex in answers) {
                            if (sessionData && currentQuestionIndex < sessionData.questions.length - 1) {
                                setCurrentQuestionIndex(currentQuestionIndex + 1);
                            } else if (sessionData && currentQuestionIndex === sessionData.questions.length - 1 && Object.keys(answers).length === sessionData.questions.length) {
                                // Si está en la última pregunta y ha respondido todas, enviar
                                router.push(`/results/${sessionIdState}`);
                            }
                        }
                    } else if (key === 'escape') {
                        router.push('/');
                    }
                }
            }["TestSessionPage.useEffect.handleKeyPress"];
            window.addEventListener('keydown', handleKeyPress);
            return ({
                "TestSessionPage.useEffect": ()=>window.removeEventListener('keydown', handleKeyPress)
            })["TestSessionPage.useEffect"];
        }
    }["TestSessionPage.useEffect"], [
        currentQuestionIndex,
        sessionData,
        testIdState,
        sessionIdState,
        router,
        answers,
        selectedOption
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-gray-600",
                    children: "Cargando test..."
                }, void 0, false, {
                    fileName: "[project]/app/tests/[testId]/session/[sessionId]/page.tsx",
                    lineNumber: 236,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/tests/[testId]/session/[sessionId]/page.tsx",
                lineNumber: 235,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/tests/[testId]/session/[sessionId]/page.tsx",
            lineNumber: 234,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-red-600 mb-4",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/app/tests/[testId]/session/[sessionId]/page.tsx",
                        lineNumber: 246,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push('/'),
                        className: "px-6 py-2 bg-blue-500 text-white rounded-lg",
                        children: "Volver al inicio"
                    }, void 0, false, {
                        fileName: "[project]/app/tests/[testId]/session/[sessionId]/page.tsx",
                        lineNumber: 247,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tests/[testId]/session/[sessionId]/page.tsx",
                lineNumber: 245,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/tests/[testId]/session/[sessionId]/page.tsx",
            lineNumber: 244,
            columnNumber: 7
        }, this);
    }
    if (!sessionData || sessionData.questions.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-gray-600 mb-4",
                        children: "No se pudieron cargar las preguntas"
                    }, void 0, false, {
                        fileName: "[project]/app/tests/[testId]/session/[sessionId]/page.tsx",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push('/'),
                        className: "px-6 py-2 bg-blue-500 text-white rounded-lg",
                        children: "Volver al inicio"
                    }, void 0, false, {
                        fileName: "[project]/app/tests/[testId]/session/[sessionId]/page.tsx",
                        lineNumber: 263,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tests/[testId]/session/[sessionId]/page.tsx",
                lineNumber: 261,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/tests/[testId]/session/[sessionId]/page.tsx",
            lineNumber: 260,
            columnNumber: 7
        }, this);
    }
    const currentQuestion = sessionData.questions[currentQuestionIndex];
    if (!currentQuestion) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-gray-600",
                    children: "Test completado"
                }, void 0, false, {
                    fileName: "[project]/app/tests/[testId]/session/[sessionId]/page.tsx",
                    lineNumber: 280,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/tests/[testId]/session/[sessionId]/page.tsx",
                lineNumber: 279,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/tests/[testId]/session/[sessionId]/page.tsx",
            lineNumber: 278,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$QuestionDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        question: currentQuestion,
        progress: {
            current: currentQuestionIndex + 1,
            total: sessionData.totalQuestions
        },
        onAnswer: handleAnswer,
        isLoading: answering,
        currentAnswer: selectedOption || answers[currentQuestionIndex],
        hasAnswered: currentQuestionIndex in answers,
        selectedOption: selectedOption
    }, void 0, false, {
        fileName: "[project]/app/tests/[testId]/session/[sessionId]/page.tsx",
        lineNumber: 287,
        columnNumber: 5
    }, this);
}
_s(TestSessionPage, "5FfZqAj4MNF9mNxn/ET6x+e39PU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = TestSessionPage;
var _c;
__turbopack_context__.k.register(_c, "TestSessionPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_03.dxbf._.js.map