import {openBlock, createElementBlock, createElementVNode} from "vue";

export function render(_ctx, _cache) {
    return (openBlock(), createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 25 20",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [
        createElementVNode("path", {
            d: "M2 2H23",
            "stroke":"currentColor",
            "stroke-width":"2.5",
            "stroke-linecap":"round"
        }),
        createElementVNode("path", {
            d: "M4 10H20",
            "stroke":"currentColor",
            "stroke-width":"2.5",
            "stroke-linecap":"round"
        }),
        createElementVNode("path", {
            d: "M2 18H23",
            "stroke":"currentColor",
            "stroke-width":"2.5",
            "stroke-linecap":"round"
        })
    ]))
}
