//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemEcommSpentField: core.serialization.Schema<
    serializers.SegmentTypeItemEcommSpentField.Raw,
    Mailchimp.SegmentTypeItemEcommSpentField
> = core.serialization.enum_(["ecomm_spent_one", "ecomm_spent_all"]);

export declare namespace SegmentTypeItemEcommSpentField {
    export type Raw = "ecomm_spent_one" | "ecomm_spent_all";
}
