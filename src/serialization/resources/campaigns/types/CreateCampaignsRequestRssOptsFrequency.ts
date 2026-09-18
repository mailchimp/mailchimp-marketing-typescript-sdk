//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateCampaignsRequestRssOptsFrequency: core.serialization.Schema<
    serializers.CreateCampaignsRequestRssOptsFrequency.Raw,
    Mailchimp.CreateCampaignsRequestRssOptsFrequency
> = core.serialization.enum_(["daily", "weekly", "monthly"]);

export declare namespace CreateCampaignsRequestRssOptsFrequency {
    export type Raw = "daily" | "weekly" | "monthly";
}
