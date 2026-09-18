//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemStaticSegmentField: core.serialization.Schema<
    serializers.SegmentTypeItemStaticSegmentField.Raw,
    Mailchimp.SegmentTypeItemStaticSegmentField
> = core.serialization.enum_(["static_segment"]);

export declare namespace SegmentTypeItemStaticSegmentField {
    export type Raw = "static_segment";
}
