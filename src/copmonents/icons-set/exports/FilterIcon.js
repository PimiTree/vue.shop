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
            d: "M9.375 5.25214C9.14294 5.25214 8.92038 5.34433 8.75628 5.50843C8.59219 5.67252 8.5 5.89508 8.5 6.12714C8.5 6.35921 8.59219 6.58177 8.75628 6.74586C8.92038 6.90996 9.14294 7.00214 9.375 7.00214C9.60706 7.00214 9.82962 6.90996 9.99372 6.74586C10.1578 6.58177 10.25 6.35921 10.25 6.12714C10.25 5.89508 10.1578 5.67252 9.99372 5.50843C9.82962 5.34433 9.60706 5.25214 9.375 5.25214ZM6.89875 5.25214C7.07953 4.7398 7.41477 4.29615 7.85827 3.98233C8.30178 3.66852 8.8317 3.5 9.375 3.5C9.9183 3.5 10.4482 3.66852 10.8917 3.98233C11.3352 4.29615 11.6705 4.7398 11.8512 5.25214H18.125C18.3571 5.25214 18.5796 5.34433 18.7437 5.50843C18.9078 5.67252 19 5.89508 19 6.12714C19 6.35921 18.9078 6.58177 18.7437 6.74586C18.5796 6.90996 18.3571 7.00214 18.125 7.00214H11.8512C11.6705 7.51449 11.3352 7.95814 10.8917 8.27195C10.4482 8.58577 9.9183 8.75429 9.375 8.75429C8.8317 8.75429 8.30178 8.58577 7.85827 8.27195C7.41477 7.95814 7.07953 7.51449 6.89875 7.00214H5.875C5.64294 7.00214 5.42038 6.90996 5.25628 6.74586C5.09219 6.58177 5 6.35921 5 6.12714C5 5.89508 5.09219 5.67252 5.25628 5.50843C5.42038 5.34433 5.64294 5.25214 5.875 5.25214H6.89875ZM14.625 10.5021C14.3929 10.5021 14.1704 10.5943 14.0063 10.7584C13.8422 10.9225 13.75 11.1451 13.75 11.3771C13.75 11.6092 13.8422 11.8318 14.0063 11.9959C14.1704 12.16 14.3929 12.2521 14.625 12.2521C14.8571 12.2521 15.0796 12.16 15.2437 11.9959C15.4078 11.8318 15.5 11.6092 15.5 11.3771C15.5 11.1451 15.4078 10.9225 15.2437 10.7584C15.0796 10.5943 14.8571 10.5021 14.625 10.5021ZM12.1488 10.5021C12.3295 9.9898 12.6648 9.54615 13.1083 9.23233C13.5518 8.91852 14.0817 8.75 14.625 8.75C15.1683 8.75 15.6982 8.91852 16.1417 9.23233C16.5852 9.54615 16.9205 9.9898 17.1012 10.5021H18.125C18.3571 10.5021 18.5796 10.5943 18.7437 10.7584C18.9078 10.9225 19 11.1451 19 11.3771C19 11.6092 18.9078 11.8318 18.7437 11.9959C18.5796 12.16 18.3571 12.2521 18.125 12.2521H17.1012C16.9205 12.7645 16.5852 13.2081 16.1417 13.522C15.6982 13.8358 15.1683 14.0043 14.625 14.0043C14.0817 14.0043 13.5518 13.8358 13.1083 13.522C12.6648 13.2081 12.3295 12.7645 12.1488 12.2521H5.875C5.64294 12.2521 5.42038 12.16 5.25628 11.9959C5.09219 11.8318 5 11.6092 5 11.3771C5 11.1451 5.09219 10.9225 5.25628 10.7584C5.42038 10.5943 5.64294 10.5021 5.875 10.5021H12.1488ZM9.375 15.7521C9.14294 15.7521 8.92038 15.8443 8.75628 16.0084C8.59219 16.1725 8.5 16.3951 8.5 16.6271C8.5 16.8592 8.59219 17.0818 8.75628 17.2459C8.92038 17.41 9.14294 17.5021 9.375 17.5021C9.60706 17.5021 9.82962 17.41 9.99372 17.2459C10.1578 17.0818 10.25 16.8592 10.25 16.6271C10.25 16.3951 10.1578 16.1725 9.99372 16.0084C9.82962 15.8443 9.60706 15.7521 9.375 15.7521ZM6.89875 15.7521C7.07953 15.2398 7.41477 14.7961 7.85827 14.4823C8.30178 14.1685 8.8317 14 9.375 14C9.9183 14 10.4482 14.1685 10.8917 14.4823C11.3352 14.7961 11.6705 15.2398 11.8512 15.7521H18.125C18.3571 15.7521 18.5796 15.8443 18.7437 16.0084C18.9078 16.1725 19 16.3951 19 16.6271C19 16.8592 18.9078 17.0818 18.7437 17.2459C18.5796 17.41 18.3571 17.5021 18.125 17.5021H11.8512C11.6705 18.0145 11.3352 18.4581 10.8917 18.772C10.4482 19.0858 9.9183 19.2543 9.375 19.2543C8.8317 19.2543 8.30178 19.0858 7.85827 18.772C7.41477 18.4581 7.07953 18.0145 6.89875 17.5021H5.875C5.64294 17.5021 5.42038 17.41 5.25628 17.2459C5.09219 17.0818 5 16.8592 5 16.6271C5 16.3951 5.09219 16.1725 5.25628 16.0084C5.42038 15.8443 5.64294 15.7521 5.875 15.7521H6.89875Z",
            "fill":"currentColor",
        })
    ]))
}