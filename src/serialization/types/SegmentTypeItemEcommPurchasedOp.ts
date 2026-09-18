//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemEcommPurchasedOp: core.serialization.Schema<
    serializers.SegmentTypeItemEcommPurchasedOp.Raw,
    Mailchimp.SegmentTypeItemEcommPurchasedOp
> = core.serialization.enum_(["member", "notmember"]);

export declare namespace SegmentTypeItemEcommPurchasedOp {
    export type Raw = "member" | "notmember";
}
