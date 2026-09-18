//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemCampaignPollOp: core.serialization.Schema<
    serializers.SegmentTypeItemCampaignPollOp.Raw,
    Mailchimp.SegmentTypeItemCampaignPollOp
> = core.serialization.enum_(["member", "notmember"]);

export declare namespace SegmentTypeItemCampaignPollOp {
    export type Raw = "member" | "notmember";
}
