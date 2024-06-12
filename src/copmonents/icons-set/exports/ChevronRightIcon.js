import {openBlock, createElementBlock, createElementVNode} from "vue";

export function render(_ctx, _cache) {
    return (openBlock(), createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 10 14",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [
        createElementVNode("path", {
            d: "M2.01959 12.5681L7.99998 6.99996L2.01959 1.4318",
            "stroke":"currentColor",
            "stroke-width":"2",
            "stroke-linecap":"square"
        })
    ]))
}
