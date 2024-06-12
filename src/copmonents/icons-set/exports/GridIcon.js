import {openBlock, createElementBlock, createElementVNode} from "vue";

export function render(_ctx, _cache) {
    return (openBlock(), createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 10 10",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [
        createElementVNode("path", {
            d: "M0 0H2V2H0V0Z",
            "fill":"currentColor"
        }),
        createElementVNode("path", {
            d: "M4 0H6V2H4V0Z",
            "fill":"currentColor"
        }),
        createElementVNode("path", {
            d: "M8 0H10V2H8V0Z",
            "fill":"currentColor"
        }),
        createElementVNode("path", {
            d: "M0 4H2V6H0V4Z",
            "fill":"currentColor"
        }),
        createElementVNode("path", {
            d: "M4 4H6V6H4V4Z",
            "fill":"currentColor"
        }),
        createElementVNode("path", {
            d: "M8 4H10V6H8V4Z",
            "fill":"currentColor"
        }),
        createElementVNode("path", {
            d: "M0 8H2V10H0V8Z",
            "fill":"currentColor"
        }),
        createElementVNode("path", {
            d: "M4 8H6V10H4V8Z",
            "fill":"currentColor"
        }),
        createElementVNode("path", {
            d: "M8 8H10V10H8V8Z",
            "fill":"currentColor"
        }),
    ]))
}
