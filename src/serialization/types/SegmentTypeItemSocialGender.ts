//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemSocialGenderField } from "./SegmentTypeItemSocialGenderField.js";
import { SegmentTypeItemSocialGenderOp } from "./SegmentTypeItemSocialGenderOp.js";
import { SegmentTypeItemSocialGenderValue } from "./SegmentTypeItemSocialGenderValue.js";

export const SegmentTypeItemSocialGender: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemSocialGender.Raw,
    Mailchimp.SegmentTypeItemSocialGender
> = core.serialization.object({
    field: SegmentTypeItemSocialGenderField,
    op: SegmentTypeItemSocialGenderOp,
    value: SegmentTypeItemSocialGenderValue,
});

export declare namespace SegmentTypeItemSocialGender {
    export interface Raw {
        field: SegmentTypeItemSocialGenderField.Raw;
        op: SegmentTypeItemSocialGenderOp.Raw;
        value: SegmentTypeItemSocialGenderValue.Raw;
    }
}
