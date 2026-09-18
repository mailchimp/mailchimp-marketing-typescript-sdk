//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateMergeFieldListsRequestType: core.serialization.Schema<
    serializers.CreateMergeFieldListsRequestType.Raw,
    Mailchimp.CreateMergeFieldListsRequestType
> = core.serialization.enum_([
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

export declare namespace CreateMergeFieldListsRequestType {
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
