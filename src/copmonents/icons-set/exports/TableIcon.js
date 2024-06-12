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
            d: "M4.66667 13.3333V18.6667M20 13.3333V18.6667M4.66667 6H19.3333L22 12.6667H2L4.66667 6Z",
            "stroke":"currentColor",
            "stroke-width":"2"
        })
    ]))
}
