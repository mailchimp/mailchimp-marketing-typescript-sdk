//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const CampaignsRssOptsFrequency: core.serialization.Schema<
    serializers.CampaignsRssOptsFrequency.Raw,
    Mailchimp.CampaignsRssOptsFrequency
> = core.serialization.enum_(["daily", "weekly", "monthly"]);

export declare namespace CampaignsRssOptsFrequency {
    export type Raw = "daily" | "weekly" | "monthly";
}
