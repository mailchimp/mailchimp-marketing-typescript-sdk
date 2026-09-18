//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemNewSubscribersField: core.serialization.Schema<
    serializers.SegmentTypeItemNewSubscribersField.Raw,
    Mailchimp.SegmentTypeItemNewSubscribersField
> = core.serialization.enum_(["timestamp_opt"]);

export declare namespace SegmentTypeItemNewSubscribersField {
    export type Raw = "timestamp_opt";
}
