import {openBlock, createElementBlock, createElementVNode} from "vue";

export function render(_ctx, _cache) {
    return (openBlock(), createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [
        createElementVNode("path", {
            d: "M14.7 3.45V20.55M6.6 7.5H12M6.6 10.2H12M6.6 12.9H12M3 3H21V21H3V3Z",
            "stroke":"currentColor",
            "stroke-width":"2"
        })
    ]))
}
