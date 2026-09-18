//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemMemberRatingField } from "./SegmentTypeItemMemberRatingField.js";
import { SegmentTypeItemMemberRatingOp } from "./SegmentTypeItemMemberRatingOp.js";
import { SegmentTypeItemMemberRatingValue } from "./SegmentTypeItemMemberRatingValue.js";

export const SegmentTypeItemMemberRating: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemMemberRating.Raw,
    Mailchimp.SegmentTypeItemMemberRating
> = core.serialization.object({
    field: SegmentTypeItemMemberRatingField,
    op: SegmentTypeItemMemberRatingOp,
    value: SegmentTypeItemMemberRatingValue,
});

export declare namespace SegmentTypeItemMemberRating {
    export interface Raw {
        field: SegmentTypeItemMemberRatingField.Raw;
        op: SegmentTypeItemMemberRatingOp.Raw;
        value: SegmentTypeItemMemberRatingValue.Raw;
    }
}
