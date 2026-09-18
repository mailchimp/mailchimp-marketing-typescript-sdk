//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemBirthdayMergeOp: core.serialization.Schema<
    serializers.SegmentTypeItemBirthdayMergeOp.Raw,
    Mailchimp.SegmentTypeItemBirthdayMergeOp
> = core.serialization.enum_(["is", "not", "blank", "blank_not"]);

export declare namespace SegmentTypeItemBirthdayMergeOp {
    export type Raw = "is" | "not" | "blank" | "blank_not";
}
