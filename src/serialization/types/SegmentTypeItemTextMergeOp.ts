//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemTextMergeOp: core.serialization.Schema<
    serializers.SegmentTypeItemTextMergeOp.Raw,
    Mailchimp.SegmentTypeItemTextMergeOp
> = core.serialization.enum_([
    "is",
    "not",
    "contains",
    "notcontain",
    "starts",
    "ends",
    "greater",
    "less",
    "blank",
    "blank_not",
]);

export declare namespace SegmentTypeItemTextMergeOp {
    export type Raw =
        | "is"
        | "not"
        | "contains"
        | "notcontain"
        | "starts"
        | "ends"
        | "greater"
        | "less"
        | "blank"
        | "blank_not";
}
