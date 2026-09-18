//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { AbTestingOptions } from "./AbTestingOptions.js";
import { CampaignsContentType } from "./CampaignsContentType.js";
import { CampaignsDeliveryStatus } from "./CampaignsDeliveryStatus.js";
import { CampaignsLinksItem } from "./CampaignsLinksItem.js";
import { CampaignsRecipients } from "./CampaignsRecipients.js";
import { CampaignsReportSummary } from "./CampaignsReportSummary.js";
import { CampaignsResendShortcutEligibility } from "./CampaignsResendShortcutEligibility.js";
import { CampaignsResendShortcutUsage } from "./CampaignsResendShortcutUsage.js";
import { CampaignsRssOpts } from "./CampaignsRssOpts.js";
import { CampaignsSettings } from "./CampaignsSettings.js";
import { CampaignsSocialCard } from "./CampaignsSocialCard.js";
import { CampaignsStatus } from "./CampaignsStatus.js";
import { CampaignsType } from "./CampaignsType.js";
import { CampaignsVariateSettings } from "./CampaignsVariateSettings.js";
import { CampaignTrackingOptions } from "./CampaignTrackingOptions.js";

export const Campaigns: core.serialization.ObjectSchema<serializers.Campaigns.Raw, Mailchimp.Campaigns> =
    core.serialization.object({
        links: core.serialization.property("_links", core.serialization.list(CampaignsLinksItem).optional()),
        abSplitOpts: core.serialization.property("ab_split_opts", AbTestingOptions.optional()),
        archiveUrl: core.serialization.property("archive_url", core.serialization.string().optional()),
        contentType: core.serialization.property("content_type", CampaignsContentType.optional()),
        createTime: core.serialization.property("create_time", core.serialization.date().optional()),
        deliveryStatus: core.serialization.property("delivery_status", CampaignsDeliveryStatus.optional()),
        emailsSent: core.serialization.property("emails_sent", core.serialization.number().optional()),
        id: core.serialization.string().optional(),
        longArchiveUrl: core.serialization.property("long_archive_url", core.serialization.string().optional()),
        needsBlockRefresh: core.serialization.property("needs_block_refresh", core.serialization.boolean().optional()),
        parentCampaignId: core.serialization.property("parent_campaign_id", core.serialization.string().optional()),
        recipients: CampaignsRecipients.optional(),
        reportSummary: core.serialization.property("report_summary", CampaignsReportSummary.optional()),
        resendShortcutEligibility: core.serialization.property(
            "resend_shortcut_eligibility",
            CampaignsResendShortcutEligibility.optional(),
        ),
        resendShortcutUsage: core.serialization.property(
            "resend_shortcut_usage",
            CampaignsResendShortcutUsage.optional(),
        ),
        resendable: core.serialization.boolean().optional(),
        rssOpts: core.serialization.property("rss_opts", CampaignsRssOpts.optional()),
        sendTime: core.serialization.property("send_time", core.serialization.date().optional()),
        settings: CampaignsSettings.optional(),
        socialCard: core.serialization.property("social_card", CampaignsSocialCard.optional()),
        status: CampaignsStatus.optional(),
        tracking: CampaignTrackingOptions.optional(),
        type: CampaignsType.optional(),
        variateSettings: core.serialization.property("variate_settings", CampaignsVariateSettings.optional()),
        webId: core.serialization.property("web_id", core.serialization.number().optional()),
    });

export declare namespace Campaigns {
    export interface Raw {
        _links?: CampaignsLinksItem.Raw[] | null;
        ab_split_opts?: AbTestingOptions.Raw | null;
        archive_url?: string | null;
        content_type?: CampaignsContentType.Raw | null;
        create_time?: string | null;
        delivery_status?: CampaignsDeliveryStatus.Raw | null;
        emails_sent?: number | null;
        id?: string | null;
        long_archive_url?: string | null;
        needs_block_refresh?: boolean | null;
        parent_campaign_id?: string | null;
        recipients?: CampaignsRecipients.Raw | null;
        report_summary?: CampaignsReportSummary.Raw | null;
        resend_shortcut_eligibility?: CampaignsResendShortcutEligibility.Raw | null;
        resend_shortcut_usage?: CampaignsResendShortcutUsage.Raw | null;
        resendable?: boolean | null;
        rss_opts?: CampaignsRssOpts.Raw | null;
        send_time?: string | null;
        settings?: CampaignsSettings.Raw | null;
        social_card?: CampaignsSocialCard.Raw | null;
        status?: CampaignsStatus.Raw | null;
        tracking?: CampaignTrackingOptions.Raw | null;
        type?: CampaignsType.Raw | null;
        variate_settings?: CampaignsVariateSettings.Raw | null;
        web_id?: number | null;
    }
}
