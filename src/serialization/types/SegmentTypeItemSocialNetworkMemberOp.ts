//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemSocialNetworkMemberOp: core.serialization.Schema<
    serializers.SegmentTypeItemSocialNetworkMemberOp.Raw,
    Mailchimp.SegmentTypeItemSocialNetworkMemberOp
> = core.serialization.enum_(["member", "notmember"]);

export declare namespace SegmentTypeItemSocialNetworkMemberOp {
    export type Raw = "member" | "notmember";
}
