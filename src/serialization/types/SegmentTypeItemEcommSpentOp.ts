//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemEcommSpentOp: core.serialization.Schema<
    serializers.SegmentTypeItemEcommSpentOp.Raw,
    Mailchimp.SegmentTypeItemEcommSpentOp
> = core.serialization.enum_(["greater", "less"]);

export declare namespace SegmentTypeItemEcommSpentOp {
    export type Raw = "greater" | "less";
}
