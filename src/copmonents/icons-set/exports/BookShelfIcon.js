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
            "stroke":"#3F4E5D",
            "stroke-width":"2",
            d: "M6 1V22.5M5 5H19M5 11H19M5 17H19M19 1V22.5"
        })
    ]))
}
