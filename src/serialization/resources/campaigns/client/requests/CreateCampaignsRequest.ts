//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { CampaignTrackingOptions } from "../../../../types/CampaignTrackingOptions.js";
import { CreateCampaignsRequestContentType } from "../../types/CreateCampaignsRequestContentType.js";
import { CreateCampaignsRequestRecipients } from "../../types/CreateCampaignsRequestRecipients.js";
import { CreateCampaignsRequestRssOpts } from "../../types/CreateCampaignsRequestRssOpts.js";
import { CreateCampaignsRequestSettings } from "../../types/CreateCampaignsRequestSettings.js";
import { CreateCampaignsRequestSocialCard } from "../../types/CreateCampaignsRequestSocialCard.js";
import { CreateCampaignsRequestType } from "../../types/CreateCampaignsRequestType.js";
import { CreateCampaignsRequestVariateSettings } from "../../types/CreateCampaignsRequestVariateSettings.js";

export const CreateCampaignsRequest: core.serialization.Schema<
    serializers.CreateCampaignsRequest.Raw,
    Mailchimp.CreateCampaignsRequest
> = core.serialization.object({
    contentType: core.serialization.property("content_type", CreateCampaignsRequestContentType.optional()),
    recipients: CreateCampaignsRequestRecipients.optional(),
    rssOpts: core.serialization.property("rss_opts", CreateCampaignsRequestRssOpts.optional()),
    settings: CreateCampaignsRequestSettings.optional(),
    socialCard: core.serialization.property("social_card", CreateCampaignsRequestSocialCard.optional()),
    tracking: CampaignTrackingOptions.optional(),
    type: CreateCampaignsRequestType,
    variateSettings: core.serialization.property("variate_settings", CreateCampaignsRequestVariateSettings.optional()),
});

export declare namespace CreateCampaignsRequest {
    export interface Raw {
        content_type?: CreateCampaignsRequestContentType.Raw | null;
        recipients?: CreateCampaignsRequestRecipients.Raw | null;
        rss_opts?: CreateCampaignsRequestRssOpts.Raw | null;
        settings?: CreateCampaignsRequestSettings.Raw | null;
        social_card?: CreateCampaignsRequestSocialCard.Raw | null;
        tracking?: CampaignTrackingOptions.Raw | null;
        type: CreateCampaignsRequestType.Raw;
        variate_settings?: CreateCampaignsRequestVariateSettings.Raw | null;
    }
}
