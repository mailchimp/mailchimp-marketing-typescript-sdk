//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemPredictedGenderOp: core.serialization.Schema<
    serializers.SegmentTypeItemPredictedGenderOp.Raw,
    Mailchimp.SegmentTypeItemPredictedGenderOp
> = core.serialization.enum_(["is", "not"]);

export declare namespace SegmentTypeItemPredictedGenderOp {
    export type Raw = "is" | "not";
}
