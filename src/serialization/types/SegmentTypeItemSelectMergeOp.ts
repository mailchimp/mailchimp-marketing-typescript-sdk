//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemSelectMergeOp: core.serialization.Schema<
    serializers.SegmentTypeItemSelectMergeOp.Raw,
    Mailchimp.SegmentTypeItemSelectMergeOp
> = core.serialization.enum_(["is", "not", "blank", "blank_not", "notcontain", "contains"]);

export declare namespace SegmentTypeItemSelectMergeOp {
    export type Raw = "is" | "not" | "blank" | "blank_not" | "notcontain" | "contains";
}
