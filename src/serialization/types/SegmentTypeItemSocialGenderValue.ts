//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemSocialGenderValue: core.serialization.Schema<
    serializers.SegmentTypeItemSocialGenderValue.Raw,
    Mailchimp.SegmentTypeItemSocialGenderValue
> = core.serialization.enum_(["male", "female"]);

export declare namespace SegmentTypeItemSocialGenderValue {
    export type Raw = "male" | "female";
}
