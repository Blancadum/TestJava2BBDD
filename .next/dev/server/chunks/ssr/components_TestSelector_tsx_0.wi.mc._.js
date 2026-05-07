module.exports = [
"[project]/components/TestSelector.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TestSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
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
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [tests, setTests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userName, setUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [level, setLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('fontColor');
    const [currentCategory, setCurrentCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedFontColor, setSelectedFontColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('white');
    const [selectedEmphasisColor, setSelectedEmphasisColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('yellow');
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedFontColor = localStorage.getItem('terminalFontColor');
        const savedEmphasisColor = localStorage.getItem('terminalEmphasisColor');
        if (savedFontColor) setSelectedFontColor(savedFontColor);
        if (savedEmphasisColor) setSelectedEmphasisColor(savedEmphasisColor);
        fetchTests();
    }, []);
    async function fetchTests() {
        try {
            const response = await fetch('/data/temas.json');
            const temas = await response.json();
            // Transformar temas al formato esperado por el frontend
            const transformedTests = temas.map((tema)=>{
                // Asignar temas a categorías según el ID
                let category = 'BaseDatos';
                if (tema.id >= 6) {
                    category = 'Programación/Teoría';
                }
                return {
                    id: tema.id,
                    name: tema.nombre,
                    category: category,
                    totalQuestions: 30
                };
            });
            setTests(transformedTests);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if (level === 'fontColor') {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setSelectedIndex((prev)=>(prev + 1) % colorNames.length);
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    setSelectedIndex((prev)=>(prev - 1 + colorNames.length) % colorNames.length);
                } else if (e.key === 'Enter') {
                    setSelectedFontColor(colorNames[selectedIndex]);
                    localStorage.setItem('terminalFontColor', colorNames[selectedIndex]);
                    setLevel('emphasisColor');
                    setSelectedIndex(0);
                }
            } else if (level === 'emphasisColor') {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setSelectedIndex((prev)=>(prev + 1) % colorNames.length);
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    setSelectedIndex((prev)=>(prev - 1 + colorNames.length) % colorNames.length);
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
                    setSelectedIndex((prev)=>(prev + 1) % categories.length);
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    setSelectedIndex((prev)=>(prev - 1 + categories.length) % categories.length);
                } else if (e.key === 'Enter') {
                    setCurrentCategory(categories[selectedIndex].id);
                    setLevel('category');
                    setSelectedIndex(0);
                }
            } else if (level === 'category') {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setSelectedIndex((prev)=>(prev + 1) % (currentTests.length + 1));
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    setSelectedIndex((prev)=>(prev - 1 + currentTests.length + 1) % (currentTests.length + 1));
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
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, [
        level,
        selectedIndex,
        categories,
        currentTests,
        userName,
        currentCategory
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `min-h-screen bg-black p-4 font-mono text-sm ${colorMap[selectedFontColor]} flex items-center justify-center`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "$ cargando tests..."
            }, void 0, false, {
                fileName: "[project]/components/TestSelector.tsx",
                lineNumber: 185,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/TestSelector.tsx",
            lineNumber: 184,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen bg-black p-4 font-mono text-sm ${colorMap[selectedFontColor]}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-1",
                    children: "$ java -jar tests.jar"
                }, void 0, false, {
                    fileName: "[project]/components/TestSelector.tsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `mb-4 ${selectedFontColor === 'green' ? 'text-green-500' : selectedFontColor === 'white' ? 'text-gray-400' : selectedFontColor === 'yellow' ? 'text-yellow-500' : selectedFontColor === 'cyan' ? 'text-cyan-500' : selectedFontColor === 'red' ? 'text-red-500' : 'text-magenta-500'}`,
                    children: "TESTS JAVA v1.0"
                }, void 0, false, {
                    fileName: "[project]/components/TestSelector.tsx",
                    lineNumber: 194,
                    columnNumber: 9
                }, this),
                level === 'fontColor' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3",
                            children: "selecciona color de fuente:"
                        }, void 0, false, {
                            fileName: "[project]/components/TestSelector.tsx",
                            lineNumber: 198,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${isSelected ? `${colorMap[color]} ${bgClass}` : colorMap[color]}`,
                                    children: [
                                        isSelected ? '> ' : '  ',
                                        label
                                    ]
                                }, color, true, {
                                    fileName: "[project]/components/TestSelector.tsx",
                                    lineNumber: 212,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/TestSelector.tsx",
                            lineNumber: 199,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `text-xs ${colorMap[selectedFontColor]} text-opacity-50 mt-4`,
                            children: "↑ ↓ (navegar) | ENTER (siguiente)"
                        }, void 0, false, {
                            fileName: "[project]/components/TestSelector.tsx",
                            lineNumber: 221,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                level === 'emphasisColor' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3",
                            children: "selecciona color de énfasis:"
                        }, void 0, false, {
                            fileName: "[project]/components/TestSelector.tsx",
                            lineNumber: 229,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${isSelected ? `${colorMap[color]} ${bgClass}` : colorMap[color]}`,
                                    children: [
                                        isSelected ? '> ' : '  ',
                                        label
                                    ]
                                }, color, true, {
                                    fileName: "[project]/components/TestSelector.tsx",
                                    lineNumber: 243,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/TestSelector.tsx",
                            lineNumber: 230,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `text-xs ${colorMap[selectedFontColor]} text-opacity-50 mt-4`,
                            children: "↑ ↓ (navegar) | ENTER (siguiente)"
                        }, void 0, false, {
                            fileName: "[project]/components/TestSelector.tsx",
                            lineNumber: 252,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                level === 'nombre' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-2",
                            children: [
                                "nombre: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    autoFocus: true,
                                    type: "text",
                                    value: userName,
                                    onChange: (e)=>setUserName(e.target.value),
                                    className: `bg-black ${colorMap[selectedFontColor]} outline-none ${getBorderClass(selectedFontColor)} border-b ml-1`
                                }, void 0, false, {
                                    fileName: "[project]/components/TestSelector.tsx",
                                    lineNumber: 260,
                                    columnNumber: 43
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TestSelector.tsx",
                            lineNumber: 260,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-yellow-600 text-xs",
                            children: "> ENTER (siguiente) | ← ATRÁS"
                        }, void 0, false, {
                            fileName: "[project]/components/TestSelector.tsx",
                            lineNumber: 267,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                level === 'main' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3",
                            children: [
                                "usuario: ",
                                userName
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TestSelector.tsx",
                            lineNumber: 273,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `mb-2 text-opacity-50 ${colorMap[selectedFontColor]}`,
                            children: "[ CATEGORIAS ]"
                        }, void 0, false, {
                            fileName: "[project]/components/TestSelector.tsx",
                            lineNumber: 274,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1 mb-3 ml-2",
                            children: categories.map((cat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: selectedIndex === idx ? selectedEmphasisColor === 'gradient' ? 'bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-black' : `${bgColorMap[selectedEmphasisColor]} text-black` : '',
                                    children: [
                                        selectedIndex === idx ? '> ' : '  ',
                                        cat.name
                                    ]
                                }, cat.id, true, {
                                    fileName: "[project]/components/TestSelector.tsx",
                                    lineNumber: 277,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/TestSelector.tsx",
                            lineNumber: 275,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `text-xs ${colorMap[selectedFontColor]} text-opacity-50 mt-4`,
                            children: "↑ ↓ (navegar) | ENTER (seleccionar)"
                        }, void 0, false, {
                            fileName: "[project]/components/TestSelector.tsx",
                            lineNumber: 282,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                level === 'category' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `mb-2 text-opacity-50 ${colorMap[selectedFontColor]}`,
                            children: [
                                "[ ",
                                categories.find((c)=>c.id === currentCategory)?.name,
                                " ]"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TestSelector.tsx",
                            lineNumber: 290,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1 mb-3 ml-2",
                            children: [
                                currentTests.map((test, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: selectedIndex === idx ? `${bgColorMap[selectedEmphasisColor]} text-black` : '',
                                        children: [
                                            selectedIndex === idx ? '> ' : '  ',
                                            test.name
                                        ]
                                    }, test.id, true, {
                                        fileName: "[project]/components/TestSelector.tsx",
                                        lineNumber: 293,
                                        columnNumber: 17
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: selectedIndex === currentTests.length ? `${bgColorMap[selectedEmphasisColor]} text-black` : '',
                                    children: [
                                        selectedIndex === currentTests.length ? '> ' : '  ',
                                        "[ATRÁS]"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TestSelector.tsx",
                                    lineNumber: 297,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TestSelector.tsx",
                            lineNumber: 291,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `text-xs ${colorMap[selectedFontColor]} text-opacity-50 mt-4`,
                            children: "↑ ↓ (navegar) | ENTER (seleccionar) | ← (volver)"
                        }, void 0, false, {
                            fileName: "[project]/components/TestSelector.tsx",
                            lineNumber: 301,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-red-500 mt-2",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/components/TestSelector.tsx",
                    lineNumber: 307,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/TestSelector.tsx",
            lineNumber: 192,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/TestSelector.tsx",
        lineNumber: 191,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=components_TestSelector_tsx_0.wi.mc._.js.map