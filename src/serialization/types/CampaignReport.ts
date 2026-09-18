//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { CampaignReportAbSplit } from "./CampaignReportAbSplit.js";
import { CampaignReportBounces } from "./CampaignReportBounces.js";
import { CampaignReportClicks } from "./CampaignReportClicks.js";
import { CampaignReportDeliveryStatus } from "./CampaignReportDeliveryStatus.js";
import { CampaignReportEcommerce } from "./CampaignReportEcommerce.js";
import { CampaignReportFacebookLikes } from "./CampaignReportFacebookLikes.js";
import { CampaignReportForwards } from "./CampaignReportForwards.js";
import { CampaignReportIndustryStats } from "./CampaignReportIndustryStats.js";
import { CampaignReportLinksItem } from "./CampaignReportLinksItem.js";
import { CampaignReportListStats } from "./CampaignReportListStats.js";
import { CampaignReportOpens } from "./CampaignReportOpens.js";
import { CampaignReportShareReport } from "./CampaignReportShareReport.js";
import { CampaignReportTimeseriesItem } from "./CampaignReportTimeseriesItem.js";
import { CampaignReportTimewarpItem } from "./CampaignReportTimewarpItem.js";

export const CampaignReport: core.serialization.ObjectSchema<serializers.CampaignReport.Raw, Mailchimp.CampaignReport> =
    core.serialization.object({
        links: core.serialization.property("_links", core.serialization.list(CampaignReportLinksItem).optional()),
        abSplit: core.serialization.property("ab_split", CampaignReportAbSplit.optional()),
        abuseReports: core.serialization.property("abuse_reports", core.serialization.number().optional()),
        bounces: CampaignReportBounces.optional(),
        campaignTitle: core.serialization.property("campaign_title", core.serialization.string().optional()),
        clicks: CampaignReportClicks.optional(),
        deliveryStatus: core.serialization.property("delivery_status", CampaignReportDeliveryStatus.optional()),
        ecommerce: CampaignReportEcommerce.optional(),
        emailsSent: core.serialization.property("emails_sent", core.serialization.number().optional()),
        facebookLikes: core.serialization.property("facebook_likes", CampaignReportFacebookLikes.optional()),
        forwards: CampaignReportForwards.optional(),
        id: core.serialization.string().optional(),
        industryStats: core.serialization.property("industry_stats", CampaignReportIndustryStats.optional()),
        listId: core.serialization.property("list_id", core.serialization.string().optional()),
        listIsActive: core.serialization.property("list_is_active", core.serialization.boolean().optional()),
        listName: core.serialization.property("list_name", core.serialization.string().optional()),
        listStats: core.serialization.property("list_stats", CampaignReportListStats.optional()),
        opens: CampaignReportOpens.optional(),
        previewText: core.serialization.property("preview_text", core.serialization.string().optional()),
        rssLastSend: core.serialization.property("rss_last_send", core.serialization.date().optional()),
        sendTime: core.serialization.property("send_time", core.serialization.date().optional()),
        shareReport: core.serialization.property("share_report", CampaignReportShareReport.optional()),
        subjectLine: core.serialization.property("subject_line", core.serialization.string().optional()),
        timeseries: core.serialization.list(CampaignReportTimeseriesItem).optional(),
        timewarp: core.serialization.list(CampaignReportTimewarpItem).optional(),
        type: core.serialization.string().optional(),
        unsubscribed: core.serialization.number().optional(),
    });

export declare namespace CampaignReport {
    export interface Raw {
        _links?: CampaignReportLinksItem.Raw[] | null;
        ab_split?: CampaignReportAbSplit.Raw | null;
        abuse_reports?: number | null;
        bounces?: CampaignReportBounces.Raw | null;
        campaign_title?: string | null;
        clicks?: CampaignReportClicks.Raw | null;
        delivery_status?: CampaignReportDeliveryStatus.Raw | null;
        ecommerce?: CampaignReportEcommerce.Raw | null;
        emails_sent?: number | null;
        facebook_likes?: CampaignReportFacebookLikes.Raw | null;
        forwards?: CampaignReportForwards.Raw | null;
        id?: string | null;
        industry_stats?: CampaignReportIndustryStats.Raw | null;
        list_id?: string | null;
        list_is_active?: boolean | null;
        list_name?: string | null;
        list_stats?: CampaignReportListStats.Raw | null;
        opens?: CampaignReportOpens.Raw | null;
        preview_text?: string | null;
        rss_last_send?: string | null;
        send_time?: string | null;
        share_report?: CampaignReportShareReport.Raw | null;
        subject_line?: string | null;
        timeseries?: CampaignReportTimeseriesItem.Raw[] | null;
        timewarp?: CampaignReportTimewarpItem.Raw[] | null;
        type?: string | null;
        unsubscribed?: number | null;
    }
}
