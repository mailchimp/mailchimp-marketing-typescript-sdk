//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const CampaignRssOptsFrequency: core.serialization.Schema<
    serializers.CampaignRssOptsFrequency.Raw,
    Mailchimp.CampaignRssOptsFrequency
> = core.serialization.enum_(["daily", "weekly", "monthly"]);

export declare namespace CampaignRssOptsFrequency {
    export type Raw = "daily" | "weekly" | "monthly";
}
