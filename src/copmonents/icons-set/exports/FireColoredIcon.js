import {openBlock, createElementBlock, createElementVNode} from "vue";

export function render(_ctx, _cache) {
    return (openBlock(), createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 19 21",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [
        createElementVNode("path", {
            d: "M13.0931 4.21389C14.8179 4.98466 16.2261 6.32395 17.0823 8.00803C17.9385 9.69211 18.1909 11.619 17.7974 13.4668C17.4039 15.3146 16.3882 16.9714 14.9201 18.1605C13.452 19.3495 11.6203 19.9988 9.73107 19.9999C8.11489 20 6.53426 19.5254 5.18545 18.635C3.83664 17.7447 2.77906 16.4777 2.14402 14.9915C1.50898 13.5053 1.32445 11.8653 1.61335 10.2752C1.90225 8.68501 2.65185 7.21473 3.76907 6.04689C4.53849 7.12235 5.55411 7.99807 6.73107 8.60089C6.75169 7.27951 7.06359 5.97896 7.64456 4.79198C8.22552 3.60499 9.06122 2.56081 10.0921 1.73389C10.8788 2.78908 11.9077 3.63965 13.0921 4.21389",
            "stroke":"#1E4E9D",
            "stroke-width":"2",
            "stroke-linecap":"round",
            "stroke-linejoin":"round"
        }),
        createElementVNode("path", {
            d: "M9.73107 17C10.6838 17.0016 11.6013 16.6405 12.2975 15.99C12.9936 15.3396 13.416 14.4486 13.4791 13.498C13.5421 12.5474 13.2409 11.6084 12.6367 10.8718C12.0325 10.1352 11.1706 9.65617 10.2261 9.53198C9.19344 10.4561 8.51314 11.7096 8.30107 13.079C7.53068 12.8902 6.80559 12.5499 6.16807 12.078C5.98273 12.6413 5.93363 13.2406 6.02481 13.8265C6.11599 14.4125 6.34485 14.9685 6.69259 15.4489C7.04033 15.9293 7.49705 16.3203 8.02524 16.59C8.55343 16.8596 9.13804 17.0001 9.73107 17Z",
            "stroke":"#D2822E",
            "stroke-width":"2",
            "stroke-linecap":"round",
            "stroke-linejoin":"round"
        })
    ]))
}
