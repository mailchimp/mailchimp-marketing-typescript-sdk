//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemPredictedAgeValue: core.serialization.Schema<
    serializers.SegmentTypeItemPredictedAgeValue.Raw,
    Mailchimp.SegmentTypeItemPredictedAgeValue
> = core.serialization.enum_(["18-24", "25-34", "35-44", "45-54", "55-64", "65+"]);

export declare namespace SegmentTypeItemPredictedAgeValue {
    export type Raw = "18-24" | "25-34" | "35-44" | "45-54" | "55-64" | "65+";
}
