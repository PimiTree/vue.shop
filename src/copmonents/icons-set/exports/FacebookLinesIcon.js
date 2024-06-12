import {openBlock, createElementBlock, createElementVNode} from "vue";

export function render(_ctx, _cache) {
    return (openBlock(), createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 16 26",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [
        createElementVNode("path", {
            d: "M15.3548 1H11.3431C9.56982 1 7.86916 1.63214 6.61525 2.75736C5.36134 3.88258 4.6569 5.4087 4.6569 7V10.6H0.645172V15.4H4.6569V25H10.0059V15.4H14.0176L15.3548 10.6H10.0059V7C10.0059 6.68174 10.1468 6.37652 10.3975 6.15147C10.6483 5.92643 10.9885 5.8 11.3431 5.8H15.3548V1Z",
            "stroke":"currentColor",
            "stroke-linecap":"round",
            "stroke-linejoin":"round"
        })
    ]))
}
