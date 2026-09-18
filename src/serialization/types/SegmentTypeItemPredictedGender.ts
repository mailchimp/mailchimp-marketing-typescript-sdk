//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemPredictedGenderField } from "./SegmentTypeItemPredictedGenderField.js";
import { SegmentTypeItemPredictedGenderOp } from "./SegmentTypeItemPredictedGenderOp.js";
import { SegmentTypeItemPredictedGenderValue } from "./SegmentTypeItemPredictedGenderValue.js";

export const SegmentTypeItemPredictedGender: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemPredictedGender.Raw,
    Mailchimp.SegmentTypeItemPredictedGender
> = core.serialization.object({
    field: SegmentTypeItemPredictedGenderField,
    op: SegmentTypeItemPredictedGenderOp,
    value: SegmentTypeItemPredictedGenderValue,
});

export declare namespace SegmentTypeItemPredictedGender {
    export interface Raw {
        field: SegmentTypeItemPredictedGenderField.Raw;
        op: SegmentTypeItemPredictedGenderOp.Raw;
        value: SegmentTypeItemPredictedGenderValue.Raw;
    }
}
