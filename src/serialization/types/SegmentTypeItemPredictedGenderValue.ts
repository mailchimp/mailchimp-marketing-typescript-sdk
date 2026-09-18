//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemPredictedGenderValue: core.serialization.Schema<
    serializers.SegmentTypeItemPredictedGenderValue.Raw,
    Mailchimp.SegmentTypeItemPredictedGenderValue
> = core.serialization.enum_(["male", "female"]);

export declare namespace SegmentTypeItemPredictedGenderValue {
    export type Raw = "male" | "female";
}
