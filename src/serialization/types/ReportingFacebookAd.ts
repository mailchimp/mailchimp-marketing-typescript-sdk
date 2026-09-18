//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { FacebookAdRecipients } from "./FacebookAdRecipients.js";
import { FacebookAdStatus } from "./FacebookAdStatus.js";
import { FacebookAdType } from "./FacebookAdType.js";
import { ReportingFacebookAdAudience } from "./ReportingFacebookAdAudience.js";
import { ReportingFacebookAdAudienceActivity } from "./ReportingFacebookAdAudienceActivity.js";
import { ReportingFacebookAdBudget } from "./ReportingFacebookAdBudget.js";
import { ReportingFacebookAdChannel } from "./ReportingFacebookAdChannel.js";
import { ReportingFacebookAdLinksItem } from "./ReportingFacebookAdLinksItem.js";
import { ReportingFacebookAdReportSummary } from "./ReportingFacebookAdReportSummary.js";

export const ReportingFacebookAd: core.serialization.ObjectSchema<
    serializers.ReportingFacebookAd.Raw,
    Mailchimp.ReportingFacebookAd
> = core.serialization.object({
    emailSourceName: core.serialization.property("email_source_name", core.serialization.string().optional()),
    endTime: core.serialization.property("end_time", core.serialization.date().optional()),
    needsAttention: core.serialization.property("needs_attention", core.serialization.boolean().optional()),
    pausedAt: core.serialization.property("paused_at", core.serialization.date().optional()),
    thumbnail: core.serialization.string().optional(),
    wasCanceledByFacebook: core.serialization.property(
        "was_canceled_by_facebook",
        core.serialization.boolean().optional(),
    ),
    audience: ReportingFacebookAdAudience.optional(),
    audienceActivity: core.serialization.property("audience_activity", ReportingFacebookAdAudienceActivity.optional()),
    budget: ReportingFacebookAdBudget.optional(),
    channel: ReportingFacebookAdChannel.optional(),
    reportSummary: core.serialization.property("report_summary", ReportingFacebookAdReportSummary.optional()),
    links: core.serialization.property("_links", core.serialization.list(ReportingFacebookAdLinksItem).optional()),
    canceledAt: core.serialization.property("canceled_at", core.serialization.date().optional()),
    createTime: core.serialization.property("create_time", core.serialization.date().optional()),
    hasSegment: core.serialization.property("has_segment", core.serialization.boolean().optional()),
    id: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
    publishedTime: core.serialization.property("published_time", core.serialization.date().optional()),
    recipients: FacebookAdRecipients.optional(),
    showReport: core.serialization.property("show_report", core.serialization.boolean().optional()),
    startTime: core.serialization.property("start_time", core.serialization.date().optional()),
    status: FacebookAdStatus.optional(),
    type: FacebookAdType.optional(),
    updatedAt: core.serialization.property("updated_at", core.serialization.date().optional()),
    webId: core.serialization.property("web_id", core.serialization.number().optional()),
});

export declare namespace ReportingFacebookAd {
    export interface Raw {
        email_source_name?: string | null;
        end_time?: string | null;
        needs_attention?: boolean | null;
        paused_at?: string | null;
        thumbnail?: string | null;
        was_canceled_by_facebook?: boolean | null;
        audience?: ReportingFacebookAdAudience.Raw | null;
        audience_activity?: ReportingFacebookAdAudienceActivity.Raw | null;
        budget?: ReportingFacebookAdBudget.Raw | null;
        channel?: ReportingFacebookAdChannel.Raw | null;
        report_summary?: ReportingFacebookAdReportSummary.Raw | null;
        _links?: ReportingFacebookAdLinksItem.Raw[] | null;
        canceled_at?: string | null;
        create_time?: string | null;
        has_segment?: boolean | null;
        id?: string | null;
        name?: string | null;
        published_time?: string | null;
        recipients?: FacebookAdRecipients.Raw | null;
        show_report?: boolean | null;
        start_time?: string | null;
        status?: FacebookAdStatus.Raw | null;
        type?: FacebookAdType.Raw | null;
        updated_at?: string | null;
        web_id?: number | null;
    }
}
