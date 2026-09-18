//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemPredictedGenderField: core.serialization.Schema<
    serializers.SegmentTypeItemPredictedGenderField.Raw,
    Mailchimp.SegmentTypeItemPredictedGenderField
> = core.serialization.enum_(["predicted_gender"]);

export declare namespace SegmentTypeItemPredictedGenderField {
    export type Raw = "predicted_gender";
}
