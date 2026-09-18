//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { UpdateCampaignsRequestRssOptsFrequency } from "./UpdateCampaignsRequestRssOptsFrequency.js";
import { UpdateCampaignsRequestRssOptsSchedule } from "./UpdateCampaignsRequestRssOptsSchedule.js";

export const UpdateCampaignsRequestRssOpts: core.serialization.ObjectSchema<
    serializers.UpdateCampaignsRequestRssOpts.Raw,
    Mailchimp.UpdateCampaignsRequestRssOpts
> = core.serialization.object({
    constrainRssImg: core.serialization.property("constrain_rss_img", core.serialization.boolean().optional()),
    feedUrl: core.serialization.property("feed_url", core.serialization.string().optional()),
    frequency: UpdateCampaignsRequestRssOptsFrequency.optional(),
    schedule: UpdateCampaignsRequestRssOptsSchedule.optional(),
});

export declare namespace UpdateCampaignsRequestRssOpts {
    export interface Raw {
        constrain_rss_img?: boolean | null;
        feed_url?: string | null;
        frequency?: UpdateCampaignsRequestRssOptsFrequency.Raw | null;
        schedule?: UpdateCampaignsRequestRssOptsSchedule.Raw | null;
    }
}
