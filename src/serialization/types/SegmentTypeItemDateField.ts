//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemDateField: core.serialization.Schema<
    serializers.SegmentTypeItemDateField.Raw,
    Mailchimp.SegmentTypeItemDateField
> = core.serialization.enum_(["timestamp_opt", "info_changed", "ecomm_date"]);

export declare namespace SegmentTypeItemDateField {
    export type Raw = "timestamp_opt" | "info_changed" | "ecomm_date";
}
