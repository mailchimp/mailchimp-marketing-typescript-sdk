//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { CampaignsRssOptsFrequency } from "./CampaignsRssOptsFrequency.js";
import { CampaignsRssOptsSchedule } from "./CampaignsRssOptsSchedule.js";

export const CampaignsRssOpts: core.serialization.ObjectSchema<
    serializers.CampaignsRssOpts.Raw,
    Mailchimp.CampaignsRssOpts
> = core.serialization.object({
    constrainRssImg: core.serialization.property("constrain_rss_img", core.serialization.boolean().optional()),
    feedUrl: core.serialization.property("feed_url", core.serialization.string().optional()),
    frequency: CampaignsRssOptsFrequency.optional(),
    lastSent: core.serialization.property("last_sent", core.serialization.date().optional()),
    schedule: CampaignsRssOptsSchedule.optional(),
});

export declare namespace CampaignsRssOpts {
    export interface Raw {
        constrain_rss_img?: boolean | null;
        feed_url?: string | null;
        frequency?: CampaignsRssOptsFrequency.Raw | null;
        last_sent?: string | null;
        schedule?: CampaignsRssOptsSchedule.Raw | null;
    }
}
