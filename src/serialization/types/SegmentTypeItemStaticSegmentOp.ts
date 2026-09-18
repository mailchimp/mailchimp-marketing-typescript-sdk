//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemStaticSegmentOp: core.serialization.Schema<
    serializers.SegmentTypeItemStaticSegmentOp.Raw,
    Mailchimp.SegmentTypeItemStaticSegmentOp
> = core.serialization.enum_(["static_is", "static_not"]);

export declare namespace SegmentTypeItemStaticSegmentOp {
    export type Raw = "static_is" | "static_not";
}
