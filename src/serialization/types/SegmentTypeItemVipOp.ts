//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemVipOp: core.serialization.Schema<
    serializers.SegmentTypeItemVipOp.Raw,
    Mailchimp.SegmentTypeItemVipOp
> = core.serialization.enum_(["member", "notmember"]);

export declare namespace SegmentTypeItemVipOp {
    export type Raw = "member" | "notmember";
}
