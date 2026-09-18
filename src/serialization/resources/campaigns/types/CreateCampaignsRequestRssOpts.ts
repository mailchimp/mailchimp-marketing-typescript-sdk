//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateCampaignsRequestRssOptsFrequency } from "./CreateCampaignsRequestRssOptsFrequency.js";
import { CreateCampaignsRequestRssOptsSchedule } from "./CreateCampaignsRequestRssOptsSchedule.js";

export const CreateCampaignsRequestRssOpts: core.serialization.ObjectSchema<
    serializers.CreateCampaignsRequestRssOpts.Raw,
    Mailchimp.CreateCampaignsRequestRssOpts
> = core.serialization.object({
    constrainRssImg: core.serialization.property("constrain_rss_img", core.serialization.boolean().optional()),
    feedUrl: core.serialization.property("feed_url", core.serialization.string()),
    frequency: CreateCampaignsRequestRssOptsFrequency,
    schedule: CreateCampaignsRequestRssOptsSchedule.optional(),
});

export declare namespace CreateCampaignsRequestRssOpts {
    export interface Raw {
        constrain_rss_img?: boolean | null;
        feed_url: string;
        frequency: CreateCampaignsRequestRssOptsFrequency.Raw;
        schedule?: CreateCampaignsRequestRssOptsSchedule.Raw | null;
    }
}
