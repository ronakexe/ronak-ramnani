(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/films.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "films",
    ()=>films,
    "getAllFilmSlugs",
    ()=>getAllFilmSlugs,
    "getFilmBySlug",
    ()=>getFilmBySlug
]);
// Helper function to format slug to title (e.g., "failed-comic" -> "Failed Comic")
function formatSlugToTitle(slug) {
    return slug.split("-").map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
const films = [
    {
        slug: "failed-comic",
        title: formatSlugToTitle("failed-comic"),
        iconPath: "/assets/film-icons/failed-comic-icon.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        videoId: "958536656",
        videoType: "vimeo"
    },
    {
        slug: "double-trouble",
        title: formatSlugToTitle("double-trouble"),
        iconPath: "/assets/film-icons/double-trouble-icon.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        videoId: "943628645",
        videoType: "vimeo"
    },
    {
        slug: "human-error",
        title: formatSlugToTitle("human-error"),
        iconPath: "/assets/film-icons/human-error-icon.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        videoId: "DY51tBN6Lso",
        videoType: "youtube"
    },
    {
        slug: "sidewalk-jimmy",
        title: formatSlugToTitle("sidewalk-jimmy"),
        iconPath: "/assets/film-icons/sidewalk-jimmy-icon.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        videoId: "1054577008",
        videoType: "vimeo"
    },
    {
        slug: "supernova",
        title: formatSlugToTitle("supernova"),
        iconPath: "/assets/film-icons/supernova-icon.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        videoId: "f5JlmgTjRJ8",
        videoType: "youtube"
    }
];
function getFilmBySlug(slug) {
    return films.find((film)=>film.slug === slug);
}
function getAllFilmSlugs() {
    return films.map((film)=>film.slug);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/film/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FilmPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$films$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/films.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function FilmPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "relative",
            backgroundColor: "#009E1A",
            minHeight: "100vh",
            width: "100%",
            padding: "20px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                style: {
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    zIndex: 10
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/assets/scat_logo.svg",
                    alt: "SCAT Logo",
                    style: {
                        width: "30px",
                        height: "30px",
                        cursor: "pointer"
                    }
                }, void 0, false, {
                    fileName: "[project]/app/film/page.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/film/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, 200px)",
                    gap: "50px",
                    width: "100%",
                    paddingTop: "60px"
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$films$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["films"].map((film)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/film/${film.slug}`,
                        style: {
                            display: "block",
                            width: "200px",
                            cursor: "pointer",
                            transition: "transform 0.2s ease"
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.transform = "scale(1.05)";
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.transform = "scale(1)";
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: film.iconPath,
                            alt: film.title,
                            width: 200,
                            height: 0,
                            style: {
                                width: "200px",
                                height: "auto"
                            },
                            unoptimized: true
                        }, void 0, false, {
                            fileName: "[project]/app/film/page.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this)
                    }, film.slug, false, {
                        fileName: "[project]/app/film/page.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/film/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/film/page.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = FilmPage;
var _c;
__turbopack_context__.k.register(_c, "FilmPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_3e7154af._.js.map