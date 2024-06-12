import {ICONS} from "@/modules/constants.js";

export function isValidIcon(name) {
    return ICONS.hasOwnProperty(name)
}