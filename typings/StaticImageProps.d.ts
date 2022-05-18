/**
 * This file was generated from StaticImage.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { DynamicValue } from "mendix";

export interface StaticImageProps<Style> {
    name: string;
    style: Style[];
    uri: DynamicValue<string>;
    width: number;
    height: number;
}

export interface StaticImagePreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    uri: string;
    width: number | null;
    height: number | null;
}
