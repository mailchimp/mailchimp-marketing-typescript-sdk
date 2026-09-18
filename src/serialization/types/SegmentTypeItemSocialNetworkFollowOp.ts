//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemSocialNetworkFollowOp: core.serialization.Schema<
    serializers.SegmentTypeItemSocialNetworkFollowOp.Raw,
    Mailchimp.SegmentTypeItemSocialNetworkFollowOp
> = core.serialization.enum_(["follow", "notfollow"]);

export declare namespace SegmentTypeItemSocialNetworkFollowOp {
    export type Raw = "follow" | "notfollow";
}
