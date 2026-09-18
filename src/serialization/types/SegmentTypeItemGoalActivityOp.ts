//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemGoalActivityOp: core.serialization.Schema<
    serializers.SegmentTypeItemGoalActivityOp.Raw,
    Mailchimp.SegmentTypeItemGoalActivityOp
> = core.serialization.enum_(["is", "goal_not", "contains", "goal_notcontain", "starts", "ends"]);

export declare namespace SegmentTypeItemGoalActivityOp {
    export type Raw = "is" | "goal_not" | "contains" | "goal_notcontain" | "starts" | "ends";
}
