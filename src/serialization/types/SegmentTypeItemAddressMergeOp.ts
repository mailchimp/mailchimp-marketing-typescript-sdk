//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemAddressMergeOp: core.serialization.Schema<
    serializers.SegmentTypeItemAddressMergeOp.Raw,
    Mailchimp.SegmentTypeItemAddressMergeOp
> = core.serialization.enum_(["contains", "notcontain", "blank", "blank_not"]);

export declare namespace SegmentTypeItemAddressMergeOp {
    export type Raw = "contains" | "notcontain" | "blank" | "blank_not";
}
