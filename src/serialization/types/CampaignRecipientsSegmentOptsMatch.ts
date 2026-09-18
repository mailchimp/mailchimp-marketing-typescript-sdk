//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const CampaignRecipientsSegmentOptsMatch: core.serialization.Schema<
    serializers.CampaignRecipientsSegmentOptsMatch.Raw,
    Mailchimp.CampaignRecipientsSegmentOptsMatch
> = core.serialization.enum_(["any", "all"]);

export declare namespace CampaignRecipientsSegmentOptsMatch {
    export type Raw = "any" | "all";
}
