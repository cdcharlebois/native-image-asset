import { ReactElement, createElement } from "react";
import { Image, ImageStyle } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";
import { flattenStyles } from "./utils/styles";

import { StaticImageProps } from "../typings/StaticImageProps";

export interface CustomStyle extends Style {
    image: ImageStyle;
}

export function StaticImage({ style, width, height, uri }: StaticImageProps<CustomStyle>): ReactElement | null {
    if (uri.status !== "available") {
        return null;
    }
    const styles = flattenStyles({ image: { width, height } }, style) as CustomStyle;
    const source = { uri: uri.value! };
    return <Image source={source} style={styles.image} />;
}
