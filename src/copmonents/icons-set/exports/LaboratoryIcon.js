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
            d: "M6.52381 12.9524H6.6559C8.65181 12.9524 10.6197 13.4174 12.4048 14.3095C14.1899 15.2016 16.1577 15.6667 18.1536 15.6667H19.1905M7.42857 3H15.5714V3.22619L14.9318 4.10562C14.0747 5.28423 13.6665 6.73007 13.7806 8.18289C13.8947 9.63572 14.5236 11.0001 15.5542 12.0304L21 17.4762C21 19.2857 20.0952 20.6429 18.2857 22H4.71429C2.90476 20.6429 2 19.2857 2 17.4762L7.44667 12.0295C8.47689 10.9991 9.10553 9.63487 9.21948 8.18226C9.33343 6.72964 8.92519 5.28405 8.06824 4.10562L7.42857 3.22619V3Z",
            "stroke":"currentColor",
            "stroke-width":"2",
        })
    ]))
}
