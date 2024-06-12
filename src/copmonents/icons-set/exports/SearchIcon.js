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
            d: "M10.5 19.6319C15.1944 19.6319 19 15.7256 19 10.9069C19 6.0882 15.1944 2.18188 10.5 2.18188C5.80558 2.18188 2 6.0882 2 10.9069C2 15.7256 5.80558 19.6319 10.5 19.6319Z",
            "stroke":"currentColor",
            "stroke-width":"2.5",
            "stroke-linecap":"round",
            "stroke-linejoin":"round"
        }),
        createElementVNode("path", {
            d: "M22 21.8182L17 17.4546",
            "stroke":"currentColor",
            "stroke-width":"2.5",
            "stroke-linecap":"round",
            "stroke-linejoin":"round"
        })
    ]))
}
