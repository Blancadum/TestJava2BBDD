module.exports = [
"[project]/components/AnswerButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnswerButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
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
function AnswerButton({ label, text, onClick, disabled = false, color = 'text-green-300', isSelected = false, isConfirmed = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        disabled: disabled,
        className: `w-full px-3 py-1 text-left transition font-mono bg-black text-sm ${isConfirmed ? 'bg-gray-700 bg-opacity-40 border border-gray-600 border-opacity-50' : isSelected ? 'bg-gray-700 bg-opacity-40' : 'hover:bg-gray-700 hover:bg-opacity-20'} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} flex items-start gap-2`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `inline-block flex-shrink-0 font-bold ${getLabelColor(label)}`,
                children: getCircle(label)
            }, void 0, false, {
                fileName: "[project]/components/AnswerButton.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `${color} font-bold flex-shrink-0 min-w-fit`,
                children: label.toUpperCase()
            }, void 0, false, {
                fileName: "[project]/components/AnswerButton.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `${color} break-words flex-grow`,
                children: text
            }, void 0, false, {
                fileName: "[project]/components/AnswerButton.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `flex-shrink-0 ${color}`,
                children: "✓"
            }, void 0, false, {
                fileName: "[project]/components/AnswerButton.tsx",
                lineNumber: 47,
                columnNumber: 22
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AnswerButton.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/QuestionDisplay.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuestionDisplay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * Componente: QuestionDisplay
 * Muestra una pregunta con sus 4 opciones (a, s, d, f)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnswerButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AnswerButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TestContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/TestContext.tsx [app-ssr] (ecmascript)");
'use client';
;
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
function QuestionDisplay({ question, progress, onAnswer, isLoading, currentAnswer, hasAnswered, selectedOption, confirmedAnswer, showMenu = false, menuMode = 'main', temas = [], currentDifficulty = 'MEDIA', answers = {}, onQuestionClick = ()=>{}, currentTema }) {
    const [fontColor, setFontColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('white');
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { setTestInfo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TestContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTestInfo"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedColor = localStorage.getItem('terminalFontColor') || 'white';
        setFontColor(savedColor);
        setMounted(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setTestInfo({
            current: progress.current,
            total: progress.total
        });
    }, [
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
    if (showMenu) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `min-h-screen bg-black p-6 font-mono text-sm ${colorMap[fontColor]}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-3xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex justify-between items-center mb-6 pb-2 border-b ${getBorderClass(fontColor)} font-bold`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "MENÚ"
                            }, void 0, false, {
                                fileName: "[project]/components/QuestionDisplay.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-yellow-600",
                                children: "ESC (volver)"
                            }, void 0, false, {
                                fileName: "[project]/components/QuestionDisplay.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/QuestionDisplay.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this),
                    menuMode === 'main' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white mb-4",
                                children: "Selecciona una opción:"
                            }, void 0, false, {
                                fileName: "[project]/components/QuestionDisplay.tsx",
                                lineNumber: 154,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-gray-500 p-3 cursor-pointer hover:border-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-yellow-300",
                                        children: "1. Dificultad"
                                    }, void 0, false, {
                                        fileName: "[project]/components/QuestionDisplay.tsx",
                                        lineNumber: 156,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-400 mt-1",
                                        children: [
                                            "Cambiar nivel de dificultad (actual: ",
                                            currentDifficulty,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/QuestionDisplay.tsx",
                                        lineNumber: 157,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/QuestionDisplay.tsx",
                                lineNumber: 155,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-gray-500 p-3 cursor-pointer hover:border-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-yellow-300",
                                        children: "2. Otro Test"
                                    }, void 0, false, {
                                        fileName: "[project]/components/QuestionDisplay.tsx",
                                        lineNumber: 160,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-400 mt-1",
                                        children: "Cambiar de test/materia"
                                    }, void 0, false, {
                                        fileName: "[project]/components/QuestionDisplay.tsx",
                                        lineNumber: 161,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/QuestionDisplay.tsx",
                                lineNumber: 159,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/QuestionDisplay.tsx",
                        lineNumber: 153,
                        columnNumber: 13
                    }, this),
                    menuMode === 'difficulty' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white mb-4",
                                children: "Selecciona dificultad:"
                            }, void 0, false, {
                                fileName: "[project]/components/QuestionDisplay.tsx",
                                lineNumber: 168,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `border p-3 cursor-pointer ${currentDifficulty === 'BAJA' ? 'border-green-300 bg-green-900 bg-opacity-20' : 'border-gray-500'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-green-300",
                                    children: "1. BAJA"
                                }, void 0, false, {
                                    fileName: "[project]/components/QuestionDisplay.tsx",
                                    lineNumber: 170,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/QuestionDisplay.tsx",
                                lineNumber: 169,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `border p-3 cursor-pointer ${currentDifficulty === 'MEDIA' ? 'border-yellow-300 bg-yellow-900 bg-opacity-20' : 'border-gray-500'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-yellow-300",
                                    children: "2. MEDIA"
                                }, void 0, false, {
                                    fileName: "[project]/components/QuestionDisplay.tsx",
                                    lineNumber: 173,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/QuestionDisplay.tsx",
                                lineNumber: 172,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `border p-3 cursor-pointer ${currentDifficulty === 'ALTA' ? 'border-red-300 bg-red-900 bg-opacity-20' : 'border-gray-500'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-red-300",
                                    children: "3. ALTA"
                                }, void 0, false, {
                                    fileName: "[project]/components/QuestionDisplay.tsx",
                                    lineNumber: 176,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/QuestionDisplay.tsx",
                                lineNumber: 175,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/QuestionDisplay.tsx",
                        lineNumber: 167,
                        columnNumber: 13
                    }, this),
                    menuMode === 'other-test' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white mb-4",
                                children: "Selecciona otro test:"
                            }, void 0, false, {
                                fileName: "[project]/components/QuestionDisplay.tsx",
                                lineNumber: 183,
                                columnNumber: 15
                            }, this),
                            temas.map((tema, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-gray-500 p-2 cursor-pointer hover:border-white hover:bg-gray-900",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-cyan-300",
                                            children: [
                                                index + 1,
                                                ". ",
                                                tema.icono,
                                                " ",
                                                tema.nombre
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/QuestionDisplay.tsx",
                                            lineNumber: 186,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-400",
                                            children: tema.descripcion
                                        }, void 0, false, {
                                            fileName: "[project]/components/QuestionDisplay.tsx",
                                            lineNumber: 187,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, tema.id, true, {
                                    fileName: "[project]/components/QuestionDisplay.tsx",
                                    lineNumber: 185,
                                    columnNumber: 17
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/QuestionDisplay.tsx",
                        lineNumber: 182,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-xs border-t ${getBorderClass(fontColor)} pt-2 mt-6 ${getFooterColorClass(fontColor)}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: "ESC (volver al menú principal o test)"
                        }, void 0, false, {
                            fileName: "[project]/components/QuestionDisplay.tsx",
                            lineNumber: 194,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/QuestionDisplay.tsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/QuestionDisplay.tsx",
                lineNumber: 146,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/QuestionDisplay.tsx",
            lineNumber: 145,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen bg-black p-6 font-mono text-sm ${colorMap[fontColor]}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4 items-start",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 max-w-2xl overflow-visible",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `mb-2 pb-1 border-b ${getBorderClass(fontColor)}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex justify-between items-center font-bold mb-1`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        "Q",
                                                        progress.current.toString().padStart(2, '0'),
                                                        "/",
                                                        progress.total
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/QuestionDisplay.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-yellow-600",
                                                    children: getDifficultyLabel(question.difficulty)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/QuestionDisplay.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 15
                                                }, this),
                                                hasAnswered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-green-400",
                                                    children: "Respondida"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/QuestionDisplay.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 31
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/QuestionDisplay.tsx",
                                            lineNumber: 208,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                Math.round(progress.current / progress.total * 100),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/QuestionDisplay.tsx",
                                            lineNumber: 213,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/QuestionDisplay.tsx",
                                    lineNumber: 207,
                                    columnNumber: 11
                                }, this),
                                currentTema && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-400",
                                    children: [
                                        currentTema.icono,
                                        " ",
                                        currentTema.nombre,
                                        " - ",
                                        currentTema.descripcion
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/QuestionDisplay.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/QuestionDisplay.tsx",
                            lineNumber: 206,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 bg-gray-700 rounded h-2 overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `h-full ${fontColor === 'white' ? 'bg-white' : fontColor === 'yellow' ? 'bg-yellow-300' : fontColor === 'cyan' ? 'bg-cyan-300' : fontColor === 'red' ? 'bg-red-300' : fontColor === 'purple' ? 'bg-purple-300' : fontColor === 'fuchsia' ? 'bg-fuchsia-300' : fontColor === 'gradient' ? 'bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400' : 'bg-green-300'} transition-all`,
                                            style: {
                                                width: `${progress.current / progress.total * 100}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/QuestionDisplay.tsx",
                                            lineNumber: 226,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/QuestionDisplay.tsx",
                                        lineNumber: 225,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-400 min-w-[3rem]",
                                        children: [
                                            Math.round(progress.current / progress.total * 100),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/QuestionDisplay.tsx",
                                        lineNumber: 231,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/QuestionDisplay.tsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/QuestionDisplay.tsx",
                            lineNumber: 223,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2 leading-snug whitespace-pre-wrap text-white",
                                    children: question.text
                                }, void 0, false, {
                                    fileName: "[project]/components/QuestionDisplay.tsx",
                                    lineNumber: 237,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-0 mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnswerButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "a",
                                            text: question.options.a,
                                            onClick: ()=>onAnswer('a'),
                                            disabled: isLoading,
                                            color: colorMap[fontColor],
                                            isSelected: currentAnswer === 'a',
                                            isConfirmed: confirmedAnswer === 'a'
                                        }, void 0, false, {
                                            fileName: "[project]/components/QuestionDisplay.tsx",
                                            lineNumber: 243,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnswerButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "s",
                                            text: question.options.s,
                                            onClick: ()=>onAnswer('s'),
                                            disabled: isLoading,
                                            color: colorMap[fontColor],
                                            isSelected: currentAnswer === 's',
                                            isConfirmed: confirmedAnswer === 's'
                                        }, void 0, false, {
                                            fileName: "[project]/components/QuestionDisplay.tsx",
                                            lineNumber: 252,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnswerButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "d",
                                            text: question.options.d,
                                            onClick: ()=>onAnswer('d'),
                                            disabled: isLoading,
                                            color: colorMap[fontColor],
                                            isSelected: currentAnswer === 'd',
                                            isConfirmed: confirmedAnswer === 'd'
                                        }, void 0, false, {
                                            fileName: "[project]/components/QuestionDisplay.tsx",
                                            lineNumber: 261,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnswerButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "f",
                                            text: question.options.f,
                                            onClick: ()=>onAnswer('f'),
                                            disabled: isLoading,
                                            color: colorMap[fontColor],
                                            isSelected: currentAnswer === 'f',
                                            isConfirmed: confirmedAnswer === 'f'
                                        }, void 0, false, {
                                            fileName: "[project]/components/QuestionDisplay.tsx",
                                            lineNumber: 270,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/QuestionDisplay.tsx",
                                    lineNumber: 242,
                                    columnNumber: 11
                                }, this),
                                isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-yellow-600",
                                    children: "$ verificando respuesta..."
                                }, void 0, false, {
                                    fileName: "[project]/components/QuestionDisplay.tsx",
                                    lineNumber: 282,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/QuestionDisplay.tsx",
                            lineNumber: 236,
                            columnNumber: 9
                        }, this),
                        currentTema && !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `text-xs border-t ${getBorderClass(fontColor)} pt-1 mt-2`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: getFooterColorClass(fontColor),
                                children: [
                                    "$ ",
                                    currentTema.icono,
                                    " ",
                                    currentTema.nombre,
                                    " - ",
                                    currentTema.descripcion
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/QuestionDisplay.tsx",
                                lineNumber: 289,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/QuestionDisplay.tsx",
                            lineNumber: 288,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/QuestionDisplay.tsx",
                    lineNumber: 204,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `w-56 border-l ${getBorderClass(fontColor)} pl-4`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs font-bold mb-2",
                            children: "PREGUNTAS"
                        }, void 0, false, {
                            fileName: "[project]/components/QuestionDisplay.tsx",
                            lineNumber: 299,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-6 gap-1",
                            children: Array.from({
                                length: progress.total
                            }).map((_, idx)=>{
                                const isAnswered = idx in answers;
                                const isCurrent = idx === progress.current - 1;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>isAnswered && onQuestionClick(idx),
                                    disabled: !isAnswered && !isCurrent,
                                    className: `w-7 h-7 flex items-center justify-center text-xs font-bold border transition ${isCurrent ? `border-white ${getBorderClass(fontColor)} cursor-pointer hover:opacity-80` : isAnswered ? 'border-yellow-400 bg-yellow-900 bg-opacity-30 text-yellow-400 cursor-pointer hover:opacity-80' : 'border-gray-500 text-gray-500 cursor-not-allowed opacity-50'}`,
                                    title: isAnswered ? `Pregunta ${idx + 1}` : `Pregunta ${idx + 1} (no respondida)`,
                                    children: idx + 1
                                }, idx, false, {
                                    fileName: "[project]/components/QuestionDisplay.tsx",
                                    lineNumber: 305,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/QuestionDisplay.tsx",
                            lineNumber: 300,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/QuestionDisplay.tsx",
                    lineNumber: 298,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/QuestionDisplay.tsx",
            lineNumber: 203,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/QuestionDisplay.tsx",
        lineNumber: 202,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/tests/[testId]/session/[sessionId]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TestSessionPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * Página: tests/[testId]/session/[sessionId]/page.tsx
 * Muestra el test activo con preguntas
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$QuestionDisplay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/QuestionDisplay.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function TestSessionPage({ params }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [testIdState, setTestIdState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sessionIdState, setSessionIdState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sessionData, setSessionData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [answering, setAnswering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [selectedOption, setSelectedOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [confirmedAnswer, setConfirmedAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [difficulty, setDifficulty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('MEDIA');
    const [showMenu, setShowMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuMode, setMenuMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('main');
    const [temas, setTemas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [userName, setUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Resolver params
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        params.then((p)=>{
            setTestIdState(p.testId);
            setSessionIdState(p.sessionId);
            // Recuperar userName desde localStorage
            const sessionData = JSON.parse(localStorage.getItem(`session_${p.sessionId}`) || '{}');
            if (sessionData.userName) {
                setUserName(sessionData.userName);
            }
        });
    }, [
        params
    ]);
    // Limpiar confirmedAnswer y selectedOption cuando cambia de pregunta
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setSelectedOption(null);
        setConfirmedAnswer(null);
    }, [
        currentQuestionIndex
    ]);
    // Resetear índice cuando se carga un nuevo test
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (testIdState && sessionIdState) {
            setCurrentQuestionIndex(0);
            setSelectedOption(null);
            setConfirmedAnswer(null);
        }
    }, [
        testIdState,
        sessionIdState
    ]);
    // Cargar temas
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchTemas = async ()=>{
            try {
                const response = await fetch('/data/temas.json');
                if (!response.ok) throw new Error('Temas no encontrados');
                const data = await response.json();
                setTemas(data);
            } catch (err) {
                console.error('Error cargando temas:', err);
            }
        };
        fetchTemas();
    }, []);
    // Cargar datos de la sesión
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!testIdState || !sessionIdState) return;
        const fetchQuestions = async ()=>{
            try {
                const response = await fetch(`/data/preguntas-${testIdState}.json`);
                if (!response.ok) throw new Error('Preguntas no encontradas');
                const data = await response.json();
                // Cargar todas las 30 preguntas sin filtrar por dificultad
                const filteredQuestions = data;
                // Transformar respuesta al formato esperado
                const sampleQuestions = filteredQuestions.map((q)=>({
                        questionId: q.id,
                        text: q.texto,
                        difficulty: q.dificultad,
                        options: {
                            a: q.opciones[0],
                            s: q.opciones[1],
                            d: q.opciones[2],
                            f: q.opciones[3]
                        },
                        correctAnswer: q.respuestaCorrecta
                    }));
                const initialData = {
                    sessionId: sessionIdState,
                    testId: parseInt(testIdState),
                    userName: 'Usuario',
                    difficulty: difficulty,
                    startTime: Date.now(),
                    totalQuestions: sampleQuestions.length,
                    currentQuestion: 1,
                    answers: [],
                    questions: sampleQuestions,
                    completed: false
                };
                setSessionData(initialData);
                setCurrentQuestionIndex(0);
                setAnswers({});
                setLoading(false);
            } catch (err) {
                console.error('Error cargando preguntas:', err);
                setError('Error al cargar las preguntas');
                setLoading(false);
            }
        };
        fetchQuestions();
    }, [
        testIdState,
        sessionIdState,
        difficulty
    ]);
    const handleQuestionClick = (index)=>{
        setCurrentQuestionIndex(index);
    };
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
        setConfirmedAnswer(answer);
        setSelectedOption(null);
        setAnswering(true);
        try {
            // Verificar localmente si la respuesta es correcta
            const isCorrect = answer === currentQuestion.correctAnswer;
            // Guardar la respuesta en localStorage para los resultados
            const answersData = JSON.parse(localStorage.getItem(`test_${sessionIdState}`) || '{"answers":{}}');
            if (!answersData.answers) answersData.answers = {};
            answersData.answers[currentQuestion.questionId] = {
                answer,
                isCorrect,
                text: currentQuestion.text,
                options: currentQuestion.options,
                correctAnswer: currentQuestion.correctAnswer
            };
            if (!answersData.userName) answersData.userName = userName;
            localStorage.setItem(`test_${sessionIdState}`, JSON.stringify(answersData));
            // Mostrar feedback por 1 segundo, luego ir a resultados si es la última pregunta
            setTimeout(()=>{
                if (currentQuestionIndex < sessionData.questions.length - 1) {
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                } else if (currentQuestionIndex === sessionData.questions.length - 1) {
                    // Si es la última pregunta, ir a resultados
                    router.push(`/results/${testIdState}/${sessionIdState}`);
                }
            }, 1000);
        } catch (err) {
            console.error('Error:', err);
            setError('Error al procesar respuesta');
        } finally{
            setAnswering(false);
        }
    };
    // Teclado (asdf + navegación)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const optionOrder = [
            'a',
            's',
            'd',
            'f'
        ];
        const getNextOption = (current, direction)=>{
            if (!current) return 'a';
            const currentIndex = optionOrder.indexOf(current);
            if (direction === 'up') {
                return optionOrder[(currentIndex - 1 + optionOrder.length) % optionOrder.length];
            } else {
                return optionOrder[(currentIndex + 1) % optionOrder.length];
            }
        };
        const handleKeyPress = (e)=>{
            const key = e.key.toLowerCase();
            if (showMenu) {
                // Navegación dentro del menú
                if (menuMode === 'main') {
                    if (key === 'arrowup' || key === 'arrowdown') {
                        e.preventDefault();
                    } else if (key === '1') {
                        setMenuMode('difficulty');
                    } else if (key === '2') {
                        setMenuMode('other-test');
                    } else if (key === 'escape') {
                        setShowMenu(false);
                    }
                } else if (menuMode === 'difficulty') {
                    if (key === '1') {
                        setDifficulty('BAJA');
                        setShowMenu(false);
                    } else if (key === '2') {
                        setDifficulty('MEDIA');
                        setShowMenu(false);
                    } else if (key === '3') {
                        setDifficulty('ALTA');
                        setShowMenu(false);
                    } else if (key === 'escape') {
                        setMenuMode('main');
                    }
                } else if (menuMode === 'other-test') {
                    if (key === 'escape') {
                        setMenuMode('main');
                    } else if (key >= '1' && key <= '9') {
                        const index = parseInt(key) - 1;
                        const tema = temas[index];
                        if (tema && userName) {
                            // Ir directamente a seleccionar dificultad del nuevo test, sin reiniciar configuración
                            router.push(`/tests/${tema.id}?userName=${encodeURIComponent(userName)}`);
                        }
                    }
                }
                return;
            }
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
                        router.push(`/results/${testIdState}/${sessionIdState}`);
                    }
                }
            } else if (key === 'm') {
                e.preventDefault();
                setShowMenu(true);
                setMenuMode('main');
            } else if (key === 'escape') {
                router.push('/');
            }
        };
        window.addEventListener('keydown', handleKeyPress);
        return ()=>window.removeEventListener('keydown', handleKeyPress);
    }, [
        currentQuestionIndex,
        sessionData,
        testIdState,
        sessionIdState,
        router,
        answers,
        selectedOption,
        showMenu,
        menuMode,
        temas
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-gray-600",
                    children: "Cargando test..."
                }, void 0, false, {
                    fileName: "[project]/app/tests/[testId]/session/[sessionId]/page.tsx",
                    lineNumber: 304,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/tests/[testId]/session/[sessionId]/page.tsx",
                lineNumber: 303,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/tests/[testId]/session/[sessionId]/page.tsx",
            lineNumber: 302,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-red-600 mb-4",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/app/tests/[testId]/session/[sessionId]/page.tsx",
                        lineNumber: 314,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push('/'),
                        className: "px-6 py-2 bg-blue-500 text-white rounded-lg",
                        children: "Volver al inicio"
                    }, void 0, false, {
                        fileName: "[project]/app/tests/[testId]/session/[sessionId]/page.tsx",
                        lineNumber: 315,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tests/[testId]/session/[sessionId]/page.tsx",
                lineNumber: 313,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/tests/[testId]/session/[sessionId]/page.tsx",
            lineNumber: 312,
            columnNumber: 7
        }, this);
    }
    if (!sessionData || sessionData.questions.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-gray-600 mb-4",
                        children: "No se pudieron cargar las preguntas"
                    }, void 0, false, {
                        fileName: "[project]/app/tests/[testId]/session/[sessionId]/page.tsx",
                        lineNumber: 330,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push('/'),
                        className: "px-6 py-2 bg-blue-500 text-white rounded-lg",
                        children: "Volver al inicio"
                    }, void 0, false, {
                        fileName: "[project]/app/tests/[testId]/session/[sessionId]/page.tsx",
                        lineNumber: 331,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tests/[testId]/session/[sessionId]/page.tsx",
                lineNumber: 329,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/tests/[testId]/session/[sessionId]/page.tsx",
            lineNumber: 328,
            columnNumber: 7
        }, this);
    }
    const currentQuestion = sessionData.questions[currentQuestionIndex];
    if (!currentQuestion) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-gray-600",
                    children: "Test completado"
                }, void 0, false, {
                    fileName: "[project]/app/tests/[testId]/session/[sessionId]/page.tsx",
                    lineNumber: 348,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/tests/[testId]/session/[sessionId]/page.tsx",
                lineNumber: 347,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/tests/[testId]/session/[sessionId]/page.tsx",
            lineNumber: 346,
            columnNumber: 7
        }, this);
    }
    const currentTema = testIdState ? temas.find((t)=>t.id === parseInt(testIdState)) : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$QuestionDisplay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        question: currentQuestion,
        progress: {
            current: currentQuestionIndex + 1,
            total: sessionData.totalQuestions
        },
        onAnswer: handleAnswer,
        isLoading: answering,
        currentAnswer: selectedOption,
        hasAnswered: currentQuestionIndex in answers,
        selectedOption: selectedOption,
        confirmedAnswer: confirmedAnswer,
        showMenu: showMenu,
        menuMode: menuMode,
        temas: temas,
        currentDifficulty: difficulty,
        answers: answers,
        onQuestionClick: handleQuestionClick,
        currentTema: currentTema
    }, void 0, false, {
        fileName: "[project]/app/tests/[testId]/session/[sessionId]/page.tsx",
        lineNumber: 357,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_0bfiuj_._.js.map