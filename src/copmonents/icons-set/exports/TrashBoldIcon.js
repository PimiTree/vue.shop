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
            d: "M20.25 4.5H16.875V3.375C16.875 2.67881 16.5984 2.01113 16.1062 1.51884C15.6139 1.02656 14.9462 0.75 14.25 0.75H9.75C9.05381 0.75 8.38613 1.02656 7.89384 1.51884C7.40156 2.01113 7.125 2.67881 7.125 3.375V4.5H3.75C3.45163 4.5 3.16548 4.61853 2.9545 4.8295C2.74353 5.04048 2.625 5.32663 2.625 5.625C2.625 5.92337 2.74353 6.20952 2.9545 6.4205C3.16548 6.63147 3.45163 6.75 3.75 6.75H4.125V19.5C4.125 19.9973 4.32254 20.4742 4.67417 20.8258C5.02581 21.1775 5.50272 21.375 6 21.375H18C18.4973 21.375 18.9742 21.1775 19.3258 20.8258C19.6775 20.4742 19.875 19.9973 19.875 19.5V6.75H20.25C20.5484 6.75 20.8345 6.63147 21.0455 6.4205C21.2565 6.20952 21.375 5.92337 21.375 5.625C21.375 5.32663 21.2565 5.04048 21.0455 4.8295C20.8345 4.61853 20.5484 4.5 20.25 4.5ZM9.375 3.375C9.375 3.27554 9.41451 3.18016 9.48483 3.10984C9.55516 3.03951 9.65054 3 9.75 3H14.25C14.3495 3 14.4448 3.03951 14.5152 3.10984C14.5855 3.18016 14.625 3.27554 14.625 3.375V4.5H9.375V3.375ZM17.625 19.125H6.375V6.75H17.625V19.125ZM10.875 9.75V15.75C10.875 16.0484 10.7565 16.3345 10.5455 16.5455C10.3345 16.7565 10.0484 16.875 9.75 16.875C9.45163 16.875 9.16548 16.7565 8.9545 16.5455C8.74353 16.3345 8.625 16.0484 8.625 15.75V9.75C8.625 9.45163 8.74353 9.16548 8.9545 8.9545C9.16548 8.74353 9.45163 8.625 9.75 8.625C10.0484 8.625 10.3345 8.74353 10.5455 8.9545C10.7565 9.16548 10.875 9.45163 10.875 9.75ZM15.375 9.75V15.75C15.375 16.0484 15.2565 16.3345 15.0455 16.5455C14.8345 16.7565 14.5484 16.875 14.25 16.875C13.9516 16.875 13.6655 16.7565 13.4545 16.5455C13.2435 16.3345 13.125 16.0484 13.125 15.75V9.75C13.125 9.45163 13.2435 9.16548 13.4545 8.9545C13.6655 8.74353 13.9516 8.625 14.25 8.625C14.5484 8.625 14.8345 8.74353 15.0455 8.9545C15.2565 9.16548 15.375 9.45163 15.375 9.75Z",
            "fill":"currentColor"
        })
    ]))
}