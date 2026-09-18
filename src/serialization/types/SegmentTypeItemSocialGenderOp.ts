//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemSocialGenderOp: core.serialization.Schema<
    serializers.SegmentTypeItemSocialGenderOp.Raw,
    Mailchimp.SegmentTypeItemSocialGenderOp
> = core.serialization.enum_(["is", "not"]);

export declare namespace SegmentTypeItemSocialGenderOp {
    export type Raw = "is" | "not";
}
