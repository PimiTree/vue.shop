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
            d: "M18 2C18.5046 1.99984 18.9906 2.19041 19.3605 2.5335C19.7305 2.87659 19.9572 3.34684 19.995 3.85L20 4V20C20.0002 20.5046 19.8096 20.9906 19.4665 21.3605C19.1234 21.7305 18.6532 21.9572 18.15 21.995L18 22H6C5.49542 22.0002 5.00943 21.8096 4.63945 21.4665C4.26947 21.1234 4.04284 20.6532 4.005 20.15L4 20V4C3.99984 3.49542 4.19041 3.00943 4.5335 2.63945C4.87659 2.26947 5.34684 2.04284 5.85 2.005L6 2H18ZM18 17.5H13V20H18V17.5ZM11 4H6V20H11V4ZM18 13H13V15.5H18V13ZM9 11C9.25488 11.0003 9.50003 11.0979 9.68537 11.2728C9.8707 11.4478 9.98224 11.687 9.99717 11.9414C10.0121 12.1958 9.92933 12.4464 9.76574 12.6418C9.60215 12.8373 9.3701 12.9629 9.117 12.993L9 13H8C7.74512 12.9997 7.49997 12.9021 7.31463 12.7272C7.1293 12.5522 7.01777 12.313 7.00283 12.0586C6.98789 11.8042 7.07067 11.5536 7.23426 11.3582C7.39786 11.1627 7.6299 11.0371 7.883 11.007L8 11H9ZM18 8.5H13V11H18V8.5ZM18 4H13V6.5H18V4Z",
            "fill":"currentColor"
        })
    ]))
}
