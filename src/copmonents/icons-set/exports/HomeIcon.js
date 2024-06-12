import {openBlock, createElementBlock, createElementVNode} from "vue";

export function render(_ctx, _cache) {
    return (openBlock(), createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [
        createElementVNode("path", {
            d: "M10.707 0.292957C10.6142 0.200011 10.504 0.126273 10.3827 0.0759627C10.2613 0.0256519 10.1313 -0.000244141 9.99997 -0.000244141C9.86864 -0.000244141 9.73859 0.0256519 9.61728 0.0759627C9.49596 0.126273 9.38576 0.200011 9.29297 0.292957L0.29297 9.29296C0.153161 9.43281 0.0579541 9.61097 0.0193866 9.80493C-0.019181 9.99888 0.000622056 10.1999 0.0762921 10.3826C0.151962 10.5653 0.280102 10.7215 0.444511 10.8314C0.608921 10.9412 0.80222 10.9999 0.99997 11H1.99997V18C1.99997 19.103 2.89697 20 3.99997 20H16C17.103 20 18 19.103 18 18V11H19C19.1979 11.0004 19.3916 10.942 19.5563 10.8322C19.721 10.7224 19.8494 10.5661 19.9251 10.3832C20.0009 10.2003 20.0206 9.99905 19.9818 9.80494C19.9429 9.61082 19.8473 9.43262 19.707 9.29296L10.707 0.292957ZM16.001 18H3.99997V8.41396L9.99997 2.41396L16 8.41396V13L16.001 18Z",
            "fill":"currentColor"
        }),
        createElementVNode("path", {
            d: "M11 8H9V11H6V13H9V16H11V13H14V11H11V8Z",
            "fill":"currentColor"
        })
    ]))
}