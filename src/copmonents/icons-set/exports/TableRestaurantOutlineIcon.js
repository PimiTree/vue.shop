import {openBlock, createElementBlock, createElementVNode} from "vue";

export function render(_ctx, _cache) {
    return (openBlock(), createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 19",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [
        createElementVNode("path", {
            d: "M4.66667 8.33333V13.6667M20 8.33333V13.6667M8.22677 7.66667H2L4.66667 1H19.3333L22 7.66667H15",
            "stroke":"currentColor",
            "stroke-width":"2",
        }),
        createElementVNode("path", {
            d: "M13.5 5L9 10H14.5L9 17.5",
            "stroke":"currentColor",
            "stroke-width":"2",
        })
    ]))
}
