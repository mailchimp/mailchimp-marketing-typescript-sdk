//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { CampaignTrackingOptions } from "../../../../types/CampaignTrackingOptions.js";
import { UpdateCampaignsRequestRecipients } from "../../types/UpdateCampaignsRequestRecipients.js";
import { UpdateCampaignsRequestRssOpts } from "../../types/UpdateCampaignsRequestRssOpts.js";
import { UpdateCampaignsRequestSettings } from "../../types/UpdateCampaignsRequestSettings.js";
import { UpdateCampaignsRequestSocialCard } from "../../types/UpdateCampaignsRequestSocialCard.js";
import { UpdateCampaignsRequestVariateSettings } from "../../types/UpdateCampaignsRequestVariateSettings.js";

export const UpdateCampaignsRequest: core.serialization.Schema<
    serializers.UpdateCampaignsRequest.Raw,
    Omit<Mailchimp.UpdateCampaignsRequest, "campaignId">
> = core.serialization.object({
    recipients: UpdateCampaignsRequestRecipients.optional(),
    rssOpts: core.serialization.property("rss_opts", UpdateCampaignsRequestRssOpts.optional()),
    settings: UpdateCampaignsRequestSettings.optional(),
    socialCard: core.serialization.property("social_card", UpdateCampaignsRequestSocialCard.optional()),
    tracking: CampaignTrackingOptions.optional(),
    variateSettings: core.serialization.property("variate_settings", UpdateCampaignsRequestVariateSettings.optional()),
});

export declare namespace UpdateCampaignsRequest {
    export interface Raw {
        recipients?: UpdateCampaignsRequestRecipients.Raw | null;
        rss_opts?: UpdateCampaignsRequestRssOpts.Raw | null;
        settings?: UpdateCampaignsRequestSettings.Raw | null;
        social_card?: UpdateCampaignsRequestSocialCard.Raw | null;
        tracking?: CampaignTrackingOptions.Raw | null;
        variate_settings?: UpdateCampaignsRequestVariateSettings.Raw | null;
    }
}
