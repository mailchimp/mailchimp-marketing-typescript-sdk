//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemFuzzySegmentField } from "./SegmentTypeItemFuzzySegmentField.js";
import { SegmentTypeItemFuzzySegmentOp } from "./SegmentTypeItemFuzzySegmentOp.js";
import { SegmentTypeItemFuzzySegmentValue } from "./SegmentTypeItemFuzzySegmentValue.js";

export const SegmentTypeItemFuzzySegment: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemFuzzySegment.Raw,
    Mailchimp.SegmentTypeItemFuzzySegment
> = core.serialization.object({
    field: SegmentTypeItemFuzzySegmentField,
    op: SegmentTypeItemFuzzySegmentOp,
    value: SegmentTypeItemFuzzySegmentValue,
});

export declare namespace SegmentTypeItemFuzzySegment {
    export interface Raw {
        field: SegmentTypeItemFuzzySegmentField.Raw;
        op: SegmentTypeItemFuzzySegmentOp.Raw;
        value: SegmentTypeItemFuzzySegmentValue.Raw;
    }
}
