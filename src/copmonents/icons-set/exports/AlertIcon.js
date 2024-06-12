import {openBlock, createElementBlock, createElementVNode} from "vue";

export function render(_ctx, _cache) {
    return (openBlock(), createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 6 18",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [
        createElementVNode("path", {
            "stroke": "currentColor",
            "stroke-width": "3",
            "stroke-linecap":"round",
            d: "M4.25298 2.98003L2.99998 10.5L1.74698 2.98003C1.71693 2.7982 1.72681 2.612 1.77594 2.43437C1.82507 2.25674 1.91228 2.09193 2.0315 1.95138C2.15072 1.81084 2.2991 1.69792 2.46634 1.62048C2.63359 1.54304 2.81568 1.50293 2.99998 1.50293C3.18428 1.50293 3.36637 1.54304 3.53362 1.62048C3.70086 1.69792 3.84924 1.81084 3.96846 1.95138C4.08769 2.09193 4.17489 2.25674 4.22402 2.43437C4.27315 2.612 4.28304 2.7982 4.25298 2.98003Z"
        }),
        createElementVNode("path", {
            "stroke": "currentColor",
            "stroke-width": "2",
            d: "M3 17C3.55228 17 4 16.5523 4 16C4 15.4477 3.55228 15 3 15C2.44772 15 2 15.4477 2 16C2 16.5523 2.44772 17 3 17Z"
        })
    ]))
}
