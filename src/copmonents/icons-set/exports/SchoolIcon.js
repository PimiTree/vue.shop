import {openBlock, createElementBlock, createElementVNode} from "vue";

export function render(_ctx, _cache) {
    return (openBlock(), createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 22 20",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [
        createElementVNode("g", {
            id:"school"
        }, [
            createElementVNode("rect", {
                x:"4.386",
                y:"1",
                width:"13.228",
                height:"16.6119",
                "stroke":"currentColor",
                "stroke-width":"2"
            }),
            createElementVNode("path", {
                d: "M0 18.4004H22",
                "stroke":"currentColor",
                "stroke-width":"2",
            }),
            createElementVNode("rect", {
                x:"6.77003",
                y:"4.22998",
                width:"1.692",
                height:"1.692",
                "fill":"currentColor"
            }),
            createElementVNode("rect", {
                x:"13.5381",
                y:"4.22998",
                width:"1.692",
                height:"1.692",
                "fill":"currentColor"
            }),
            createElementVNode("rect", {
                x:"13.5381",
                y:"7.61401",
                width:"1.692",
                height:"1.692",
                "fill":"currentColor"
            }),
            createElementVNode("rect", {
                x:"13.5381",
                y:"7.61401",
                width:"1.692",
                height:"1.692",
                "fill":"currentColor"
            }),
            createElementVNode("g", {}, [
                createElementVNode("mask", {
                    id:"path-7-inside-1_83_4805",
                    fill:"white"
                }, [
                    createElementVNode("path", {
                        d: "M7.61598 10.998H14.384V17.766H7.61598V10.998Z",
                        "stroke":"currentColor",
                        "stroke-width":"2",
                    }),
                ]),
                createElementVNode("path", {
                    d: "M7.61598 10.998V8.99805H5.61598V10.998H7.61598ZM14.384 10.998H16.384V8.99805H14.384V10.998ZM7.61598 12.998H14.384V8.99805H7.61598V12.998ZM12.384 10.998V17.766H16.384V10.998H12.384ZM9.61598 17.766V10.998H5.61598V17.766H9.61598Z",
                    "fill":"currentColor",
                    mask:"url(#path-7-inside-1_83_4805)",
                }),
            ])
        ]),

    ]))
}
