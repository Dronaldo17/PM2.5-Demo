'use strict';


import { NativeModules } from "react-native";

const { RNSpliceImage } = NativeModules;

export function spliceImage(
    type ?: string ,
    img1 ?: string,
    img2 ?: string,
    options ?: {
    format ?: "png" | "jpg" | "jpeg";
    quality ?: number;
}
): Promise<string> {
    return RNSpliceImage.spliceImage(type, img1,img2,options);
}


export default { spliceImage };