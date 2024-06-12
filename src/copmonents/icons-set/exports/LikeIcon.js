import {openBlock, createElementBlock, createElementVNode} from "vue";

export function render(_ctx, _cache) {
    return (openBlock(), createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 25 24",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [
        createElementVNode("path", {
            d: "M7.7262 22V11M2.7262 13V20C2.7262 21.1046 3.62163 22 4.7262 22H18.1524C19.6332 22 20.8924 20.9197 21.1176 19.4562L22.1945 12.4562C22.4741 10.6389 21.068 9 19.2294 9H15.7262C15.1739 9 14.7262 8.55228 14.7262 8V4.46584C14.7262 3.10399 13.6222 2 12.2604 2C11.9355 2 11.6412 2.1913 11.5093 2.48812L7.99013 10.4061C7.82963 10.7673 7.47151 11 7.07632 11H4.7262C3.62163 11 2.7262 11.8954 2.7262 13Z",
            "stroke":"currentColor",
            "stroke-width":"2",
            "stroke-linecap":"round",
            "stroke-linejoin":"round"
        })
    ]))
}
