import {openBlock, createElementBlock, createElementVNode} from "vue";

export function render(_ctx, _cache) {
    return (openBlock(), createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [
        createElementVNode("path", {
            d: "M1.52997 9.47003V11.588C1.52984 12.1443 1.63928 12.6951 1.85205 13.209C2.06482 13.7229 2.37675 14.1899 2.77002 14.5833C3.16329 14.9766 3.63019 15.2887 4.14407 15.5016C4.65795 15.7145 5.20874 15.824 5.76497 15.824H18.47M1.52997 4.17603H14.235C14.7913 4.17589 15.3422 4.28537 15.8562 4.4982C16.3702 4.71104 16.8372 5.02305 17.2306 5.41643C17.6239 5.8098 17.936 6.27683 18.1488 6.79082C18.3616 7.30482 18.4711 7.85571 18.471 8.41202V10.529",
            "stroke":"currentColor",
            "stroke-width":"1.5",
            "stroke-linecap":"round",
            "stroke-linejoin":"round"
        }),
        createElementVNode("path", {
            d: "M15.294 12.647L18.471 15.823L15.294 19M4.70599 7.353L1.52899 4.176L4.70599 1",
            "stroke":"currentColor",
            "stroke-width":"1.5",
            "stroke-linecap":"round",
            "stroke-linejoin":"round"
        })
    ]))
}
