(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Navbar() {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const onScroll = {
                "Navbar.useEffect.onScroll": ()=>setScrolled(window.scrollY > 40)
            }["Navbar.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `fixed inset-x-0 top-0 z-40 transition-[background-color,backdrop-filter,border-color] duration-300 ${scrolled ? "border-b border-white/10 bg-black/60 backdrop-blur-2xl backdrop-saturate-150" : "border-b border-transparent bg-transparent"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-8 md:py-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.32em] text-foreground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": true,
                            className: "inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(212,162,47,0.9)]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Navbar.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        "DEV / ZIGNESH"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/Navbar.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "hidden items-center gap-8 md:flex",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#Contact",
                        className: "font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400 transition-colors hover:text-foreground",
                        children: "Contact"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Navbar.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Navbar.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Navbar.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Navbar.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(Navbar, "tQtW9FyKD+Ut/6k+f0BCbABprL4=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/EyebrowBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EyebrowBadge",
    ()=>EyebrowBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function EyebrowBadge({ children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-accent backdrop-blur-md ${className}`,
        style: {
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 0 24px -8px rgba(212,162,47,0.25)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(212,162,47,0.85)]"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/EyebrowBadge.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/EyebrowBadge.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = EyebrowBadge;
var _c;
__turbopack_context__.k.register(_c, "EyebrowBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/HudFrame.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HudFrame",
    ()=>HudFrame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function HudFrame({ corner, size = 22, className = "" }) {
    const paths = {
        tl: `M 2 ${size} L 2 2 L ${size} 2`,
        tr: `M ${size - 20} 2 L ${size} 2 L ${size} ${size}`,
        bl: `M 2 ${size - 20} L 2 ${size} L ${size} ${size}`,
        br: `M ${size - 20} ${size} L ${size} ${size} L ${size} ${size - 20}`
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "aria-hidden": "true",
        width: size,
        height: size,
        viewBox: `0 0 ${size} ${size}`,
        fill: "none",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: paths[corner],
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "square"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/HudFrame.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/HudFrame.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = HudFrame;
var _c;
__turbopack_context__.k.register(_c, "HudFrame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/cinematic.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// export const CINE_FRAME_COUNT = 169;
// export const cineFramePath = (n: number) =>
//   `/frames2/frame_${String(n).padStart(4, "0")}.jpg`;
// export type Beat = {
//   id: string;
//   show: number;
//   hide: number;
//   link: string;
//   label: string;
//   quote: string;
//   speaker: string;
//   film: string;
// };
// export const BEATS: Beat[] = [
//   {
//     id: "b1",
//     show: 0.1,
//     hide: 0.3,
//     link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg?utm_source=chatgpt.com",
//     label: "01 — Ignition",
//     quote: "HTML.",
//     speaker: "Tony Stark",
//     film: "IRON MAN — 2008",
//   },
//   {
//     id: "b2",
//     show: 0.35,
//     hide: 0.55,
//     link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg?utm_source=chatgpt.com",
//     label: "02 — Sync",
//     quote: "CSS.",
//     speaker: "Tony Stark",
//     film: "IRON MAN 3 — 2013",
//   },
//   {
//     id: "b3",
//     show: 0.6,
//     hide: 0.8,
//     link: "",
//     label: "03 — Aftermath",
//     quote: "It's not about how much we lost. It's about how much we have left.",
//     speaker: "Tony Stark",
//     film: "AVENGERS: ENDGAME — 2019",
//   },
// ];
// export const CINE_INTRO_FADE_END = 0.08;
__turbopack_context__.s([
    "BEATS",
    ()=>BEATS,
    "CINE_FRAME_COUNT",
    ()=>CINE_FRAME_COUNT,
    "CINE_INTRO_FADE_END",
    ()=>CINE_INTRO_FADE_END,
    "cineFramePath",
    ()=>cineFramePath
]);
const CINE_FRAME_COUNT = 169;
const cineFramePath = (n)=>`/frames2/frame_${String(n).padStart(4, "0")}.jpg`;
const BEATS = [
    {
        id: "b1",
        show: 0.05,
        hide: 0.12,
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        label: "01 — HTML5",
        quote: "HTML5",
        speaker: "Tony Stark",
        film: "MARKUP"
    },
    {
        id: "b2",
        show: 0.13,
        hide: 0.20,
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        label: "02 — CSS3",
        quote: "CSS3",
        speaker: "Tony Stark",
        film: "STYLING"
    },
    {
        id: "b3",
        show: 0.21,
        hide: 0.28,
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        label: "03 — JavaScript",
        quote: "JavaScript",
        speaker: "Tony Stark",
        film: "LOGIC"
    },
    {
        id: "b4",
        show: 0.29,
        hide: 0.36,
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        label: "04 — TypeScript",
        quote: "TypeScript",
        speaker: "Tony Stark",
        film: "TYPING"
    },
    {
        id: "b5",
        show: 0.37,
        hide: 0.44,
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        label: "05 — React",
        quote: "React",
        speaker: "Tony Stark",
        film: "UI"
    },
    {
        id: "b6",
        show: 0.45,
        hide: 0.52,
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        label: "06 — Redux",
        quote: "Redux",
        speaker: "Tony Stark",
        film: "STATE"
    },
    {
        id: "b7",
        show: 0.53,
        hide: 0.60,
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        label: "07 — Next.js",
        quote: "Next.js",
        speaker: "Tony Stark",
        film: "FRAMEWORK"
    },
    {
        id: "b8",
        show: 0.61,
        hide: 0.68,
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        label: "08 — Node.js",
        quote: "Node.js",
        speaker: "Tony Stark",
        film: "BACKEND"
    },
    {
        id: "b9",
        show: 0.69,
        hide: 0.76,
        link: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
        label: "09 — Tailwind",
        quote: "Tailwind CSS",
        speaker: "Tony Stark",
        film: "UTILITY"
    },
    {
        id: "b10",
        show: 0.77,
        hide: 0.84,
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        label: "10 — MongoDB",
        quote: "MongoDB",
        speaker: "Tony Stark",
        film: "DATABASE"
    },
    {
        id: "b11",
        show: 0.85,
        hide: 0.92,
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        label: "11 — Express",
        quote: "Express.js",
        speaker: "Tony Stark",
        film: "SERVER"
    },
    {
        id: "b12",
        show: 0.93,
        hide: 1,
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        label: "12 — GitHub",
        quote: "GitHub",
        speaker: "Tony Stark",
        film: "VERSION CONTROL"
    }
];
const CINE_INTRO_FADE_END = 0.08;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/CinematicReveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CinematicReveal",
    ()=>CinematicReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EyebrowBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/EyebrowBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HudFrame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/HudFrame.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cinematic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cinematic.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CinematicReveal() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const h2InevitableRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const h2IronManRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const outroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progressFillRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const seqReadoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const framesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const tickingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const loadedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(-1);
    const prevVisibleIdsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    const [loadProgress, setLoadProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [visibleBeats, setVisibleBeats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CinematicReveal.useEffect": ()=>{
            let cancelled = false;
            let loadedCount = 0;
            const imgs = [];
            for(let i = 1; i <= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cinematic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CINE_FRAME_COUNT"]; i++){
                const img = new Image();
                img.src = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cinematic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cineFramePath"])(i);
                img.onload = ({
                    "CinematicReveal.useEffect": ()=>{
                        if (cancelled) return;
                        loadedCount++;
                        setLoadProgress(loadedCount / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cinematic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CINE_FRAME_COUNT"]);
                        if (loadedCount === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cinematic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CINE_FRAME_COUNT"]) {
                            loadedRef.current = true;
                            setLoaded(true);
                        }
                    }
                })["CinematicReveal.useEffect"];
                img.onerror = ({
                    "CinematicReveal.useEffect": ()=>{
                        if (cancelled) return;
                        loadedCount++;
                        setLoadProgress(loadedCount / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cinematic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CINE_FRAME_COUNT"]);
                        if (loadedCount === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cinematic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CINE_FRAME_COUNT"]) {
                            loadedRef.current = true;
                            setLoaded(true);
                        }
                    }
                })["CinematicReveal.useEffect"];
                imgs.push(img);
            }
            framesRef.current = imgs;
            return ({
                "CinematicReveal.useEffect": ()=>{
                    cancelled = true;
                }
            })["CinematicReveal.useEffect"];
        }
    }["CinematicReveal.useEffect"], []);
    const drawFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CinematicReveal.useCallback[drawFrame]": (index)=>{
            const canvas = canvasRef.current;
            const img = framesRef.current[index];
            if (!canvas || !img || !img.complete || !img.naturalWidth) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const cw = canvas.width;
            const ch = canvas.height;
            const imgRatio = img.naturalWidth / img.naturalHeight;
            const canvasRatio = cw / ch;
            let drawW;
            let drawH;
            if (canvasRatio > imgRatio) {
                drawW = cw;
                drawH = cw / imgRatio;
            } else {
                drawH = ch;
                drawW = ch * imgRatio;
            }
            if (window.innerWidth <= 768) {
                drawW *= 1.3;
                drawH *= 1.3;
            }
            const drawX = (cw - drawW) / 2;
            const drawY = (ch - drawH) / 2;
            ctx.clearRect(0, 0, cw, ch);
            ctx.drawImage(img, drawX, drawY, drawW, drawH);
        }
    }["CinematicReveal.useCallback[drawFrame]"], []);
    const resizeCanvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CinematicReveal.useCallback[resizeCanvas]": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = window.innerWidth + "px";
            canvas.style.height = window.innerHeight + "px";
            drawFrame(lastFrameRef.current >= 0 ? lastFrameRef.current : 0);
        }
    }["CinematicReveal.useCallback[resizeCanvas]"], [
        drawFrame
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CinematicReveal.useEffect": ()=>{
            resizeCanvas();
            window.addEventListener("resize", resizeCanvas);
            return ({
                "CinematicReveal.useEffect": ()=>window.removeEventListener("resize", resizeCanvas)
            })["CinematicReveal.useEffect"];
        }
    }["CinematicReveal.useEffect"], [
        resizeCanvas
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CinematicReveal.useEffect": ()=>{
            if (!loaded) return;
            drawFrame(0);
            lastFrameRef.current = 0;
        }
    }["CinematicReveal.useEffect"], [
        loaded,
        drawFrame
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CinematicReveal.useEffect": ()=>{
            const handleScroll = {
                "CinematicReveal.useEffect.handleScroll": ()=>{
                    if (tickingRef.current) return;
                    tickingRef.current = true;
                    requestAnimationFrame({
                        "CinematicReveal.useEffect.handleScroll": ()=>{
                            tickingRef.current = false;
                            const section = sectionRef.current;
                            if (!section || !loadedRef.current) return;
                            const rect = section.getBoundingClientRect();
                            const scrollable = section.offsetHeight - window.innerHeight;
                            const progress = scrollable <= 0 ? 0 : Math.min(1, Math.max(0, -rect.top / scrollable));
                            const frameIndex = Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cinematic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CINE_FRAME_COUNT"] - 1, Math.floor(progress * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cinematic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CINE_FRAME_COUNT"]));
                            if (frameIndex !== lastFrameRef.current) {
                                lastFrameRef.current = frameIndex;
                                drawFrame(frameIndex);
                            }
                            if (h2InevitableRef.current) {
                                const op = Math.min(1, Math.max(0, (0.52 - progress) / 0.1));
                                h2InevitableRef.current.style.opacity = String(op);
                            }
                            if (h2IronManRef.current) {
                                const op = Math.min(1, Math.max(0, (progress - 0.48) / 0.1));
                                h2IronManRef.current.style.opacity = String(op);
                            }
                            if (outroRef.current) {
                                const op = Math.min(1, Math.max(0, (progress - 0.86) / 0.06));
                                outroRef.current.style.opacity = String(op);
                                outroRef.current.style.transform = `translateY(${(1 - op) * 14}px)`;
                            }
                            if (progressFillRef.current) {
                                progressFillRef.current.style.transform = `scaleX(${progress})`;
                            }
                            if (seqReadoutRef.current) {
                                const n = Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cinematic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CINE_FRAME_COUNT"], frameIndex + 1);
                                seqReadoutRef.current.textContent = `SEQ ${String(n).padStart(3, "0")} / ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cinematic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CINE_FRAME_COUNT"]}`;
                            }
                            const newVisible = new Set();
                            for (const b of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cinematic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"]){
                                if (progress >= b.show && progress <= b.hide) newVisible.add(b.id);
                            }
                            const newIds = [
                                ...newVisible
                            ].sort().join(",");
                            if (newIds !== prevVisibleIdsRef.current) {
                                prevVisibleIdsRef.current = newIds;
                                setVisibleBeats(newVisible);
                            }
                        }
                    }["CinematicReveal.useEffect.handleScroll"]);
                }
            }["CinematicReveal.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            handleScroll();
            return ({
                "CinematicReveal.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["CinematicReveal.useEffect"];
        }
    }["CinematicReveal.useEffect"], [
        drawFrame
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "cinematic",
        className: "scroll-animation relative border-t border-white/5 bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-0 min-h-[100dvh] w-full overflow-hidden bg-background",
            style: {
                height: "100dvh",
                willChange: "transform",
                transform: "translateZ(0)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: canvasRef,
                    className: "absolute inset-0 h-full w-full",
                    style: {
                        willChange: "contents",
                        transform: "translateZ(0)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute inset-0",
                    style: {
                        background: "radial-gradient(120% 80% at 50% 90%, transparent 30%, rgba(10,10,11,0.45) 70%, rgba(10,10,11,0.85) 100%)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                    lineNumber: 204,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute left-6 top-24 text-accent md:left-10 md:top-28",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HudFrame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HudFrame"], {
                        corner: "tl",
                        size: 26
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                        lineNumber: 213,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                    lineNumber: 212,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute right-6 top-24 text-accent md:right-10 md:top-28",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HudFrame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HudFrame"], {
                        corner: "tr",
                        size: 26
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                        lineNumber: 216,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                    lineNumber: 215,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute bottom-14 left-6 text-accent md:bottom-16 md:left-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HudFrame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HudFrame"], {
                        corner: "bl",
                        size: 26
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute bottom-14 right-6 text-accent md:bottom-16 md:right-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HudFrame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HudFrame"], {
                        corner: "br",
                        size: 26
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                        lineNumber: 222,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                    lineNumber: 221,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute right-6 top-28 z-10 flex max-w-[46ch] flex-col items-end gap-5 text-right md:right-12 md:top-32",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EyebrowBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EyebrowBadge"], {
                            children: "DEV // ZIGNESH"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                            lineNumber: 226,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative self-stretch",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    ref: h2InevitableRef,
                                    className: "font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl lg:text-7xl",
                                    style: {
                                        transition: "opacity 240ms ease-out"
                                    },
                                    children: [
                                        "I am",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                            lineNumber: 234,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-accent",
                                            children: "Developer."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                            lineNumber: 235,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    ref: h2IronManRef,
                                    className: "absolute inset-0 font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl lg:text-7xl",
                                    style: {
                                        opacity: 0,
                                        transition: "opacity 240ms ease-out"
                                    },
                                    children: [
                                        "And I am",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                            lineNumber: 243,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-accent",
                                            children: "Zignesh ."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                            lineNumber: 244,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                    lineNumber: 225,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-20 flex items-center justify-center px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-5 md:gap-7",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cinematic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].map((b, index)=>{
                            const visible = visibleBeats.has(b.id);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-[1px] shadow-[0_0_40px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-all duration-700 ${visible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-90"}`,
                                style: {
                                    transitionDelay: `${index * 40}ms`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-br from-amber-400/20 via-transparent to-cyan-400/20"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                            lineNumber: 308,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                        lineNumber: 307,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex h-[150px] w-[145px] flex-col items-center justify-center rounded-3xl border border-white/5 bg-black/50 px-5 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: b.link,
                                                        alt: b.quote,
                                                        className: "relative z-10 h-10 w-10 object-contain transition duration-500 group-hover:scale-110"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                                        lineNumber: 317,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                                lineNumber: 314,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mt-4 text-sm font-semibold tracking-wide text-white md:text-base",
                                                children: b.quote
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                                lineNumber: 325,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-1 text-[9px] uppercase tracking-[0.28em] text-zinc-500",
                                                children: b.film
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                                lineNumber: 330,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-accent transition-all duration-500 group-hover:w-16"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                                lineNumber: 335,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                        lineNumber: 312,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, b.id, true, {
                                fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                lineNumber: 295,
                                columnNumber: 9
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                        lineNumber: 290,
                        columnNumber: 3
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                    lineNumber: 289,
                    columnNumber: 1
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute inset-x-0 top-[36%] z-20 flex flex-col gap-3 px-6 md:hidden",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cinematic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].map((b)=>{
                        const visible = visibleBeats.has(b.id);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                            className: `card-surface pointer-events-auto p-5 transition-all duration-400 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-[9px] uppercase tracking-[0.28em] text-accent",
                                    children: b.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                    lineNumber: 353,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                    className: "mt-2 font-sans text-base font-medium leading-snug text-foreground",
                                    children: [
                                        "“    ",
                                        b.quote,
                                        "”"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                    lineNumber: 356,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                    className: "mt-3 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-sans text-xs text-zinc-300",
                                            children: b.speaker
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                            lineNumber: 360,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400",
                                            children: b.film
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                            lineNumber: 361,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                    lineNumber: 359,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, b.id, true, {
                            fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                            lineNumber: 347,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                    lineNumber: 343,
                    columnNumber: 9
                }, this),
                !loaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-30 flex flex-col items-center justify-center gap-5 bg-background px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EyebrowBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EyebrowBadge"], {
                            children: "FLIGHT LOG // RESTORING"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                            lineNumber: 374,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-px w-60 bg-white/10 md:w-80",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full bg-accent transition-[width] duration-150 ease-out",
                                style: {
                                    width: `${Math.round(loadProgress * 100)}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                lineNumber: 376,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                            lineNumber: 375,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-500",
                            children: [
                                "Rendering Mark III  ·  ",
                                Math.round(loadProgress * 100),
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                            lineNumber: 381,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                    lineNumber: 373,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/CinematicReveal.tsx",
            lineNumber: 194,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/CinematicReveal.tsx",
        lineNumber: 189,
        columnNumber: 5
    }, this);
}
_s(CinematicReveal, "5575fLhbx4t23HDzrBM6SKBt9jg=");
_c = CinematicReveal;
var _c;
__turbopack_context__.k.register(_c, "CinematicReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/AnimatedSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedItem",
    ()=>AnimatedItem,
    "AnimatedSection",
    ()=>AnimatedSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05
        }
    }
};
const itemVariants = {
    hidden: {
        opacity: 0,
        y: 28
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20
        }
    }
};
function AnimatedSection({ children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: className,
        variants: containerVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: true,
            margin: "-100px"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/AnimatedSection.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = AnimatedSection;
function AnimatedItem({ children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: className,
        variants: itemVariants,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/AnimatedSection.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c1 = AnimatedItem;
var _c, _c1;
__turbopack_context__.k.register(_c, "AnimatedSection");
__turbopack_context__.k.register(_c1, "AnimatedItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/SystemsNominal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SystemsNominal",
    ()=>SystemsNominal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$ArrowUpRight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/ArrowUpRight.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EyebrowBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/EyebrowBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/AnimatedSection.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const telemetry = [
    {
        label: "Suit Integrity",
        value: "99.2%",
        note: "Nanoparticle lattice"
    },
    {
        label: "Arc Output",
        value: "3.4 GJ/s",
        note: "Cold-fused, Vibranium core"
    },
    {
        label: "Flight Ceiling",
        value: "72.8 km",
        note: "Stratospheric assist"
    },
    {
        label: "Response Time",
        value: "0.018 s",
        note: "Neural link, J.A.R.V.I.S."
    }
];
function SystemsNominal() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "systems",
        className: "relative border-t border-white/5 bg-background px-6 pb-28 pt-24 md:px-10 md:pb-40 md:pt-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-[1400px] flex-col gap-16 md:grid md:grid-cols-[5fr_4fr] md:gap-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedSection"], {
                    className: "flex flex-col gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedItem"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EyebrowBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EyebrowBadge"], {
                                children: " DEV // ZIGNESH "
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedItem"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "max-w-[16ch] font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl",
                                children: [
                                    "“And I… am …",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-accent",
                                        children: "Zignesh ."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                                        lineNumber: 28,
                                        columnNumber: 15
                                    }, this),
                                    "”"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedItem"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "max-w-[48ch] font-sans text-base leading-relaxed text-zinc-400 md:text-lg",
                                children: "I'm a skilled JavaScript developer with expertise in React, Node.js, Express.js, and MongoDB. I build efficient, scalable, and user-friendly applications that solve real-world problems. Let's work together to bring your ideas to life!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedItem"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#footer",
                                className: "group inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-foreground backdrop-blur-md transition-all duration-200 hover:bg-white/[0.08] active:translate-y-[1px]",
                                children: [
                                    "Open Suit Archive",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$ArrowUpRight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowUpRight"], {
                                        size: 14,
                                        weight: "bold",
                                        className: "transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedSection"], {
                    className: "flex flex-col divide-y divide-white/8 border-t border-white/8 font-mono md:mt-3",
                    children: telemetry.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedItem"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-baseline justify-between gap-6 py-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] uppercase tracking-[0.28em] text-zinc-500",
                                                children: row.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                                                lineNumber: 56,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-sans text-[13px] text-zinc-400",
                                                children: row.note
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                                                lineNumber: 59,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl font-semibold tracking-tight text-foreground md:text-3xl",
                                        children: row.value
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                                        lineNumber: 63,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this)
                        }, row.label, false, {
                            fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/SystemsNominal.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/SystemsNominal.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = SystemsNominal;
var _c;
__turbopack_context__.k.register(_c, "SystemsNominal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_040k523._.js.map