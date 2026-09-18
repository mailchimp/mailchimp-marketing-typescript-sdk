//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemSocialAgeField } from "./SegmentTypeItemSocialAgeField.js";
import { SegmentTypeItemSocialAgeOp } from "./SegmentTypeItemSocialAgeOp.js";
import { SegmentTypeItemSocialAgeValue } from "./SegmentTypeItemSocialAgeValue.js";

export const SegmentTypeItemSocialAge: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemSocialAge.Raw,
    Mailchimp.SegmentTypeItemSocialAge
> = core.serialization.object({
    field: SegmentTypeItemSocialAgeField,
    op: SegmentTypeItemSocialAgeOp,
    value: SegmentTypeItemSocialAgeValue,
});

export declare namespace SegmentTypeItemSocialAge {
    export interface Raw {
        field: SegmentTypeItemSocialAgeField.Raw;
        op: SegmentTypeItemSocialAgeOp.Raw;
        value: SegmentTypeItemSocialAgeValue.Raw;
    }
}
