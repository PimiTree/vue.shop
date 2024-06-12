import {openBlock, createElementBlock, createElementVNode} from "vue";

export function render(_ctx, _cache) {
    return (openBlock(), createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 22 22",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [
        createElementVNode("path", {
            d: "M1 21H21M5 6H17",
            "stroke":"currentColor",
            "stroke-width":"2",
            "stroke-linecap":"round",
            "stroke-linejoin":"round"
        }),
        createElementVNode("path", {
            d: "M6 6H16L16.4385 9.5085C16.4795 9.8355 16.5525 10.1575 16.6565 10.4695L18.3235 15.471C18.4407 15.8225 18.5185 16.1859 18.5555 16.5545L19 21H3L3.4445 16.555C3.48141 16.1862 3.55923 15.8226 3.6765 15.471L5.3435 10.4695C5.4475 10.1575 5.5205 9.8355 5.5615 9.5085L6 6Z",
            "stroke":"currentColor",
            "stroke-width":"2",
            "stroke-linejoin":"round"
        }),
        createElementVNode("path", {
            d: "M11 3L11.414 2.586C11.5997 2.40021 11.8203 2.25283 12.063 2.15228C12.3057 2.05174 12.5658 1.99999 12.8285 2H13.1715C13.4342 2.00001 13.6943 1.94826 13.937 1.84772C14.1797 1.74717 14.4003 1.59979 14.586 1.414L15 1",
            "stroke":"currentColor",
            "stroke-width":"2",
            "stroke-linecap":"round",
            "stroke-linejoin":"round"
        }),
        createElementVNode("path", {
            d: "M7.5 14.5C7.50064 15.1876 7.70347 15.8599 8.08326 16.4332C8.46305 17.0064 9.00303 17.4553 9.636 17.724M14.5 14.5C14.4993 15.1876 14.2964 15.8599 13.9167 16.4331C13.5369 17.0063 12.9969 17.4552 12.364 17.724M8.467 12.085C8.79346 11.7417 9.1864 11.4685 9.62188 11.2819C10.0574 11.0954 10.5263 10.9995 11 11C11.4738 10.9994 11.9428 11.0953 12.3784 11.2818C12.814 11.4684 13.207 11.7416 13.5335 12.085",
            "stroke":"currentColor",
            "stroke-width":"2",
            "stroke-linecap":"round"
        }),
        createElementVNode("path", {
            d: "M11 15.5C11.5523 15.5 12 15.0523 12 14.5C12 13.9477 11.5523 13.5 11 13.5C10.4477 13.5 10 13.9477 10 14.5C10 15.0523 10.4477 15.5 11 15.5Z",
            "fill":"currentColor"
        }),
    ]))
}
