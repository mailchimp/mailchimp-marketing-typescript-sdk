//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemSocialAgeOp: core.serialization.Schema<
    serializers.SegmentTypeItemSocialAgeOp.Raw,
    Mailchimp.SegmentTypeItemSocialAgeOp
> = core.serialization.enum_(["is", "not"]);

export declare namespace SegmentTypeItemSocialAgeOp {
    export type Raw = "is" | "not";
}
