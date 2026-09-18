//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemSocialGenderField: core.serialization.Schema<
    serializers.SegmentTypeItemSocialGenderField.Raw,
    Mailchimp.SegmentTypeItemSocialGenderField
> = core.serialization.enum_(["social_gender"]);

export declare namespace SegmentTypeItemSocialGenderField {
    export type Raw = "social_gender";
}
