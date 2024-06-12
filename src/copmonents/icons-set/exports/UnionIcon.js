import {openBlock, createElementBlock, createElementVNode} from "vue";

export function render(_ctx, _cache) {
    return (openBlock(), createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 25 24",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [
        createElementVNode("mask", {
            id: "path-1-inside-1_2021_10287",
            "fill":"white"
        }, [
            createElementVNode("path", {
                d: "M24.7309 0.886893L23.844 0L21.4957 2.34831L12.6955 1.82361L0.726257 13.7928L10.9333 23.9999L22.9025 12.0307L22.3784 3.23943L24.7309 0.886893Z",
                "fill-rule":"evenodd",
                "clip-rule":"evenodd"
            })
        ]),
        createElementVNode("path", {
            d: "M23.844 0L25.0461 -1.20208L23.844 -2.40416L22.6419 -1.20208L23.844 0ZM24.7309 0.886893L25.933 2.08897L27.1351 0.886893L25.933 -0.315189L24.7309 0.886893ZM21.4957 2.34831L21.3945 4.0453L22.1574 4.09079L22.6978 3.5504L21.4957 2.34831ZM12.6955 1.82361L12.7966 0.126625L12.0338 0.0811397L11.4934 0.62153L12.6955 1.82361ZM0.726257 13.7928L-0.475824 12.5907L-1.67791 13.7928L-0.475824 14.9949L0.726257 13.7928ZM10.9333 23.9999L9.73125 25.202L10.9333 26.4041L12.1354 25.202L10.9333 23.9999ZM22.9025 12.0307L24.1046 13.2328L24.645 12.6924L24.5995 11.9295L22.9025 12.0307ZM22.3784 3.23943L21.1763 2.03735L20.6359 2.57774L20.6814 3.34061L22.3784 3.23943ZM22.6419 1.20208L23.5288 2.08898L25.933 -0.315189L25.0461 -1.20208L22.6419 1.20208ZM22.6978 3.5504L25.0461 1.20208L22.6419 -1.20208L20.2936 1.14623L22.6978 3.5504ZM12.5943 3.5206L21.3945 4.0453L21.5969 0.651328L12.7966 0.126625L12.5943 3.5206ZM1.92834 14.9949L13.8975 3.02569L11.4934 0.62153L-0.475824 12.5907L1.92834 14.9949ZM12.1354 22.7978L1.92834 12.5907L-0.475824 14.9949L9.73125 25.202L12.1354 22.7978ZM21.7005 10.8286L9.73125 22.7978L12.1354 25.202L24.1046 13.2328L21.7005 10.8286ZM20.6814 3.34061L21.2055 12.1319L24.5995 11.9295L24.0754 3.13825L20.6814 3.34061ZM23.5288 -0.315188L21.1763 2.03735L23.5805 4.44151L25.933 2.08897L23.5288 -0.315188Z",
            "fill":"currentColor",
            mask:"url(#path-1-inside-1_2021_10287)"
        }),
        createElementVNode("path", {
            d: "M8.53474 16.2777C8.62525 16.3682 8.72848 16.4149 8.84445 16.4177C8.95759 16.4177 9.07921 16.3922 9.20932 16.3413C9.34225 16.2876 9.48226 16.2239 9.62934 16.1504C9.77642 16.0712 9.92491 15.9991 10.0748 15.934C10.2276 15.8662 10.3817 15.8195 10.5373 15.794C10.6957 15.7657 10.854 15.7742 11.0124 15.8195C11.168 15.8619 11.3207 15.9581 11.4706 16.108C11.6771 16.3145 11.7931 16.5379 11.8185 16.7783C11.8468 17.0159 11.8044 17.2563 11.6913 17.4996C11.581 17.74 11.4197 17.9663 11.2076 18.1784C11.0605 18.3255 10.8936 18.4612 10.707 18.5857C10.5259 18.7101 10.3322 18.8162 10.1257 18.9039L9.37478 18.1105L9.68025 17.805L10.2869 18.2505L10.1427 18.2081C10.2756 18.16 10.4029 18.0978 10.5245 18.0214C10.6433 17.9422 10.7494 17.8559 10.8427 17.7626C10.9587 17.6466 11.0478 17.5264 11.11 17.402C11.1722 17.2719 11.1991 17.146 11.1906 17.0244C11.1793 16.8999 11.1242 16.7882 11.0252 16.6892C10.929 16.5931 10.8229 16.5436 10.707 16.5407C10.591 16.5322 10.4666 16.5549 10.3336 16.6086C10.2007 16.6567 10.0635 16.7203 9.92208 16.7995C9.77783 16.8759 9.63075 16.9494 9.48085 17.0201C9.32811 17.088 9.17396 17.1375 9.0184 17.1686C8.86283 17.1941 8.70868 17.187 8.55595 17.1474C8.40321 17.1022 8.25048 17.0032 8.09774 16.8504C7.90541 16.6581 7.79369 16.453 7.76258 16.2353C7.72863 16.0146 7.76116 15.7926 7.86016 15.5692C7.95632 15.3429 8.10482 15.1293 8.30563 14.9285C8.44705 14.7871 8.60969 14.6556 8.79354 14.534C8.97739 14.4067 9.17679 14.2978 9.39175 14.2073L10.0663 14.9667L9.75237 15.2807L9.19235 14.8819L9.31962 14.8819C9.21214 14.9271 9.10608 14.9851 9.00143 15.0558C8.8996 15.1237 8.80485 15.2015 8.71717 15.2892C8.61535 15.391 8.53332 15.5013 8.4711 15.6201C8.40604 15.736 8.37634 15.8506 8.382 15.9637C8.38766 16.0769 8.43857 16.1815 8.53474 16.2777ZM14.9256 13.858L14.6625 13.8749L15.1504 13.6076L15.4135 13.8707L14.234 15.0501L13.971 14.7871L14.2637 14.2907L14.2892 14.418L13.5043 14.0149L13.657 13.998L12.4776 15.1774L12.4818 15.0459L12.8594 15.8308L12.7873 15.7926L13.2455 15.5126L13.5085 15.7756L12.4224 16.8617L12.1594 16.5987L12.4182 16.1278L12.4054 16.3526L10.7126 12.6318L11.226 12.0845L14.9256 13.858ZM12.3206 14.7489L12.2103 14.715L13.2031 13.7222L13.237 13.858L11.1581 12.7379L11.2812 12.6233L12.3206 14.7489ZM16.4295 11.1491L16.7392 10.8394L17.592 11.6922L15.5004 13.7838L15.2373 13.5208L15.5301 13.0244L15.5682 13.1898L13.1287 10.7503L13.2942 10.7885L12.8063 11.0897L12.5432 10.8267L13.7397 9.58784L14.0027 9.85088L13.693 10.3897L13.6506 10.2285L16.0604 12.6383H15.8907L16.8877 11.6413L16.8962 11.8025L16.4295 11.1491ZM18.9779 8.77892L19.2876 8.46921L20.047 9.23712L17.8578 11.4263L17.5948 11.1633L17.8918 10.6542L17.9257 10.8324L15.4862 8.39284L15.6644 8.42678L15.1638 8.73225L14.9007 8.46921L15.7238 7.60371L17.022 6.30546L17.756 7.03944L17.4421 7.35339L16.9287 7.00125L17.1069 6.9758L16.025 8.05767L16.025 7.88797L17.0942 8.95711L16.9245 8.95711L17.9724 7.90918L18.3373 8.27405L17.2893 9.32198L17.2808 9.14379L18.4179 10.2808H18.2482L19.3809 9.14803L19.364 9.33471L18.9779 8.77892Z",
            "fill":"#D2822E",
        })
    ]))
}
