//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemSocialAgeValue: core.serialization.Schema<
    serializers.SegmentTypeItemSocialAgeValue.Raw,
    Mailchimp.SegmentTypeItemSocialAgeValue
> = core.serialization.enum_(["18-24", "25-34", "35-54", "55+"]);

export declare namespace SegmentTypeItemSocialAgeValue {
    export type Raw = "18-24" | "25-34" | "35-54" | "55+";
}
