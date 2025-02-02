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
            d: "M12 22C16.1175 22 19.5 18.737 19.5 14.549C19.5 13.521 19.4475 12.419 18.8775 10.706C18.3075 8.993 18.193 8.772 17.5905 7.714C17.333 9.8725 15.9555 10.7725 15.6055 11.0415C15.6055 10.7615 14.7725 7.668 13.509 5.8165C12.2685 4 10.5815 2.8085 9.5925 2C9.5925 3.535 9.161 5.817 8.5425 6.98C7.9245 8.1425 7.8085 8.185 7.036 9.05C6.264 9.915 5.9095 10.1825 5.2635 11.2325C4.618 12.2825 4.5 13.681 4.5 14.709C4.5 18.897 7.8825 22 12 22Z",
            "stroke":"currentColor",
            "stroke-width":"2",
            "stroke-linejoin":"round"
        })
    ]))
}
