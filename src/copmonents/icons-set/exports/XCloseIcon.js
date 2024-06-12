import {openBlock, createElementBlock, createElementVNode} from "vue";

export function render(_ctx, _cache) {
    return (openBlock(), createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 25 24",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [
        createElementVNode("path", {
            d: "M18.7262 6L6.7262 18M6.7262 6L18.7262 18",
            "stroke":"currentColor",
            "stroke-width":"2",
            "stroke-linecap":"round",
            "stroke-linejoin":"round"
        })
    ]))
}
