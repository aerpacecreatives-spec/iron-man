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
"[project]/src/lib/hero.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// export const FRAME_COUNT = 169;
// export const framePath = (n: number) =>
//   `/frames/frame_${String(n).padStart(4, "0")}.jpg`;
// export type Dialogue = {
//   id: string;
//   show: number;
//   hide: number;
//   link: string;
//   quote: string;
//   speaker: string;
//   film: string;
// };    
// export const DIALOGUES: Dialogue[] = [
//   {
//     id: "d1",
//     show: 0.1,
//     hide: 0.3,
//     link : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg?utm_source=chatgpt.com",
//     quote: "React.",
//     speaker: "Tony Stark",
//     film: "IRON MAN — 2008",
//   },
//   {
//     id: "d2",
//     show: 0.35,
//     hide: 0.55,
//       link : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg?utm_source=chatgpt.com",
//     quote: "Redux.",
//     speaker: "Tony Stark",
//     film: "THE AVENGERS — 2012",
//   },
//   {
//     id: "d3",
//     show: 0.6,
//     hide: 0.8,
//       link : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg?utm_source=chatgpt.com",
//     quote: "JavaScript.",
//     speaker: "Tony Stark",
//     film: "AVENGERS: ENDGAME — 2019",
//   },
// ];
// export const HERO_TEXT_FADE_END = 0.08;
// export const FRAME_COUNT = 169;
// export const framePath = (n: number) =>
//   `/frames/frame_${String(n).padStart(4, "0")}.jpg`;
// export type Dialogue = {
//   id: string;
//   show: number;
//   hide: number;
//   link: string;
//   quote: string;
//   speaker: string;
//   film: string;
// };
// export const DIALOGUES: Dialogue[] = [
//   {
//     id: "d1",
//     show: 0.05,
//     hide: 0.12,
//     link:
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//     quote: "React.",
//     speaker: "Tony Stark",
//     film: "IRON MAN — 2008",
//   },
//   {
//     id: "d2",
//     show: 0.13,
//     hide: 0.20,
//     link:
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
//     quote: "Redux.",
//     speaker: "Tony Stark",
//     film: "THE AVENGERS — 2012",
//   },
//   {
//     id: "d3",
//     show: 0.21,
//     hide: 0.28,
//     link:
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
//     quote: "JavaScript.",
//     speaker: "Tony Stark",
//     film: "AVENGERS: ENDGAME — 2019",
//   },
//   {
//     id: "d4",
//     show: 0.29,
//     hide: 0.36,
//     link:
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
//     quote: "TypeScript.",
//     speaker: "Tony Stark",
//     film: "CIVIL WAR — 2016",
//   },
//   {
//     id: "d5",
//     show: 0.37,
//     hide: 0.44,
//     link:
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
//     quote: "Next.js.",
//     speaker: "Tony Stark",
//     film: "INFINITY WAR — 2018",
//   },
//   {
//     id: "d6",
//     show: 0.45,
//     hide: 0.52,
//     link:
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
//     quote: "Node.js.",
//     speaker: "Tony Stark",
//     film: "IRON MAN 2 — 2010",
//   },
//   {
//     id: "d7",
//     show: 0.53,
//     hide: 0.60,
//     link:
//       "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
//     quote: "Tailwind CSS.",
//     speaker: "Tony Stark",
//     film: "AGE OF ULTRON — 2015",
//   },
//   {
//     id: "d8",
//     show: 0.61,
//     hide: 0.68,
//     link:
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
//     quote: "HTML5.",
//     speaker: "Tony Stark",
//     film: "SPIDER-MAN: HOMECOMING — 2017",
//   },
//   {
//     id: "d9",
//     show: 0.69,
//     hide: 0.76,
//     link:
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
//     quote: "CSS3.",
//     speaker: "Tony Stark",
//     film: "IRON MAN 3 — 2013",
//   },
//   {
//     id: "d10",
//     show: 0.77,
//     hide: 0.84,
//     link:
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
//     quote: "MongoDB.",
//     speaker: "Tony Stark",
//     film: "DOCTOR STRANGE — 2016",
//   },
//   {
//     id: "d11",
//     show: 0.85,
//     hide: 0.92,
//     link:
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
//     quote: "Express.js.",
//     speaker: "Tony Stark",
//     film: "THOR: RAGNAROK — 2017",
//   },
//   {
//     id: "d12",
//     show: 0.93,
//     hide: 1,
//     link:
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
//     quote: "GitHub.",
//     speaker: "Tony Stark",
//     film: "AVENGERS ASSEMBLE — 2012",
//   },
// ];
// export const HERO_TEXT_FADE_END = 0.08;
__turbopack_context__.s([
    "DIALOGUES",
    ()=>DIALOGUES,
    "FRAME_COUNT",
    ()=>FRAME_COUNT,
    "HERO_TEXT_FADE_END",
    ()=>HERO_TEXT_FADE_END,
    "framePath",
    ()=>framePath
]);
const FRAME_COUNT = 169;
const framePath = (n)=>`/frames/frame_${String(n).padStart(4, "0")}.jpg`;
const DIALOGUES = [
    {
        id: "d1",
        show: 0.05,
        hide: 0.12,
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        quote: "React.",
        speaker: "Tony Stark",
        film: "IRON MAN — 2008"
    },
    {
        id: "d2",
        show: 0.13,
        hide: 0.20,
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        quote: "Redux.",
        speaker: "Tony Stark",
        film: "THE AVENGERS — 2012"
    },
    {
        id: "d3",
        show: 0.21,
        hide: 0.28,
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        quote: "JavaScript.",
        speaker: "Tony Stark",
        film: "AVENGERS: ENDGAME — 2019"
    },
    {
        id: "d4",
        show: 0.29,
        hide: 0.36,
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        quote: "TypeScript.",
        speaker: "Tony Stark",
        film: "CIVIL WAR — 2016"
    },
    {
        id: "d5",
        show: 0.37,
        hide: 0.44,
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        quote: "Next.js.",
        speaker: "Tony Stark",
        film: "INFINITY WAR — 2018"
    },
    {
        id: "d6",
        show: 0.45,
        hide: 0.52,
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        quote: "Node.js.",
        speaker: "Tony Stark",
        film: "IRON MAN 2 — 2010"
    },
    {
        id: "d7",
        show: 0.53,
        hide: 0.60,
        link: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
        quote: "Tailwind CSS.",
        speaker: "Tony Stark",
        film: "AGE OF ULTRON — 2015"
    },
    {
        id: "d8",
        show: 0.61,
        hide: 0.68,
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        quote: "HTML5.",
        speaker: "Tony Stark",
        film: "SPIDER-MAN: HOMECOMING — 2017"
    },
    {
        id: "d9",
        show: 0.69,
        hide: 0.76,
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        quote: "CSS3.",
        speaker: "Tony Stark",
        film: "IRON MAN 3 — 2013"
    },
    {
        id: "d10",
        show: 0.77,
        hide: 0.84,
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        quote: "MongoDB.",
        speaker: "Tony Stark",
        film: "DOCTOR STRANGE — 2016"
    },
    {
        id: "d11",
        show: 0.85,
        hide: 0.92,
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        quote: "Express.js.",
        speaker: "Tony Stark",
        film: "THOR: RAGNAROK — 2017"
    },
    {
        id: "d12",
        show: 0.93,
        hide: 1,
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        quote: "GitHub.",
        speaker: "Tony Stark",
        film: "AVENGERS ASSEMBLE — 2012"
    }
];
const HERO_TEXT_FADE_END = 0.08;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EyebrowBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/EyebrowBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HudFrame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/HudFrame.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hero$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hero.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// "use client";
// import { useCallback, useEffect, useRef, useState } from "react";
// import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
// import { HudFrame } from "@/components/ui/HudFrame";
// import { DIALOGUES, FRAME_COUNT, HERO_TEXT_FADE_END, framePath } from "@/lib/hero";
// export function Hero() {
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const heroTextRef = useRef<HTMLDivElement | null>(null);
//   const bigLeftTextRef = useRef<HTMLDivElement | null>(null);
//   const progressFillRef = useRef<HTMLDivElement | null>(null);
//   const powerReadoutRef = useRef<HTMLSpanElement | null>(null);
//   const framesRef = useRef<HTMLImageElement[]>([]);
//   const tickingRef = useRef(false);
//   const loadedRef = useRef(false);
//   const lastFrameRef = useRef(-1);
//   const prevVisibleIdsRef = useRef("");
//   const [loadProgress, setLoadProgress] = useState(0);
//   const [loaded, setLoaded] = useState(false);
//   const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
//   useEffect(() => {
//     let cancelled = false;
//     let loadedCount = 0;
//     const imgs: HTMLImageElement[] = [];
//     for (let i = 1; i <= FRAME_COUNT; i++) {
//       const img = new Image();
//       img.src = framePath(i);
//       img.onload = () => {
//         if (cancelled) return;
//         loadedCount++;
//         setLoadProgress(loadedCount / FRAME_COUNT);
//         if (loadedCount === FRAME_COUNT) {
//           loadedRef.current = true;
//           setLoaded(true);
//         }
//       };
//       img.onerror = () => {
//         if (cancelled) return;
//         loadedCount++;
//         setLoadProgress(loadedCount / FRAME_COUNT);
//         if (loadedCount === FRAME_COUNT) {
//           loadedRef.current = true;
//           setLoaded(true);
//         }
//       };
//       imgs.push(img);
//     }
//     framesRef.current = imgs;
//     return () => {
//       cancelled = true;
//     };
//   }, []);
//   const drawFrame = useCallback((index: number) => {
//     const canvas = canvasRef.current;
//     const img = framesRef.current[index];
//     if (!canvas || !img || !img.complete || !img.naturalWidth) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;
//     const cw = canvas.width;
//     const ch = canvas.height;
//     const imgRatio = img.naturalWidth / img.naturalHeight;
//     const canvasRatio = cw / ch;
//     let drawW: number;
//     let drawH: number;
//     if (canvasRatio > imgRatio) {
//       drawW = cw;
//       drawH = cw / imgRatio;
//     } else {
//       drawH = ch;
//       drawW = ch * imgRatio;
//     }
//     if (window.innerWidth <= 768) {
//       drawW *= 1.3;
//       drawH *= 1.3;
//     }
//     const drawX = (cw - drawW) / 2;
//     const drawY = (ch - drawH) / 2;
//     ctx.clearRect(0, 0, cw, ch);
//     ctx.drawImage(img, drawX, drawY, drawW, drawH);
//   }, []);
//   const resizeCanvas = useCallback(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const dpr = window.devicePixelRatio || 1;
//     canvas.width = window.innerWidth * dpr;
//     canvas.height = window.innerHeight * dpr;
//     canvas.style.width = window.innerWidth + "px";
//     canvas.style.height = window.innerHeight + "px";
//     const ctx = canvas.getContext("2d");
//     if (ctx) ctx.scale(1, 1);
//     drawFrame(lastFrameRef.current >= 0 ? lastFrameRef.current : 0);
//   }, [drawFrame]);
//   useEffect(() => {
//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);
//     return () => window.removeEventListener("resize", resizeCanvas);
//   }, [resizeCanvas]);
//   useEffect(() => {
//     if (!loaded) return;
//     drawFrame(0);
//     lastFrameRef.current = 0;
//   }, [loaded, drawFrame]);
//   useEffect(() => {
//     const handleScroll = () => {
//       if (tickingRef.current) return;
//       tickingRef.current = true;
//       requestAnimationFrame(() => {
//         tickingRef.current = false;
//         const section = sectionRef.current;
//         if (!section || !loadedRef.current) return;
//         const rect = section.getBoundingClientRect();
//         const scrollable = section.offsetHeight - window.innerHeight;
//         const progress =
//           scrollable <= 0
//             ? 0
//             : Math.min(1, Math.max(0, -rect.top / scrollable));
//         const frameIndex = Math.min(
//           FRAME_COUNT - 1,
//           Math.floor(progress * FRAME_COUNT),
//         );
//         if (frameIndex !== lastFrameRef.current) {
//           lastFrameRef.current = frameIndex;
//           drawFrame(frameIndex);
//         }
//         if (heroTextRef.current) {
//           const opacity = Math.max(0, 1 - progress / HERO_TEXT_FADE_END);
//           heroTextRef.current.style.opacity = String(opacity);
//           heroTextRef.current.style.transform = `translateY(${(1 - opacity) * 12}px)`;
//         }
//         if (bigLeftTextRef.current) {
//           const op = Math.min(1, Math.max(0, (progress - 0.1) / 0.08));
//           bigLeftTextRef.current.style.opacity = String(op);
//           bigLeftTextRef.current.style.transform = `translateY(${(1 - op) * 14}px)`;
//         }
//         if (progressFillRef.current) {
//           progressFillRef.current.style.transform = `scaleX(${progress})`;
//         }
//         if (powerReadoutRef.current) {
//           const pwr = 87.3 + Math.sin(progress * Math.PI * 2) * 6.7;
//           powerReadoutRef.current.textContent = pwr.toFixed(1) + "%";
//         }
//         const newVisible = new Set<string>();
//         for (const d of DIALOGUES) {
//           if (progress >= d.show && progress <= d.hide) newVisible.add(d.id);
//         }
//         const newIds = [...newVisible].sort().join(",");
//         if (newIds !== prevVisibleIdsRef.current) {
//           prevVisibleIdsRef.current = newIds;
//           setVisibleCards(newVisible);
//         }
//       });
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [drawFrame]);
//   return (
//     <section ref={sectionRef} className="scroll-animation relative">
//       <div
//         className="sticky top-0 min-h-[100dvh] w-full overflow-hidden bg-background"
//         style={{ height: "100dvh", willChange: "transform", transform: "translateZ(0)" }}
//       >
//         <canvas
//           ref={canvasRef}
//           className="absolute inset-0 h-full w-full"
//           style={{ willChange: "contents", transform: "translateZ(0)" }}
//         />
//         <div
//           className="pointer-events-none absolute inset-0"
//           style={{
//             background:
//               "radial-gradient(120% 80% at 50% 10%, transparent 30%, rgba(10,10,11,0.45) 70%, rgba(10,10,11,0.85) 100%)",
//           }}
//         />
//         <div className="pointer-events-none absolute left-6 top-24 text-accent md:left-10 md:top-28">
//           <HudFrame corner="tl" size={26} />
//         </div>
//         <div className="pointer-events-none absolute right-6 top-24 text-accent md:right-10 md:top-28">
//           <HudFrame corner="tr" size={26} />
//         </div>
//         <div className="pointer-events-none absolute bottom-14 left-6 text-accent md:bottom-16 md:left-10">
//           <HudFrame corner="bl" size={26} />
//         </div>
//         <div className="pointer-events-none absolute bottom-14 right-6 text-accent md:bottom-16 md:right-10">
//           <HudFrame corner="br" size={26} />
//         </div>
//         <div
//           ref={heroTextRef}
//           className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-start gap-5 px-6 pb-24 md:px-12 md:pb-28"
//           style={{ transition: "opacity 80ms linear" }}
//         >
//           <EyebrowBadge>Full Stack Developer //Problem Solver // Lifelong Learner</EyebrowBadge>
//           <h1 className="max-w-[14ch] font-sans text-5xl font-semibold leading-[0.95] tracking-tighter text-foreground md:text-7xl lg:text-8xl">
//             I am
//             <br />
//             <span className="text-accent">Zignesh Vishwakarma.</span>
//           </h1>
//           <p className="max-w-[42ch] font-sans text-sm leading-relaxed text-zinc-400 md:text-base">
//             I build modern, responsive, and high-performance web applications that blend creativity with functionality.
//           </p>
//         </div>
//         <div
//           ref={bigLeftTextRef}
//           className="pointer-events-none absolute bottom-24 left-6 z-10 hidden max-w-[58%] flex-col gap-5 md:flex md:bottom-28 md:left-12"
//           style={{ opacity: 0, transition: "opacity 80ms linear" }}
//         >
//           <span className="inline-flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
//             <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(212,162,47,0.85)]" />
// DEV / ZIGNESH
//           </span>
//           <h2 className="font-sans font-semibold leading-[0.88] tracking-tighter text-foreground text-[clamp(4rem,9.5vw,9rem)]">
//             Build
//             <br />
//            Full Stack <span className="text-accent">Developer</span>
//           </h2>
//         </div>
//         <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">
//           <div className="mx-6 mb-3 h-px bg-white/10 md:mx-10">
//             <div
//               ref={progressFillRef}
//               className="h-full origin-left bg-accent"
//               style={{ transform: "scaleX(0)", transition: "transform 80ms linear" }}
//             />
//           </div>
//         </div>
//         {DIALOGUES.map((d) => {
//           const visible = visibleCards.has(d.id);
//           const position =
//             d.id === "d1"
//               ? "top-[22%] right-6 md:right-12"
//               : d.id === "d2"
//               ? "top-1/2 -translate-y-1/2 right-6 md:right-12"
//               : "bottom-24 right-6 md:bottom-28 md:right-12";
//           return (
//             <div
//               key={d.id}
//               className={`pointer-events-none absolute ${position} z-20 hidden w-[420px] max-w-[90vw] md:block`}
//             >
//               <figure
//                 className={`card-surface pointer-events-auto p-6 transition-all duration-400 ease-out ${
//                   visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
//                 }`}
//               >
//                 <blockquote className="font-sans text-xl font-medium leading-snug tracking-tight  flex  align-items gap-2 text-center text-foreground">
//                       <span><img src={d.link} alt={d.quote} className="h-8 w-8" /></span>    {d.quote}
//                 </blockquote>
//                 <figcaption className="mt-4 flex items-center justify-between">
//                 </figcaption>
//               </figure>
//             </div>
//           );
//         })}
//         <div className="pointer-events-none absolute inset-x-0 top-[38%] z-20 flex flex-col gap-3 px-6 md:hidden">
//           {DIALOGUES.map((d) => {
//             const visible = visibleCards.has(d.id);
//             return (
//               <figure
//                 key={d.id}
//                 className={`card-surface pointer-events-auto p-5 transition-all duration-400 ease-out ${
//                   visible
//                     ? "translate-y-0 opacity-100"
//                     : "translate-y-4 opacity-0"
//                 }`}
//               >
//                 <blockquote className="font-sans text-base font-medium leading-snug text-foreground">
//                   &ldquo;{d.quote}&rdquo;
//                 </blockquote>
//                 <figcaption className="mt-3 flex items-center justify-between">
//                   <span className="font-sans text-xs text-zinc-300">
//                     {d.speaker}
//                   </span>
//                   <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent">
//                     {d.film}
//                   </span>
//                 </figcaption>
//               </figure>
//             );
//           })}
//         </div>
//         {!loaded && (
//           <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-5 bg-background px-6">
//             <EyebrowBadge>SUIT UP PROTOCOL // BOOTING</EyebrowBadge>
//             <div className="h-px w-60 bg-white/10 md:w-80">
//               <div
//                 className="h-full bg-accent transition-[width] duration-150 ease-out"
//                 style={{ width: `${Math.round(loadProgress * 100)}%` }}
//               />
//             </div>
//             <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-500">
//               Loading Mark LXXXV &nbsp;&middot;&nbsp; {Math.round(loadProgress * 100)}%
//             </p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
"use client";
;
;
;
;
function Hero() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const heroTextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bigLeftTextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progressFillRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const framesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const tickingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const loadedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(-1);
    const prevVisibleIdsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    const [loadProgress, setLoadProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [visibleCards, setVisibleCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const positions = {
        d1: "top-[18%] right-6 md:right-12",
        d2: "top-[35%] left-6 md:left-12",
        d3: "top-[52%] right-6 md:right-12",
        d4: "bottom-[24%] left-6 md:left-12",
        d5: "bottom-[10%] right-6 md:right-12",
        d6: "top-[20%] left-[30%]",
        d7: "top-[45%] left-[25%]",
        d8: "bottom-[18%] left-[35%]",
        d9: "top-[12%] right-[28%]",
        d10: "bottom-[32%] right-[25%]",
        d11: "top-[62%] left-[12%]",
        d12: "bottom-[8%] right-[12%]"
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            let cancelled = false;
            let loadedCount = 0;
            const imgs = [];
            for(let i = 1; i <= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hero$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_COUNT"]; i++){
                const img = new Image();
                img.src = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hero$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["framePath"])(i);
                img.onload = ({
                    "Hero.useEffect": ()=>{
                        if (cancelled) return;
                        loadedCount++;
                        setLoadProgress(loadedCount / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hero$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_COUNT"]);
                        if (loadedCount === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hero$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_COUNT"]) {
                            loadedRef.current = true;
                            setLoaded(true);
                        }
                    }
                })["Hero.useEffect"];
                img.onerror = ({
                    "Hero.useEffect": ()=>{
                        if (cancelled) return;
                        loadedCount++;
                        setLoadProgress(loadedCount / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hero$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_COUNT"]);
                        if (loadedCount === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hero$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_COUNT"]) {
                            loadedRef.current = true;
                            setLoaded(true);
                        }
                    }
                })["Hero.useEffect"];
                imgs.push(img);
            }
            framesRef.current = imgs;
            return ({
                "Hero.useEffect": ()=>{
                    cancelled = true;
                }
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    const drawFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Hero.useCallback[drawFrame]": (index)=>{
            const canvas = canvasRef.current;
            const img = framesRef.current[index];
            if (!canvas || !img || !img.complete || !img.naturalWidth) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const dpr = window.devicePixelRatio || 1;
            const cw = canvas.width / dpr;
            const ch = canvas.height / dpr;
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
                drawW *= 1.2;
                drawH *= 1.2;
            }
            const drawX = (cw - drawW) / 2;
            const drawY = (ch - drawH) / 2;
            ctx.clearRect(0, 0, cw, ch);
            ctx.drawImage(img, drawX, drawY, drawW, drawH);
        }
    }["Hero.useCallback[drawFrame]"], []);
    const resizeCanvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Hero.useCallback[resizeCanvas]": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = window.innerWidth + "px";
            canvas.style.height = window.innerHeight + "px";
            const ctx = canvas.getContext("2d");
            if (ctx) {
                ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            }
            drawFrame(lastFrameRef.current >= 0 ? lastFrameRef.current : 0);
        }
    }["Hero.useCallback[resizeCanvas]"], [
        drawFrame
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            resizeCanvas();
            window.addEventListener("resize", resizeCanvas);
            return ({
                "Hero.useEffect": ()=>window.removeEventListener("resize", resizeCanvas)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], [
        resizeCanvas
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            if (!loaded) return;
            drawFrame(0);
            lastFrameRef.current = 0;
        }
    }["Hero.useEffect"], [
        loaded,
        drawFrame
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const handleScroll = {
                "Hero.useEffect.handleScroll": ()=>{
                    if (tickingRef.current) return;
                    tickingRef.current = true;
                    requestAnimationFrame({
                        "Hero.useEffect.handleScroll": ()=>{
                            tickingRef.current = false;
                            const section = sectionRef.current;
                            if (!section || !loadedRef.current) return;
                            const rect = section.getBoundingClientRect();
                            const scrollable = section.offsetHeight - window.innerHeight;
                            const progress = scrollable <= 0 ? 0 : Math.min(1, Math.max(0, -rect.top / scrollable));
                            const frameIndex = Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hero$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_COUNT"] - 1, Math.floor(progress * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hero$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_COUNT"]));
                            if (frameIndex !== lastFrameRef.current) {
                                lastFrameRef.current = frameIndex;
                                drawFrame(frameIndex);
                            }
                            if (heroTextRef.current) {
                                const opacity = Math.max(0, 1 - progress / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hero$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_TEXT_FADE_END"]);
                                heroTextRef.current.style.opacity = String(opacity);
                                heroTextRef.current.style.transform = `translateY(${(1 - opacity) * 12}px)`;
                            }
                            if (bigLeftTextRef.current) {
                                const op = Math.min(1, Math.max(0, (progress - 0.1) / 0.08));
                                bigLeftTextRef.current.style.opacity = String(op);
                                bigLeftTextRef.current.style.transform = `translateY(${(1 - op) * 14}px)`;
                            }
                            if (progressFillRef.current) {
                                progressFillRef.current.style.transform = `scaleX(${progress})`;
                            }
                            const newVisible = new Set();
                            for (const d of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hero$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DIALOGUES"]){
                                if (progress >= d.show && progress <= d.hide) {
                                    newVisible.add(d.id);
                                }
                            }
                            const newIds = [
                                ...newVisible
                            ].sort().join(",");
                            if (newIds !== prevVisibleIdsRef.current) {
                                prevVisibleIdsRef.current = newIds;
                                setVisibleCards(newVisible);
                            }
                        }
                    }["Hero.useEffect.handleScroll"]);
                }
            }["Hero.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            handleScroll();
            return ({
                "Hero.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], [
        drawFrame
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "relative h-[500vh] bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-0 h-screen overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: canvasRef,
                    className: "absolute inset-0 h-full w-full"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 607,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0",
                    style: {
                        background: "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.85) 100%)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 612,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute left-6 top-24 text-accent md:left-10 md:top-28",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HudFrame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HudFrame"], {
                        corner: "tl",
                        size: 26
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 621,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 620,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute right-6 top-24 text-accent md:right-10 md:top-28",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HudFrame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HudFrame"], {
                        corner: "tr",
                        size: 26
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 625,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 624,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute bottom-14 left-6 text-accent md:bottom-16 md:left-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HudFrame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HudFrame"], {
                        corner: "bl",
                        size: 26
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 629,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 628,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute bottom-14 right-6 text-accent md:bottom-16 md:right-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HudFrame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HudFrame"], {
                        corner: "br",
                        size: 26
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 633,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 632,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: heroTextRef,
                    className: "absolute inset-x-0 bottom-0 z-10 flex flex-col items-start gap-5 px-6 pb-24 md:px-12 md:pb-28",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EyebrowBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EyebrowBadge"], {
                            children: "Full Stack Developer // Problem Solver"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 640,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "max-w-[14ch] text-5xl font-semibold leading-[0.95] tracking-tighter text-white md:text-7xl lg:text-8xl",
                            children: [
                                "I am",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 646,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-accent",
                                    children: "Zignesh Vishwakarma."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 647,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 644,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "max-w-[42ch] text-sm leading-relaxed text-zinc-400 md:text-base",
                            children: "I build modern, responsive, and high-performance web applications that blend creativity with functionality."
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 652,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 636,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: bigLeftTextRef,
                    className: "absolute bottom-24 left-6 z-10 hidden flex-col gap-5 md:flex md:bottom-28 md:left-12",
                    style: {
                        opacity: 0
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono text-xs uppercase tracking-[0.3em] text-accent",
                            children: "DEV / ZIGNESH"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 664,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-[clamp(4rem,9vw,9rem)] font-bold leading-[0.9] tracking-tight text-white",
                            children: [
                                "Full Stack",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 670,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-accent",
                                    children: "Developer"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 671,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 668,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 659,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-x-0 bottom-0 z-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-6 mb-3 h-px bg-white/10 md:mx-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: progressFillRef,
                            className: "h-full origin-left bg-accent",
                            style: {
                                transform: "scaleX(0)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 726,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 725,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 724,
                    columnNumber: 9
                }, this),
                !loaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-30 flex flex-col items-center justify-center gap-5 bg-black",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EyebrowBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EyebrowBadge"], {
                            children: "SUIT UP PROTOCOL // BOOTING"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 738,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-px w-60 bg-white/10 md:w-80",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full bg-accent transition-all duration-150",
                                style: {
                                    width: `${Math.round(loadProgress * 100)}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Hero.tsx",
                                lineNumber: 743,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 742,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-500",
                            children: [
                                "Loading Mark LXXXV ·",
                                " ",
                                Math.round(loadProgress * 100),
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 751,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 737,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 606,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Hero.tsx",
        lineNumber: 602,
        columnNumber: 5
    }, this);
}
_s(Hero, "w0uVy7iGHdG8jIKWzl4eLNgFr0g=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
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
                    className: "absolute inset-x-0 bottom-10 z-20 px-4 md:px-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-max animate-scroll gap-3",
                                children: [
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cinematic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"],
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cinematic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"]
                                ].map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex min-w-[120px] items-center gap-3 rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: b.link,
                                                alt: b.quote,
                                                className: "h-6 w-6 object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                                lineNumber: 305,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] font-medium text-white",
                                                        children: b.quote
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                                        lineNumber: 312,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] uppercase tracking-[0.2em] text-zinc-500",
                                                        children: "Skill"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                                lineNumber: 311,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                        lineNumber: 301,
                                        columnNumber: 9
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                lineNumber: 299,
                                columnNumber: 5
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                            lineNumber: 298,
                            columnNumber: 3
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:grid mx-auto max-w-6xl grid-cols-4 gap-4 lg:grid-cols-6",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cinematic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/40",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-12 w-12 items-center justify-center rounded-xl bg-black/40",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: b.link,
                                                alt: b.quote,
                                                className: "h-7 w-7 object-contain transition group-hover:scale-110"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                                lineNumber: 332,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                            lineNumber: 331,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mt-4 text-sm font-semibold text-white",
                                            children: b.quote
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                            lineNumber: 339,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[10px] uppercase tracking-[0.2em] text-zinc-500",
                                            children: "Skill"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                            lineNumber: 343,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, b.id, true, {
                                    fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                                    lineNumber: 327,
                                    columnNumber: 7
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                            lineNumber: 325,
                            columnNumber: 3
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                    lineNumber: 295,
                    columnNumber: 1
                }, this),
                !loaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-30 flex flex-col items-center justify-center gap-5 bg-background px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EyebrowBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EyebrowBadge"], {
                            children: "FLIGHT LOG // RESTORING"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                            lineNumber: 382,
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
                                lineNumber: 384,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                            lineNumber: 383,
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
                            lineNumber: 389,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/CinematicReveal.tsx",
                    lineNumber: 381,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$GithubLogo$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/GithubLogo.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$LinkedinLogo$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/LinkedinLogo.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$TwitterLogo$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/TwitterLogo.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$InstagramLogo$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/InstagramLogo.es.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function SystemsNominal() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "Contact",
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
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedSection"], {
                    className: "flex flex-col divide-y divide-white/10 border border-white/10 rounded-2xl bg-white/[0.03] backdrop-blur-xl p-6 md:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-white md:text-xl",
                                    children: "Get in Touch"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                                    lineNumber: 43,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm text-zinc-400",
                                    children: "Let’s build something amazing together"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                                    lineNumber: 46,
                                    columnNumber: 5
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                            lineNumber: 42,
                            columnNumber: 3
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] uppercase tracking-[0.2em] text-zinc-500",
                                    children: "Email"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                                    lineNumber: 53,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:yourmail@gmail.com",
                                    className: "mt-2 block text-sm text-white hover:text-accent transition",
                                    children: "yourmail@gmail.com"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                                    lineNumber: 56,
                                    columnNumber: 5
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                            lineNumber: 52,
                            columnNumber: 3
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] uppercase tracking-[0.2em] text-zinc-500",
                                    children: "Location"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                                    lineNumber: 66,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm text-white",
                                    children: "Mumbai, India"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                                    lineNumber: 69,
                                    columnNumber: 5
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                            lineNumber: 65,
                            columnNumber: 3
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-5 flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] uppercase tracking-[0.2em] text-zinc-500",
                                    children: "Social"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                                    lineNumber: 77,
                                    columnNumber: 3
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://github.com/",
                                            target: "_blank",
                                            className: "flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition hover:text-accent hover:border-accent/40 hover:scale-110",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$GithubLogo$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GithubLogo"], {
                                                size: 18,
                                                weight: "bold"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                                                lineNumber: 88,
                                                columnNumber: 7
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                                            lineNumber: 83,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://linkedin.com/",
                                            target: "_blank",
                                            className: "flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition hover:text-accent hover:border-accent/40 hover:scale-110",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$LinkedinLogo$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkedinLogo"], {
                                                size: 18,
                                                weight: "bold"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                                                lineNumber: 97,
                                                columnNumber: 7
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                                            lineNumber: 92,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://twitter.com/",
                                            target: "_blank",
                                            className: "flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition hover:text-accent hover:border-accent/40 hover:scale-110",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$TwitterLogo$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TwitterLogo"], {
                                                size: 18,
                                                weight: "bold"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                                                lineNumber: 106,
                                                columnNumber: 7
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                                            lineNumber: 101,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://instagram.com/",
                                            target: "_blank",
                                            className: "flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition hover:text-accent hover:border-accent/40 hover:scale-110",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$InstagramLogo$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InstagramLogo"], {
                                                size: 18,
                                                weight: "bold"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                                                lineNumber: 115,
                                                columnNumber: 7
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                                            lineNumber: 110,
                                            columnNumber: 5
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                                    lineNumber: 81,
                                    columnNumber: 3
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                            lineNumber: 76,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "mailto:yourmail@gmail.com",
                                className: "group inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-medium text-black transition hover:scale-[1.02]",
                                children: [
                                    "Say Hello",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$ArrowUpRight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowUpRight"], {
                                        size: 16,
                                        className: "transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                                        lineNumber: 126,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                                lineNumber: 121,
                                columnNumber: 5
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                            lineNumber: 120,
                            columnNumber: 3
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/SystemsNominal.tsx",
                    lineNumber: 39,
                    columnNumber: 7
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

//# sourceMappingURL=src_0bujq_q._.js.map