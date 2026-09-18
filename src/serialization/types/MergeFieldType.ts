//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const MergeFieldType: core.serialization.Schema<serializers.MergeFieldType.Raw, Mailchimp.MergeFieldType> =
    core.serialization.enum_([
        "text",
        "number",
        "address",
        "phone",
        "date",
        "url",
        "imageurl",
        "radio",
        "dropdown",
        "birthday",
        "zip",
    ]);

export declare namespace MergeFieldType {
    export type Raw =
        | "text"
        | "number"
        | "address"
        | "phone"
        | "date"
        | "url"
        | "imageurl"
        | "radio"
        | "dropdown"
        | "birthday"
        | "zip";
}
