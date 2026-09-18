//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemAutomationOp: core.serialization.Schema<
    serializers.SegmentTypeItemAutomationOp.Raw,
    Mailchimp.SegmentTypeItemAutomationOp
> = core.serialization.enum_(["started", "completed", "not_started", "not_completed"]);

export declare namespace SegmentTypeItemAutomationOp {
    export type Raw = "started" | "completed" | "not_started" | "not_completed";
}
