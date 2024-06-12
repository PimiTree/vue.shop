import {openBlock, createElementBlock, createElementVNode} from "vue";

export function render(_ctx, _cache) {
    return (openBlock(), createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 18 10",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [
        createElementVNode("path", {
            d: "M0.396208 0.382399C0.649976 0.137549 0.994114 0 1.35294 0C1.71177 0 2.05591 0.137549 2.30968 0.382399L9.00817 6.84743L15.7067 0.382399C15.9619 0.144488 16.3037 0.0128435 16.6585 0.0158193C17.0133 0.018795 17.3527 0.156153 17.6036 0.398309C17.8545 0.640464 17.9969 0.968042 17.9999 1.31049C18.003 1.65294 17.8666 1.98285 17.6201 2.22918L9.9649 9.6176C9.71113 9.86245 9.367 10 9.00817 10C8.64934 10 8.3052 9.86245 8.05144 9.6176L0.396208 2.22918C0.142516 1.98425 0 1.65211 0 1.30579C0 0.959466 0.142516 0.627323 0.396208 0.382399Z",
            "fill":"currentColor"
        })
    ]))
}
