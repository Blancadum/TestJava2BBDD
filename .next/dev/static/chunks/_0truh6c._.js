(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ResultsDisplay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResultsDisplay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Componente: ResultsDisplay
 * Muestra resultados finales del test
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
const getHoverBgClass = (color)=>{
    const map = {
        green: 'hover:bg-green-300',
        white: 'hover:bg-white',
        yellow: 'hover:bg-yellow-300',
        cyan: 'hover:bg-cyan-300',
        red: 'hover:bg-red-300',
        purple: 'hover:bg-purple-300',
        fuchsia: 'hover:bg-fuchsia-300',
        gradient: 'hover:bg-pink-400'
    };
    return map[color];
};
function ResultsDisplay({ results, currentTema }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [fontColor, setFontColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('white');
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [showFeedbackModal, setShowFeedbackModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedQuestion, setSelectedQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [explicaciones, setExplicaciones] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResultsDisplay.useEffect": ()=>{
            const savedColor = localStorage.getItem('terminalFontColor') || 'white';
            setFontColor(savedColor);
            setMounted(true);
            // Recuperar respuestas desde localStorage
            const answersData = JSON.parse(localStorage.getItem(`results_${results.sessionId}`) || '{}');
            setAnswers(answersData);
            // Cargar explicaciones
            const loadExplicaciones = {
                "ResultsDisplay.useEffect.loadExplicaciones": async ()=>{
                    try {
                        const response = await fetch('/data/explicaciones.json');
                        const data = await response.json();
                        setExplicaciones(data);
                    } catch (err) {
                        console.error('Error cargando explicaciones:', err);
                    }
                }
            }["ResultsDisplay.useEffect.loadExplicaciones"];
            loadExplicaciones();
        }
    }["ResultsDisplay.useEffect"], [
        results.sessionId
    ]);
    const getEvaluationColor = (evaluation)=>{
        switch(evaluation){
            case 'EXCELENTE':
                return 'text-green-600';
            case 'BIEN':
                return 'text-blue-600';
            case 'REGULAR':
                return 'text-yellow-600';
            case 'NECESITA_MEJORA':
                return 'text-red-600';
            default:
                return 'text-gray-600';
        }
    };
    const getPercentageColor = (percentage)=>{
        if (percentage >= 90) return 'bg-green-100 text-green-800';
        if (percentage >= 75) return 'bg-blue-100 text-blue-800';
        if (percentage >= 60) return 'bg-yellow-100 text-yellow-800';
        return 'bg-red-100 text-red-800';
    };
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen bg-black p-4 font-mono text-sm ${colorMap[fontColor]}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 max-w-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-1",
                            children: "$ java -jar tests.jar --results"
                        }, void 0, false, {
                            fileName: "[project]/components/ResultsDisplay.tsx",
                            lineNumber: 133,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `mb-4 pb-2 border-b ${getBorderClass(fontColor)}`
                        }, void 0, false, {
                            fileName: "[project]/components/ResultsDisplay.tsx",
                            lineNumber: 134,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-6 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-bold text-yellow-600 mb-1",
                                                    children: [
                                                        results.percentage,
                                                        "% Acierto"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ResultsDisplay.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-gray-400",
                                                    children: [
                                                        results.score,
                                                        "/",
                                                        results.totalQuestions,
                                                        " respuestas"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ResultsDisplay.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ResultsDisplay.tsx",
                                            lineNumber: 140,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "120",
                                            height: "120",
                                            viewBox: "0 0 120 120",
                                            className: "flex-shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "60",
                                                    cy: "60",
                                                    r: "50",
                                                    fill: "none",
                                                    stroke: "#4b5563",
                                                    strokeWidth: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ResultsDisplay.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 15
                                                }, this),
                                                (()=>{
                                                    const total = results.totalQuestions;
                                                    const correct = results.score;
                                                    const correctPercent = correct / total * 100;
                                                    const correctAngle = correct / total * 360;
                                                    const startX = 60 + 50 * Math.cos(-Math.PI / 2);
                                                    const startY = 60 + 50 * Math.sin(-Math.PI / 2);
                                                    const angle = correctAngle * Math.PI / 180;
                                                    const endX = 60 + 50 * Math.cos(angle - Math.PI / 2);
                                                    const endY = 60 + 50 * Math.sin(angle - Math.PI / 2);
                                                    const largeArc = correctAngle > 180 ? 1 : 0;
                                                    const correctColor = correctPercent >= 70 ? '#10b981' : correctPercent >= 50 ? '#f59e0b' : '#ef4444';
                                                    const incorrectColor = '#6b7280';
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: `M ${startX} ${startY} A 50 50 0 ${largeArc} 1 ${endX} ${endY}`,
                                                                fill: "none",
                                                                stroke: correctColor,
                                                                strokeWidth: "8",
                                                                strokeLinecap: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ResultsDisplay.tsx",
                                                                lineNumber: 169,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: `M ${endX} ${endY} A 50 50 0 ${1 - largeArc} 1 ${startX} ${startY}`,
                                                                fill: "none",
                                                                stroke: incorrectColor,
                                                                strokeWidth: "8",
                                                                strokeLinecap: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ResultsDisplay.tsx",
                                                                lineNumber: 177,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true);
                                                })(),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "60",
                                                    cy: "60",
                                                    r: "30",
                                                    fill: "#000"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ResultsDisplay.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "60",
                                                    y: "65",
                                                    textAnchor: "middle",
                                                    fill: "#10b981",
                                                    fontSize: "20",
                                                    fontWeight: "bold",
                                                    children: [
                                                        results.percentage,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ResultsDisplay.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ResultsDisplay.tsx",
                                            lineNumber: 146,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ResultsDisplay.tsx",
                                    lineNumber: 139,
                                    columnNumber: 11
                                }, this),
                                results.weakConcepts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${colorMap[fontColor]} font-bold mb-2`,
                                            children: "[ POR MEJORAR ]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ResultsDisplay.tsx",
                                            lineNumber: 198,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1 ml-2 text-sm",
                                            children: results.weakConcepts.map((concept)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        "- ",
                                                        concept,
                                                        results.suggestions[concept] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-yellow-600 ml-2",
                                                            children: results.suggestions[concept]
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ResultsDisplay.tsx",
                                                            lineNumber: 204,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, concept, true, {
                                                    fileName: "[project]/components/ResultsDisplay.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/ResultsDisplay.tsx",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ResultsDisplay.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ResultsDisplay.tsx",
                            lineNumber: 137,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `text-xs mb-4 pb-2 border-b ${getBorderClass(fontColor)}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        "$",
                                        results.userName
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ResultsDisplay.tsx",
                                    lineNumber: 216,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: new Date(results.completedAt).toLocaleString()
                                }, void 0, false, {
                                    fileName: "[project]/components/ResultsDisplay.tsx",
                                    lineNumber: 217,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ResultsDisplay.tsx",
                            lineNumber: 215,
                            columnNumber: 9
                        }, this),
                        Object.keys(answers).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${colorMap[fontColor]} font-bold mb-2`,
                                    children: "[ DETALLES ]"
                                }, void 0, false, {
                                    fileName: "[project]/components/ResultsDisplay.tsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1 text-xs ml-2 mb-4",
                                    children: Object.entries(answers).map(([questionId, answer])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `p-2 border-l-2 cursor-pointer transition hover:opacity-80 ${answer.isCorrect ? 'border-green-500 bg-green-950 bg-opacity-30' : 'border-red-500 bg-red-950 bg-opacity-30'}`,
                                            onClick: ()=>{
                                                setSelectedQuestion(Number(questionId));
                                                setShowFeedbackModal(true);
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: answer.isCorrect ? 'text-green-400' : 'text-red-400',
                                                children: [
                                                    "Q",
                                                    questionId,
                                                    ". ",
                                                    answer.isCorrect ? '✓' : '✗',
                                                    " ",
                                                    answer.text
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ResultsDisplay.tsx",
                                                lineNumber: 227,
                                                columnNumber: 19
                                            }, this)
                                        }, questionId, false, {
                                            fileName: "[project]/components/ResultsDisplay.tsx",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/ResultsDisplay.tsx",
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setSelectedQuestion(null);
                                        setShowFeedbackModal(true);
                                    },
                                    className: `w-full px-3 py-2 border ${getBorderClass(fontColor)} text-xs font-bold transition hover:opacity-80`,
                                    children: "[ FEEDBACK ]"
                                }, void 0, false, {
                                    fileName: "[project]/components/ResultsDisplay.tsx",
                                    lineNumber: 235,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ResultsDisplay.tsx",
                            lineNumber: 222,
                            columnNumber: 11
                        }, this),
                        showFeedbackModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `bg-black border ${getBorderClass(fontColor)} p-4 max-w-2xl max-h-96 overflow-y-auto`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${colorMap[fontColor]} font-bold mb-2`,
                                        children: "[ FEEDBACK ]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ResultsDisplay.tsx",
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this),
                                    selectedQuestion !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-300 space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-yellow-400 font-bold mb-2",
                                                    children: [
                                                        "Q",
                                                        selectedQuestion,
                                                        ". ",
                                                        answers[selectedQuestion]?.text
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ResultsDisplay.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ResultsDisplay.tsx",
                                                lineNumber: 251,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-t border-gray-600 pt-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: answers[selectedQuestion] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: Object.entries(answers[selectedQuestion].options).map(([key, text])=>{
                                                            const isCorrectAnswer = key === answers[selectedQuestion]?.correctAnswer;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `p-2 rounded border-l-2 ${isCorrectAnswer ? 'border-green-500 bg-green-950 bg-opacity-30 text-green-400' : 'border-red-500 bg-red-950 bg-opacity-30 text-red-400'}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-bold",
                                                                    children: [
                                                                        key.toUpperCase(),
                                                                        ". ",
                                                                        text
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/ResultsDisplay.tsx",
                                                                    lineNumber: 266,
                                                                    columnNumber: 33
                                                                }, this)
                                                            }, key, false, {
                                                                fileName: "[project]/components/ResultsDisplay.tsx",
                                                                lineNumber: 265,
                                                                columnNumber: 31
                                                            }, this);
                                                        })
                                                    }, void 0, false)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ResultsDisplay.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ResultsDisplay.tsx",
                                                lineNumber: 258,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-t border-gray-600 pt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-yellow-400 mb-2 font-bold",
                                                        children: "Explicación teórica:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ResultsDisplay.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-gray-300 leading-relaxed whitespace-pre-wrap",
                                                        children: explicaciones[results.testId.toString()]?.[selectedQuestion] || 'Explicación no disponible aún'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ResultsDisplay.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ResultsDisplay.tsx",
                                                lineNumber: 278,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ResultsDisplay.tsx",
                                        lineNumber: 250,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-yellow-400 mb-2",
                                                children: "Selecciona una pregunta para ver el feedback detallado"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ResultsDisplay.tsx",
                                                lineNumber: 287,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: Object.entries(answers).map(([questionId, answer])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setSelectedQuestion(Number(questionId)),
                                                        className: `w-full text-left px-2 py-1 border-l-2 transition hover:opacity-80 ${answer.isCorrect ? 'border-green-500 text-green-400' : 'border-red-500 text-red-400'}`,
                                                        children: [
                                                            "Q",
                                                            questionId,
                                                            ". ",
                                                            answer.isCorrect ? '✓' : '✗'
                                                        ]
                                                    }, questionId, true, {
                                                        fileName: "[project]/components/ResultsDisplay.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/ResultsDisplay.tsx",
                                                lineNumber: 288,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ResultsDisplay.tsx",
                                        lineNumber: 286,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowFeedbackModal(false),
                                        className: `w-full mt-4 px-3 py-2 border ${getBorderClass(fontColor)} text-xs font-bold transition hover:opacity-80`,
                                        children: "[ CERRAR ]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ResultsDisplay.tsx",
                                        lineNumber: 301,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ResultsDisplay.tsx",
                                lineNumber: 247,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ResultsDisplay.tsx",
                            lineNumber: 246,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>router.push('/'),
                                    className: `px-2 py-1 ${colorMap[fontColor]} ${getHoverBgClass(fontColor)} hover:text-black transition font-mono text-sm`,
                                    children: "[MENU]"
                                }, void 0, false, {
                                    fileName: "[project]/components/ResultsDisplay.tsx",
                                    lineNumber: 313,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>window.print(),
                                    className: `px-2 py-1 ${colorMap[fontColor]} ${getHoverBgClass(fontColor)} hover:text-black transition font-mono text-sm`,
                                    children: "[IMPRIMIR]"
                                }, void 0, false, {
                                    fileName: "[project]/components/ResultsDisplay.tsx",
                                    lineNumber: 319,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ResultsDisplay.tsx",
                            lineNumber: 312,
                            columnNumber: 9
                        }, this),
                        currentTema && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `text-xs border-t ${getBorderClass(fontColor)} pt-2 ${colorMap[fontColor]}`,
                            children: [
                                "$ ",
                                currentTema.icono,
                                " ",
                                currentTema.nombre,
                                " - ",
                                currentTema.descripcion
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ResultsDisplay.tsx",
                            lineNumber: 329,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ResultsDisplay.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `w-56 border-l ${getBorderClass(fontColor)} pl-4`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs font-bold mb-3",
                            children: "RESPUESTAS"
                        }, void 0, false, {
                            fileName: "[project]/components/ResultsDisplay.tsx",
                            lineNumber: 337,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-6 gap-1",
                            children: Array.from({
                                length: results.totalQuestions
                            }).map((_, idx)=>{
                                const questionId = idx + 1;
                                const answer = answers[questionId];
                                const isAnswered = !!answer;
                                const isCorrect = answer?.isCorrect || false;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        if (isAnswered) {
                                            setSelectedQuestion(questionId);
                                            setShowFeedbackModal(true);
                                        }
                                    },
                                    disabled: !isAnswered,
                                    className: `w-7 h-7 flex items-center justify-center text-xs font-bold border transition ${isAnswered ? isCorrect ? 'border-green-400 bg-green-900 bg-opacity-50 text-green-400 cursor-pointer hover:opacity-80' : 'border-red-400 bg-red-900 bg-opacity-50 text-red-400 cursor-pointer hover:opacity-80' : 'border-gray-500 bg-gray-900 bg-opacity-30 text-gray-500 cursor-not-allowed opacity-50'}`,
                                    title: `Pregunta ${questionId}${isAnswered ? isCorrect ? ' - Correcta' : ' - Incorrecta' : ' - No respondida'}`,
                                    children: questionId
                                }, idx, false, {
                                    fileName: "[project]/components/ResultsDisplay.tsx",
                                    lineNumber: 346,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/ResultsDisplay.tsx",
                            lineNumber: 338,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ResultsDisplay.tsx",
                    lineNumber: 336,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ResultsDisplay.tsx",
            lineNumber: 130,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ResultsDisplay.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
_s(ResultsDisplay, "x28Bde+VqFQ3X3KEZcKBwu0bgCE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ResultsDisplay;
var _c;
__turbopack_context__.k.register(_c, "ResultsDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/results/[testId]/[sessionId]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResultsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Página: results/[testId]/[sessionId]/page.tsx
 * Muestra los resultados finales de una sesión completada
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ResultsDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ResultsDisplay.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ResultsPage({ params }) {
    _s();
    const [sessionId, setSessionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [testId, setTestId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentTema, setCurrentTema] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResultsPage.useEffect": ()=>{
            params.then({
                "ResultsPage.useEffect": (p)=>{
                    setSessionId(p.sessionId);
                    setTestId(p.testId);
                    // Cargar tema actual
                    const loadTema = {
                        "ResultsPage.useEffect.loadTema": async ()=>{
                            try {
                                const response = await fetch('/data/temas.json');
                                const temas = await response.json();
                                const tema = temas.find({
                                    "ResultsPage.useEffect.loadTema.tema": (t)=>t.id === parseInt(p.testId)
                                }["ResultsPage.useEffect.loadTema.tema"]);
                                if (tema) setCurrentTema(tema);
                            } catch (err) {
                                console.error('Error cargando tema:', err);
                            }
                        }
                    }["ResultsPage.useEffect.loadTema"];
                    loadTema();
                }
            }["ResultsPage.useEffect"]);
        }
    }["ResultsPage.useEffect"], [
        params
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResultsPage.useEffect": ()=>{
            // Obtener resultados del servidor
            const fetchResults = {
                "ResultsPage.useEffect.fetchResults": async ()=>{
                    if (!sessionId || !testId) return;
                    try {
                        // Obtener respuestas desde localStorage
                        const testData = JSON.parse(localStorage.getItem(`test_${sessionId}`) || '{"answers":{}}');
                        const answersData = testData.answers || {};
                        const userName = testData.userName || 'Usuario';
                        const correctAnswers = Object.values(answersData).filter({
                            "ResultsPage.useEffect.fetchResults": (a)=>a.isCorrect
                        }["ResultsPage.useEffect.fetchResults"]).length;
                        const totalQuestions = Object.keys(answersData).length;
                        const percentage = totalQuestions > 0 ? Math.round(correctAnswers / totalQuestions * 100) : 0;
                        const evaluation = percentage >= 90 ? 'EXCELENTE' : percentage >= 80 ? 'BIEN' : percentage >= 60 ? 'REGULAR' : 'NECESITA_MEJORA';
                        const transformedResult = {
                            sessionId: sessionId || '',
                            testId: parseInt(testId || '0'),
                            userName: userName,
                            score: correctAnswers,
                            totalQuestions: totalQuestions,
                            percentage: percentage,
                            evaluation: evaluation,
                            weakConcepts: [],
                            suggestions: {},
                            completedAt: Date.now()
                        };
                        // Guardar también las respuestas para mostrarlas
                        localStorage.setItem(`results_${sessionId}`, JSON.stringify(answersData));
                        setResults(transformedResult);
                    } catch (err) {
                        console.error('Error:', err);
                        setError('Error al cargar resultados');
                    } finally{
                        setLoading(false);
                    }
                }
            }["ResultsPage.useEffect.fetchResults"];
            fetchResults();
        }
    }["ResultsPage.useEffect"], [
        sessionId,
        testId
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-gray-600",
                        children: "Cargando resultados..."
                    }, void 0, false, {
                        fileName: "[project]/app/results/[testId]/[sessionId]/page.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-block animate-spin mt-4 text-3xl",
                        children: "⏳"
                    }, void 0, false, {
                        fileName: "[project]/app/results/[testId]/[sessionId]/page.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/results/[testId]/[sessionId]/page.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/results/[testId]/[sessionId]/page.tsx",
            lineNumber: 100,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center bg-white rounded-lg shadow-lg p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-red-600 mb-4",
                        children: [
                            "❌ ",
                            error
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/results/[testId]/[sessionId]/page.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>window.location.href = '/',
                        className: "px-6 py-2 bg-blue-500 text-white rounded-lg",
                        children: "Volver al inicio"
                    }, void 0, false, {
                        fileName: "[project]/app/results/[testId]/[sessionId]/page.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/results/[testId]/[sessionId]/page.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/results/[testId]/[sessionId]/page.tsx",
            lineNumber: 111,
            columnNumber: 7
        }, this);
    }
    if (!results) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-gray-600",
                    children: "No se encontraron resultados"
                }, void 0, false, {
                    fileName: "[project]/app/results/[testId]/[sessionId]/page.tsx",
                    lineNumber: 129,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/results/[testId]/[sessionId]/page.tsx",
                lineNumber: 128,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/results/[testId]/[sessionId]/page.tsx",
            lineNumber: 127,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ResultsDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        results: results,
        currentTema: currentTema
    }, void 0, false, {
        fileName: "[project]/app/results/[testId]/[sessionId]/page.tsx",
        lineNumber: 135,
        columnNumber: 10
    }, this);
}
_s(ResultsPage, "zCRPu2Kr4XGsdNcuAxUuJ4aqmmk=");
_c = ResultsPage;
var _c;
__turbopack_context__.k.register(_c, "ResultsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0truh6c._.js.map