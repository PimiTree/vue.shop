import {openBlock, createElementBlock, createElementVNode} from "vue";

export function render(_ctx, _cache) {
    return (openBlock(), createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 26 26",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [
        createElementVNode("path", {
            d: "M19.9091 8.27271L4.63635 13.5714L9.92307 15.3376M19.9091 8.27271L9.92307 15.3376M19.9091 8.27271L15.2098 20.6363L9.92307 15.3376",
            "stroke":"currentColor",
            "stroke-width":"1.5",
            "stroke-linecap":"round",
            "stroke-linejoin":"round"
        }),
        createElementVNode("path", {
            d: "M13 25C19.6276 25 25 19.6276 25 13C25 6.3724 19.6276 1 13 1C6.3724 1 1 6.3724 1 13C1 19.6276 6.3724 25 13 25Z",
            "stroke":"currentColor",
            "stroke-width":"1.5",
            "stroke-linecap":"round",
            "stroke-linejoin":"round"
        })
    ]))
}
