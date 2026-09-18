//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemGoalTimestampOp: core.serialization.Schema<
    serializers.SegmentTypeItemGoalTimestampOp.Raw,
    Mailchimp.SegmentTypeItemGoalTimestampOp
> = core.serialization.enum_(["greater", "less", "is"]);

export declare namespace SegmentTypeItemGoalTimestampOp {
    export type Raw = "greater" | "less" | "is";
}
