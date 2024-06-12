import {openBlock, createElementBlock, createElementVNode} from "vue";

export function render(_ctx, _cache) {
    return (openBlock(), createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 21 20",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [
        createElementVNode("path", {
            d: "M2 17V3C2 2.46957 2.21071 1.96086 2.58579 1.58579C2.96086 1.21071 3.46957 1 4 1H18C18.5304 1 19.0391 1.21071 19.4142 1.58579C19.7893 1.96086 20 2.46957 20 3V17C20 17.5304 19.7893 18.0391 19.4142 18.4142C19.0391 18.7893 18.5304 19 18 19H4C3.46957 19 2.96086 18.7893 2.58579 18.4142C2.21071 18.0391 2 17.5304 2 17Z",
            "stroke":"currentColor",
            "stroke-width":"2",
        }),
        createElementVNode("path", {
            d: "M17 12V8M11.5 7.5L12.5 6.5M6.5 7.5L5.5 6.5M5.5 13.5L6.5 12.5M12.5 13.5L11.5 12.5M1 6H2M1 4H2M2 14H1M2 16H1M9 13C8.20435 13 7.44129 12.6839 6.87868 12.1213C6.31607 11.5587 6 10.7956 6 10C6 9.20435 6.31607 8.44129 6.87868 7.87868C7.44129 7.31607 8.20435 7 9 7C9.79565 7 10.5587 7.31607 11.1213 7.87868C11.6839 8.44129 12 9.20435 12 10C12 10.7956 11.6839 11.5587 11.1213 12.1213C10.5587 12.6839 9.79565 13 9 13Z",
            "stroke":"currentColor",
            "stroke-width":"2",
            "stroke-linecap":"round",
            "stroke-linejoin":"round"
        })
    ]))
}