//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemPredictedAgeField } from "./SegmentTypeItemPredictedAgeField.js";
import { SegmentTypeItemPredictedAgeOp } from "./SegmentTypeItemPredictedAgeOp.js";
import { SegmentTypeItemPredictedAgeValue } from "./SegmentTypeItemPredictedAgeValue.js";

export const SegmentTypeItemPredictedAge: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemPredictedAge.Raw,
    Mailchimp.SegmentTypeItemPredictedAge
> = core.serialization.object({
    field: SegmentTypeItemPredictedAgeField,
    op: SegmentTypeItemPredictedAgeOp,
    value: SegmentTypeItemPredictedAgeValue,
});

export declare namespace SegmentTypeItemPredictedAge {
    export interface Raw {
        field: SegmentTypeItemPredictedAgeField.Raw;
        op: SegmentTypeItemPredictedAgeOp.Raw;
        value: SegmentTypeItemPredictedAgeValue.Raw;
    }
}
