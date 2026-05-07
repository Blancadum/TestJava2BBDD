(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/TestSelector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TestSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
function TestSelector() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [tests, setTests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userName, setUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [level, setLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('fontColor');
    const [currentCategory, setCurrentCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedFontColor, setSelectedFontColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('green');
    const [selectedEmphasisColor, setSelectedEmphasisColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('green');
    const categories = [
        {
            id: 'BaseDatos',
            name: 'BBDD'
        },
        {
            id: 'Programación/Teoría',
            name: 'Java2'
        },
        {
            id: 'Programación/EACs',
            name: 'EACs Java2'
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TestSelector.useEffect": ()=>{
            const savedFontColor = localStorage.getItem('terminalFontColor');
            const savedEmphasisColor = localStorage.getItem('terminalEmphasisColor');
            if (savedFontColor) setSelectedFontColor(savedFontColor);
            if (savedEmphasisColor) setSelectedEmphasisColor(savedEmphasisColor);
            fetchTests();
        }
    }["TestSelector.useEffect"], []);
    async function fetchTests() {
        try {
            const response = await fetch('/api/tests');
            const result = await response.json();
            if (result.success) {
                setTests(result.tests);
            } else {
                setError('Error al cargar tests');
            }
        } catch (err) {
            setError('Error al conectar con el servidor');
            console.error(err);
        } finally{
            setLoading(false);
        }
    }
    const getTestsInCategory = (catId)=>{
        return tests.filter((t)=>t.category === catId);
    };
    const currentTests = getTestsInCategory(currentCategory);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TestSelector.useEffect": ()=>{
            const handleKeyDown = {
                "TestSelector.useEffect.handleKeyDown": (e)=>{
                    if (level === 'fontColor') {
                        if (e.key === 'ArrowDown') {
                            e.preventDefault();
                            setSelectedIndex({
                                "TestSelector.useEffect.handleKeyDown": (prev)=>(prev + 1) % colorNames.length
                            }["TestSelector.useEffect.handleKeyDown"]);
                        } else if (e.key === 'ArrowUp') {
                            e.preventDefault();
                            setSelectedIndex({
                                "TestSelector.useEffect.handleKeyDown": (prev)=>(prev - 1 + colorNames.length) % colorNames.length
                            }["TestSelector.useEffect.handleKeyDown"]);
                        } else if (e.key === 'Enter') {
                            setSelectedFontColor(colorNames[selectedIndex]);
                            localStorage.setItem('terminalFontColor', colorNames[selectedIndex]);
                            setLevel('emphasisColor');
                            setSelectedIndex(0);
                        }
                    } else if (level === 'emphasisColor') {
                        if (e.key === 'ArrowDown') {
                            e.preventDefault();
                            setSelectedIndex({
                                "TestSelector.useEffect.handleKeyDown": (prev)=>(prev + 1) % colorNames.length
                            }["TestSelector.useEffect.handleKeyDown"]);
                        } else if (e.key === 'ArrowUp') {
                            e.preventDefault();
                            setSelectedIndex({
                                "TestSelector.useEffect.handleKeyDown": (prev)=>(prev - 1 + colorNames.length) % colorNames.length
                            }["TestSelector.useEffect.handleKeyDown"]);
                        } else if (e.key === 'Enter') {
                            setSelectedEmphasisColor(colorNames[selectedIndex]);
                            localStorage.setItem('terminalEmphasisColor', colorNames[selectedIndex]);
                            setLevel('nombre');
                            setSelectedIndex(0);
                        }
                    } else if (level === 'nombre') {
                        if (e.key === 'Enter') {
                            if (userName.trim()) {
                                setLevel('main');
                                setSelectedIndex(0);
                            }
                        }
                    } else if (level === 'main') {
                        if (e.key === 'ArrowDown') {
                            e.preventDefault();
                            setSelectedIndex({
                                "TestSelector.useEffect.handleKeyDown": (prev)=>(prev + 1) % categories.length
                            }["TestSelector.useEffect.handleKeyDown"]);
                        } else if (e.key === 'ArrowUp') {
                            e.preventDefault();
                            setSelectedIndex({
                                "TestSelector.useEffect.handleKeyDown": (prev)=>(prev - 1 + categories.length) % categories.length
                            }["TestSelector.useEffect.handleKeyDown"]);
                        } else if (e.key === 'Enter') {
                            setCurrentCategory(categories[selectedIndex].id);
                            setLevel('category');
                            setSelectedIndex(0);
                        }
                    } else if (level === 'category') {
                        if (e.key === 'ArrowDown') {
                            e.preventDefault();
                            setSelectedIndex({
                                "TestSelector.useEffect.handleKeyDown": (prev)=>(prev + 1) % (currentTests.length + 1)
                            }["TestSelector.useEffect.handleKeyDown"]);
                        } else if (e.key === 'ArrowUp') {
                            e.preventDefault();
                            setSelectedIndex({
                                "TestSelector.useEffect.handleKeyDown": (prev)=>(prev - 1 + currentTests.length + 1) % (currentTests.length + 1)
                            }["TestSelector.useEffect.handleKeyDown"]);
                        } else if (e.key === 'Enter') {
                            if (selectedIndex < currentTests.length) {
                                router.push(`/tests/${currentTests[selectedIndex].id}?userName=${encodeURIComponent(userName)}`);
                            } else {
                                setLevel('main');
                                setSelectedIndex(0);
                            }
                        } else if (e.key === 'Escape') {
                            setLevel('main');
                            setSelectedIndex(0);
                        }
                    }
                }
            }["TestSelector.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "TestSelector.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["TestSelector.useEffect"];
        }
    }["TestSelector.useEffect"], [
        level,
        selectedIndex,
        categories,
        currentTests,
        userName,
        currentCategory
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `min-h-screen bg-black p-4 font-mono text-sm ${colorMap[selectedFontColor]} flex items-center justify-center`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "$ cargando tests..."
            }, void 0, false, {
                fileName: "[project]/components/TestSelector.tsx",
                lineNumber: 172,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/TestSelector.tsx",
            lineNumber: 171,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen bg-black p-4 font-mono text-sm ${colorMap[selectedFontColor]}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-1",
                    children: "$ java -jar tests.jar"
                }, void 0, false, {
                    fileName: "[project]/components/TestSelector.tsx",
                    lineNumber: 180,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `mb-4 ${selectedFontColor === 'green' ? 'text-green-500' : selectedFontColor === 'white' ? 'text-gray-400' : selectedFontColor === 'yellow' ? 'text-yellow-500' : selectedFontColor === 'cyan' ? 'text-cyan-500' : selectedFontColor === 'red' ? 'text-red-500' : 'text-magenta-500'}`,
                    children: "TESTS JAVA v1.0"
                }, void 0, false, {
                    fileName: "[project]/components/TestSelector.tsx",
                    lineNumber: 181,
                    columnNumber: 9
                }, this),
                level === 'fontColor' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3",
                            children: "selecciona color de fuente:"
                        }, void 0, false, {
                            fileName: "[project]/components/TestSelector.tsx",
                            lineNumber: 185,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1 mb-3 ml-2",
                            children: colorNames.map((color, idx)=>{
                                const label = color === 'gradient' ? 'GRADIENTE' : color.toUpperCase();
                                const isSelected = selectedIndex === idx;
                                let bgClass = '';
                                if (isSelected) {
                                    if (color === 'gradient') {
                                        bgClass = 'bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400';
                                    } else {
                                        bgClass = 'bg-opacity-30 bg-gray-700';
                                    }
                                }
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${isSelected ? `${colorMap[color]} ${bgClass}` : colorMap[color]}`,
                                    children: [
                                        isSelected ? '> ' : '  ',
                                        label
                                    ]
                                }, color, true, {
                                    fileName: "[project]/components/TestSelector.tsx",
                                    lineNumber: 199,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/TestSelector.tsx",
                            lineNumber: 186,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `text-xs ${colorMap[selectedFontColor]} text-opacity-50 mt-4`,
                            children: "↑ ↓ (navegar) | ENTER (siguiente)"
                        }, void 0, false, {
                            fileName: "[project]/components/TestSelector.tsx",
                            lineNumber: 208,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                level === 'emphasisColor' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3",
                            children: "selecciona color de énfasis:"
                        }, void 0, false, {
                            fileName: "[project]/components/TestSelector.tsx",
                            lineNumber: 216,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1 mb-3 ml-2",
                            children: colorNames.map((color, idx)=>{
                                const label = color === 'gradient' ? 'GRADIENTE' : color.toUpperCase();
                                const isSelected = selectedIndex === idx;
                                let bgClass = '';
                                if (isSelected) {
                                    if (color === 'gradient') {
                                        bgClass = 'bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400';
                                    } else {
                                        bgClass = 'bg-opacity-30 bg-gray-700';
                                    }
                                }
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${isSelected ? `${colorMap[color]} ${bgClass}` : colorMap[color]}`,
                                    children: [
                                        isSelected ? '> ' : '  ',
                                        label
                                    ]
                                }, color, true, {
                                    fileName: "[project]/components/TestSelector.tsx",
                                    lineNumber: 230,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/TestSelector.tsx",
                            lineNumber: 217,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `text-xs ${colorMap[selectedFontColor]} text-opacity-50 mt-4`,
                            children: "↑ ↓ (navegar) | ENTER (siguiente)"
                        }, void 0, false, {
                            fileName: "[project]/components/TestSelector.tsx",
                            lineNumber: 239,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                level === 'nombre' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-2",
                            children: [
                                "nombre: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    autoFocus: true,
                                    type: "text",
                                    value: userName,
                                    onChange: (e)=>setUserName(e.target.value),
                                    className: `bg-black ${colorMap[selectedFontColor]} outline-none ${getBorderClass(selectedFontColor)} border-b ml-1`
                                }, void 0, false, {
                                    fileName: "[project]/components/TestSelector.tsx",
                                    lineNumber: 247,
                                    columnNumber: 43
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TestSelector.tsx",
                            lineNumber: 247,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-yellow-600 text-xs",
                            children: "> ENTER (siguiente) | ← ATRÁS"
                        }, void 0, false, {
                            fileName: "[project]/components/TestSelector.tsx",
                            lineNumber: 254,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                level === 'main' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3",
                            children: [
                                "usuario: ",
                                userName
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TestSelector.tsx",
                            lineNumber: 260,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `mb-2 text-opacity-50 ${colorMap[selectedFontColor]}`,
                            children: "[ CATEGORIAS ]"
                        }, void 0, false, {
                            fileName: "[project]/components/TestSelector.tsx",
                            lineNumber: 261,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1 mb-3 ml-2",
                            children: categories.map((cat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: selectedIndex === idx ? selectedEmphasisColor === 'gradient' ? 'bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-black' : `${bgColorMap[selectedEmphasisColor]} text-black` : '',
                                    children: [
                                        selectedIndex === idx ? '> ' : '  ',
                                        cat.name
                                    ]
                                }, cat.id, true, {
                                    fileName: "[project]/components/TestSelector.tsx",
                                    lineNumber: 264,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/TestSelector.tsx",
                            lineNumber: 262,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `text-xs ${colorMap[selectedFontColor]} text-opacity-50 mt-4`,
                            children: "↑ ↓ (navegar) | ENTER (seleccionar)"
                        }, void 0, false, {
                            fileName: "[project]/components/TestSelector.tsx",
                            lineNumber: 269,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                level === 'category' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `mb-2 text-opacity-50 ${colorMap[selectedFontColor]}`,
                            children: [
                                "[ ",
                                categories.find((c)=>c.id === currentCategory)?.name,
                                " ]"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TestSelector.tsx",
                            lineNumber: 277,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1 mb-3 ml-2",
                            children: [
                                currentTests.map((test, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: selectedIndex === idx ? `${bgColorMap[selectedEmphasisColor]} text-black` : '',
                                        children: [
                                            selectedIndex === idx ? '> ' : '  ',
                                            test.name
                                        ]
                                    }, test.id, true, {
                                        fileName: "[project]/components/TestSelector.tsx",
                                        lineNumber: 280,
                                        columnNumber: 17
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: selectedIndex === currentTests.length ? `${bgColorMap[selectedEmphasisColor]} text-black` : '',
                                    children: [
                                        selectedIndex === currentTests.length ? '> ' : '  ',
                                        "[ATRÁS]"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TestSelector.tsx",
                                    lineNumber: 284,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TestSelector.tsx",
                            lineNumber: 278,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `text-xs ${colorMap[selectedFontColor]} text-opacity-50 mt-4`,
                            children: "↑ ↓ (navegar) | ENTER (seleccionar) | ← (volver)"
                        }, void 0, false, {
                            fileName: "[project]/components/TestSelector.tsx",
                            lineNumber: 288,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-red-500 mt-2",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/components/TestSelector.tsx",
                    lineNumber: 294,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/TestSelector.tsx",
            lineNumber: 179,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/TestSelector.tsx",
        lineNumber: 178,
        columnNumber: 5
    }, this);
}
_s(TestSelector, "nhEoLR8zmlcw3OBgDCUhlXF5BB8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = TestSelector;
var _c;
__turbopack_context__.k.register(_c, "TestSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_TestSelector_tsx_0pue56k._.js.map