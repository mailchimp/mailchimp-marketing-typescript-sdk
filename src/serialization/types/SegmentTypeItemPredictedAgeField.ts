//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemPredictedAgeField: core.serialization.Schema<
    serializers.SegmentTypeItemPredictedAgeField.Raw,
    Mailchimp.SegmentTypeItemPredictedAgeField
> = core.serialization.enum_(["predicted_age_range"]);

export declare namespace SegmentTypeItemPredictedAgeField {
    export type Raw = "predicted_age_range";
}
