//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { FacebookAdRecipients } from "./FacebookAdRecipients.js";
import { FacebookAdReportSummary } from "./FacebookAdReportSummary.js";
import { FacebookAdStatus } from "./FacebookAdStatus.js";
import { FacebookAdType } from "./FacebookAdType.js";

export const FacebookAd: core.serialization.ObjectSchema<serializers.FacebookAd.Raw, Mailchimp.FacebookAd> =
    core.serialization.object({
        canceledAt: core.serialization.property("canceled_at", core.serialization.date().optional()),
        createTime: core.serialization.property("create_time", core.serialization.date().optional()),
        hasSegment: core.serialization.property("has_segment", core.serialization.boolean().optional()),
        id: core.serialization.string().optional(),
        name: core.serialization.string().optional(),
        publishedTime: core.serialization.property("published_time", core.serialization.date().optional()),
        recipients: FacebookAdRecipients.optional(),
        reportSummary: core.serialization.property("report_summary", FacebookAdReportSummary.optional()),
        showReport: core.serialization.property("show_report", core.serialization.boolean().optional()),
        startTime: core.serialization.property("start_time", core.serialization.date().optional()),
        status: FacebookAdStatus.optional(),
        type: FacebookAdType.optional(),
        updatedAt: core.serialization.property("updated_at", core.serialization.date().optional()),
        webId: core.serialization.property("web_id", core.serialization.number().optional()),
    });

export declare namespace FacebookAd {
    export interface Raw {
        canceled_at?: string | null;
        create_time?: string | null;
        has_segment?: boolean | null;
        id?: string | null;
        name?: string | null;
        published_time?: string | null;
        recipients?: FacebookAdRecipients.Raw | null;
        report_summary?: FacebookAdReportSummary.Raw | null;
        show_report?: boolean | null;
        start_time?: string | null;
        status?: FacebookAdStatus.Raw | null;
        type?: FacebookAdType.Raw | null;
        updated_at?: string | null;
        web_id?: number | null;
    }
}
