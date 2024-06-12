import {openBlock, createElementBlock, createElementVNode} from "vue";

export function render(_ctx, _cache) {
    return (openBlock(), createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 20 26",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [
        createElementVNode("path", {
            d: "M14.2857 12.1429C14.2857 13.2795 13.8342 14.3696 13.0305 15.1733C12.2267 15.9771 11.1367 16.4286 10 16.4286C8.86337 16.4286 7.77328 15.9771 6.96955 15.1733C6.16582 14.3696 5.71429 13.2795 5.71429 12.1429V6.14289C5.71429 5.00625 6.16582 3.91616 6.96955 3.11243C7.77328 2.30871 8.86337 1.85718 10 1.85718C11.1367 1.85718 12.2267 2.30871 13.0305 3.11243C13.8342 3.91616 14.2857 5.00625 14.2857 6.14289V12.1429Z",
            "stroke":"currentColor",
            "stroke-width":"2",
            "stroke-linecap":"round",
            "stroke-linejoin":"round"
        }),
        createElementVNode("path", {
            d: "M18.5714 13C18.5732 14.0136 18.3749 15.0175 17.9879 15.9543C17.6009 16.891 17.0327 17.7422 16.316 18.4589C15.5993 19.1756 14.7482 19.7437 13.8114 20.1307C12.8747 20.5178 11.8707 20.7161 10.8571 20.7143H9.14286C8.12917 20.7165 7.12502 20.5186 6.18806 20.1317C5.2511 19.7448 4.39979 19.1767 3.683 18.4599C2.96621 17.7431 2.39807 16.8918 2.01119 15.9548C1.62431 15.0178 1.42632 14.0137 1.42858 13M10 20.7143V24.1429",
            "stroke":"currentColor",
            "stroke-width":"2",
            "stroke-linecap":"round",
            "stroke-linejoin":"round"
        })
    ]))
}
