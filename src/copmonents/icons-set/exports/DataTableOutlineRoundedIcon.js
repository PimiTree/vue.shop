import {openBlock, createElementBlock, createElementVNode} from "vue";

export function render(_ctx, _cache) {
    return (openBlock(), createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 21 19",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [
        createElementVNode("rect", {
            x:"1",
            y:"1",
            width:"18.1176",
            height:"17",
            "stroke":"currentColor",
            "stroke-width":"2",
        }),
        createElementVNode("path", {
            d: "M1.11768 6.70581H18.4412",
            "stroke":"currentColor",
            "stroke-width":"2",
        }),
        createElementVNode("path", {
            d: "M1.11768 12.2942H18.4412",
            "stroke":"currentColor",
            "stroke-width":"2",
        }),
        createElementVNode("ellipse", {
            cx:"3.91182",
            cy:"3.91185",
            rx:"0.558823",
            ry:"0.558824",
            "fill":"currentColor",
        }),
        createElementVNode("ellipse", {
            cx:"3.91182",
            cy:"9.49999",
            rx:"0.558823",
            ry:"0.558824",
            "fill":"currentColor",
        }),
        createElementVNode("ellipse", {
            cx:"3.91182",
            cy:"15.0881",
            rx:"0.558823",
            ry:"0.558824",
            "fill":"currentColor",
        }),
    ]))
}
