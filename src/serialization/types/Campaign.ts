//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { AbTestingOptions } from "./AbTestingOptions.js";
import { CampaignDeliveryStatus } from "./CampaignDeliveryStatus.js";
import { CampaignLinksItem } from "./CampaignLinksItem.js";
import { CampaignRecipients } from "./CampaignRecipients.js";
import { CampaignReportSummary } from "./CampaignReportSummary.js";
import { CampaignRssOpts } from "./CampaignRssOpts.js";
import { CampaignSettings } from "./CampaignSettings.js";
import { CampaignSocialCard } from "./CampaignSocialCard.js";
import { CampaignStatus } from "./CampaignStatus.js";
import { CampaignTrackingOptions } from "./CampaignTrackingOptions.js";
import { CampaignType } from "./CampaignType.js";
import { CampaignVariateSettings } from "./CampaignVariateSettings.js";

export const Campaign: core.serialization.ObjectSchema<serializers.Campaign.Raw, Mailchimp.Campaign> =
    core.serialization.object({
        links: core.serialization.property("_links", core.serialization.list(CampaignLinksItem).optional()),
        abSplitOpts: core.serialization.property("ab_split_opts", AbTestingOptions.optional()),
        archiveUrl: core.serialization.property("archive_url", core.serialization.string().optional()),
        contentType: core.serialization.property("content_type", core.serialization.string().optional()),
        createTime: core.serialization.property("create_time", core.serialization.date().optional()),
        deliveryStatus: core.serialization.property("delivery_status", CampaignDeliveryStatus.optional()),
        emailsSent: core.serialization.property("emails_sent", core.serialization.number().optional()),
        id: core.serialization.string().optional(),
        longArchiveUrl: core.serialization.property("long_archive_url", core.serialization.string().optional()),
        needsBlockRefresh: core.serialization.property("needs_block_refresh", core.serialization.boolean().optional()),
        parentCampaignId: core.serialization.property("parent_campaign_id", core.serialization.string().optional()),
        recipients: CampaignRecipients.optional(),
        reportSummary: core.serialization.property("report_summary", CampaignReportSummary.optional()),
        resendable: core.serialization.boolean().optional(),
        rssOpts: core.serialization.property("rss_opts", CampaignRssOpts.optional()),
        sendTime: core.serialization.property("send_time", core.serialization.date().optional()),
        settings: CampaignSettings.optional(),
        socialCard: core.serialization.property("social_card", CampaignSocialCard.optional()),
        status: CampaignStatus.optional(),
        tracking: CampaignTrackingOptions.optional(),
        type: CampaignType,
        variateSettings: core.serialization.property("variate_settings", CampaignVariateSettings.optional()),
        webId: core.serialization.property("web_id", core.serialization.number().optional()),
    });

export declare namespace Campaign {
    export interface Raw {
        _links?: CampaignLinksItem.Raw[] | null;
        ab_split_opts?: AbTestingOptions.Raw | null;
        archive_url?: string | null;
        content_type?: string | null;
        create_time?: string | null;
        delivery_status?: CampaignDeliveryStatus.Raw | null;
        emails_sent?: number | null;
        id?: string | null;
        long_archive_url?: string | null;
        needs_block_refresh?: boolean | null;
        parent_campaign_id?: string | null;
        recipients?: CampaignRecipients.Raw | null;
        report_summary?: CampaignReportSummary.Raw | null;
        resendable?: boolean | null;
        rss_opts?: CampaignRssOpts.Raw | null;
        send_time?: string | null;
        settings?: CampaignSettings.Raw | null;
        social_card?: CampaignSocialCard.Raw | null;
        status?: CampaignStatus.Raw | null;
        tracking?: CampaignTrackingOptions.Raw | null;
        type: CampaignType.Raw;
        variate_settings?: CampaignVariateSettings.Raw | null;
        web_id?: number | null;
    }
}
