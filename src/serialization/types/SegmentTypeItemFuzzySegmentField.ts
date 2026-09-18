//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemFuzzySegmentField: core.serialization.Schema<
    serializers.SegmentTypeItemFuzzySegmentField.Raw,
    Mailchimp.SegmentTypeItemFuzzySegmentField
> = core.serialization.enum_(["fuzzy_segment"]);

export declare namespace SegmentTypeItemFuzzySegmentField {
    export type Raw = "fuzzy_segment";
}
