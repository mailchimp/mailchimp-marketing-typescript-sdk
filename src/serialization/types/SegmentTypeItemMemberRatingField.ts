//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemMemberRatingField: core.serialization.Schema<
    serializers.SegmentTypeItemMemberRatingField.Raw,
    Mailchimp.SegmentTypeItemMemberRatingField
> = core.serialization.enum_(["rating"]);

export declare namespace SegmentTypeItemMemberRatingField {
    export type Raw = "rating";
}
