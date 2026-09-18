//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { CampaignRssOptsFrequency } from "./CampaignRssOptsFrequency.js";
import { CampaignRssOptsSchedule } from "./CampaignRssOptsSchedule.js";

export const CampaignRssOpts: core.serialization.ObjectSchema<
    serializers.CampaignRssOpts.Raw,
    Mailchimp.CampaignRssOpts
> = core.serialization.object({
    constrainRssImg: core.serialization.property("constrain_rss_img", core.serialization.boolean().optional()),
    feedUrl: core.serialization.property("feed_url", core.serialization.string()),
    frequency: CampaignRssOptsFrequency,
    lastSent: core.serialization.property("last_sent", core.serialization.date().optional()),
    schedule: CampaignRssOptsSchedule.optional(),
});

export declare namespace CampaignRssOpts {
    export interface Raw {
        constrain_rss_img?: boolean | null;
        feed_url: string;
        frequency: CampaignRssOptsFrequency.Raw;
        last_sent?: string | null;
        schedule?: CampaignRssOptsSchedule.Raw | null;
    }
}
