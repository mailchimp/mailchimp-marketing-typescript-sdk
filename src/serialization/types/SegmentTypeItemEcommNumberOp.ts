//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemEcommNumberOp: core.serialization.Schema<
    serializers.SegmentTypeItemEcommNumberOp.Raw,
    Mailchimp.SegmentTypeItemEcommNumberOp
> = core.serialization.enum_(["is", "not", "greater", "less"]);

export declare namespace SegmentTypeItemEcommNumberOp {
    export type Raw = "is" | "not" | "greater" | "less";
}
