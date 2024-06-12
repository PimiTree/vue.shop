import {openBlock, createElementBlock, createElementVNode} from "vue";

export function render(_ctx, _cache) {
    return (openBlock(), createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 26",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [
        createElementVNode("path", {
            d: "M14.2657 11.1246L23.131 0.752686H21.03L13.3325 9.75828L7.18422 0.752686H0.0928955L9.39019 14.3709L0.0928955 25.2473H2.1939L10.323 15.7371L16.8158 25.2473H23.9071L14.2651 11.1246H14.2657ZM11.3881 14.4907L10.446 13.1347L2.95084 2.34445H6.17783L12.2263 11.0527L13.1682 12.4087L21.0309 23.7279H17.8043L11.3881 14.4913V14.4907Z",
            "fill":"currentColor"
        })
    ]))
}
