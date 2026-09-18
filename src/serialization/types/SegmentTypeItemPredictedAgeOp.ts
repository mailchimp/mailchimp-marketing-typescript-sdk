//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemPredictedAgeOp: core.serialization.Schema<
    serializers.SegmentTypeItemPredictedAgeOp.Raw,
    Mailchimp.SegmentTypeItemPredictedAgeOp
> = core.serialization.enum_(["is"]);

export declare namespace SegmentTypeItemPredictedAgeOp {
    export type Raw = "is";
}
