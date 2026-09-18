//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemDateOp: core.serialization.Schema<
    serializers.SegmentTypeItemDateOp.Raw,
    Mailchimp.SegmentTypeItemDateOp
> = core.serialization.enum_(["greater", "less", "is", "not", "blank", "blank_not", "within", "notwithin"]);

export declare namespace SegmentTypeItemDateOp {
    export type Raw = "greater" | "less" | "is" | "not" | "blank" | "blank_not" | "within" | "notwithin";
}
