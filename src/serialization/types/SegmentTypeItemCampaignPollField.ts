//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemCampaignPollField: core.serialization.Schema<
    serializers.SegmentTypeItemCampaignPollField.Raw,
    Mailchimp.SegmentTypeItemCampaignPollField
> = core.serialization.enum_(["poll"]);

export declare namespace SegmentTypeItemCampaignPollField {
    export type Raw = "poll";
}
