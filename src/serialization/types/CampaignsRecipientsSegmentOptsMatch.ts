//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const CampaignsRecipientsSegmentOptsMatch: core.serialization.Schema<
    serializers.CampaignsRecipientsSegmentOptsMatch.Raw,
    Mailchimp.CampaignsRecipientsSegmentOptsMatch
> = core.serialization.enum_(["any", "all"]);

export declare namespace CampaignsRecipientsSegmentOptsMatch {
    export type Raw = "any" | "all";
}
