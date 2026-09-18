//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemSignupSourceOp: core.serialization.Schema<
    serializers.SegmentTypeItemSignupSourceOp.Raw,
    Mailchimp.SegmentTypeItemSignupSourceOp
> = core.serialization.enum_(["source_is", "source_not"]);

export declare namespace SegmentTypeItemSignupSourceOp {
    export type Raw = "source_is" | "source_not";
}
