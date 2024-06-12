import {openBlock, createElementBlock, createElementVNode} from "vue";

export function render(_ctx, _cache) {
    return (openBlock(), createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [
        createElementVNode("g", {
            "clip-path":"url(#clip0_84_14626)"
        }, [
            createElementVNode("path", {
                d: "M0.100313 11.892C0.0996563 13.9879 0.649687 16.034 1.69537 17.8376L0 24L6.33478 22.3464C8.08022 23.2938 10.0454 23.7934 12.0451 23.7941H12.0502C18.636 23.7941 23.9972 18.4585 24 11.9015C24.0011 8.72373 22.7591 5.73552 20.5031 3.48762C18.2468 1.24001 15.2468 0.00130665 12.0502 0C5.46337 0 0.102938 5.33485 0.100313 11.892ZM3.87291 17.527L3.63637 17.1532C2.64206 15.5792 2.11725 13.7604 2.118 11.8927C2.12006 6.4426 6.57544 2.0085 12.054 2.0085C14.7071 2.00962 17.2005 3.03926 19.0759 4.90739C20.9512 6.7757 21.9831 9.25926 21.9824 11.9007C21.98 17.3509 17.5245 21.7855 12.0502 21.7855H12.0463C10.2638 21.7846 8.51569 21.308 6.99113 20.4075L6.62831 20.1933L2.86912 21.1745L3.87291 17.527Z",
                "fill":"currentColor"
            }),
            createElementVNode("path", {
                d: "M9.30945 6.68107C9.08194 6.19644 8.84251 6.18666 8.62616 6.17816C8.449 6.17085 8.24647 6.1714 8.04414 6.1714C7.84161 6.1714 7.51256 6.24442 7.23442 6.53549C6.956 6.82683 6.17145 7.53088 6.17145 8.96284C6.17145 10.3949 7.25969 11.7788 7.41139 11.9731C7.56329 12.1672 9.51226 15.1998 12.599 16.3664C15.1643 17.336 15.6863 17.1431 16.2431 17.0945C16.7999 17.0461 18.0399 16.3907 18.2928 15.711C18.546 15.0314 18.546 14.4489 18.4701 14.3272C18.3942 14.2059 18.1917 14.1331 17.888 13.9876C17.5842 13.842 16.0912 13.1379 15.8129 13.0407C15.5344 12.9437 15.332 12.8953 15.1295 13.1867C14.927 13.4777 14.3454 14.1331 14.1681 14.3272C13.9911 14.5218 13.8138 14.546 13.5102 14.4004C13.2063 14.2544 12.2283 13.9474 11.068 12.9559C10.1652 12.1844 9.55574 11.2317 9.37858 10.9403C9.20141 10.6493 9.3596 10.4916 9.51188 10.3465C9.64832 10.2161 9.81567 10.0067 9.96765 9.83678C10.1191 9.6668 10.1696 9.54552 10.2709 9.35142C10.3722 9.15713 10.3215 8.98714 10.2457 8.84156C10.1696 8.69598 9.57948 7.25653 9.30945 6.68107Z",
                "fill":"currentColor"
            })
        ]),
        createElementVNode("defs", {}, [
            createElementVNode("clipPath", {
                id: "clip0_84_14626"
            }, [
                createElementVNode("rect", {
                    width:"24",
                    height:"24",
                    fill:"white"
                })
            ])
        ])
    ]))
}