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
            d: "M5.3 21.95V21.9H5.25C4.02556 21.9 3.05 20.9847 3.05 19.85V4.1C3.05 3.55746 3.28088 3.03639 3.69313 2.65163C4.10548 2.26676 4.66545 2.05 5.25 2.05H18.75C19.3345 2.05 19.8945 2.26676 20.3069 2.65163C20.7191 3.03639 20.95 3.55746 20.95 4.1V19.85C20.95 20.9847 19.9744 21.9 18.75 21.9H18.7V21.95V22.95H16.55V21.95V21.9H16.5H7.5H7.45V21.95V22.95H5.3V21.95ZM5.25 4.05H5.2V4.1V19.85V19.9H5.25H10.875H10.925V19.85V4.1V4.05H10.875H5.25ZM13.125 4.05H13.075V4.1V19.85V19.9H13.125H18.75H18.8V19.85V4.1V4.05H18.75H13.125ZM9.7 13.5H7.55V10.45H9.7V13.5ZM16.45 13.5H14.3V10.45H16.45V13.5Z",
            "fill":"currentColor",
            "stroke":"currentColor",
            "stroke-width":"0.1",
        })
    ]))
}
