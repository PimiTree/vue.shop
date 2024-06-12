import {openBlock, createElementBlock, createElementVNode} from "vue";

export function render(_ctx, _cache) {
    return (openBlock(), createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 29 24",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [
        createElementVNode("path", {
            d: "M9.20801 16.5L13.196 11.5L9.20801 6.5H10.2534L14.2414 11.5L10.2534 16.5H9.20801ZM14.1754 16.5L18.1626 11.5L14.1754 6.5H15.22L19.208 11.5L15.22 16.5H14.1754Z",
            "fill":"currentColor"
        })
    ]))
}
