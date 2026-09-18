//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemVipField: core.serialization.Schema<
    serializers.SegmentTypeItemVipField.Raw,
    Mailchimp.SegmentTypeItemVipField
> = core.serialization.enum_(["gmonkey"]);

export declare namespace SegmentTypeItemVipField {
    export type Raw = "gmonkey";
}
