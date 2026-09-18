//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemDateMergeOp: core.serialization.Schema<
    serializers.SegmentTypeItemDateMergeOp.Raw,
    Mailchimp.SegmentTypeItemDateMergeOp
> = core.serialization.enum_(["is", "not", "less", "blank", "blank_not", "greater"]);

export declare namespace SegmentTypeItemDateMergeOp {
    export type Raw = "is" | "not" | "less" | "blank" | "blank_not" | "greater";
}
